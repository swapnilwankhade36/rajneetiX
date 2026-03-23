import Link from 'next/link';
import { SearchIcon, HelpCircleIcon, BellIcon, UserCircleIcon, ShieldCheckIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  variant?: 'dark' | 'light';
  hideLogo?: boolean;
}

export function Header({ variant = 'dark', hideLogo = false }: HeaderProps) {
  const isDark = variant === 'dark';
  
  return (
    <header className={`w-full h-16 flex items-center justify-between px-6 z-40 ${isDark ? 'bg-[#002B5B] text-white' : 'bg-white text-slate-900 border-b border-slate-200'}`}>
      <div className="flex items-center gap-4">
        {!hideLogo && (
          <>
            {/* Emblem placeholder */}
            <div className="flex flex-col items-center justify-center">
                <div className={`w-8 h-10 flex items-center justify-center font-bold text-[8px] leading-tight text-center ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
                    Emblem
                </div>
                <span className={`text-[8px] font-bold mt-1 ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>सत्यमेव जयते</span>
            </div>
            
            <div className="flex items-center gap-3 border-l border-white/20 pl-4 h-10">
                <Link href="/dashboard" className="flex items-center gap-2">
                    <h1 className="text-xl font-bold tracking-tight">Rajneeti<span className={isDark ? "text-slate-300" : "text-slate-500"}>X</span></h1>
                    <ShieldCheckIcon className={`w-5 h-5 ${isDark ? 'text-blue-200' : 'text-blue-600'}`} />
                </Link>
            </div>
          </>
        )}
      </div>

      <div className="flex-1 max-w-2xl px-12">
        <div className="relative group w-full max-w-md">
          <Input 
            type="text" 
            placeholder="Global Search" 
            className={`w-full h-10 pl-10 rounded-full border-none transition-all ${isDark ? 'bg-white/10 text-white placeholder:text-white/60 focus-visible:bg-white/20 focus-visible:ring-white/30' : 'bg-slate-100 text-slate-900 placeholder:text-slate-500 focus-visible:ring-primary/30'}`}
          />
          <SearchIcon className={`w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 ${isDark ? 'text-white/60' : 'text-slate-500'}`} />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className={`hover:opacity-80 transition-opacity ${isDark ? 'text-white/80' : 'text-slate-600'}`}>
            <HelpCircleIcon className="w-5 h-5" />
        </button>
        <button className={`hover:opacity-80 transition-opacity ${isDark ? 'text-white/80' : 'text-slate-600'}`}>
            <BellIcon className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isDark ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'}`}>
                <UserCircleIcon className="w-6 h-6" />
            </div>
        </div>
      </div>
    </header>
  );
}
