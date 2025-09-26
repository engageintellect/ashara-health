"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Icon } from "@iconify/react";
import { MailIcon, PhoneIcon } from "@/components/icons";
import site from "@/content/site.json";
import ScrollReveal from "@/components/ScrollReveal";
import AppointmentPicker from "@/components/AppointmentPicker";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  requestType: "message" | "call";
  preferredDate?: string;
  preferredTime?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  requestType?: string;
  preferredDate?: string;
  preferredTime?: string;
  general?: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    requestType: "message",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });
  const [isAppointmentPickerOpen, setIsAppointmentPickerOpen] = useState(false);

  const validateField = (
    name: keyof FormData,
    value: string
  ): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Full name is required";
        if (value.trim().length < 2)
          return "Full name must be at least 2 characters";
        break;
      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Please enter a valid email";
        break;
      case "phone":
        if (!value.trim()) return "Phone number is required";
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        const cleanPhone = value.replace(/\D/g, "");
        if (cleanPhone.length < 10) return "Please enter a valid phone number";
        break;
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10)
          return "Message must be at least 10 characters";
        break;
      case "preferredDate":
        if (formData.requestType === "call" && !value.trim()) {
          return "Please select a preferred date for your call";
        }
        break;
      case "preferredTime":
        if (formData.requestType === "call" && !value.trim()) {
          return "Please select a preferred time for your call";
        }
        break;
    }
    return undefined;
  };

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleRequestTypeChange = (type: "message" | "call") => {
    setFormData((prev) => ({
      ...prev,
      requestType: type,
      // Clear date/time when switching to message
      ...(type === "message" && { preferredDate: "", preferredTime: "" }),
    }));

    // Clear date/time errors when switching to message
    if (type === "message") {
      setErrors((prev) => ({
        ...prev,
        preferredDate: undefined,
        preferredTime: undefined,
      }));
    }
  };

  const handleAppointmentSelect = (date: string, time: string) => {
    setFormData((prev) => ({
      ...prev,
      preferredDate: date,
      preferredTime: time,
    }));

    // Clear any existing errors
    setErrors((prev) => ({
      ...prev,
      preferredDate: undefined,
      preferredTime: undefined,
    }));
  };

  const formatSelectedDateTime = () => {
    if (!formData.preferredDate || !formData.preferredTime) return "";

    const date = new Date(formData.preferredDate + "T00:00:00");
    const dateStr = date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });

    // Convert 24h time to 12h format
    const [hours, minutes] = formData.preferredTime.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const hour12 = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    const timeStr = `${hour12}:${minutes} ${ampm}`;

    return `${dateStr} at ${timeStr}`;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate required fields
    (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
      if (key === "preferredDate" || key === "preferredTime") {
        // Only validate date/time for call requests
        if (formData.requestType === "call") {
          const error = validateField(key, formData[key] || "");
          if (error) newErrors[key] = error;
        }
      } else if (key !== "requestType") {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus({
        type: "error",
        message: "Please correct the errors above and try again.",
      });
      return;
    }

    setStatus({ type: "loading" });

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const successMessage =
        formData.requestType === "call"
          ? `Thank you! We'll call you on ${formatSelectedDateTime()}.`
          : "Thank you for your message! We'll get back to you soon.";

      setStatus({
        type: "success",
        message: successMessage,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        requestType: "message",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-br from-stone-100 via-stone-50 to-stone-100 dark:from-stone-900 dark:via-stone-800 dark:to-stone-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M30 30m-1.5 0a1.5 1.5 0 1 1 3 0a1.5 1.5 0 1 1 -3 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div id="contact" className="pt-5">
          <ScrollReveal className="mx-auto max-w-3xl text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg shadow-teal-500/25 mb-6">
              <Icon icon="mdi:email" className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-5xl mb-4">
              Contact us
            </h2>
            <p className="text-lg text-stone-600 dark:text-stone-400 font-medium">
              Send a note and our team will follow up
            </p>
            <div className="mt-6 h-1 w-24 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mx-auto" />
          </ScrollReveal>

          <div className="flex justify-center">
            {/* Contact Form */}
            <ScrollReveal delay={0.3} className="w-full max-w-2xl">
              <form
                id="contact-form"
                className="relative overflow-hidden rounded-3xl bg-white/70 dark:bg-stone-900/70 backdrop-blur-sm border border-stone-200/50 dark:border-stone-700/50 shadow-xl shadow-stone-900/5 dark:shadow-stone-900/20 p-8"
                onSubmit={handleSubmit}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-stone-500/5" />

                <div className="relative">
                  <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-6">
                    Send us a message
                  </h3>

                  <div className="grid gap-6">
                    {/* Request Type Toggle */}
                    <div className="space-y-3">
                      <Label className="text-sm font-medium">
                        How would you like us to contact you? *
                      </Label>
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => handleRequestTypeChange("message")}
                          className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 ${
                            formData.requestType === "message"
                              ? "bg-teal-50 dark:bg-teal-900/30 border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-300"
                              : "bg-white dark:bg-stone-800 border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700"
                          }`}
                        >
                          <Icon
                            icon="mdi:email-outline"
                            className="w-4 h-4 mx-auto mb-1"
                          />
                          Send Message
                        </button>
                        <button
                          type="button"
                          onClick={() => handleRequestTypeChange("call")}
                          className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 ${
                            formData.requestType === "call"
                              ? "bg-teal-50 dark:bg-teal-900/30 border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-300"
                              : "bg-white dark:bg-stone-800 border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700"
                          }`}
                        >
                          <Icon
                            icon="mdi:phone-outline"
                            className="w-4 h-4 mx-auto mb-1"
                          />
                          Schedule Call
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="Alex Morgan"
                        className={`h-12 rounded-xl ${
                          errors.name
                            ? "border-red-500 dark:border-red-400"
                            : ""
                        }`}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-600 dark:text-red-400">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="you@domain.com"
                        className={`h-12 rounded-xl ${
                          errors.email
                            ? "border-red-500 dark:border-red-400"
                            : ""
                        }`}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-600 dark:text-red-400">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Phone number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="(555) 123-4567"
                        className={`h-12 rounded-xl ${
                          errors.phone
                            ? "border-red-500 dark:border-red-400"
                            : ""
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-600 dark:text-red-400">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Appointment Picker - Only show for call requests */}
                    {formData.requestType === "call" && (
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">
                          Preferred Date & Time *
                        </Label>
                        <button
                          type="button"
                          onClick={() => setIsAppointmentPickerOpen(true)}
                          className={`w-full h-12 px-3 py-2 rounded-xl border text-left transition-all duration-200 ${
                            formData.preferredDate && formData.preferredTime
                              ? "bg-teal-50 dark:bg-teal-900/30 border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-300"
                              : "bg-white dark:bg-stone-800 border-stone-300 dark:border-stone-600 text-stone-500 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-700"
                          } ${
                            errors.preferredDate || errors.preferredTime
                              ? "border-red-500 dark:border-red-400"
                              : ""
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm">
                              {formData.preferredDate && formData.preferredTime
                                ? formatSelectedDateTime()
                                : "Select date and time"}
                            </span>
                            <Icon
                              icon="mdi:calendar-clock"
                              className="w-5 h-5"
                            />
                          </div>
                        </button>
                        {(errors.preferredDate || errors.preferredTime) && (
                          <p className="text-sm text-red-600 dark:text-red-400">
                            Please select a preferred date and time for your
                            call
                          </p>
                        )}
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        {formData.requestType === "call"
                          ? "What would you like to discuss? *"
                          : "How can we help? *"}
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder={
                          formData.requestType === "call"
                            ? "Tell us about your health goals and what you'd like to discuss during the call..."
                            : "Tell us a bit about your goals…"
                        }
                        className={`min-h-[120px] resize-none rounded-xl ${
                          errors.message
                            ? "border-red-500 dark:border-red-400"
                            : ""
                        }`}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-600 dark:text-red-400">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-4 pt-2">
                      {status.type === "success" && (
                        <div className="text-sm text-green-600 dark:text-green-400 text-center bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
                          <Icon
                            icon="mdi:check-circle"
                            className="w-5 h-5 mx-auto mb-2"
                          />
                          {status.message}
                        </div>
                      )}
                      {status.type === "error" && (
                        <div className="text-sm text-red-600 dark:text-red-400 text-center bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-200 dark:border-red-800">
                          <Icon
                            icon="mdi:alert-circle"
                            className="w-5 h-5 mx-auto mb-2"
                          />
                          {status.message}
                        </div>
                      )}
                      {status.type === "idle" && (
                        <div className="text-sm text-stone-600 dark:text-stone-400 text-center">
                          {formData.requestType === "call"
                            ? "We'll call you at your preferred time to discuss your health goals."
                            : "We usually respond within one business day."}
                        </div>
                      )}
                      <Button
                        type="submit"
                        className="w-full px-8 py-3 h-auto rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-300"
                        disabled={status.type === "loading"}
                      >
                        {status.type === "loading" ? (
                          <div className="flex items-center gap-2">
                            <Icon
                              icon="mdi:loading"
                              className="w-4 h-4 animate-spin"
                            />
                            {formData.requestType === "call"
                              ? "Scheduling..."
                              : "Sending..."}
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Icon
                              icon={
                                formData.requestType === "call"
                                  ? "mdi:calendar-check"
                                  : "mdi:send"
                              }
                              className="w-4 h-4"
                            />
                            {formData.requestType === "call"
                              ? "Schedule Call"
                              : "Send Message"}
                          </div>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Appointment Picker Modal */}
      <AppointmentPicker
        isOpen={isAppointmentPickerOpen}
        onClose={() => setIsAppointmentPickerOpen(false)}
        onSelect={handleAppointmentSelect}
        selectedDate={formData.preferredDate}
        selectedTime={formData.preferredTime}
      />
    </section>
  );
}
