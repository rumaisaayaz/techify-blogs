import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Blog Topics */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Blog Topics</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="hover:text-blue-700 transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-700 transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className= "border-gray-700 placeholder-gray-400"
              />
              <Button
                type="submit"
                className="w-full hover:bg-blue-700 "
              >
                Subscribe
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/rumaisa-ayaz-730630301/" className="hover:text-blue-700 transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">Linkedin</span>
              </a>
              <a href="https://github.com/rumaisaayaz" className="hover:text-blue-700 transition-colors">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          © {new Date().getFullYear()} Techfiy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
