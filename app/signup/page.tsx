"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Github } from "lucide-react";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea]">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* Left image panel */}
        <section className="relative hidden lg:block">
          <Image
            src="/login-sign-sup.png"
            alt="Testimonial"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/15" />

          <div className="absolute bottom-10 left-10 right-10 text-white">
            <p className="text-lg font-semibold leading-relaxed drop-shadow">
              “This software simplifies the website building process, making it a
              breeze to manage our online presence.”
            </p>
            <div className="mt-6">
              <div className="text-sm font-bold">David Henderson</div>
              <div className="text-xs text-white/80">Founder &amp; CEO</div>
            </div>
          </div>
        </section>

        {/* Right form panel */}
        <section className="relative flex items-center justify-center px-6 py-16">
          {/* small decorative stars */}
          <div className="pointer-events-none absolute right-10 top-10 text-black/70">
            ✦
          </div>
          <div className="pointer-events-none absolute right-20 top-24 text-black/30">
            ✦
          </div>
          <div className="pointer-events-none absolute left-10 bottom-16 text-black/30">
            ✦
          </div>

          <div className="w-full max-w-md text-center">
            <h1 className="text-2xl font-extrabold text-[#0d1f2d] mb-6">
              Create an account
            </h1>

            <div className="flex items-center justify-center gap-3 mb-4">
              <button
                type="button"
                className="h-9 w-28 rounded-md bg-[#0d1f2d] text-white flex items-center justify-center"
                aria-label="Sign up with GitHub"
              >
                <Github className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="h-9 w-28 rounded-md bg-[#1877f2] text-white flex items-center justify-center"
                aria-label="Sign up with Facebook"
              >
                <Facebook className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-3 text-xs text-gray-400 mb-4">
              <div className="h-px w-20 bg-gray-200" />
              OR
              <div className="h-px w-20 bg-gray-200" />
            </div>

            <div className="mx-auto w-full max-w-sm bg-white border border-gray-200 rounded-md shadow-md px-6 py-6">
              <form className="space-y-3 text-left">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-[#0d1f2d] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#c5f135]/70"
                />

                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-[#0d1f2d] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#c5f135]/70"
                  />
                  <button
                    type="button"
                    className="shrink-0 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-[#0c6b5e] hover:bg-gray-50 transition"
                  >
                    Verify Now
                  </button>
                </div>

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-[#0d1f2d] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#c5f135]/70"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-[#0d1f2d] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#c5f135]/70"
                />

                <label className="flex items-start gap-2 text-xs text-gray-500 pt-1">
                  <input type="checkbox" className="mt-0.5 rounded border-gray-300" />
                  <span>
                    I read and accept the{" "}
                    <a href="#" className="text-[#0c6b5e] font-semibold">
                      terms of use
                    </a>
                    .
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#0c6b5e] text-white py-2.5 text-sm font-semibold hover:opacity-95 transition"
                >
                  Create my account
                </button>
              </form>
            </div>

            <p className="mt-6 text-xs text-gray-500">
              Already have an account?{" "}
              <Link href="/login" className="text-[#0c6b5e] font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

