'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, Calendar, Clock, MapPin, Users, Bookmark, 
  BookOpen, Video, Globe, Plus, Filter, Search
} from 'lucide-react';
import Link from 'next/link';

const events = [
  {
    id: 1,
    title: "NeurIPS 2024 - Neural Information Processing Systems",
    type: "Conference",
    category: "Machine Learning",
    date: "Dec 10-16, 2024",
    location: "Vancouver, Canada",
    format: "Hybrid",
    description: "The premier conference on neural information processing systems, featuring the latest research in machine learning, AI, and neural computation.",
    organizer: "NeurIPS Foundation",
    attendees: 12000,
    registration: "Open",
    deadline: "Oct 15, 2024",
    website: "https://neurips.cc",
    bookmarked: true,
    relevanceScore: 95
  },
  {
    id: 2,
    title: "Quantum Computing Workshop Series",
    type: "Workshop",
    category: "Quantum Computing",
    date: "Jan 15-17, 2025",
    location: "Oxford, UK",
    format: "In-person",
    description: "Hands-on workshop covering quantum algorithms, error correction, and practical implementations using IBM Qiskit and Google Cirq.",
    organizer: "Oxford Quantum Institute",
    attendees: 150,
    registration: "Open",
    deadline: "Dec 20, 2024",
    website: "https://oxford-quantum.org",
    bookmarked: false,
    relevanceScore: 88
  },
  {
    id: 3,
    title: "ICML 2025 Call for Papers",
    type: "CFP",
    category: "Machine Learning",
    date: "Submission: Feb 1, 2025",
    location: "Vienna, Austria",
    format: "Hybrid",
    description: "International Conference on Machine Learning - submissions open for original research in all areas of machine learning.",
    organizer: "ICML Committee",
    attendees: 8000,
    registration: "Submission Portal",
    deadline: "Feb 1, 2025",
    website: "https://icml.cc",
    bookmarked: true,
    relevanceScore: 92
  },
  {
    id: 4,
    title: "AI for Climate Change Hackathon",
    type: "Hackathon",
    category: "Climate Science",
    date: "Feb 8-10, 2025",
    location: "Online",
    format: "Virtual",
    description: "48-hour hackathon focused on developing AI solutions for climate change mitigation and adaptation. Prizes worth $50,000.",
    organizer: "Climate AI Initiative",
    attendees: 2000,
    registration: "Open",
    deadline: "Jan 25, 2025",
    website: "https://climate-ai-hack.org",
    bookmarked: false,
    relevanceScore: 85
  },
  {
    id: 5,
    title: "Biotech Innovation Summit 2025",
    type: "Conference",
    category: "Biotechnology",
    date: "Mar 5-7, 2025",
    location: "Boston, USA",
    format: "In-person",
    description: "Leading biotechnology conference featuring presentations on drug discovery, genetic engineering, and computational biology.",
    organizer: "BioTech Society",
    attendees: 3500,
    registration: "Early Bird",
    deadline: "Jan 15, 2025",
    website: "https://biotech-summit.org",
    bookmarked: true,
    relevanceScore: 78
  },
  {
    id: 6,
    title: "Robotics Research Symposium",
    type: "Symposium",
    category: "Robotics",
    date: "Mar 20-22, 2025",
    location: "Zurich, Switzerland",
    format: "Hybrid",
    description: "Annual symposium showcasing latest advances in robotics, autonomous systems, and human-robot interaction.",
    organizer: "ETH Robotics Lab",
    attendees: 800,
    registration: "Open",
    deadline: "Feb 28, 2025",
    website: "https://robotics-symposium.ethz.ch",
    bookmarked: false,
    relevanceScore: 82
  },
  {
    id: 7,
    title: "AI Research Mentorship AMA",
    type: "AMA",
    category: "General",
    date: "Tomorrow, 3:00 PM PST",
    location: "ResNet Platform",
    format: "Virtual",
    description: "Live Q&A session with leading AI researchers. Ask questions about research directions, career advice, and collaboration opportunities.",
    organizer: "ResNet Community",
    attendees: 450,
    registration: "Free",
    deadline: "Open Registration",
    website: "https://resnet.ai/ama",
    bookmarked: true,
    relevanceScore: 90
  },
  {
    id: 8,
    title: "Nature Conference on Artificial Intelligence",
    type: "Conference", 
    category: "Artificial Intelligence",
    date: "Apr 12-14, 2025",
    location: "London, UK",
    format: "Hybrid",
    description: "Prestigious conference organized by Nature, focusing on responsible AI, ethical considerations, and breakthrough research.",
    organizer: "Nature Publishing Group",
    attendees: 2500,
    registration: "Invitation Only",
    deadline: "Closed",
    website: "https://nature.com/ai-conference",
    bookmarked: false,
    relevanceScore: 96
  }
];

const categories = ["All Categories", "Machine Learning", "Artificial Intelligence", "Quantum Computing", "Biotechnology", "Robotics", "Climate Science", "General"];
const types = ["All Types", "Conference", "Workshop", "CFP", "Hackathon", "Symposium", "AMA"];
const formats = ["All Formats", "In-person", "Virtual", "Hybrid"];

export default function CalendarPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedFormat, setSelectedFormat] = useState('All Formats');
  const [activeTab, setActiveTab] = useState('upcoming');

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'All Categories' || event.category === selectedCategory;
    const matchesType = selectedType === 'All Types' || event.type === selectedType;
    const matchesFormat = selectedFormat === 'All Formats' || event.format === selectedFormat;
    
    return matchesCategory && matchesType && matchesFormat;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Conference': return <BookOpen className="w-4 h-4" />;
      case 'Workshop': return <Users className="w-4 h-4" />;
      case 'CFP': return <BookOpen className="w-4 h-4" />;
      case 'Hackathon': return <Globe className="w-4 h-4" />;
      case 'Symposium': return <Users className="w-4 h-4" />;
      case 'AMA': return <Video className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Conference': return 'bg-blue-600';
      case 'Workshop': return 'bg-green-600';
      case 'CFP': return 'bg-purple-600';
      case 'Hackathon': return 'bg-orange-600';
      case 'Symposium': return 'bg-cyan-600';
      case 'AMA': return 'bg-red-600';
      default: return  'bg-gray-600';
    }
  };

  const getFormatIcon = (format: string) => {
    switch (format) {
      case 'Virtual': return <Video className="w-3 h-3" />;
      case 'Hybrid': return <Globe className="w-3 h-3" />;
      case 'In-person': return <MapPin className="w-3 h-3" />;
      default: return <Calendar className="w-3 h-3" />;
    }
  };

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
                <Link href="/fellows" className="text-slate-300 hover:text-white">Fellows</Link>
                <Link href="/professors" className="text-slate-300 hover:text-white">Professors</Link>
                <Link href="/projects" className="text-slate-300 hover:text-white">Projects</Link>
                <Link href="/calendar" className="text-purple-400 font-medium">Calendar</Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                <Plus className="w-4 h-4 mr-2" />
                Add Event
              </Button>
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
          <h1 className="text-4xl font-bold text-white mb-4">Global Research Calendar</h1>
          <p className="text-xl text-slate-400">Stay updated with conferences, workshops, and academic events worldwide</p>
        </div>

        {/* Filters */}
        <Card className="bg-slate-900/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-slate-800 border border-slate-600 text-white rounded-md px-3 py-2"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select 
                value={selectedType} 
                onChange={(e) => setSelectedType(e.target.value)}
                className="bg-slate-800 border border-slate-600 text-white rounded-md px-3 py-2"
              >
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <select 
                value={selectedFormat} 
                onChange={(e) => setSelectedFormat(e.target.value)}
                className="bg-slate-800 border border-slate-600 text-white rounded-md px-3 py-2"
              >
                {formats.map(format => (
                  <option key={format} value={format}>{format}</option>
                ))}
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <div className="mb-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="flex justify-between items-center">
              <p className="text-slate-400">
                Found {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''}
              </p>
              <TabsList className="bg-slate-800 border-slate-700">
                <TabsTrigger value="upcoming" className="data-[state=active]:bg-purple-600">Upcoming</TabsTrigger>
                <TabsTrigger value="bookmarked" className="data-[state=active]:bg-purple-600">Bookmarked</TabsTrigger>
                <TabsTrigger value="trending" className="data-[state=active]:bg-purple-600">Trending</TabsTrigger>
              </TabsList>
            </div>
          </Tabs>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-all duration-300">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge className={`${getTypeColor(event.type)} text-white flex items-center`}>
                        {getTypeIcon(event.type)}
                        <span className="ml-1">{event.type}</span>
                      </Badge>
                      <Badge variant="outline" className="border-slate-600 text-slate-300">
                        {event.category}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{event.title}</h3>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className={`${event.bookmarked ? 'text-yellow-500' : 'text-slate-400'} hover:text-yellow-500`}
                  >
                    <Bookmark className={`w-4 h-4 ${event.bookmarked ? 'fill-current' : ''}`} />
                  </Button>
                </div>

                {/* Event Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-slate-300 text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-slate-300 text-sm">
                    {getFormatIcon(event.format)}
                    <span className="ml-2">{event.location}</span>
                    <Badge variant="outline" className="ml-2 border-slate-600 text-slate-400 text-xs">
                      {event.format}
                    </Badge>
                  </div>
                  <div className="flex items-center text-slate-300 text-sm">
                    <Users className="w-4 h-4 mr-2 text-green-400" />
                    {event.attendees.toLocaleString()} attendees
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">{event.description}</p>

                {/* Organizer & Registration */}
                <div className="flex justify-between items-center mb-4 text-sm">
                  <div className="text-slate-400">
                    by <span className="text-slate-300">{event.organizer}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={`${event.registration === 'Open' ? 'bg-green-600' : event.registration === 'Early Bird' ? 'bg-blue-600' : 'bg-red-600'} text-white`}>
                      {event.registration}
                    </Badge>
                    <div className="text-slate-400 text-xs">
                      Deadline: {event.deadline}
                    </div>
                  </div>
                </div>

                {/* Relevance Score */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-green-400 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    {event.relevanceScore}% relevance match
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                    View Details
                  </Button>
                  <Button variant="outline" className="border-slate-600 text-slate-300">
                    Register
                  </Button>
                  <Button variant="outline" size="icon" className="border-slate-600 text-slate-300">
                    <Globe className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredEvents.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              Load More Events
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}