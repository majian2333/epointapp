import { Home, Gavel, Cpu, FileText, User } from 'lucide-react';
import { Page } from '../types';
import { cn } from '../lib/utils';

interface BottomNavProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

export default function BottomNav({ currentPage, onPageChange }: BottomNavProps) {
  const navItems = [
    { id: 'home', icon: Home, label: '首页' },
    { id: 'bidding', icon: Gavel, label: '招标大厅' },
    { id: 'ai', icon: Cpu, label: 'AI助理' },
    { id: 'mybids', icon: FileText, label: '我的投标' },
    { id: 'profile', icon: User, label: '个人中心' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-t border-gray-200/50 shadow-lg flex justify-around items-center px-2 py-3 pb-safe">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentPage === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onPageChange(item.id as Page)}
            className={cn(
              "flex flex-col items-center justify-center transition-all duration-200",
              isActive ? "text-[#0D5EFA] scale-110 -translate-y-0.5" : "text-gray-500 hover:text-[#0D5EFA]"
            )}
          >
            <Icon className={cn("w-6 h-6", isActive && "fill-current")} />
            <span className={cn("text-[0.65rem] mt-1 font-medium", isActive ? "font-bold" : "")}>
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
