"use client";

import { motion } from 'framer-motion';
import { Target, Brain, Users, TrendingUp, Code, Database, Smartphone, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageTransition } from '@/components/PageTransition';

const technologies = [
  { name: 'React', icon: '⚛️', description: 'Frontend framework' },
  { name: 'Next.js', icon: '▲', description: 'Full-stack framework' },
  { name: 'TailwindCSS', icon: '🎨', description: 'Styling framework' },
  { name: 'Framer Motion', icon: '🎬', description: 'Animation library' },
  { name: 'TypeScript', icon: '📘', description: 'Type safety' },
  { name: 'OpenFoodFacts API', icon: '🥫', description: 'Product database' },
  { name: 'ZXing', icon: '📱', description: 'Barcode scanning' },
  { name: 'AI/ML', icon: '🧠', description: 'Recommendation engine' },
];

const roadmap = [
  {
    phase: 'MVP',
    title: 'Core Functionality',
    timeline: 'Q1 2025',
    features: ['Barcode scanning', 'Basic nutrition analysis', 'Allergen detection', 'Profile management'],
    status: 'current'
  },
  {
    phase: 'V2',
    title: 'Enhanced Features',
    timeline: 'Q2 2025',
    features: ['AI recommendations', 'OCR label scanning', 'Shopping lists', 'Meal planning'],
    status: 'planned'
  },
  {
    phase: 'V3',
    title: 'Advanced Platform',
    timeline: 'Q3-Q4 2025',
    features: ['Healthcare integration', 'Social features', 'IoT connectivity', 'Global expansion'],
    status: 'future'
  }
];

const marketStats = [
  { label: 'Global Nutrition Apps Market', value: '$4.2B', growth: '+15.3% CAGR' },
  { label: 'Food Allergy Population', value: '32M', growth: 'US alone' },
  { label: 'Health-Conscious Consumers', value: '73%', growth: 'Read labels' },
  { label: 'Mobile Health Users', value: '1.7B', growth: 'Worldwide' }
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 gradient-green rounded-2xl mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">About Our Project</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Revolutionizing food choice decision-making through intelligent scanning and personalized nutrition insights
            </p>
          </motion.div>

          {/* Abstract & Problem Statement */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="glass-card border-0 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="w-5 h-5" />
                    <span>Problem Statement</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Food allergies and dietary restrictions affect millions of people worldwide, yet making informed food choices remains challenging due to:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Complex ingredient lists and unclear labeling</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Hidden allergens in processed foods</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Lack of personalized nutrition guidance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Time-consuming manual research</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="glass-card border-0 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Brain className="w-5 h-5" />
                    <span>Our Solution</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    The Personalized Food Insight Scanner leverages modern technology to provide instant, personalized nutrition analysis:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>AI-powered barcode scanning with real-time analysis</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Personalized allergen detection and warnings</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Smart recommendations based on health goals</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Comprehensive nutrition scoring system</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Market Research */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Market Research</h2>
              <p className="text-lg text-muted-foreground">
                The growing demand for personalized nutrition solutions
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {marketStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Card className="glass-card border-0 text-center p-6">
                    <h3 className="text-3xl font-bold gradient-green bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-sm font-medium mb-1">{stat.label}</p>
                    <Badge variant="outline" className="text-xs">
                      {stat.growth}
                    </Badge>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Technology Stack */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Technologies Used</h2>
              <p className="text-lg text-muted-foreground">
                Built with modern, scalable technologies
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="glass-card border-0 text-center p-6 cursor-pointer">
                    <div className="text-3xl mb-3">{tech.icon}</div>
                    <h3 className="font-bold mb-2">{tech.name}</h3>
                    <p className="text-xs text-muted-foreground">{tech.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Roadmap */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Development Roadmap</h2>
              <p className="text-lg text-muted-foreground">
                Our journey from concept to comprehensive platform
              </p>
            </div>
            <div className="space-y-8">
              {roadmap.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <Card className={`glass-card border-0 ${
                    phase.status === 'current' ? 'ring-2 ring-primary' : ''
                  }`}>
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <Badge 
                              variant={phase.status === 'current' ? 'default' : 'outline'}
                              className={phase.status === 'current' ? 'gradient-green text-white' : ''}
                            >
                              {phase.phase}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{phase.timeline}</span>
                          </div>
                          <h3 className="text-xl font-bold">{phase.title}</h3>
                        </div>
                        <Badge 
                          variant={
                            phase.status === 'current' ? 'default' :
                            phase.status === 'planned' ? 'secondary' : 'outline'
                          }
                        >
                          {phase.status}
                        </Badge>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        {phase.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full ${
                              phase.status === 'current' ? 'bg-primary' :
                              phase.status === 'planned' ? 'bg-yellow-500' : 'bg-gray-300'
                            }`}></div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </PageTransition>
  );
}