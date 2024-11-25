"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Typed from "typed.js";
import React, { useRef, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Discover the Latest in Tech.",
        "Stay Updated on Emerging Trends.",
        "Explore Innovations That Shape the Future.",
        "Unleash the Power of Technology.",
        "Dive Into Expert Insights and Reviews.",
      ],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            <br className="hidden lg:block" />{" "}
            <span className="font-semibold underline decoration-primary">
              <span ref={el} />
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Explore the latest in technology with insightful blogs, trends, and
            innovations that shape our digital world.{" "}
            <br className="hidden lg:block" /> Stay informed, inspired, and
            ahead with expert tech insights
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form
              action="https://www.creative-tim.com/twcomponents/search"
              className="flex flex-wrap justify-between md:flex-row"
            ></form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <Image
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            width={500}
            height={500}
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Top Blogs
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Check out our most popular blog posts
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Blog 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <Image
                  src="/Blog-pic-7.jpeg"
                  alt="image"
                  className="w-full h-64 object-cover rounded-t-lg"
                  width={500}
                  height={500}
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Blockchain Beyond Cryptocurrency Innovations Changing the
                    World
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Highlight the practical uses of blockchain in supply chains,
                    healthcare, and governance.
                  </p>
                  <Link href="/blogpost/blockchain-innovations" passHref>
                    <Button className="m-2" variant="outline">
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Blog 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <Image
                  src="/Blog-pic-5.webp"
                  alt="Blog 2"
                  className="w-full h-64 object-cover rounded-t-lg"
                  width={500}
                  height={500}
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    The Future of Augmented Reality in Everyday Life
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Cover Augmented Reality role in gaming, retail, education,
                    emphasizing its accessibility.
                  </p>
                  <Link href="/blogpost/augmented-reality" passHref>
                    <Button className="m-2" variant="outline">
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Blog 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <Image
                  src="/Blog-pic-4.jpeg"
                  alt="Blog 3"
                  className="w-full h-64 object-cover rounded-t-lg"
                  width={500}
                  height={500}
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    AI in Education Revolutionizing Learning in the Digital Age
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    AI is transforming education with personalized learning and
                    virtual classrooms.
                  </p>
                  <Link href="/blogpost/ai-in-education" passHref>
                    <Button className="m-2" variant="outline">
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
