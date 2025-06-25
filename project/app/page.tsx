'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Brain, Trophy, Globe, ArrowRight, Star, Zap, Target, BookOpen, GitBranch } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Matching",
      description: "Advanced ML algorithms connect you with perfect research collaborators and opportunities.",
      color: "text-purple-400"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Gamified Networking",
      description: "Earn points, badges, and climb leaderboards while building meaningful academic connections.",
      color: "text-blue-400"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Research Network",
      description: "Connect with researchers and professors from top institutions worldwide.",
      color: "text-green-400"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Project Matchboard",
      description: "Discover and apply to cutting-edge research projects that match your expertise.",
      color: "text-cyan-400"
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Researchers", icon: <Users className="w-5 h-5" /> },
    { number: "10K+", label: "Research Projects", icon: <BookOpen className="w-5 h-5" /> },
    { number: "500+", label: "Universities", icon: <Globe className="w-5 h-5" /> },
    { number: "1M+", label: "Connections Made", icon: <GitBranch className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          {/* Navigation */}
          <nav className="flex justify-between items-center mb-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">ResNet</span>
            </div>
            <Link href="/login">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                Sign In
              </Button>
            </Link>
          </nav>

          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
              <Zap className="w-4 h-4 mr-2" />
              The Future of Academic Networking
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Where Great
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Research Minds </span>
              Meet
            </h1>
            
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join the world's most advanced academic network. Connect with researchers, 
              discover groundbreaking projects, and accelerate your research career through 
              AI-powered matching and gamified collaboration.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/onboarding?role=fellow">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 text-lg font-semibold">
                  Join as Research Fellow
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/onboarding?role=professor">
                <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg font-semibold">
                  Join as Professor
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2 text-slate-400">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Features for Modern Research
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Discover why thousands of researchers choose ResNet to accelerate their academic careers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-slate-900/50 border-slate-700 hover:bg-slate-900/70 transition-all duration-300 cursor-pointer transform hover:scale-105"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <CardHeader className="text-center">
                  <div className={`inline-flex p-3 rounded-lg mb-4 ${feature.color} bg-slate-800`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400 text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Your Research Journey Starts Here
            </h2>
            <p className="text-xl text-slate-400">
              Three simple steps to transform your academic networking
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Create Your Profile",
                description: "Set up your academic profile with publications, interests, and research goals. Our AI learns your preferences to make perfect matches.",
                color: "from-purple-500 to-purple-600"
              },
              {
                step: "02", 
                title: "Discover & Connect",
                description: "Browse personalized recommendations for collaborators, papers, and projects. Engage through our gamified system to build meaningful connections.",
                color: "from-blue-500 to-blue-600"
              },
              {
                step: "03",
                title: "Collaborate & Grow",
                description: "Join research projects, mentor students, attend AMAs, and climb leaderboards while advancing your academic career.",
                color: "from-green-500 to-green-600"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex w-16 h-16 rounded-full bg-gradient-to-r ${item.color} items-center justify-center text-white font-bold text-xl mb-6`}>
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Leading Institutions
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            {["MIT", "Stanford", "Oxford", "Harvard", "Cambridge", "ETH Zurich", "UCL", "NTU"].map((uni, index) => (
              <div key={index} className="text-center py-4">
                <div className="text-2xl font-bold text-slate-400">{uni}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Research Career?
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Join thousands of researchers who are already building the future of academia together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/onboarding?role=fellow">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-12 py-4 text-lg font-semibold">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">ResNet</span>
            </div>
            <div className="text-slate-400 text-sm">
              © 2024 ResNet. Connecting the world's brightest minds.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}