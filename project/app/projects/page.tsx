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
  Brain, Search, Target, Users, Clock, Award, 
  MapPin, Calendar, BookOpen, TrendingUp, Plus, Send
} from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "Advanced Computer Vision for Medical Imaging",
    professor: "Prof. Michael Zhang",
    institute: "Stanford University",
    field: "Machine Learning",
    type: "Research Project",
    duration: "6 months",
    timeline: "Jan 2025 - Jun 2025",
    skillsNeeded: ["Python", "PyTorch", "Computer Vision", "Medical Imaging"],
    description: "Developing novel CNN architectures for automated diagnosis of retinal diseases using OCT scans. This project involves working with large medical datasets and collaborating with ophthalmologists.",
    requirements: "PhD/Master's student in CS/EE with experience in deep learning and medical imaging. Proficiency in Python and PyTorch required.",
    deliverables: ["Research paper for top-tier conference", "Open-source implementation", "Clinical validation results"],
    stipend: "$3,000/month",
    applicants: 23,
    deadline: "Dec 25, 2024",
    status: "Open",
    difficulty: "Advanced",
    remote: true
  },
  {
    id: 2,
    title: "Quantum Machine Learning Algorithms",
    professor: "Prof. David Kim",
    institute: "Oxford University", 
    field: "Quantum Computing",
    type: "PhD Research",
    duration: "12 months",
    timeline: "Feb 2025 - Jan 2026",
    skillsNeeded: ["Quantum Computing", "Linear Algebra", "Python", "Qiskit"],
    description: "Exploring quantum advantages in machine learning through novel quantum algorithms. Focus on variational quantum eigensolvers and quantum neural networks.",
    requirements: "Strong background in quantum mechanics and linear algebra. Experience with quantum computing frameworks preferred.",
    deliverables: ["Quantum algorithm implementation", "Performance benchmarks", "Journal publication"],
    stipend: "$2,800/month",
    applicants: 15,
    deadline: "Jan 5, 2025",
    status: "Open",
    difficulty: "Expert", 
    remote: false
  },
  {
    id: 3,
    title: "Climate Change Prediction with AI",
    professor: "Prof. Maria Rodriguez",
    institute: "University of Toronto",
    field: "Climate Science",
    type: "Collaborative Project",
    duration: "9 months",
    timeline: "Mar 2025 - Nov 2025",
    skillsNeeded: ["Machine Learning", "Time Series Analysis", "Python", "Climate Modeling"],
    description: "Using advanced ML techniques to improve long-term climate predictions. Collaboration with meteorology team to validate models against real-world data.",
    requirements: "Background in ML and environmental science. Experience with time series data and statistical modeling required.",
    deliverables: ["Improved prediction model", "Validation study", "Policy recommendations"],
    stipend: "$2,500/month",
    applicants: 31,
    deadline: "Jan 15, 2025",
    status: "Open",
    difficulty: "Intermediate",
    remote: true
  },
  {
    id: 4,
    title: "Autonomous Drone Swarms for Agriculture",
    professor: "Prof. Robert Johnson",
    institute: "ETH Zurich",
    field: "Robotics",
    type: "Industry Partnership",
    duration: "8 months",
    timeline: "Jan 2025 - Aug 2025",
    skillsNeeded: ["Robotics", "ROS", "Computer Vision", "Control Systems"],
    description: "Developing coordinated drone swarms for precision agriculture. Includes field testing and collaboration with agricultural partners.",
    requirements: "Experience with robotics and autonomous systems. Knowledge of ROS and embedded systems preferred.",
    deliverables: ["Prototype drone system", "Field test results", "Commercial viability study"],
    stipend: "$3,200/month",
    applicants: 18,
    deadline: "Dec 30, 2024",
    status: "Open",
    difficulty: "Advanced",
    remote: false
  },
  {
    id: 5,
    title: "AI-Driven Drug Discovery Platform",
    professor: "Prof. Lisa Chen",
    institute: "University of Cambridge",
    field: "Biotechnology",
    type: "Research Project",
    duration: "10 months", 
    timeline: "Feb 2025 - Nov 2025",
    skillsNeeded: ["Bioinformatics", "Machine Learning", "Python", "Molecular Biology"],
    description: "Building ML models to predict drug-target interactions and optimize lead compounds. Collaboration with pharmaceutical partners for validation.",
    requirements: "Background in computational biology or bioinformatics. Experience with molecular databases and ML frameworks required.",
    deliverables: ["Prediction pipeline", "Validated drug candidates", "Research publication"],
    stipend: "$2,700/month",
    applicants: 27,
    deadline: "Jan 10, 2025",
    status: "Open",
    difficulty: "Advanced",
    remote: true
  },
  {
    id: 6,
    title: "Large Language Models for Scientific Writing",
    professor: "Prof. Sarah Williams",
    institute: "MIT",
    field: "Artificial Intelligence",
    type: "Research Project",
    duration: "7 months",
    timeline: "Jan 2025 - Jul 2025",
    skillsNeeded: ["NLP", "Transformers", "Python", "Scientific Writing"],
    description: "Developing specialized LLMs to assist researchers in writing and reviewing scientific papers. Focus on maintaining accuracy and avoiding hallucinations.",
    requirements: "Strong background in NLP and transformer architectures. Experience with large-scale model training preferred.",
    deliverables: ["Fine-tuned LLM", "Evaluation metrics", "User study results"],
    stipend: "$3,100/month",
    applicants: 42,
    deadline: "Dec 28, 2024",
    status: "Filling Fast",
    difficulty: "Expert",
    remote: true
  }
];

const fields = ["All Fields", "Machine Learning", "Artificial Intelligence", "Quantum Computing", "Biotechnology", "Robotics", "Climate Science"];
const types = ["All Types", "Research Project", "PhD Research", "Collaborative Project", "Industry Partnership"];
const difficulties = ["All Levels", "Intermediate", "Advanced", "Expert"];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedField, setSelectedField] = useState('All Fields');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All Levels');
  const [activeTab, setActiveTab] = useState('open');

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.professor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesField = selectedField === 'All Fields' || project.field === selectedField;
    const matchesType = selectedType === 'All Types' || project.type === selectedType;
    const matchesDifficulty = selectedDifficulty === 'All Levels' || project.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesField && matchesType && matchesDifficulty;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'bg-green-600';
      case 'Filling Fast': return 'bg-orange-600';
      case 'Closed': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Intermediate': return 'bg-blue-600';
      case 'Advanced': return 'bg-purple-600';
      case 'Expert': return 'bg-red-600';
      default: return 'bg-gray-600';
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
                <Link href="/projects" className="text-purple-400 font-medium">Projects</Link>
                <Link href="/calendar" className="text-slate-300 hover:text-white">Calendar</Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                <Plus className="w-4 h-4 mr-2" />
                Post Project
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
          <h1 className="text-4xl font-bold text-white mb-4">Research Projects</h1>
          <p className="text-xl text-slate-400">Discover exciting research opportunities and collaborations</p>
        </div>

        {/* Search and Filters */}
        <Card className="bg-slate-900/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                <Input
                  placeholder="Search projects by title, professor, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
                />
              </div>
              
              {/* Filters */}
              <div className="flex flex-col md:flex-row gap-4">
                <Select value={selectedField} onValueChange={setSelectedField}>
                  <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    {fields.map(field => (
                      <SelectItem key={field} value={field} className="text-white">{field}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    {types.map(type => (
                      <SelectItem key={type} value={type} className="text-white">{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                  <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    {difficulties.map(difficulty => (
                      <SelectItem key={difficulty} value={difficulty} className="text-white">{difficulty}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="flex justify-between items-center">
              <p className="text-slate-400">
                Found {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              </p>
              <TabsList className="bg-slate-800 border-slate-700">
                <TabsTrigger value="open" className="data-[state=active]:bg-purple-600">Open</TabsTrigger>
                <TabsTrigger value="trending" className="data-[state=active]:bg-purple-600">Trending</TabsTrigger>
                <TabsTrigger value="closing-soon" className="data-[state=active]:bg-purple-600">Closing Soon</TabsTrigger>
              </TabsList>
            </div>
          </Tabs>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-all duration-300">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{project.title}</h3>
                    <div className="flex items-center text-slate-400 text-sm mb-2">
                      <span>{project.professor}</span>
                      <span className="mx-2">•</span>
                      <span>{project.institute}</span>
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(project.status)} text-white`}>
                    {project.status}
                  </Badge>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-purple-100 text-purple-800">{project.field}</Badge>
                  <Badge variant="outline" className="border-slate-600 text-slate-300">{project.type}</Badge>
                  <Badge className={`${getDifficultyColor(project.difficulty)} text-white`}>
                    {project.difficulty}
                  </Badge>
                  {project.remote && (
                    <Badge className="bg-green-600 text-white">Remote</Badge>
                  )}
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                {/* Key Info */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-slate-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {project.duration}
                  </div>
                  <div className="flex items-center text-slate-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.timeline}
                  </div>
                  <div className="flex items-center text-slate-400">
                    <Users className="w-4 h-4 mr-2" />
                    {project.applicants} applicants
                  </div>
                  <div className="flex items-center text-green-400">
                    <Award className="w-4 h-4 mr-2" />
                    {project.stipend}
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="text-slate-300 text-sm font-medium mb-2">Required Skills:</div>
                  <div className="flex flex-wrap gap-1">
                    {project.skillsNeeded.slice(0, 4).map((skill, index) => (
                      <Badge key={index} variant="outline" className="border-slate-600 text-slate-300 text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {project.skillsNeeded.length > 4 && (
                      <Badge variant="outline" className="border-slate-600 text-slate-300 text-xs">
                        +{project.skillsNeeded.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center pt-4 border-t border-slate-700">
                  <div className="text-slate-400 text-sm">
                    Deadline: <span className="text-orange-400">{project.deadline}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                      View Details
                    </Button>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      <Send className="w-4 h-4 mr-2" />
                      Apply
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredProjects.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}