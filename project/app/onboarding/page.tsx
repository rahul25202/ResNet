'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Brain, Users, BookOpen, Award, Plus, X, ArrowRight, ArrowLeft, Upload, User, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const researchFields = [
  "Machine Learning", "Artificial Intelligence", "Computer Vision", "Natural Language Processing",
  "Robotics", "Data Science", "Cybersecurity", "Software Engineering", "Human-Computer Interaction",
  "Quantum Computing", "Bioinformatics", "Computational Biology", "Materials Science", "Physics",
  "Chemistry", "Mathematics", "Statistics", "Economics", "Psychology", "Neuroscience",
  "Medicine", "Biotechnology", "Environmental Science", "Renewable Energy", "Climate Science"
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState<'fellow' | 'professor' | null>(null);
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [profile, setProfile] = useState({
    name: '',
    bio: '',
    institute: '',
    scholarId: '',
    scopusId: '',
    publications: [''],
    researchGoals: ''
  });

  const searchParams = useSearchParams();
  
  useEffect(() => {
    const role = searchParams.get('role') as 'fellow' | 'professor';
    if (role) {
      setSelectedRole(role);
      setCurrentStep(2);
    }
  }, [searchParams]);

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const handleFieldToggle = (field: string) => {
    setSelectedFields(prev => 
      prev.includes(field) 
        ? prev.filter(f => f !== field)
        : [...prev, field]
    );
  };

  const addPublication = () => {
    setProfile(prev => ({
      ...prev,
      publications: [...prev.publications, '']
    }));
  };

  const updatePublication = (index: number, value: string) => {
    setProfile(prev => ({
      ...prev,
      publications: prev.publications.map((pub, i) => i === index ? value : pub)
    }));
  };

  const removePublication = (index: number) => {
    setProfile(prev => ({
      ...prev,
      publications: prev.publications.filter((_, i) => i !== index)
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      window.location.href = '/dashboard';
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">ResNet</span>
          </Link>
          <div className="text-sm text-slate-400">
            Step {currentStep} of {totalSteps}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="px-6 mb-8">
          <Progress value={progress} className="h-2 bg-slate-800" />
        </div>

        {/* Content */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="w-full max-w-2xl">
            {/* Step 1: Role Selection */}
            {currentStep === 1 && (
              <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl text-white mb-2">Choose Your Role</CardTitle>
                  <CardDescription className="text-slate-400 text-lg">
                    Select the role that best describes your academic position
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Button
                      variant={selectedRole === 'fellow' ? 'default' : 'outline'}
                      className={`h-auto p-6 flex flex-col items-center space-y-4 ${
                        selectedRole === 'fellow' 
                          ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white' 
                          : 'border-slate-600 text-slate-300 hover:bg-slate-800'
                      }`}
                      onClick={() => setSelectedRole('fellow')}
                    >
                      <User className="w-12 h-12" />
                      <div className="text-center">
                        <div className="font-semibold text-lg">Research Fellow</div>
                        <div className="text-sm opacity-80">PhD Students, Postdocs, Researchers</div>
                      </div>
                    </Button>

                    <Button
                      variant={selectedRole === 'professor' ? 'default' : 'outline'}
                      className={`h-auto p-6 flex flex-col items-center space-y-4 ${
                        selectedRole === 'professor' 
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white' 
                          : 'border-slate-600 text-slate-300 hover:bg-slate-800'
                      }`}
                      onClick={() => setSelectedRole('professor')}
                    >
                      <GraduationCap className="w-12 h-12" />
                      <div className="text-center">
                        <div className="font-semibold text-lg">Professor</div>
                        <div className="text-sm opacity-80">Faculty, Principal Investigators</div>
                      </div>
                    </Button>
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 h-12"
                    disabled={!selectedRole}
                    onClick={nextStep}
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Basic Information */}
            {currentStep === 2 && (
              <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl text-white mb-2">Basic Information</CardTitle>
                  <CardDescription className="text-slate-400 text-lg">
                    Tell us about yourself and your academic background
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Profile Photo */}
                  <div className="flex flex-col items-center space-y-4">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-slate-700 text-white text-lg">
                        {profile.name ? profile.name.charAt(0).toUpperCase() : 'U'}
                      </AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Photo
                    </Button>
                  </div>

                  {/* Form Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-300">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Dr. Jane Smith"
                        value={profile.name}
                        onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                        className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="institute" className="text-slate-300">Institution *</Label>
                      <Input
                        id="institute"
                        placeholder="MIT, Stanford University"
                        value={profile.institute}
                        onChange={(e) => setProfile(prev => ({ ...prev, institute: e.target.value }))}
                        className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio" className="text-slate-300">Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about your research interests and background..."
                      value={profile.bio}
                      onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                      className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 min-h-[100px]"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="scholarId" className="text-slate-300">Google Scholar ID</Label>
                      <Input
                        id="scholarId"
                        placeholder="e.g., abc123def456"
                        value={profile.scholarId}
                        onChange={(e) => setProfile(prev => ({ ...prev, scholarId: e.target.value }))}
                        className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="scopusId" className="text-slate-300">Scopus ID</Label>
                      <Input
                        id="scopusId"
                        placeholder="e.g., 12345678900"
                        value={profile.scopusId}
                        onChange={(e) => setProfile(prev => ({ ...prev, scopusId: e.target.value }))}
                        className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={prevStep} className="border-slate-600 text-slate-300">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                    <Button 
                      className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                      onClick={nextStep}
                      disabled={!profile.name || !profile.institute}
                    >
                      Continue
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Research Interests */}
            {currentStep === 3 && (
              <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl text-white mb-2">Research Interests</CardTitle>
                  <CardDescription className="text-slate-400 text-lg">
                    Select your research fields to help us make better recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-wrap gap-2 max-h-64 overflow-y-auto">
                    {researchFields.map((field) => (
                      <Badge
                        key={field}
                        variant={selectedFields.includes(field) ? "default" : "outline"}
                        className={`cursor-pointer px-3 py-2 ${
                          selectedFields.includes(field)
                            ? 'bg-purple-600 text-white hover:bg-purple-700'
                            : 'border-slate-600 text-slate-300 hover:bg-slate-800'
                        }`}
                        onClick={() => handleFieldToggle(field)}
                      >
                        {field}
                      </Badge>
                    ))}
                  </div>

                  <div className="text-center text-sm text-slate-400">
                    Selected: {selectedFields.length} field{selectedFields.length !== 1 ? 's' : ''}
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={prevStep} className="border-slate-600 text-slate-300">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                    <Button 
                      className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                      onClick={nextStep}
                      disabled={selectedFields.length === 0}
                    >
                      Continue
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Publications & Goals */}
            {currentStep === 4 && (
              <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl text-white mb-2">Publications & Goals</CardTitle>
                  <CardDescription className="text-slate-400 text-lg">
                    Share your key publications and research objectives
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Publications */}
                  <div className="space-y-4">
                    <Label className="text-slate-300">Key Publications</Label>
                    {profile.publications.map((pub, index) => (
                      <div key={index} className="flex gap-2">
                        <Input
                          placeholder="Publication title or DOI"
                          value={pub}
                          onChange={(e) => updatePublication(index, e.target.value)}
                          className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
                        />
                        {profile.publications.length > 1 && (
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => removePublication(index)}
                            className="border-slate-600 text-slate-400 hover:bg-red-900/20 hover:border-red-600 hover:text-red-400"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      onClick={addPublication}
                      className="border-slate-600 text-slate-300 hover:bg-slate-800"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Publication
                    </Button>
                  </div>

                  {/* Research Goals */}
                  <div className="space-y-2">
                    <Label htmlFor="goals" className="text-slate-300">Research Goals</Label>
                    <Textarea
                      id="goals"
                      placeholder="What are you hoping to achieve in your research? What collaborations are you seeking?"
                      value={profile.researchGoals}
                      onChange={(e) => setProfile(prev => ({ ...prev, researchGoals: e.target.value }))}
                      className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 min-h-[120px]"
                    />
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={prevStep} className="border-slate-600 text-slate-300">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                    <Button 
                      className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                      onClick={nextStep}
                    >
                      Complete Setup
                      <Award className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}