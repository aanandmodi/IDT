"use client";

import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card border-t border-white/20 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold gradient-green bg-clip-text text-transparent">
              Personalized Food Insight Scanner
            </h3>
            <p className="text-muted-foreground">
              Scan. Understand. Eat Smart.
            </p>
            <p className="text-sm text-muted-foreground">
              Making nutrition information accessible to everyone.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="/documentation" className="text-muted-foreground hover:text-primary transition-colors">Documentation</a>
              <a href="/team" className="text-muted-foreground hover:text-primary transition-colors">Team</a>
              <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-lg glass-button hover:scale-110 transition-all">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg glass-button hover:scale-110 transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg glass-button hover:scale-110 transition-all">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500" /> for IDT Project | Conference 2025
          </p>
        </div>
      </div>
    </motion.footer>
  );
}