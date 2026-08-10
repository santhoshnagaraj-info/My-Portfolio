"use client"

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { useEffect, useState } from "react";


interface SocialLink {
  id: string;
  icon: string;
  url: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { id: "github", icon: "/icons/github.svg", url: "https://github.com/santhoshnagaraj-info", label: "GitHub" },
  { id: "linkedin", icon: "/icons/Linkedin.svg", url: "https://www.linkedin.com/in/santhoshnagaraj-info/", label: "LinkedIn" },
  { id: "mail", icon: "/icons/mail.svg", url: "mailto:santhoshnagaraj.info@gmail.com", label: "Email" },
];

function SocialLink() {
    return(  
        <div className="py-4 flex items-center gap-3">
            {socialLinks.map((link) => (
                <Link key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-600 bg-gray-400 hover:bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all ">
                    <Image src={link.icon} alt={link.label} width={20} height={20} className="backdrop-blur-lg"/>
                </Link>
            ))}
        </div>
)}

const WORDS = [
  "Software Engineer", "Production-grade Full Stack Developer", "Building scalable web applications"
];


const TYPE_SPEED = 100;
const DELETE_SPEED = 50;
const PAUSE_DURATION = 1500;

function TextType() {
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



export default function Hero() {
  return (
    <section id="home" className="flex items-center w-full h-screen mt-[3%] bg-transparent backdrop-blur-md border border-gray-400">
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-[60%_40%]  items-center px-[10%]">

          {/* Left */}
          <div className="flex flex-col order-2 md:order-1 ">
            <p className="py-5 font-light text-green-600 text-sm sm:text-base">Hi, I'm</p>
            <h1 className="py-3 font-extrabold text-gray-900 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight"> Santhosh Nagaraj </h1>
            <h2 className="py-3 text-lg sm:text-xl lg:text-2xl font-semibold"> <TextType /> </h2>
            <p className="py-5 text-gray-600 text-sm sm:text-base w-[75%]"> I build scalable web applications and backend systems with clean code and modern technologies. </p>

            <div className="py-4 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link href="#projects" className=" flex items-center gap-2 rounded-lg bg-green-700 px-4 sm:px-5 sm:py-3 text-sm sm:text-base font-medium  hover:bg-green-800 transition-colors" >
                View Projects <ArrowRight size={18} />
              </Link>
              <Link href="tel:+918525934244" className=" flex items-center gap-2 rounded-lg border border-gray-300 px-4 sm:px-5 sm:py-3 text-sm sm:text-base font-medium text-gray-900 hover:bg-gray-100 shadow-md hover:shadow-lg transition-shadow ">
                Contact Me  <Phone size={18} />
              </Link>
            </div>

            <SocialLink/>
          </div>

          {/* Right - Image */}
          <div className="relative order-1 md:order-2 w-full p-[1%] h-screen rounded-2xl ">
            <Image src="/images/Hero-removebg.png" alt="Santhosh Nagaraj - Software Engineer" fill priority className="top-0 bottom-0" />
          </div>

        </div>
    </section>
  );
}

