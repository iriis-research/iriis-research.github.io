// components/Footer.tsx
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaXTwitter, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { SiHuggingface } from "react-icons/si";

const Footer: React.FC = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer>
      <div className="border-t border-solid border-foreground"></div>
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pb-12 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Organization Info */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-wider">I R I I S</h2>
            <p className="text-lg">
              Institute for Research and Innovation in Intelligent Systems
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/research-areas">Research Areas</Link>
              </li>
              <li>
                <Link href="/publications">Publications</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/datasets">Datasets</Link>
              </li>
              <li>
                <Link href="/news">News</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <svg
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>iriisnepal@gmail.com</span>
              </p>
              <p className="flex items-center">
                <svg
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Lalitpur, Nepal</span>
              </p>
              <p className="flex items-center">
                <svg
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+977-XXXXXXXXXX</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto pb-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-md">
            © {year} IRIIS. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-8 pb-4">
            <a href="https://x.com/iriisnepal" target='_blank' rel='noopener noreferrer'>
              <span className="sr-only">X</span>
              <span className="text-2xl">
                <FaXTwitter />
              </span>
            </a>
            <a href="https://www.linkedin.com/company/institute-for-interdisciplinary-research-in-intelligent-systems" target='_blank' rel='noopener noreferrer'>
              <span className="sr-only">LinkedIn</span>
              <span className="text-2xl">
                <FaLinkedin />
              </span>
            </a>
            <a href="https://github.com/iriisnepal" target='_blank' rel='noopener noreferrer'>
              <span className="sr-only">GitHub</span>
              <span className="text-2xl">
                <FaGithub />
              </span>
            </a>
            <a href="https://www.youtube.com/@keplerconjecture" target='_blank' rel='noopener noreferrer'>
              <span className="sr-only">YouTube</span>
              <span className="text-2xl">
                <FaYoutube />
              </span>
            </a>
            <a href="https://huggingface.co/IRIISNEPAL" target='_blank' rel='noopener noreferrer'>
              <span className="sr-only">Hugging Face</span>
              <span className="text-2xl">
                <SiHuggingface />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
