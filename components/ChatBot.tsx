"use client";

import { useState, useRef, useEffect } from "react";

// Custom hook for media queries
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}
import { useChat, type Message } from "ai/react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

interface ChatBotProps {
  className?: string;
}

export default function ChatBot({ className = "" }: ChatBotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    setMessages,
  } = useChat({
    api: "/api/chat",
    onFinish: () => {
      // Save messages to localStorage after each response
      saveMessagesToStorage();
    },
  });

  // Load messages from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem("ashara-chat-messages");
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages);
        setMessages(parsedMessages);
      } catch (error) {
        console.error("Failed to load chat history:", error);
      }
    }
  }, [setMessages]);

  // Save messages to localStorage
  const saveMessagesToStorage = () => {
    localStorage.setItem("ashara-chat-messages", JSON.stringify(messages));
  };

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Clear chat history
  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem("ashara-chat-messages");
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  const restoreChat = () => {
    setIsMinimized(false);
  };

  return (
    <>
      {/* Chat Icon - Fixed in bottom right */}
      <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleChat}
              className="bg-teal-800 hover:bg-teal-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              <Icon
                icon="mdi:chat"
                className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
              />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Chat Window - Responsive: Sidebar on desktop, bottom sheet on mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ 
              opacity: 0, 
              x: isDesktop ? "100%" : 0,
              y: isDesktop ? 0 : "100%"
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              height: isMinimized ? "auto" : undefined,
            }}
            exit={{ 
              opacity: 0, 
              x: isDesktop ? "100%" : 0,
              y: isDesktop ? 0 : "100%"
            }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`fixed z-50 bg-white dark:bg-stone-900 shadow-2xl border border-stone-200 dark:border-stone-700 overflow-hidden flex flex-col
              w-full h-[80vh] bottom-0 left-0 rounded-t-2xl
              md:w-96 md:h-full md:top-0 md:right-0 md:bottom-auto md:left-auto md:rounded-none md:rounded-l-2xl
              ${isMinimized ? "md:h-auto" : ""}
            }`}
          >
            {/* Header */}
            <div className="bg-teal-800 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Icon icon="mdi:medical-bag" className="w-5 h-5" />
                <h3 className="font-semibold text-sm sm:text-base">
                  Ashara Health Assistant
                </h3>
              </div>
              <div className="flex items-center space-x-2">
                {!isMinimized && (
                  <button
                    onClick={minimizeChat}
                    className="hover:bg-teal-700 p-1 rounded transition-colors duration-200"
                  >
                    <Icon icon="mdi:minus" className="w-4 h-4" />
                  </button>
                )}
                {isMinimized && (
                  <button
                    onClick={restoreChat}
                    className="hover:bg-teal-700 p-1 rounded transition-colors duration-200"
                  >
                    <Icon icon="mdi:plus" className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={toggleChat}
                  className="hover:bg-teal-700 p-1 rounded transition-colors duration-200"
                >
                  <Icon icon="mdi:close" className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Minimized State */}
            {isMinimized && (
              <div className="p-4 text-center">
                <p className="text-stone-600 dark:text-stone-400 text-sm">
                  Chat minimized. Click + to restore.
                </p>
              </div>
            )}

            {/* Chat Content */}
            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.length === 0 && (
                    <div className="text-center text-stone-500 dark:text-stone-400 py-8">
                      <Icon
                        icon="mdi:chat-outline"
                        className="w-12 h-12 mx-auto mb-4 opacity-50"
                      />
                      <p className="text-sm">
                        Hi! I'm here to help with questions about Ashara Health
                        & Wellness. How can I assist you today?
                      </p>
                    </div>
                  )}

                  {messages.map((message: Message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.role === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 text-sm ${
                          message.role === "user"
                            ? "bg-teal-800 text-white"
                            : "bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100"
                        }`}
                      >
                        <div className="whitespace-pre-wrap">
                          {message.content}
                        </div>
                      </div>
                    </div>
                  ))}

                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-stone-100 dark:bg-stone-800 rounded-lg p-3 text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                          <span className="text-stone-500 dark:text-stone-400">
                            Typing...
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="border-t border-stone-200 dark:border-stone-700 p-4">
                  <form onSubmit={handleSubmit} className="flex space-x-2">
                    <input
                      value={input}
                      onChange={handleInputChange}
                      placeholder="Type your message..."
                      className="flex-1 border border-stone-300 dark:border-stone-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      disabled={isLoading}
                    />
                    <button
                      type="submit"
                      disabled={isLoading || !input.trim()}
                      className="bg-teal-800 hover:bg-teal-700 disabled:bg-stone-300 dark:disabled:bg-stone-600 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 disabled:cursor-not-allowed"
                    >
                      <Icon icon="mdi:send" className="w-4 h-4" />
                    </button>
                  </form>

                  {/* Clear Chat Button */}
                  {messages.length > 0 && (
                    <button
                      onClick={clearChat}
                      className="mt-2 text-xs text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors duration-200 flex items-center space-x-1"
                    >
                      <Icon icon="mdi:delete-outline" className="w-3 h-3" />
                      <span>Clear chat</span>
                    </button>
                  )}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
