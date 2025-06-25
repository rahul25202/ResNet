'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, Search, Users, MapPin, Star, MessageCircle, 
  UserPlus, Filter, BookOpen, Award, TrendingUp, Globe
} from 'lucide-react';
import Link from 'next/link';

const fellows = [
  {
    id: 1,
    name: "Dr. Alex Chen",
    role: "PhD Student",
    institute: "Stanford University",
    location: "California, USA",
    field: "Machine Learning",
    specialization: "Computer Vision",
    level: "Advanced Researcher",
    points: 2890,
    avatar: "",
    badges: ["Paper Wizard", "Mentor Star"],
    publications: 12,
    collaborations: 8,
    rating: 4.8,
    bio: "Focused on developing novel computer vision algorithms for autonomous systems. Passionate about collaborative research and knowledge sharing."
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Postdoc",
    institute: "MIT",
    location: "Massachusetts, USA", 
    field: "Artificial Intelligence",
    specialization: "Natural Language Processing",
    level: "Senior Researcher",
    points: 3240,
    avatar: "",
    badges: ["Collaboration Pro", "Top Reviewer"],
    publications: 18,
    collaborations: 15,
    rating: 4.9,
    bio: "Working on large language models and their applications in scientific research. Always looking for interdisciplinary collaborations."
  },
  {
    id: 3,
    name: "Dr. Marcus Weber",
    role: "Research Fellow",
    institute: "Max Planck Institute",
    location: "Berlin, Germany",
    field: "Quantum Computing",
    specialization: "Quantum Algorithms",
    level: "Expert Researcher", 
    points: 4120,
    avatar: "",
    badges: ["Quantum Pioneer", "Research Leader", "Mentor Star"],
    publications: 25,
    collaborations: 12,
    rating: 4.7,
    bio: "Developing quantum algorithms for optimization problems. Interested in quantum machine learning and cryptography applications."
  },
  {
    id: 4,
    name: "Dr. Priya Patel",
    role: "PhD Student",
    institute: "Oxford University",
    location: "Oxford, UK",
    field: "Biotechnology",
    specialization: "Bioinformatics",
    level: "Advanced Researcher",
    points: 2650,
    avatar: "",
    badges: ["Bio Innovator", "Data Wizard"],
    publications: 9,
    collaborations: 6,
    rating: 4.6,
    bio: "Applying machine learning to genomic data analysis. Focused on personalized medicine and drug discovery applications."
  },
  {
    id: 5,
    name: "Kevin Liu",
    role: "Master's Student",
    institute: "ETH Zurich",
    location: "Zurich, Switzerland",
    field: "Robotics",
    specialization: "Autonomous Systems",
    level: "Junior Researcher",
    points: 1840,
    avatar: "",
    badges: ["Rising Star", "Innovation Award"],
    publications: 4,
    collaborations: 3,
    rating: 4.5,
    bio: "Building autonomous robots for environmental monitoring. Passionate about sustainable technology and open-source development."
  },
  {
    id: 6,
    name: "Dr. Elena Rodriguez",
    role: "Postdoc",
    institute: "University of Toronto",
    location: "Toronto, Canada",
    field: "Climate Science",
    specialization: "Climate Modeling",
    level: "Senior Researcher",
    points: 3680,
    avatar: "",
    badges: ["Climate Champion", "Collaboration Pro", "Top Reviewer"],
    publications: 22,
    collaborations: 18,
    rating: 4.8,
    bio: "Developing advanced climate models using machine learning. Working on prediction systems for extreme weather events."
  }
];

const fields = ["All Fields", "Machine Learning", "Artificial Intelligence", "Quantum Computing", "Biotechnology", "Robotics", "Climate Science"];
const locations = ["All Locations", "USA", "Germany", "UK", "Switzerland", "Canada"];
const levels = ["All Levels", "Junior Researcher", "Advanced Researcher", "Senior Researcher", "Expert Researcher"];

export default function FellowsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedField, setSelectedField] = useState('All Fields');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [activeTab, setActiveTab] = useState('all');

  const filteredFellows = fellows.filter(fellow => {
    const matchesSearch = fellow.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         fellow.institute.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         fellow.field.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesField = selectedField === 'All Fields' || fellow.field === selectedField;
    const matchesLocation = selectedLocation === 'All Locations' || fellow.location.includes(selectedLocation);
    const matchesLevel = selectedLevel === 'All Levels' || fellow.level === selectedLevel;
    
    return matchesSearch && matchesField && matchesLocation && matchesLevel;
  });

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
                <Link href="/dashboard" className="text-slate-300 hover:text-white">Dashboard</Link>
                <Link href="/fellows" className="text-purple-400 font-medium">Fellows</Link>
                <Link href="/professors" className="text-slate-300 hover:text-white">Professors</Link>
                <Link href="/projects" className="text-slate-300 hover:text-white">Projects</Link>
                <Link href="/calendar" className="text-slate-300 hover:text-white">Calendar</Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Avatar className="w-8 h-8">
                <AvatarImage src="" />
                <AvatarFallback className="bg-purple-600 text-white">SC</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Research Fellows</h1>
          <p className="text-xl text-slate-400">Connect with talented researchers from around the world</p>
        </div>

        {/* Search and Filters */}
        <Card className="bg-slate-900/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <Input
                    placeholder="Search by name, institution, or field..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <Select value={selectedField} onValueChange={setSelectedField}>
                  <SelectTrigger className="w-40 bg-slate-800 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    {fields.map(field => (
                      <SelectItem key={field} value={field} className="text-white">{field}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="w-40 bg-slate-800 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    {locations.map(location => (
                      <SelectItem key={location} value={location} className="text-white">{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger className="w-40 bg-slate-800 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    {levels.map(level => (
                      <SelectItem key={level} value={level} className="text-white">{level}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <p className="text-slate-400">
              Found {filteredFellows.length} fellow{filteredFellows.length !== 1 ? 's' : ''}
            </p>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="bg-slate-800 border-slate-700">
                <TabsTrigger value="all" className="data-[state=active]:bg-purple-600">All</TabsTrigger>
                <TabsTrigger value="top-rated" className="data-[state=active]:bg-purple-600">Top Rated</TabsTrigger>
                <TabsTrigger value="most-active" className="data-[state=active]:bg-purple-600">Most Active</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Fellows Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFellows.map((fellow) => (
            <Card key={fellow.id} className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={fellow.avatar} />
                    <AvatarFallback className="bg-purple-600 text-white text-lg">
                      {fellow.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">{fellow.name}</h3>
                    <p className="text-slate-300 text-sm">{fellow.role}</p>
                    <p className="text-slate-400 text-sm">{fellow.institute}</p>
                    <div className="flex items-center text-slate-400 text-sm mt-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      {fellow.location}
                    </div>
                  </div>
                </div>

                {/* Fields & Specialization */}
                <div className="mb-4">
                  <Badge className="bg-purple-100 text-purple-800 mr-2">{fellow.field}</Badge>
                  <Badge variant="outline" className="border-slate-600 text-slate-300">
                    {fellow.specialization}
                  </Badge>
                </div>

                {/* Bio */}
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">{fellow.bio}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <div className="text-white font-semibold">{fellow.publications}</div>
                    <div className="text-slate-400 text-xs">Publications</div>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{fellow.collaborations}</div>
                    <div className="text-slate-400 text-xs">Collaborations</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center">
                      <Star className="w-3 h-3 text-yellow-500 mr-1" />
                      <span className="text-white font-semibold">{fellow.rating}</span>
                    </div>
                    <div className="text-slate-400 text-xs">Rating</div>
                  </div>
                </div>

                {/* Level & Points */}
                <div className="flex justify-between items-center mb-4">
                  <Badge className="bg-gradient-to-r from-green-600 to-green-700">
                    {fellow.level}
                  </Badge>
                  <div className="flex items-center text-green-400 text-sm">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {fellow.points.toLocaleString()} pts
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {fellow.badges.map((badge, index) => (
                    <Badge key={index} className="bg-yellow-600 text-white text-xs">
                      {badge}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                  <Button variant="outline" className="border-slate-600 text-slate-300">
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredFellows.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              Load More Fellows
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}