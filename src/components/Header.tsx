import { Search, Bell, Landmark } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 h-[60px] bg-[#f6f9ff]/80 backdrop-blur-xl border-b border-gray-200/30">
      <div className="flex justify-between items-center px-4 w-full max-w-7xl mx-auto h-full">
        <div className="flex items-center gap-2">
          <Landmark className="text-[#0D5EFA] w-6 h-6" />
          <h1 className="text-xl font-black bg-gradient-to-br from-[#0048c8] to-[#0d5efa] bg-clip-text text-transparent">
            公共资源交易中心
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <Search className="w-5 h-5 text-gray-700" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors relative">
            <Bell className="w-5 h-5 text-gray-700" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
