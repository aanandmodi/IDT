"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Scan, Shield, TrendingUp, Users, CheckCircle, Camera, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PageTransition } from '@/components/PageTransition';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const steps = [
  {
    icon: Users,
    title: "Create Profile",
    description: "Set up your dietary preferences, allergies, and health goals"
  },
  {
    icon: Scan,
    title: "Scan Product",
    description: "Use our barcode scanner or manual input to analyze products"
  },
  {
    icon: BarChart3,
    title: "Get Insights",
    description: "Receive personalized nutrition analysis and recommendations"
  }
];

const benefits = [
  {
    icon: Shield,
    title: "Allergy Protection",
    description: "Instantly detect allergens in products to keep you safe",
    color: "from-red-400 to-pink-500"
  },
  {
    icon: TrendingUp,
    title: "Health Optimization",
    description: "Make informed choices aligned with your health goals",
    color: "from-emerald-400 to-teal-500"
  },
  {
    icon: CheckCircle,
    title: "Smart Recommendations",
    description: "Discover healthier alternatives tailored to your preferences",
    color: "from-blue-400 to-indigo-500"
  }
];

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 gradient-light dark:from-gray-900 dark:to-black"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 gradient-green rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 gradient-green rounded-2xl mb-6">
                <Camera className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-green bg-clip-text text-transparent">
                  Personalized
                </span>
                <br />
                Food Insight Scanner
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Scan. Understand. Eat Smart.
              </p>
              <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
                Transform your shopping experience with AI-powered nutrition analysis. 
                Get instant insights about allergens, health impacts, and personalized recommendations.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link href="/profile">
                <Button size="lg" className="gradient-green text-white hover:scale-105 transition-all text-lg px-8 py-6 rounded-2xl">
                  Start Scanning <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Why This Project Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-6">
                Why This Project?
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Food allergies affect millions worldwide, and making informed dietary choices is increasingly complex. 
                Our solution bridges the gap between complex nutrition data and everyday shopping decisions.
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div key={benefit.title} variants={itemVariants}>
                  <Card className="glass-card hover:scale-105 transition-all duration-300 border-0 h-full">
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mx-auto mb-6`}>
                        <benefit.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 bg-gradient-to-r from-emerald-50/50 to-teal-50/50 dark:from-gray-800/50 dark:to-gray-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-6">
                How It Works
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-muted-foreground">
                Three simple steps to smarter eating
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {steps.map((step, index) => (
                <motion.div key={step.title} variants={itemVariants}>
                  <Card className="glass-card border-0 relative overflow-hidden">
                    <CardContent className="p-8 text-center">
                      <div className="absolute top-4 right-4 w-8 h-8 gradient-green rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <div className="w-16 h-16 gradient-green rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Impact & Benefits Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl font-bold mb-6">Impact & Benefits</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">For Consumers</h3>
                      <p className="text-muted-foreground">
                        Empowers individuals to make informed food choices based on their unique dietary needs and health goals.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">For Healthcare</h3>
                      <p className="text-muted-foreground">
                        Supports healthcare professionals with data-driven insights for better patient dietary counseling.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">For Society</h3>
                      <p className="text-muted-foreground">
                        Contributes to public health by promoting nutrition awareness and reducing food-related health issues.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="glass-card border-0 p-6 text-center">
                    <h3 className="text-3xl font-bold gradient-green bg-clip-text text-transparent mb-2">32M</h3>
                    <p className="text-sm text-muted-foreground">Americans with food allergies</p>
                  </Card>
                  <Card className="glass-card border-0 p-6 text-center">
                    <h3 className="text-3xl font-bold gradient-green bg-clip-text text-transparent mb-2">$25B</h3>
                    <p className="text-sm text-muted-foreground">Annual food allergy costs</p>
                  </Card>
                  <Card className="glass-card border-0 p-6 text-center">
                    <h3 className="text-3xl font-bold gradient-green bg-clip-text text-transparent mb-2">73%</h3>
                    <p className="text-sm text-muted-foreground">Want better nutrition info</p>
                  </Card>
                  <Card className="glass-card border-0 p-6 text-center">
                    <h3 className="text-3xl font-bold gradient-green bg-clip-text text-transparent mb-2">89%</h3>
                    <p className="text-sm text-muted-foreground">Read food labels</p>
                  </Card>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}