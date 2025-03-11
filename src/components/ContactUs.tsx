"use client";
import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm, SubmitHandler } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

type FormData = {
  user_name: string;
  user_email: string;
  message: string;
  phone: string;
};

export default function ContactUs() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>();

  const sendEmail: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log(response);
      if (response.ok) {
        toast.success("Your message was sent successfully!");
        reset();
      } else {
        toast.error("Your message wasn't sent successfully.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Your message wasn't sent successfully.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start pt-20"
      id="contact-us"
    >
      
      <div className="space-y-8">
        <div>
          <h2 className="text-primary text-3xl font-bold mb-4 text-start">
            Get In Touch
          </h2>
          <p className="text-secondary-gray mb-8">
            We'd love to hear from you. Contact us for any inquiries about our
            AI solutions, partnerships, or how we can help transform your
            business.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center p-4 rounded-lg bg-primary-light">
            <div className="bg-primary p-3 rounded-full text-white mr-4">
              <FaMapMarkerAlt className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-neutral-dark">Our Locations</h3>
              <p className="text-secondary-gray">Egypt, UAE, and KSA</p>
            </div>
          </div>

          {/* <div className="flex items-center p-4 rounded-lg bg-primary-light">
            <div className="bg-primary p-3 rounded-full text-white mr-4">
              <FaPhoneAlt className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-neutral-dark">Phone Number</h3>
              <p className="text-secondary-gray">+02 01000000000</p>
            </div>
          </div> */}

          <div className="flex items-center p-4 rounded-lg bg-primary-light">
            <div className="bg-primary p-3 rounded-full text-white mr-4">
              <FaEnvelope className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-neutral-dark">Email Address</h3>
              <p className="text-secondary-gray">sales@advixs.com</p>
            </div>
          </div>
        </div>
      </div>

      <form
        className="space-y-6 bg-neutral-light p-6 md:p-8 rounded-xl shadow-md"
        onSubmit={handleSubmit(sendEmail)}
      >
        <h3 className="text-xl font-semibold text-neutral-dark mb-4">
          Send Us a Message
        </h3>

        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-neutral-dark"
          >
            Your Name
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="bg-white text-neutral-dark border border-gray-200 focus:border-primary focus:ring-primary"
            {...register("user_name", { required: "Name is required" })}
          />
          {errors.user_name && (
            <p className="text-red-600  text-sm">
              {errors.user_name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-neutral-dark"
          >
            Your Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="bg-white text-neutral-dark border border-gray-200 focus:border-primary focus:ring-primary"
            {...register("user_email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.user_email && (
            <p className="text-red-600  text-sm">
              {errors.user_email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="text-sm font-medium text-neutral-dark"
          >
            Phone Number
          </label>
          <PhoneInput
            country={"eg"}
            inputClass="w-full bg-white text-neutral-dark border border-gray-200 rounded-md h-10 py-2 px-3"
            containerStyle={{ width: "100%" }}
            inputStyle={{ width: "100%" }}
            buttonStyle={{ borderRadius: "0.375rem 0 0 0.375rem" }}
            placeholder="Enter phone number"
            onChange={(value) =>
              setValue("phone", value, { shouldValidate: true })
            }
            specialLabel=""
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-neutral-dark"
          >
            Your Message
          </label>
          <Textarea
            id="message"
            placeholder="How can we help you?"
            className="bg-white text-neutral-dark border border-gray-200 focus:border-primary focus:ring-primary"
            rows={4}
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <p className="text-red-600 text-sm">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary-dark text-white transition-colors"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>

      <ToastContainer />
    </div>
  );
}
