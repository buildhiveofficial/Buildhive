"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    location: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          location: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="text-white md:pt-20 pt-16">

      {/* HERO SECTION */}
      <section className="relative py-20 sm:py-24 md:py-28 overflow-hidden">
        <img
          src="/images/contact.png"
          alt="construction"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative container mx-auto px-5 sm:px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
              Contact Us
            </h1>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-white/70">
              Tell us about your construction project and our team will contact you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>


      {/* CONTACT SECTION */}
      <section className="py-16 sm:py-20 md:py-24 border border-theme">
        <div className="container mx-auto px-5 sm:px-6 md:px-16 text-black">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">

            {/* LEFT SIDE */}
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl font-semibold">
                Let's Build Something Great
              </h2>

              <p className="text-sm sm:text-base text-black/60">
                Whether it's a residential home, commercial building, or renovation project,
                our team is ready to help you from planning to execution.
              </p>

              <div className="space-y-5 sm:space-y-6">

                <div className="flex items-center gap-4">
                  <div className="bg-theme/5 text-theme border border-white/10 p-3 rounded-xl">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-theme/50">Phone</p>
                    <p className="text-sm sm:text-base">+92 300 0000000</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-theme/5 text-theme border border-white/10 p-3 rounded-xl">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-theme/50">Email</p>
                    <p className="text-sm sm:text-base">info@buildhive.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-theme/5 border text-theme border-white/10 p-3 rounded-xl">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-theme/50">Location</p>
                    <p className="text-sm sm:text-base">Faisalabad, Pakistan</p>
                  </div>
                </div>

              </div>
            </div>


            {/* RIGHT SIDE FORM */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-[#0f0f0f] border border-white/10 p-6 sm:p-8 md:p-10 rounded-2xl space-y-6"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-theme">
                Project Inquiry
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="bg-white border border-white/10 p-3 rounded-lg outline-none text-sm sm:text-base"
                />

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="bg-white border border-white/10 p-3 rounded-lg outline-none text-sm sm:text-base"
                />

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="bg-white border border-white/10 p-3 rounded-lg outline-none text-sm sm:text-base"
                />

                <input
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="Project Location"
                  className="bg-white border border-white/10 p-3 rounded-lg outline-none text-sm sm:text-base"
                />

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className="bg-white border border-white/10 p-3 rounded-lg text-sm sm:text-base"
                >
                  <option value="">Project Type</option>
                  <option>Residential Construction</option>
                  <option>Commercial Construction</option>
                  <option>Interior Design</option>
                  <option>Renovation</option>
                </select>
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={5}
                className="w-full bg-white border border-white/10 p-3 rounded-lg outline-none text-sm sm:text-base"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-theme text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
              >
                {loading ? "Sending..." : "Send Project Request"}
              </button>

              {success && (
                <p className="text-green-400 text-center text-sm">
                  Message sent successfully!
                </p>
              )}
            </motion.form>

          </div>
        </div>
      </section>

    </div>
  );
}