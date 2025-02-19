"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";

export default function Home() {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const buttonRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      subheadingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
    );
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, delay: 0.6, ease: "back.out(1.7)" }
    );
  }, []);

  const handleGetStarted = () => {
    router.push("/login");
    console.log("clicked");
    
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-6 text-center">
      <Image src="/next.svg" alt="Chat Logo" width={100} height={100} className="mb-6" />
      <h1 ref={headingRef} className="text-4xl font-bold">Welcome to ChatSync</h1>
      <p ref={subheadingRef} className="mt-3 text-lg text-gray-300 max-w-md">
        The ultimate real-time chat experience. Connect instantly with your friends and teams.
      </p>
      <button
        ref={buttonRef}
        className="mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
      >
        <a href="/login"> ok</a>
      </button>
    </div>
  );
}