"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Github } from "lucide-react";

export default function LoginPage() {
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
              Sign in
            </h1>

            <div className="flex items-center justify-center gap-3 mb-4">
              <button
                type="button"
                className="h-9 w-28 rounded-md bg-[#0d1f2d] text-white flex items-center justify-center"
                aria-label="Sign in with GitHub"
              >
                <Github className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="h-9 w-28 rounded-md bg-[#1877f2] text-white flex items-center justify-center"
                aria-label="Sign in with Facebook"
              >
                <Facebook className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-3 text-xs text-gray-400 mb-4">
              <div className="h-px w-20 bg-gray-200" />
              OR
              <div className="h-px w-20 bg-gray-200" />
            </div>

            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-sm text-[#0d1f2d] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#c5f135]/70"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-sm text-[#0d1f2d] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#c5f135]/70"
              />

              <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  Remember me?
                </label>
                <a href="#" className="text-[#0c6b5e] font-semibold">
                  Forgot password
                </a>
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-[#0c6b5e] text-white py-2.5 text-sm font-semibold hover:opacity-95 transition"
              >
                Log in
              </button>
            </form>

            <p className="mt-6 text-xs text-gray-500">
              Have no account yet?{" "}
              <Link href="/signup" className="text-[#0c6b5e] font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

