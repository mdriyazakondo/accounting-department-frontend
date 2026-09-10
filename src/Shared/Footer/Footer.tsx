import { GraduationCap, MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { Link } from "react-router";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* College Info */}
          <div>
            <Link to="/" className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
                <GraduationCap size={28} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-950 dark:text-white">
                  ABC College
                </h2>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Excellence in Education
                </p>
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-400">
              ABC College is committed to providing quality education,
              developing talented students, and building a brighter future for
              the next generation.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center cursor-pointer rounded-full bg-gray-900 text-gray-400 transition hover:bg-blue-600 hover:text-white"
              >
                <FaFacebook size={18} />
              </button>

              <button
                type="button"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center cursor-pointer rounded-full bg-gray-900 text-gray-400 transition hover:bg-red-600 hover:text-white"
              >
                <BsYoutube size={18} />
              </button>

              <button
                type="button"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center cursor-pointer rounded-full bg-gray-900 text-gray-400 transition hover:bg-pink-600 hover:text-white"
              >
                <BsInstagram size={18} />
              </button>

              <button
                type="button"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center cursor-pointer rounded-full bg-gray-900 text-gray-400 transition hover:bg-blue-700 hover:text-white"
              >
                <LiaLinkedin size={18} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-slate-950 dark:text-white">
              Quick Links
            </h3>

            <div className="space-y-3">
              <Link
                to="/"
                className="block text-sm text-slate-600 transition hover:translate-x-1 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="block text-sm text-slate-600 transition hover:translate-x-1 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
              >
                About Us
              </Link>

              <Link
                to="/teachers"
                className="block text-sm text-slate-600 transition hover:translate-x-1 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
              >
                Our Teachers
              </Link>

              <Link
                to="/notice"
                className="block text-sm text-slate-600 transition hover:translate-x-1 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
              >
                Notice Board
              </Link>

              <Link
                to="/events"
                className="block text-sm text-slate-600 transition hover:translate-x-1 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
              >
                Events
              </Link>

              <Link
                to="/contact"
                className="block text-sm text-slate-600 transition hover:translate-x-1 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-slate-950 dark:text-white">
              Important Links
            </h3>

            <div className="space-y-3">
              <Link
                to="/admission"
                className="block text-sm text-slate-600 transition hover:translate-x-1 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
              >
                Admission
              </Link>

              <Link
                to="/departments"
                className="block text-sm text-slate-600 transition hover:translate-x-1 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
              >
                Departments
              </Link>

              <Link
                to="/results"
                className="block text-sm text-slate-600 transition hover:translate-x-1 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
              >
                Exam Results
              </Link>

              <Link
                to="/routine"
                className="block text-sm text-slate-600 transition hover:translate-x-1 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
              >
                Class Routine
              </Link>

              <Link
                to="/library"
                className="block text-sm text-slate-600 transition hover:translate-x-1 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
              >
                Digital Library
              </Link>

              <Link
                to="/student-portal"
                className="block text-sm text-slate-600 transition hover:translate-x-1 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
              >
                Student Portal
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-slate-950 dark:text-white">
              Contact Us
            </h3>

            <div className="space-y-5">
              {/* Address */}
              <div className="flex gap-3">
                <MapPin size={20} className="mt-1 shrink-0 text-blue-500" />

                <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                  College Road, Dhaka,
                  <br />
                  Bangladesh
                </p>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <Phone size={19} className="mt-1 shrink-0 text-blue-500" />

                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    +880 1700-000000
                  </p>

                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
                    Saturday - Thursday
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <Mail size={19} className="mt-1 shrink-0 text-blue-500" />

                <p className="break-all text-sm text-slate-600 dark:text-slate-400">
                  info@abccollege.edu.bd
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 sm:px-6 md:flex-row lg:px-8">
          {/* Copyright */}
          <p className="text-center text-sm text-slate-500 dark:text-slate-400 md:text-left">
            © {new Date().getFullYear()} ABC College. All rights reserved.
          </p>

          {/* Policy */}
          <div className="flex items-center gap-5">
            <Link
              to="/privacy-policy"
              className="text-sm text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-sm text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
            >
              Terms & Conditions
            </Link>
          </div>

          {/* Scroll Top */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex h-10 w-10 items-center justify-center cursor-pointer rounded-full cursor-pointer bg-blue-600 text-white transition hover:-translate-y-1 hover:bg-blue-700"
          >
            <ArrowUp size={19} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
