import { Button } from "@/components/ui/button"
import { ArrowRight, Rss, Search, Zap } from 'lucide-react'
import Link from "next/link"

export default function About() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          About Our Tech Blog
        </h2>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          Welcome to our cutting-edge technology blog, where we explore the latest trends, innovations, and insights in the ever-evolving world of tech. Stay ahead of the curve with our expert analysis and in-depth articles.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <feature.icon className="w-12 h-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/blog">
          <Button className="group" size="lg">
            Start Reading
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    icon: Zap,
    title: "Cutting-edge Content",
    description: "Stay updated with the latest in AI, blockchain, cybersecurity, and more."
  },
  {
    icon: Search,
    title: "In-depth Analysis",
    description: "Dive deep into complex tech topics with our expert insights and explanations."
  },
  {
    icon: Rss,
    title: "Regular Updates",
    description: "New articles and features added weekly to keep you informed and engaged."
  }
]

