"use client"

import * as React from "react"
import { ArrowUpCircleIcon, ArrowRightIcon, UserPlusIcon, SearchIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function GetStartedPage() {
  const handleCreateChatbot = () => {
    // Navigate to admin (which will show auth if not logged in)
    window.location.href = '/admin'
  }

  const handleDiscoverChatbots = () => {
    // Navigate to chat discovery page
    window.location.href = '/chat'
  }

  return (
    <div className="min-h-screen bg-sidebar flex">
      {/* Left side - Options */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-sidebar-foreground rounded-lg flex items-center justify-center">
              <ArrowUpCircleIcon className="h-6 w-6 text-sidebar" />
            </div>
            <span className="text-xl font-semibold text-sidebar-foreground">Thetails</span>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-sidebar-foreground mb-2 font-general">
              Get Started with AI Chatbots
            </h1>
            <p className="text-sidebar-foreground/70">
              Choose how you'd like to begin your AI chatbot journey
            </p>
          </div>

          <div className="space-y-4">
            {/* Create Chatbot Option */}
            <Card 
              className="bg-sidebar-accent border-sidebar-border hover:border-sidebar-foreground/20 transition-all duration-200 cursor-pointer p-6 group"
              onClick={handleCreateChatbot}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <UserPlusIcon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-sidebar-foreground font-general">
                      Create a Chatbot
                    </h3>
                    <ArrowRightIcon className="h-5 w-5 text-sidebar-foreground/40 group-hover:text-sidebar-foreground group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                  <p className="text-sidebar-foreground/70 text-sm mb-3 leading-relaxed">
                    Build your own AI-powered chatbot with custom knowledge and personality. Perfect for businesses, creators, and personal projects.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="px-2 py-1 bg-blue-500/10 text-blue-500 rounded text-xs font-medium">
                      Sign-up required
                    </div>
                    <div className="flex items-center gap-1 text-xs text-sidebar-foreground/60">
                      <span>•</span>
                      <span>Free to start</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Discover Chatbots Option */}
            <Card 
              className="bg-sidebar-accent border-sidebar-border hover:border-sidebar-foreground/20 transition-all duration-200 cursor-pointer p-6 group"
              onClick={handleDiscoverChatbots}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <SearchIcon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-sidebar-foreground font-general">
                      Discover Chatbots
                    </h3>
                    <ArrowRightIcon className="h-5 w-5 text-sidebar-foreground/40 group-hover:text-sidebar-foreground group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                  <p className="text-sidebar-foreground/70 text-sm mb-3 leading-relaxed">
                    Explore public AI chatbots created by our community. Chat with specialized bots for different topics and use cases.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="px-2 py-1 bg-green-500/10 text-green-500 rounded text-xs font-medium">
                      No sign-up needed
                    </div>
                    <div className="flex items-center gap-1 text-xs text-sidebar-foreground/60">
                      <span>•</span>
                      <span>Start chatting instantly</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="mt-8 p-4 bg-sidebar-accent/50 rounded-lg border border-sidebar-border">
            <h4 className="text-sidebar-foreground font-medium mb-2 font-general">
              Why Choose Thetails?
            </h4>
            <ul className="space-y-1 text-sm text-sidebar-foreground/70">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                <span>Advanced AI powered by your custom data</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0"></div>
                <span>Easy integration with websites and apps</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                <span>Community of creators and innovators</span>
              </li>
            </ul>
          </div>

          {/* Back to Home */}
          <div className="mt-6 text-center">
            <button
              onClick={() => window.location.href = '/'}
              className="text-sidebar-foreground/60 hover:text-sidebar-foreground text-sm transition-colors font-general"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>

      {/* Right side - Visual */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-sidebar-accent via-sidebar-border to-sidebar items-center justify-center p-8 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-700/20"></div>
        <div className="text-center text-sidebar-foreground max-w-md relative z-10">
          <div className="w-24 h-24 bg-sidebar-foreground/20 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
            <svg className="w-12 h-12 text-sidebar-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4 font-general">
            Start Your AI Journey
          </h2>
          <p className="text-lg text-sidebar-foreground/80 leading-relaxed font-general">
            Whether you're looking to create intelligent chatbots for your business or explore what others have built, 
            we've got you covered with powerful AI tools and an amazing community.
          </p>
          <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-sidebar-foreground/60">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Easy Setup</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Powerful AI</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Great Community</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}