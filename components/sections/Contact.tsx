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

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
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
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  const validateField = (
    name: keyof FormData,
    value: string
  ): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Full name is required";
        if (value.trim().length < 2)
          return "Name must be at least 2 characters";
        break;
      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value))
          return "Please enter a valid email address";
        break;
      case "phone":
        if (!value.trim()) return "Phone number is required";
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        const cleanPhone = value.replace(/[\s\-\(\)\.]/g, "");
        if (!phoneRegex.test(cleanPhone) || cleanPhone.length < 10) {
          return "Please enter a valid phone number";
        }
        break;
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10)
          return "Message must be at least 10 characters";
        break;
    }
    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof FormData>).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear field error on change
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }

    // Clear general status on change
    if (status.type !== "idle") {
      setStatus({ type: "idle" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus({ type: "error", message: "Please fix the errors above" });
      return;
    }

    setStatus({ type: "loading" });
    setErrors({});

    try {
      // Simulate API call - replace with actual endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully! We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or contact us directly.",
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

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <ScrollReveal delay={0.2}>
              <div className="relative overflow-hidden rounded-3xl bg-white/70 dark:bg-stone-900/70 backdrop-blur-sm border border-stone-200/50 dark:border-stone-700/50 shadow-xl shadow-stone-900/5 dark:shadow-stone-900/20 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-stone-500/5" />

                <div className="relative space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-6">
                      Get in touch
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 border border-teal-200/50 dark:border-teal-700/50 flex items-center justify-center flex-shrink-0">
                        <Icon
                          icon="mdi:map-marker"
                          className="w-6 h-6 text-teal-600 dark:text-teal-400"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">
                          Address
                        </h4>
                        <a
                          href={`https://maps.google.com/?q=${encodeURIComponent(
                            site.address
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-stone-600 dark:text-stone-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                        >
                          {site.address}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 border border-teal-200/50 dark:border-teal-700/50 flex items-center justify-center flex-shrink-0">
                        <Icon
                          icon="mdi:phone"
                          className="w-6 h-6 text-teal-600 dark:text-teal-400"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">
                          Phone
                        </h4>
                        <a
                          href={`tel:${site.phone_href}`}
                          className="text-stone-600 dark:text-stone-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                        >
                          {site.phone_display}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 border border-teal-200/50 dark:border-teal-700/50 flex items-center justify-center flex-shrink-0">
                        <Icon
                          icon="mdi:email"
                          className="w-6 h-6 text-teal-600 dark:text-teal-400"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">
                          Email
                        </h4>
                        <a
                          href={`mailto:${site.email}`}
                          className="text-stone-600 dark:text-stone-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                        >
                          {site.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 border border-teal-200/50 dark:border-teal-700/50 flex items-center justify-center flex-shrink-0">
                        <Icon
                          icon="mdi:clock"
                          className="w-6 h-6 text-teal-600 dark:text-teal-400"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">
                          Hours
                        </h4>
                        <div className="space-y-1">
                          {site.hours.map((h) => (
                            <div
                              key={h.label}
                              className="flex justify-between text-sm text-stone-600 dark:text-stone-400"
                            >
                              <span className="min-w-[80px]">{h.label}:</span>
                              <span>{h.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={0.3}>
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

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        How can we help? *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder="Tell us a bit about your goals…"
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
                          We usually respond within one business day.
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
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Icon icon="mdi:send" className="w-4 h-4" />
                            Send message
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
    </section>
  );
}
