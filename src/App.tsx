/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { ProfileGrid } from './components/sections/ProfileGrid';
import { VisionGrid } from './components/sections/VisionGrid';
import { AchievementTimeline } from './components/sections/AchievementTimeline';
import { Gallery } from './components/sections/Gallery';
import { Connect } from './components/sections/Connect';
import profileData from './data/profile.json';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero 
          name={profileData.hero.name} 
          titles={profileData.hero.titles} 
          image={profileData.hero.image} 
        />
        
        <ProfileGrid items={profileData.profile} />
        
        <VisionGrid items={profileData.vision} />
        
        <AchievementTimeline items={profileData.achievements} />
        
        <Gallery />
        
        <Connect 
          email={profileData.contact.email} 
          phone={profileData.contact.phone} 
        />
      </main>

      <footer className="py-12 bg-[#015830] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div>
              <p className="text-xl font-bold tracking-tighter">
                Ing. Carmen Gabriel Avle
              </p>
              <p className="text-slate-400 text-sm mt-1">© 2026 Ing. Carmen Gabriel Avle. All rights reserved.</p>
            </div>
            <div className="flex space-x-8 text-sm font-medium text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/admin/" className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all">CMS Admin</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
