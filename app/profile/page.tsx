"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, AlertTriangle, Target, Utensils, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { PageTransition } from '@/components/PageTransition';
import { toast } from 'sonner';
import Link from 'next/link';

const allergies = [
  { id: 'nuts', label: 'Nuts', icon: '🌰' },
  { id: 'dairy', label: 'Dairy', icon: '🥛' },
  { id: 'gluten', label: 'Gluten', icon: '🌾' },
  { id: 'eggs', label: 'Eggs', icon: '🥚' },
  { id: 'soy', label: 'Soy', icon: '🫘' },
  { id: 'shellfish', label: 'Shellfish', icon: '🦐' },
  { id: 'fish', label: 'Fish', icon: '🐟' },
  { id: 'sesame', label: 'Sesame', icon: '🫘' },
];

const healthGoals = [
  { value: 'weight-loss', label: '🏃‍♂️ Weight Loss' },
  { value: 'muscle-gain', label: '💪 Muscle Gain' },
  { value: 'maintenance', label: '🥗 Maintenance' },
  { value: 'heart-health', label: '❤️ Heart Health' },
  { value: 'diabetes', label: '🩺 Diabetes Management' },
];

const dietaryPreferences = [
  { value: 'omnivore', label: '🍖 Omnivore' },
  { value: 'vegetarian', label: '🥬 Vegetarian' },
  { value: 'vegan', label: '🌱 Vegan' },
  { value: 'keto', label: '🥑 Keto' },
  { value: 'paleo', label: '🦴 Paleo' },
  { value: 'mediterranean', label: '🫒 Mediterranean' },
];

export default function ProfilePage() {
  const [name, setName] = useState('');
  const [selectedAllergies, setSelectedAllergies] = useState<string[]>([]);
  const [healthGoal, setHealthGoal] = useState('');
  const [dietaryPreference, setDietaryPreference] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Load saved profile data
    const savedProfile = localStorage.getItem('foodScanProfile');
    if (savedProfile) {
      const profile = JSON.parse(savedProfile);
      setName(profile.name || '');
      setSelectedAllergies(profile.allergies || []);
      setHealthGoal(profile.healthGoal || '');
      setDietaryPreference(profile.dietaryPreference || '');
    }
  }, []);

  const toggleAllergy = (allergyId: string) => {
    setSelectedAllergies(prev =>
      prev.includes(allergyId)
        ? prev.filter(id => id !== allergyId)
        : [...prev, allergyId]
    );
  };

  const handleSave = () => {
    if (!name.trim()) {
      toast.error('Please enter your name');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const profile = {
        name: name.trim(),
        allergies: selectedAllergies,
        healthGoal,
        dietaryPreference,
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem('foodScanProfile', JSON.stringify(profile));
      toast.success('Profile saved successfully!');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 gradient-green rounded-2xl mb-6">
              <User className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Create Your Profile</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Tell us about yourself to get personalized nutrition insights
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <div className="w-8 h-8 gradient-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">1</span>
              </div>
              <span>Step 1 of 3</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="w-5 h-5" />
                    <span>Basic Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label>Health Goal</Label>
                    <Select value={healthGoal} onValueChange={setHealthGoal}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select your health goal" />
                      </SelectTrigger>
                      <SelectContent>
                        {healthGoals.map((goal) => (
                          <SelectItem key={goal.value} value={goal.value}>
                            {goal.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Dietary Preference</Label>
                    <Select value={dietaryPreference} onValueChange={setDietaryPreference}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select your dietary preference" />
                      </SelectTrigger>
                      <SelectContent>
                        {dietaryPreferences.map((pref) => (
                          <SelectItem key={pref.value} value={pref.value}>
                            {pref.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Allergies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5" />
                    <span>Allergies & Restrictions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Select all that apply to you:
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {allergies.map((allergy) => (
                      <motion.div
                        key={allergy.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Badge
                          variant={selectedAllergies.includes(allergy.id) ? "default" : "outline"}
                          className={`w-full p-3 cursor-pointer justify-start text-sm ${
                            selectedAllergies.includes(allergy.id)
                              ? 'gradient-green text-white'
                              : 'hover:bg-accent'
                          }`}
                          onClick={() => toggleAllergy(allergy.id)}
                        >
                          <span className="mr-2 text-lg">{allergy.icon}</span>
                          {allergy.label}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="space-y-4">
              <Button
                size="lg"
                onClick={handleSave}
                disabled={isLoading}
                className="gradient-green text-white hover:scale-105 transition-all px-8 py-6 rounded-2xl"
              >
                {isLoading ? 'Saving Profile...' : 'Save Profile'}
              </Button>
              
              {name && (
                <div className="mt-6">
                  <Link href="/scan">
                    <Button variant="outline" size="lg" className="px-8 py-6 rounded-2xl">
                      Continue to Scanning <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}