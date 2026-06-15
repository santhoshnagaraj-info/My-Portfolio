"use client";

import { useEffect, useState } from "react";
import WORDS from "@/data/hero.Role";


const TYPE_SPEED = 100;
const DELETE_SPEED = 50;
const PAUSE_DURATION = 1500;

export default function TextType() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = WORDS[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentWord.length) {
          setText(
            currentWord.slice(0, text.length + 1)
          );
        } else {
          setIsDeleting(true);
        }
      } else {
        if (text.length > 0) {
          setText(
            currentWord.slice(0, text.length - 1)
          );
        } else {
          setIsDeleting(false);

          setWordIndex(
            (prev) =>
              (prev + 1) % WORDS.length
          );
        }
      }
    }, (() => {
      if (!isDeleting) {
        return text.length === currentWord.length
          ? PAUSE_DURATION
          : TYPE_SPEED;
      }

      return DELETE_SPEED;
    })());

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <span className="text-green-600">
      {text}
      <span className="animate-pulse">
        |
      </span>
    </span>
  );
}