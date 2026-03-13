"use client";

import React, { useState, useEffect } from "react";

const words = ["AI management", "AI automation", "Chatbots", "Workflows"];
const typingSpeed = 80;
const deletingSpeed = 40;
const pauseAfterType = 1800;
const pauseAfterDelete = 400;

export default function TypewriterText() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeWord = words[currentWordIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        // Wait before starting to type next word
        timer = setTimeout(() => {}, pauseAfterDelete);
      } else {
        timer = setTimeout(() => {
          setCurrentText(activeWord.substring(0, currentText.length - 1));
        }, deletingSpeed);
      }
    } else {
      if (currentText === activeWord) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseAfterType);
      } else {
        timer = setTimeout(() => {
          setCurrentText(activeWord.substring(0, currentText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <span className="bg-navy text-accent px-3 py-1 rounded-sm inline-block font-extrabold">
      {currentText}
      <span className="text-accent animate-pulse">|</span>
    </span>
  );
}
