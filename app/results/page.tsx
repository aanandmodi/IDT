"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, AlertTriangle, CheckCircle, Heart, Save, Share2, Zap, Beef, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { PageTransition } from '@/components/PageTransition';
import { toast } from 'sonner';
import Link from 'next/link';
import Image from 'next/image';

// Mock product data
const mockProduct = {
  barcode: '0123456789012',
  name: 'Organic Whole Grain Cereal',
  brand: 'Nature\'s Best',
  image: 'https://images.pexels.com/photos/4113990/pexels-photo-4113990.jpeg?auto=compress&cs=tinysrgb&w=400',
  nutrition: {
    calories: 150,
    protein: 5,
    carbs: 30,
    fat: 2,
    fiber: 8,
    sugar: 4,
    sodium: 120
  },
  ingredients: ['Whole grain oats', 'Brown rice', 'Quinoa', 'Honey', 'Sea salt'],
  allergens: ['gluten'],
  score: 85
};

const mockAlternatives = [
  {
    name: 'Gluten-Free Oat Cereal',
    brand: 'Free & Clear',
    score: 92,
    image: 'https://images.pexels.com/photos/4113990/pexels-photo-4113990.jpeg?auto=compress&cs=tinysrgb&w=200',
    reason: 'Gluten-free and lower in sugar'
  },
  {
    name: 'Protein Power Granola',
    brand: 'Fit Life',
    score: 88,
    image: 'https://images.pexels.com/photos/4113990/pexels-photo-4113990.jpeg?auto=compress&cs=tinysrgb&w=200',
    reason: 'Higher protein content'
  }
];

export default function ResultsPage() {
  const [profile, setProfile] = useState<any>(null);
  const [barcode, setBarcode] = useState('');

  useEffect(() => {
    const savedProfile = localStorage.getItem('foodScanProfile');
    const scannedBarcode = localStorage.getItem('scannedBarcode');
    
    if (savedProfile) setProfile(JSON.parse(savedProfile));
    if (scannedBarcode) setBarcode(scannedBarcode);
  }, []);

  const hasAllergenWarning = profile?.allergies?.some((allergy: string) =>
    mockProduct.allergens.includes(allergy)
  );

  const getNutritionColor = (value: number, max: number) => {
    const percentage = (value / max) * 100;
    if (percentage < 30) return 'bg-green-500';
    if (percentage < 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const saveToLog = () => {
    const existingLog = JSON.parse(localStorage.getItem('dietLog') || '[]');
    const newEntry = {
      ...mockProduct,
      scannedAt: new Date().toISOString(),
      id: Date.now()
    };
    existingLog.push(newEntry);
    localStorage.setItem('dietLog', JSON.stringify(existingLog));
    toast.success('Product saved to your diet log!');
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-8"
          >
            <div className="flex items-center space-x-4">
              <Link href="/scan">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold">Product Analysis</h1>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-xs">1</span>
                  </div>
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-xs">2</span>
                  </div>
                  <div className="w-6 h-6 gradient-green rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">3</span>
                  </div>
                  <span>Step 3 of 3 - Complete</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon">
                <Share2 className="w-4 h-4" />
              </Button>
              <Button onClick={saveToLog} className="gradient-green text-white">
                <Save className="w-4 h-4 mr-2" />
                Save to Log
              </Button>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Product Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Main Product Card */}
              <Card className={`glass-card border-0 ${
                hasAllergenWarning 
                  ? 'ring-2 ring-red-500 bg-red-50/50 dark:bg-red-900/10' 
                  : 'ring-2 ring-green-500 bg-green-50/50 dark:bg-green-900/10'
              }`}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-6">
                    <div className="relative">
                      <Image
                        src={mockProduct.image}
                        alt={mockProduct.name}
                        width={120}
                        height={120}
                        className="rounded-lg object-cover"
                      />
                      {hasAllergenWarning ? (
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                          <AlertTriangle className="w-4 h-4 text-white" />
                        </div>
                      ) : (
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h2 className="text-2xl font-bold mb-1">{mockProduct.name}</h2>
                          <p className="text-lg text-muted-foreground mb-2">{mockProduct.brand}</p>
                          <p className="text-sm text-muted-foreground">Barcode: {mockProduct.barcode}</p>
                        </div>
                        <div className="text-right">
                          <div className={`text-3xl font-bold ${
                            mockProduct.score >= 80 ? 'text-green-600' : 
                            mockProduct.score >= 60 ? 'text-yellow-600' : 'text-red-600'
                          }`}>
                            {mockProduct.score}
                          </div>
                          <p className="text-sm text-muted-foreground">Health Score</p>
                        </div>
                      </div>

                      {hasAllergenWarning && (
                        <motion.div
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          className="bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4"
                        >
                          <div className="flex items-center space-x-2">
                            <AlertTriangle className="w-5 h-5 text-red-600" />
                            <span className="font-semibold text-red-800 dark:text-red-200">Allergen Warning</span>
                          </div>
                          <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                            This product contains ingredients you're allergic to: {
                              profile?.allergies?.filter((a: string) => mockProduct.allergens.includes(a)).join(', ')
                            }
                          </p>
                        </motion.div>
                      )}

                      {!hasAllergenWarning && (
                        <motion.div
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          className="bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-4"
                        >
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span className="font-semibold text-green-800 dark:text-green-200">Safe for You</span>
                          </div>
                          <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                            No known allergens detected based on your profile.
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Nutrition Facts */}
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5" />
                    <span>Nutrition Facts</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                      { label: 'Calories', value: mockProduct.nutrition.calories, unit: 'kcal', max: 400, icon: Zap },
                      { label: 'Protein', value: mockProduct.nutrition.protein, unit: 'g', max: 20, icon: Beef },
                      { label: 'Carbs', value: mockProduct.nutrition.carbs, unit: 'g', max: 60, icon: '🌾' },
                      { label: 'Fat', value: mockProduct.nutrition.fat, unit: 'g', max: 20, icon: '🥑' },
                      { label: 'Fiber', value: mockProduct.nutrition.fiber, unit: 'g', max: 15, icon: '🥬' },
                      { label: 'Sugar', value: mockProduct.nutrition.sugar, unit: 'g', max: 20, icon: '🍯' },
                      { label: 'Sodium', value: mockProduct.nutrition.sodium, unit: 'mg', max: 800, icon: '🧂' }
                    ].map((nutrient) => (
                      <div key={nutrient.label} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium flex items-center space-x-1">
                            {typeof nutrient.icon === 'string' ? (
                              <span>{nutrient.icon}</span>
                            ) : (
                              <nutrient.icon className="w-4 h-4" />
                            )}
                            <span>{nutrient.label}</span>
                          </span>
                          <span className="text-sm font-bold">
                            {nutrient.value}{nutrient.unit}
                          </span>
                        </div>
                        <Progress 
                          value={(nutrient.value / nutrient.max) * 100} 
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Ingredients */}
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle>Ingredients</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {mockProduct.ingredients.map((ingredient, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {ingredient}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recommendations Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* Profile Match */}
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="w-5 h-5" />
                    <span>Profile Match</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {profile && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Health Goal</span>
                        <Badge variant="outline">{profile.healthGoal}</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Diet</span>
                        <Badge variant="outline">{profile.dietaryPreference}</Badge>
                      </div>
                      <div>
                        <span className="text-sm block mb-2">Allergies</span>
                        <div className="flex flex-wrap gap-1">
                          {profile.allergies?.map((allergy: string) => (
                            <Badge 
                              key={allergy} 
                              variant={mockProduct.allergens.includes(allergy) ? "destructive" : "secondary"}
                              className="text-xs"
                            >
                              {allergy}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Alternatives */}
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle>Better Alternatives</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockAlternatives.map((alt, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-accent/50 hover:bg-accent/70 transition-colors cursor-pointer"
                    >
                      <Image
                        src={alt.image}
                        alt={alt.name}
                        width={40}
                        height={40}
                        className="rounded object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm truncate">{alt.name}</h4>
                        <p className="text-xs text-muted-foreground">{alt.brand}</p>
                        <p className="text-xs text-primary mt-1">{alt.reason}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-muted-foreground">Score</span>
                          <span className="text-sm font-bold text-green-600">{alt.score}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}