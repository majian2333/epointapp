import React from 'react';
import Header from './Header';
import BottomNav from './BottomNav';
import { Page } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

export default function Layout({ children, currentPage, onPageChange }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#f6f9ff] text-[#151c22] font-sans">
      <Header />
      <main className="pt-[60px] pb-[80px] max-w-7xl mx-auto">
        {children}
      </main>
      <BottomNav currentPage={currentPage} onPageChange={onPageChange} />
      
      {/* Floating Action Button for Help */}
      <div className="fixed bottom-24 right-6 z-40">
        <button className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0048c8] to-[#0d5efa] flex items-center justify-center text-white shadow-xl shadow-blue-500/30 active:scale-95 transition-all">
          <svg className="w-6 h-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
