// app/contact/page.tsx
"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 space-y-6 pt-64">
      <h1 className="font-semibold text-center text-4xl pb-8">Contact Us</h1>
      <p className="text-center text-xl">Fill out the form below to send us a message. </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-4 border rounded-md"
        />
        
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-4 border rounded-md"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full p-4 border rounded-md"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-4 border rounded-md"
          rows={5}
        />

        <button
          type="submit"
          className="w-full p-3 font-semibold text-white bg-blue-600 rounded-md"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status === "success" && <p className="text-center text-green-600">Message sent successfully!</p>}
      {status === "error" && <p className="text-center text-red-600">Failed to send message. Please try again or mail us directly at : iriisnepal@gmail.com</p>}

      <div className="pb-48">

      </div>
    </div>
  );
}
