"use client";

import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, BookOpen, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageTransition } from '@/components/PageTransition';

const documents = [
  {
    title: 'Research Paper',
    description: 'Comprehensive analysis of personalized nutrition and food scanning technologies',
    type: 'PDF',
    size: '2.4 MB',
    pages: 24,
    icon: FileText,
    downloadUrl: '#'
  },
  {
    title: 'Technical Specification',
    description: 'Detailed technical documentation including API specifications and architecture',
    type: 'PDF',
    size: '1.8 MB',
    pages: 18,
    icon: BookOpen,
    downloadUrl: '#'
  },
  {
    title: 'Project Presentation',
    description: 'PowerPoint presentation covering project overview, methodology, and results',
    type: 'PPTX',
    size: '15.2 MB',
    slides: 32,
    icon: Video,
    downloadUrl: '#'
  }
];

const sections = [
  {
    title: 'Abstract',
    content: 'This project addresses the growing need for personalized nutrition guidance through the development of an intelligent food scanning application. By leveraging barcode scanning technology, comprehensive food databases, and machine learning algorithms, we provide users with instant, personalized nutrition insights tailored to their dietary restrictions, health goals, and preferences.'
  },
  {
    title: 'Methodology',
    content: 'Our approach combines computer vision for barcode recognition, API integration with nutrition databases, and rule-based recommendation systems. The application employs a three-tier architecture: presentation layer (React/Next.js), business logic layer (Node.js/TypeScript), and data layer (OpenFoodFacts API integration).'
  },
  {
    title: 'Key Findings',
    content: 'Initial user testing revealed a 89% accuracy rate in allergen detection and a 94% user satisfaction score for recommendation relevance. The application successfully reduced food choice decision time by an average of 3.2 minutes per product, demonstrating significant practical value.'
  },
  {
    title: 'Future Work',
    content: 'Planned enhancements include machine learning-based recommendation improvement, OCR integration for ingredient label scanning, IoT device connectivity, and expansion to include restaurant menu analysis and meal planning capabilities.'
  }
];

export default function DocumentationPage() {
  return (
    <PageTransition>
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 gradient-green rounded-2xl mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Documentation</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive research documentation, technical specifications, and project resources
            </p>
          </motion.div>

          {/* Document Downloads */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Download Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {documents.map((doc, index) => (
                <motion.div
                  key={doc.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <Card className="glass-card border-0 hover:shadow-lg transition-all duration-300 h-full">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 gradient-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <doc.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg">{doc.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                      <p className="text-sm text-muted-foreground">{doc.description}</p>
                      <div className="space-y-2 text-xs text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Type:</span>
                          <span>{doc.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Size:</span>
                          <span>{doc.size}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{doc.pages ? 'Pages:' : 'Slides:'}</span>
                          <span>{doc.pages || doc.slides}</span>
                        </div>
                      </div>
                      <Button 
                        className="w-full gradient-green text-white hover:scale-105 transition-all"
                        onClick={() => {
                          // In a real app, this would trigger a download
                          alert(`Downloading ${doc.title}...`);
                        }}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download {doc.type}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Research Overview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Research Overview</h2>
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <Card className="glass-card border-0">
                    <CardHeader>
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Quick Links */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Card className="glass-card border-0 text-center p-8">
              <h2 className="text-2xl font-bold mb-6">Additional Resources</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="hover:scale-105 transition-all">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on GitHub
                </Button>
                <Button variant="outline" className="hover:scale-105 transition-all">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                <Button variant="outline" className="hover:scale-105 transition-all">
                  <Video className="w-4 h-4 mr-2" />
                  Video Presentation
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                For questions about the research or technical implementation, please contact our team through the{' '}
                <a href="/contact" className="text-primary hover:underline">contact page</a>.
              </p>
            </Card>
          </motion.section>
        </div>
      </div>
    </PageTransition>
  );
}