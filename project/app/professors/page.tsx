'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, Search, GraduationCap, MapPin, Star, MessageCircle, 
  UserPlus, BookOpen, Award, TrendingUp, Calendar, Users, Target
} from 'lucide-react';
import Link from 'next/link';

const professors = [
  {
    id: 1,
    name: "Prof. Michael Zhang",
    title: "Professor of Computer Science",
    institute: "Stanford University",
    location: "California, USA",
    field: "Machine Learning",
    specialization: "Deep Learning & Neural Networks",
    hIndex: 85,
    citations: 12450,
    avatar: "",
    rating: {
      mentorship: 4.9,
      responsiveness: 4.7,
      clarity: 4.8
    },
    openProjects: 3,
    students: 12,
    courses: ["CS229 - Machine Learning", "CS231n - Computer Vision"],
    recentPapers: ["Attention Mechanisms in Vision Transformers", "Self-Supervised Learning for Medical Imaging"],
    nextAMA: "Dec 15, 2024",
    bio: "Leading researcher in deep learning with focus on computer vision and medical AI. Passionate about mentoring the next generation of AI researchers."
  },
  {
    id: 2,
    name: "Prof. Sarah Williams",
    title: "Director of AI Research Lab",
    institute: "MIT",
    location: "Massachusetts, USA",
    field: "Artificial Intelligence",
    specialization: "Natural Language Processing",
    hIndex: 72,
    citations: 9890,
    avatar: "",
    rating: {
      mentorship: 4.8,
      responsiveness: 4.9,
      clarity: 4.7
    },
    openProjects: 5,
    students: 15,
    courses: ["6.034 - Artificial Intelligence", "6.864 - Advanced NLP"],
    recentPapers: ["Large Language Models for Scientific Discovery", "Multimodal AI Systems"],
    nextAMA: "Dec 18, 2024",
    bio: "Expert in NLP and conversational AI systems. Focuses on building AI that can understand and generate human language at scale."
  },
  {
    id: 3,
    name: "Prof. David Kim",
    title: "Chair of Quantum Computing",
    institute: "Oxford University",
    location: "Oxford, UK",
    field: "Quantum Computing",
    specialization: "Quantum Algorithms",
    hIndex: 68,
    citations: 8750,
    avatar: "",
    rating: {
      mentorship: 4.6,
      responsiveness: 4.8,
      clarity: 4.9
    },
    openProjects: 2,
    students: 8,
    courses: ["Quantum Information Theory", "Advanced Quantum Algorithms"],
    recentPapers: ["Quantum Machine Learning Applications", "Error Correction in NISQ Devices"],
    nextAMA: "Dec 20, 2024",
    bio: "Pioneer in quantum computing research with expertise in quantum algorithms and their practical applications in optimization and ML."
  },
  {
    id: 4,
    name: "Prof. Lisa Chen",
    title: "Professor of Biotechnology",
    institute: "University of Cambridge",
    location: "Cambridge, UK",
    field: "Biotechnology",
    specialization: "Computational Biology",
    hIndex: 61,
    citations: 7320,
    avatar: "",
    rating: {
      mentorship: 4.7,
      responsiveness: 4.6,
      clarity: 4.8
    },
    openProjects: 4,
    students: 10,
    courses: ["Bioinformatics", "Systems Biology"],
    recentPapers: ["AI-Driven Drug Discovery", "Genomic Data Analysis at Scale"],
    nextAMA: "Dec 22, 2024",
    bio: "Computational biologist working at the intersection of AI and medicine. Focused on developing tools for personalized medicine and drug discovery."
  },
  {
    id: 5,
    name: "Prof. Robert Johnson",
    title: "Director of Robotics Institute",
    institute: "ETH Zurich",
    location: "Zurich, Switzerland",
    field: "Robotics",
    specialization: "Autonomous Systems",
    hIndex: 58,
    citations: 6890,
    avatar: "",
    rating: {
      mentorship: 4.8,
      responsiveness: 4.5,
      clarity: 4.7
    },
    openProjects: 6,
    students: 18,
    courses: ["Advanced Robotics", "Autonomous Vehicle Systems"],
    recentPapers: ["Swarm Robotics for Environmental Monitoring", "Learning-Based Control Systems"],
    nextAMA: "Dec 25, 2024",
    bio: "Robotics expert specializing in autonomous systems and swarm intelligence. Working on real-world applications in agriculture and environmental monitoring."
  },
  {
    id: 6,
    name: "Prof. Maria Rodriguez",
    title: "Professor of Climate Science",
    institute: "University of Toronto",
    location: "Toronto, Canada",
    field: "Climate Science",
    specialization: "Climate Modeling",
    hIndex: 54,
    citations: 5670,
    avatar: "",  
    rating: {
      mentorship: 4.9,
      responsiveness: 4.8,
      clarity: 4.6
    },
    openProjects: 3,
    students: 9,
    courses: ["Climate Dynamics", "Environmental Data Science"],
    recentPapers: ["ML for Extreme Weather Prediction", "Carbon Cycle Modeling"],
    nextAMA: "Dec 28, 2024",
    bio: "Climate scientist using AI and machine learning to improve weather prediction models and understand climate change impacts."
  }
];

const fields = ["All Fields", "Machine Learning", "Artificial Intelligence", "Quantum Computing", "Biotechnology", "Robotics", "Climate Science"];
const locations = ["All Locations", "USA", "UK", "Switzerland", "Canada"];

export default function ProfessorsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedField, setSelectedField] = useState('All Fields');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');

  const filteredProfessors = professors.filter(professor => {
    const matchesSearch = professor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         professor.institute.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         professor.field.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesField = selectedField === 'All Fields' || professor.field === selectedField;
    const matchesLocation = selectedLocation === 'All Locations' || professor.location.includes(selectedLocation);
    
    return matchesSearch && matchesField && matchesLocation;
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
                <Link href="/fellows" className="text-slate-300 hover:text-white">Fellows</Link>
                <Link href="/professors" className="text-purple-400 font-medium">Professors</Link>
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
          <h1 className="text-4xl font-bold text-white mb-4">Professors & Faculty</h1>
          <p className="text-xl text-slate-400">Connect with leading researchers and potential mentors</p>
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
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-6">
          <p className="text-slate-400">
            Found {filteredProfessors.length} professor{filteredProfessors.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Professors Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredProfessors.map((professor) => (
            <Card key={professor.id} className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-all duration-300">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={professor.avatar} />
                    <AvatarFallback className="bg-blue-600 text-white text-lg">
                      {professor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">{professor.name}</h3>
                    <p className="text-slate-300">{professor.title}</p>
                    <p className="text-slate-400">{professor.institute}</p>
                    <div className="flex items-center text-slate-400 text-sm mt-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      {professor.location}
                    </div>
                  </div>
                </div>

                {/* Field & Specialization */}
                <div className="mb-4">
                  <Badge className="bg-blue-100 text-blue-800 mr-2">{professor.field}</Badge>
                  <Badge variant="outline" className="border-slate-600 text-slate-300">
                    {professor.specialization}
                  </Badge>
                </div>

                {/* Bio */}
                <p className="text-slate-400 text-sm mb-6">{professor.bio}</p>

                {/* Academic Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{professor.hIndex}</div>
                    <div className="text-slate-400 text-xs">h-index</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{professor.citations.toLocaleString()}</div>
                    <div className="text-slate-400 text-xs">Citations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{professor.students}</div>
                    <div className="text-slate-400 text-xs">Students</div>
                  </div>
                </div>

                {/* Ratings */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Ratings</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">Mentorship</span>
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3 h-3 ${i < Math.floor(professor.rating.mentorship) ? 'text-yellow-500 fill-current' : 'text-slate-600'}`} />
                          ))}
                        </div>
                        <span className="text-white text-sm ml-2">{professor.rating.mentorship}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">Responsiveness</span>
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3 h-3 ${i < Math.floor(professor.rating.responsiveness) ? 'text-yellow-500 fill-current' : 'text-slate-600'}`} />
                          ))}
                        </div>
                        <span className="text-white text-sm ml-2">{professor.rating.responsiveness}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">Clarity</span>
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3 h-3 ${i < Math.floor(professor.rating.clarity) ? 'text-yellow-500 fill-current' : 'text-slate-600'}`} />
                          ))}
                        </div>
                        <span className="text-white text-sm ml-2">{professor.rating.clarity}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Current Opportunities */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-white font-semibold">Current Opportunities</h4>
                    <Badge className="bg-green-600">
                      {professor.openProjects} Open Projects
                    </Badge>
                  </div>
                  <div className="text-slate-400 text-sm">
                    Next AMA: <span className="text-blue-400">{professor.nextAMA}</span>
                  </div>
                </div>

                {/* Recent Papers */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Recent Papers</h4>
                  <div className="space-y-1">
                    {professor.recentPapers.slice(0, 2).map((paper, index) => (
                      <div key={index} className="text-slate-400 text-sm">• {paper}</div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                  <Button variant="outline" className="border-slate-600 text-slate-300">
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="border-slate-600 text-slate-300">
                    <Calendar className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredProfessors.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              Load More Professors
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}