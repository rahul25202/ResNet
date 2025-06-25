'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, Bell, Search, Users, BookOpen, Trophy, Star, MessageCircle, 
  ThumbsUp, Share2, Calendar, Zap, Target, TrendingUp, Award,
  User, GraduationCap, GitBranch, Eye, Heart, MessageSquare
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('feed');

  // Mock data
  const user = {
    name: "Dr. Sarah Chen",
    role: "Research Fellow",
    institute: "MIT",
    level: "Senior Researcher",
    points: 2450,
    avatar: "",
    badges: ["Paper Wizard", "Mentor Star", "Collaboration Pro"]
  };

  const notifications = [
    { type: "collaboration", message: "New project match in Machine Learning", time: "2h ago" },
    { type: "badge", message: "You earned the 'Helpful Reviewer' badge!", time: "1d ago" },
    { type: "message", message: "Dr. Johnson sent you a message", time: "2d ago" }
  ];

  const trendingPapers = [
    {
      title: "Attention Is All You Need: Revisiting Transformer Architectures",
      authors: "Dr. Michael Zhang, Prof. Lisa Wang",
      field: "Machine Learning",
      citations: 1250,
      relevance: 95
    },
    {
      title: "Quantum Computing Applications in Drug Discovery",
      authors: "Prof. Robert Kim, Dr. Emily Davis",
      field: "Quantum Computing",
      citations: 890,
      relevance: 88
    },
    {
      title: "Climate Change Modeling with Advanced Neural Networks",
      authors: "Dr. Maria Rodriguez, Prof. James Liu",
      field: "Climate Science",
      citations: 745,
      relevance: 82
    }
  ];

  const suggestedCollaborators = [
    {
      name: "Dr. Alex Thompson",
      role: "Professor",
      institute: "Stanford",
      field: "Computer Vision",
      matchScore: 94,
      avatar: ""
    },
    {
      name: "Prof. Rachel Green",
      role: "Professor", 
      institute: "Oxford",
      field: "Machine Learning",
      matchScore: 89,
      avatar: ""
    },
    {
      name: "Dr. Kevin Park",
      role: "Research Fellow",
      institute: "ETH Zurich",
      field: "Robotics",
      matchScore: 85,
      avatar: ""
    }
  ];

  const leaderboard = [
    { rank: 1, name: "Prof. David Wilson", points: 3200, change: "+5" },
    { rank: 2, name: "Dr. Emma Brown", points: 2890, change: "+2" },
    { rank: 3, name: "You", points: 2450, change: "+8" },
    { rank: 4, name: "Dr. John Martinez", points: 2340, change: "-1" },
    { rank: 5, name: "Prof. Sophie Lee", points: 2180, change: "+3" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">ResNet</span>
              </Link>
              
              <div className="hidden md:flex space-x-6">
                <Link href="/dashboard" className="text-purple-400 font-medium">Dashboard</Link>
                <Link href="/fellows" className="text-slate-300 hover:text-white">Fellows</Link>
                <Link href="/professors" className="text-slate-300 hover:text-white">Professors</Link>
                <Link href="/projects" className="text-slate-300 hover:text-white">Projects</Link>
                <Link href="/calendar" className="text-slate-300 hover:text-white">Calendar</Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon" className="border-slate-600 text-slate-300">
                <Search className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-slate-600 text-slate-300 relative">
                <Bell className="w-4 h-4" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="bg-purple-600 text-white">SC</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Profile & Stats */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <Card className="bg-slate-900/50 border-slate-700">
              <CardContent className="p-6">
                <div className="text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback className="bg-purple-600 text-white text-lg">SC</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold text-white">{user.name}</h3>
                  <p className="text-slate-400">{user.role}</p>
                  <p className="text-slate-500 text-sm">{user.institute}</p>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Level</span>
                      <span className="text-purple-400">{user.level}</span>
                    </div>
                    <Progress value={75} className="h-2 bg-slate-800" />
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Points</span>
                      <span className="text-green-400">{user.points.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Badges */}
            <Card className="bg-slate-900/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Award className="w-5 h-5 mr-2 text-yellow-500" />
                  Recent Badges
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {user.badges.map((badge, index) => (
                  <Badge key={index} className="w-full justify-center bg-gradient-to-r from-yellow-600 to-yellow-700">
                    {badge}
                  </Badge>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-slate-900/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-400">Connections</span>
                  <span className="text-white font-semibold">127</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Projects</span>
                  <span className="text-white font-semibold">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Reviews</span>
                  <span className="text-white font-semibold">23</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Mentorship</span>
                  <span className="text-white font-semibold">5</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="bg-slate-800 border-slate-700">
                <TabsTrigger value="feed" className="data-[state=active]:bg-purple-600">Feed</TabsTrigger>
                <TabsTrigger value="recommendations" className="data-[state=active]:bg-purple-600">Recommendations</TabsTrigger>
                <TabsTrigger value="trending" className="data-[state=active]:bg-purple-600">Trending</TabsTrigger>
              </TabsList>

              <TabsContent value="feed" className="space-y-6">
                {/* Daily Challenge */}
                <Card className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-purple-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Target className="w-5 h-5 mr-2 text-purple-400" />
                      Daily Research Challenge
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">Review 3 papers in your field to earn 60 points!</p>
                    <div className="flex justify-between items-center">
                      <Progress value={66} className="flex-1 mr-4 h-2 bg-slate-800" />
                      <span className="text-purple-400 font-semibold">2/3</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Research Feed */}
                <div className="space-y-4">
                  {trendingPapers.map((paper, index) => (
                    <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <Badge className="bg-purple-100 text-purple-800">{paper.field}</Badge>
                          <div className="flex items-center space-x-1 text-slate-400 text-sm">
                            <Eye className="w-4 h-4" />
                            <span>{paper.citations}</span>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{paper.title}</h3>
                        <p className="text-slate-400 text-sm mb-4">{paper.authors}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex space-x-4">
                            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                              <Heart className="w-4 h-4 mr-1" />
                              Like
                            </Button>
                            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                              <MessageSquare className="w-4 h-4 mr-1" />
                              Comment
                            </Button>
                            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                              <Share2 className="w-4 h-4 mr-1" />
                              Share
                            </Button>
                          </div>
                          <div className="flex items-center text-green-400 text-sm">
                            <TrendingUp className="w-4 h-4 mr-1" />
                            {paper.relevance}% match
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="recommendations" className="space-y-6">
                <div className="space-y-4">
                  {suggestedCollaborators.map((collaborator, index) => (
                    <Card key={index} className="bg-slate-900/50 border-slate-700">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={collaborator.avatar} />
                            <AvatarFallback className="bg-blue-600 text-white">
                              {collaborator.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h3 className="text-white font-semibold">{collaborator.name}</h3>
                            <p className="text-slate-400 text-sm">{collaborator.role} at {collaborator.institute}</p>
                            <Badge variant="outline" className="mt-1 border-slate-600 text-slate-300">
                              {collaborator.field}
                            </Badge>
                          </div>
                          <div className="text-right">
                            <div className="text-green-400 font-semibold text-lg">{collaborator.matchScore}%</div>
                            <div className="text-slate-400 text-sm">match</div>
                          </div>
                          <Button className="bg-purple-600 hover:bg-purple-700">Connect</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="trending" className="space-y-6">
                <div className="grid gap-4">
                  {trendingPapers.map((paper, index) => (
                    <Card key={index} className="bg-slate-900/50 border-slate-700">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="text-2xl font-bold text-slate-600">#{index + 1}</div>
                          <div className="flex-1">
                            <h3 className="text-white font-semibold mb-2">{paper.title}</h3>
                            <p className="text-slate-400 text-sm mb-2">{paper.authors}</p>
                            <div className="flex items-center space-x-4 text-sm text-slate-400">
                              <span>{paper.citations} citations</span>
                              <Badge variant="outline" className="border-slate-600 text-slate-300">
                                {paper.field}
                              </Badge>
                            </div>
                          </div>
                          <TrendingUp className="w-5 h-5 text-green-400" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Notifications */}
            <Card className="bg-slate-900/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Bell className="w-5 h-5 mr-2 text-blue-400" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {notifications.map((notif, index) => (
                  <div key={index} className="p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                    <p className="text-slate-300 text-sm">{notif.message}</p>
                    <p className="text-slate-500 text-xs mt-1">{notif.time}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Leaderboard */}
            <Card className="bg-slate-900/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                  Weekly Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {leaderboard.map((entry, index) => (
                  <div key={index} className={`flex items-center space-x-3 p-2 rounded ${entry.name === 'You' ? 'bg-purple-900/30 border border-purple-700' : ''}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      entry.rank <= 3 ? 'bg-yellow-600 text-white' : 'bg-slate-700 text-slate-300'
                    }`}>
                      {entry.rank}
                    </div>
                    <div className="flex-1">
                      <div className="text-white text-sm font-medium">{entry.name}</div>
                      <div className="text-slate-400 text-xs">{entry.points.toLocaleString()} pts</div>
                    </div>
                    <div className={`text-xs font-semibold ${entry.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {entry.change}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="bg-slate-900/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-green-400" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                  <div className="text-white text-sm font-medium">NeurIPS 2024</div>
                  <div className="text-slate-400 text-xs">Dec 10-16, Vancouver</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                  <div className="text-white text-sm font-medium">ML Research AMA</div>
                  <div className="text-slate-400 text-xs">Tomorrow, 3:00 PM</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                  <div className="text-white text-sm font-medium">Quantum Computing Workshop</div>
                  <div className="text-slate-400 text-xs">Next Week</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}