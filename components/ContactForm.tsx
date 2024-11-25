"use client";

import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { useToast } from "@/hooks/use-toast";
import { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_PUBLIC_KEY } from "@/lib/emailKeyConfig";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    if (!EMAIL_JS_SERVICE_ID || !EMAIL_JS_TEMPLATE_ID || !EMAIL_JS_PUBLIC_KEY) {
      toast({
        title: "Configuration Error",
        description: "EmailJS keys are missing. Please configure them properly.",
      });
      setIsLoading(false);
      return;
    }

    const formData = new FormData(event.currentTarget);

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID,
        {
          name: formData.get("name") || "",
          email: formData.get("email") || "",
          message: formData.get("message") || "",
        },
        EMAIL_JS_PUBLIC_KEY
      );

      if (response.status === 200) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
        });
        // Reset the form
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        throw new Error("Failed to send the message.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to Send",
        description: "An error occurred. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">Contact Us</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Reach out to us for any inquiries related to technology.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form ref={formRef} onSubmit={onSubmit} className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  required
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                type="submit"
                className="flex mx-auto bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
