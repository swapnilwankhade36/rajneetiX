import Link from 'next/link';
import { SearchIcon, BellIcon, UserIcon, HelpCircleIcon, ShieldCheckIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  variant?: 'dark' | 'light';
  hideLogo?: boolean;
}

export function Header({ variant = 'dark', hideLogo = false }: HeaderProps) {
  const isDark = variant === 'dark';
  
  return (
    <header className={`w-full h-16 flex items-center justify-between px-6 z-40 ${isDark ? 'bg-[#111827] text-white' : 'bg-[#FFFFFF] text-slate-900 border-b border-slate-200 shadow-sm'}`}>
      
      {/* Left section: Logo */}
      <div className="flex items-center w-[250px]">
        {!hideLogo && (
          <div className="flex items-center gap-3">
            <div className={`w-8 h-10 flex items-center justify-center font-bold text-[8px] leading-tight text-center ${isDark ? 'text-[#D4AF37] border border-[#D4AF37] rounded-sm' : 'text-[#D4AF37] border border-[#D4AF37] rounded-sm'}`}>
                Emblem
            </div>
            
            <Link href="/dashboard" className="flex items-center gap-1.5 ml-1">
                <h1 className="text-xl font-bold tracking-tight">Rajneeti<span className={isDark ? "text-white" : "text-slate-900"}>X</span></h1>
                <ShieldCheckIcon className={`w-5 h-5 ${isDark ? 'text-blue-500 fill-blue-500/20' : 'text-blue-600 fill-blue-600/20'}`} />
            </Link>
          </div>
        )}
      </div>

      {/* Center section: Search Bar */}
      <div className="flex-1 flex justify-center max-w-2xl px-4">
        <div className="relative w-full max-w-[600px]">
          <SearchIcon className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${isDark ? 'text-slate-400' : 'text-slate-400'}`} />
          <Input 
            type="search" 
            placeholder={isDark ? "Global Search" : "Search"} 
            className={`w-full h-10 pl-10 pr-4 focus-visible:ring-1 focus-visible:ring-offset-0 ${
              isDark 
                ? 'bg-slate-800/80 border-slate-700 text-white placeholder:text-slate-400 rounded-full shadow-inner' 
                : 'bg-slate-100 border-slate-200 text-slate-900 placeholder:text-slate-500 rounded-md shadow-inner'
            }`}
          />
        </div>
      </div>

      {/* Right section: Utilities */}
      <div className="flex items-center justify-end gap-5 w-[250px]">
        {!isDark && (
           <button className="text-slate-500 hover:text-slate-700 transition-colors">
              <HelpCircleIcon className="w-5 h-5" />
           </button>
        )}
        <button className={`${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-500 hover:text-slate-700'} transition-colors relative`}>
          <BellIcon className="w-5 h-5" />
          {/* Notification dot */}
          <span className="absolute 1 top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
        <button className={`w-8 h-8 rounded-full flex items-center justify-center overflow-hidden border-2 ${isDark ? 'border-slate-700 bg-slate-800 text-slate-300 hover:border-slate-500' : 'border-slate-200 bg-slate-100 text-slate-500 hover:border-slate-300'} transition-colors`}>
          <UserIcon className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
