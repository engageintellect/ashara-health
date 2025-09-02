"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
    <ScrollReveal>
      <section
        id="contact"
        className="scroll-mt-24 bg-stone-100/60 dark:bg-stone-900/60 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
                Contact us
              </h2>
              <p className="mt-3 text-stone-700 dark:text-stone-300">
                Send a note and our team will follow up.
              </p>
              <div className="mt-6 space-y-3 text-stone-800 dark:text-stone-200">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    site.address
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-fit hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
                >
                  {site.address}
                </a>
                <a
                  href={`tel:${site.phone_href}`}
                  className="block w-fit hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
                >
                  {site.phone_display}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="block w-fit hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
                >
                  {site.email}
                </a>
                <div className="pt-2 text-sm text-stone-700 dark:text-stone-300">
                  <div className="font-semibold">Opening hours</div>
                  <ul className="mt-1 space-y-1">
                    {site.hours.map((h) => (
                      <li key={h.label}>
                        <span className="inline-block w-20">{h.label}:</span>{" "}
                        {h.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <form
              id="contact-form"
              className="rounded-2xl border border-stone-200 dark:border-stone-600 bg-white dark:bg-stone-800/50 p-4 sm:p-8 shadow-lg"
              onSubmit={handleSubmit}
            >
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
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Alex Morgan"
                    className={`h-12 ${
                      errors.name ? "border-red-500 dark:border-red-400" : ""
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
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="you@domain.com"
                    className={`h-12 ${
                      errors.email ? "border-red-500 dark:border-red-400" : ""
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
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(555) 123-4567"
                    className={`h-12 ${
                      errors.phone ? "border-red-500 dark:border-red-400" : ""
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
                    className={`min-h-[120px] resize-none ${
                      errors.message ? "border-red-500 dark:border-red-400" : ""
                    }`}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-600 dark:text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>
                <div className="space-y-3 pt-2">
                  {status.type === "success" && (
                    <div className="text-sm text-green-600 dark:text-green-400 text-center bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      {status.message}
                    </div>
                  )}
                  {status.type === "error" && (
                    <div className="text-sm text-red-600 dark:text-red-400 text-center bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
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
                    className="w-full px-8 py-3 h-auto"
                    disabled={status.type === "loading"}
                  >
                    {status.type === "loading" ? "Sending..." : "Send message"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
