"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-black via-secondary-900 to-black relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent to-orange rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange to-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gradient-to-r from-accent to-orange p-1 bg-gradient-to-r from-accent to-orange">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img
                    src="/placeholder.svg?height=160&width=160"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Animated gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-orange to-accent opacity-75 animate-spin-slow blur-sm -z-10"></div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Hi, I'm{" "}
            <span className="text-gradient animate-gradient-shift bg-gradient-to-r from-accent via-orange to-accent bg-[length:200%_auto]">
              Abiel Yemane
            </span>
          </h1>
          <p className="text-xl md:text-3xl mb-8 bg-gradient-to-r from-accent to-orange bg-clip-text text-transparent font-semibold">
            Full Stack Developer & AI Enthusiast
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            I enjoy building Full Stack Applications and finding different ways to integrate AI into my work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-orange hover:from-accent-600 hover:to-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </div>
          <div className="flex justify-center space-x-10">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-accent hover:bg-accent/10 rounded-full p-4 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-accent hover:bg-accent/10 rounded-full p-4 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-accent hover:bg-accent/10 rounded-full p-4 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="h-8 w-8" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
