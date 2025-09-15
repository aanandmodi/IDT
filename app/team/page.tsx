"use client";

import { motion } from 'framer-motion';
import { Users, Github, Linkedin, Mail, Award, Code, Brain, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageTransition } from '@/components/PageTransition';

const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'Lead Developer & Project Manager',
    bio: 'Full-stack developer with expertise in React, Node.js, and machine learning. Passionate about creating user-centric health applications.',
    skills: ['React', 'Node.js', 'TypeScript', 'Machine Learning', 'Project Management'],
    image: 'https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=300',
    social: {
      github: '#',
      linkedin: '#',
      email: 'alex.chen@foodscan.app'
    },
    icon: Code,
    color: 'from-blue-400 to-blue-600'
  },
  {
    name: 'Sarah Williams',
    role: 'UX/UI Designer',
    bio: 'Creative designer focused on accessibility and user experience. Specializes in creating intuitive interfaces for health and wellness apps.',
    skills: ['UI/UX Design', 'Figma', 'User Research', 'Accessibility', 'Design Systems'],
    image: 'https://images.pexels.com/photos/4307875/pexels-photo-4307875.jpeg?auto=compress&cs=tinysrgb&w=300',
    social: {
      github: '#',
      linkedin: '#',
      email: 'sarah.williams@foodscan.app'
    },
    icon: Palette,
    color: 'from-purple-400 to-pink-600'
  },
  {
    name: 'Dr. Michael Rodriguez',
    role: 'Nutrition Research Specialist',
    bio: 'PhD in Nutritional Science with 10+ years of experience in dietary research. Ensures scientific accuracy in nutrition analysis algorithms.',
    skills: ['Nutritional Science', 'Data Analysis', 'Research', 'Algorithm Design', 'Health Policy'],
    image: 'https://images.pexels.com/photos/4307901/pexels-photo-4307901.jpeg?auto=compress&cs=tinysrgb&w=300',
    social: {
      github: '#',
      linkedin: '#',
      email: 'michael.rodriguez@foodscan.app'
    },
    icon: Brain,
    color: 'from-green-400 to-emerald-600'
  },
  {
    name: 'Emily Zhang',
    role: 'Backend Developer',
    bio: 'Backend specialist with expertise in API development, database optimization, and cloud infrastructure. Ensures scalable and secure systems.',
    skills: ['Python', 'PostgreSQL', 'AWS', 'API Development', 'DevOps'],
    image: 'https://images.pexels.com/photos/4307884/pexels-photo-4307884.jpeg?auto=compress&cs=tinysrgb&w=300',
    social: {
      github: '#',
      linkedin: '#',
      email: 'emily.zhang@foodscan.app'
    },
    icon: Code,
    color: 'from-orange-400 to-red-600'
  }
];

const achievements = [
  {
    title: 'Best Innovation Award',
    description: 'University Tech Showcase 2024',
    icon: Award
  },
  {
    title: 'Featured Project',
    description: 'Health Tech Conference 2024',
    icon: Award
  },
  {
    title: 'Open Source Contribution',
    description: '500+ GitHub stars',
    icon: Github
  }
];

export default function TeamPage() {
  return (
    <PageTransition>
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 gradient-green rounded-2xl mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate group of developers, designers, and nutrition experts dedicated to making healthy eating accessible
            </p>
          </motion.div>

          {/* Team Members */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <Card className="glass-card border-0 h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className="relative">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-24 h-24 rounded-2xl object-cover"
                          />
                          <div className={`absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-gradient-to-r ${member.color} flex items-center justify-center`}>
                            <member.icon className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                          <p className="text-primary font-medium mb-3">{member.role}</p>
                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                            {member.bio}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {member.skills.map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="icon" className="w-8 h-8">
                              <Github className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="w-8 h-8">
                              <Linkedin className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="w-8 h-8">
                              <Mail className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Achievements */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Team Achievements</h2>
              <p className="text-lg text-muted-foreground">
                Recognition and milestones we've achieved together
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="glass-card border-0 text-center p-6 h-full">
                    <div className="w-16 h-16 gradient-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground text-sm">{achievement.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <Card className="glass-card border-0 text-center p-12 bg-gradient-to-r from-emerald-50/50 to-teal-50/50 dark:from-gray-800/50 dark:to-gray-900/50">
              <h2 className="text-3xl font-bold mb-6">Want to Join Us?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for health technology and making a positive impact.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="gradient-green text-white hover:scale-105 transition-all">
                  <Mail className="w-5 h-5 mr-2" />
                  Get in Touch
                </Button>
                <Button variant="outline" size="lg" className="hover:scale-105 transition-all">
                  <Github className="w-5 h-5 mr-2" />
                  View Our Work
                </Button>
              </div>
            </Card>
          </motion.section>
        </div>
      </div>
    </PageTransition>
  );
}