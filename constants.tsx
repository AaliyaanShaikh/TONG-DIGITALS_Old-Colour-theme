
import React from 'react';
import { Zap, Target, Globe, BarChart3, Palette, MessageSquare } from 'lucide-react';

export const SERVICES = [
  {
    id: '1',
    title: 'Brand Identity',
    description: 'Crafting unique visual languages that resonate with your target audience and stand the test of time.',
    icon: <Palette className="w-8 h-8 text-purple-500" />
  },
  {
    id: '2',
    title: 'Digital Strategy',
    description: 'Data-driven roadmaps designed to scale your business and dominate your market niche.',
    icon: <Target className="w-8 h-8 text-purple-500" />
  },
  {
    id: '3',
    title: 'Performance Marketing',
    description: 'Highly optimized ad campaigns that convert clicks into loyal brand advocates.',
    icon: <Zap className="w-8 h-8 text-purple-500" />
  },
  {
    id: '4',
    title: 'SEO & Content',
    description: 'Increasing organic visibility through strategic content that tells a compelling story.',
    icon: <Globe className="w-8 h-8 text-purple-500" />
  },
  {
    id: '5',
    title: 'Data Analytics',
    description: 'Transforming complex data into actionable insights for smarter business decisions.',
    icon: <BarChart3 className="w-8 h-8 text-purple-500" />
  },
  {
    id: '6',
    title: 'Public Relations',
    description: 'Managing your public image and building high-trust relationships with key stakeholders.',
    icon: <MessageSquare className="w-8 h-8 text-purple-500" />
  }
];

export const PORTFOLIO = [
  {
    id: '1',
    title: 'Lumina Tech Rebranding',
    category: 'Visual Design',
    imageUrl: 'https://picsum.photos/seed/lumina/800/600'
  },
  {
    id: '2',
    title: 'Vortex Crypto Platform',
    category: 'Digital Strategy',
    imageUrl: 'https://picsum.photos/seed/vortex/800/600'
  },
  {
    id: '3',
    title: 'Oceanic Sustainable Goods',
    category: 'Content Marketing',
    imageUrl: 'https://picsum.photos/seed/ocean/800/600'
  }
];
