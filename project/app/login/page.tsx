'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Brain, Mail, ArrowRight, Github, Globe } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = () => {
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      window.location.href = '/onboarding';
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Brain className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold text-white">ResNet</span>
          </Link>
          <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-slate-400">Sign in to continue your research journey</p>
        </div>

        <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center text-white">Sign In</CardTitle>
            <CardDescription className="text-center text-slate-400">
              Use your institutional email or ORCID to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Google/ORCID Login */}
            <Button 
              variant="outline" 
              className="w-full border-slate-600 text-slate-300 hover:bg-slate-800 h-12"
              onClick={handleGoogleLogin}
              disabled={isLoading}
            >
              <Mail className="w-5 h-5 mr-2" />
              {isLoading ? "Signing in..." : "Continue with Google"}
            </Button>

            <Button 
              variant="outline" 
              className="w-full border-slate-600 text-slate-300 hover:bg-slate-800 h-12"
            >
              <Globe className="w-5 h-5 mr-2" />
              Continue with ORCID
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full bg-slate-700" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-slate-900 px-2 text-slate-400">Or continue with email</span>
              </div>
            </div>

            {/* Email Login Form */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@university.edu"
                  className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-300">Password</Label>
                <Input 
                  id="password" 
                  type="password"
                  className="bg-slate-800 border-slate-600 text-white"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 h-12">
                Sign In
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="text-center">
              <Link href="/forgot-password" className="text-sm text-purple-400 hover:text-purple-300">
                Forgot your password?
              </Link>
            </div>

            <Separator className="bg-slate-700" />

            <div className="text-center text-sm text-slate-400">
              Don't have an account?{' '}
              <Link href="/onboarding" className="text-purple-400 hover:text-purple-300 font-medium">
                Join ResNet
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-slate-500">
          By signing in, you agree to our{' '}
          <Link href="/terms" className="text-purple-400 hover:text-purple-300">Terms of Service</Link>
          {' '}and{' '}
          <Link href="/privacy" className="text-purple-400 hover:text-purple-300">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}