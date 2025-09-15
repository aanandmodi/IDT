"use client";

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Camera, Keyboard, Upload, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageTransition } from '@/components/PageTransition';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { toast } from 'sonner';
import { BrowserMultiFormatReader } from '@zxing/browser';
import { useRouter } from 'next/navigation';

export default function ScanPage() {
  const [selectedMethod, setSelectedMethod] = useState<'camera' | 'manual' | 'upload' | null>(null);
  const [manualBarcode, setManualBarcode] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const codeReader = useRef<BrowserMultiFormatReader | null>(null);
  const router = useRouter();

  useEffect(() => {
    return () => {
      if (codeReader.current) {
        codeReader.current.reset();
      }
    };
  }, []);

  const startCameraScanning = async () => {
    setIsScanning(true);
    setSelectedMethod('camera');
    
    try {
      codeReader.current = new BrowserMultiFormatReader();
      
      const videoInputDevices = await codeReader.current.listVideoInputDevices();
      if (videoInputDevices.length === 0) {
        toast.error('No camera found');
        setIsScanning(false);
        return;
      }

      const selectedDeviceId = videoInputDevices[0].deviceId;

      codeReader.current.decodeFromVideoDevice(
        selectedDeviceId,
        videoRef.current!,
        (result, err) => {
          if (result) {
            const barcode = result.getText();
            toast.success(`Barcode detected: ${barcode}`);
            handleProductLookup(barcode);
          }
          if (err && !(err.name === 'NotFoundException')) {
            console.error(err);
          }
        }
      );
    } catch (error) {
      console.error('Camera error:', error);
      toast.error('Unable to access camera');
      setIsScanning(false);
    }
  };

  const stopScanning = () => {
    if (codeReader.current) {
      codeReader.current.reset();
    }
    setIsScanning(false);
    setSelectedMethod(null);
  };

  const handleManualSubmit = () => {
    if (!manualBarcode.trim()) {
      toast.error('Please enter a barcode');
      return;
    }
    handleProductLookup(manualBarcode.trim());
  };

  const handleProductLookup = async (barcode: string) => {
    setIsLoading(true);
    
    // Simulate API call to product database
    setTimeout(() => {
      // Store barcode in localStorage for results page
      localStorage.setItem('scannedBarcode', barcode);
      router.push('/results');
    }, 2000);
  };

  const scanningMethods = [
    {
      id: 'camera',
      icon: Camera,
      title: 'Scan Barcode',
      description: 'Use your camera to scan product barcodes',
      color: 'from-blue-400 to-blue-600',
      action: startCameraScanning
    },
    {
      id: 'manual',
      icon: Keyboard,
      title: 'Manual Input',
      description: 'Enter barcode number manually',
      color: 'from-emerald-400 to-green-600',
      action: () => setSelectedMethod('manual')
    },
    {
      id: 'upload',
      icon: Upload,
      title: 'Upload Label',
      description: 'Upload product label image (Coming Soon)',
      color: 'from-purple-400 to-purple-600',
      action: () => toast.info('Image upload feature coming soon!')
    }
  ];

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
              <Camera className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Scan Your Product</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose your preferred method to analyze the product
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-bold text-xs">1</span>
              </div>
              <div className="w-8 h-8 gradient-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">2</span>
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-bold text-xs">3</span>
              </div>
              <span>Step 2 of 3</span>
            </div>
          </motion.div>

          {!selectedMethod && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {scanningMethods.map((method, index) => (
                <motion.div
                  key={method.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card 
                    className="glass-card border-0 cursor-pointer hover:shadow-lg transition-all duration-300"
                    onClick={method.action}
                  >
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center mx-auto mb-6`}>
                        <method.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{method.title}</h3>
                      <p className="text-muted-foreground">{method.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}

          {selectedMethod === 'camera' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto"
            >
              <Card className="glass-card border-0">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Camera className="w-5 h-5" />
                    <span>Camera Scanner</span>
                  </CardTitle>
                  <Button variant="ghost" size="icon" onClick={stopScanning}>
                    <X className="w-5 h-5" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      className="w-full h-64 bg-black rounded-lg object-cover"
                    />
                    <div className="absolute inset-0 border-2 border-dashed border-white/50 rounded-lg m-8 flex items-center justify-center">
                      <div className="w-48 h-24 border-2 border-primary rounded-lg"></div>
                    </div>
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Position the barcode within the scanning area
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {selectedMethod === 'manual' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto"
            >
              <Card className="glass-card border-0">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Keyboard className="w-5 h-5" />
                    <span>Manual Input</span>
                  </CardTitle>
                  <Button variant="ghost" size="icon" onClick={() => setSelectedMethod(null)}>
                    <X className="w-5 h-5" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Enter Barcode Number
                    </label>
                    <Input
                      value={manualBarcode}
                      onChange={(e) => setManualBarcode(e.target.value)}
                      placeholder="e.g., 0123456789012"
                      className="text-lg"
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      Usually found below the barcode stripes (12-13 digits)
                    </p>
                  </div>
                  
                  <Button
                    onClick={handleManualSubmit}
                    disabled={!manualBarcode.trim() || isLoading}
                    className="w-full gradient-green text-white hover:scale-105 transition-all py-6 rounded-2xl"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <LoadingSpinner size="small" />
                        <span>Analyzing Product...</span>
                      </div>
                    ) : (
                      <>
                        Check Product <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            >
              <Card className="glass-card border-0 p-8 text-center max-w-sm mx-4">
                <LoadingSpinner size="large" />
                <h3 className="text-xl font-semibold mt-4 mb-2">Analyzing Product</h3>
                <p className="text-muted-foreground text-sm">
                  Fetching nutrition data and checking against your profile...
                </p>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}