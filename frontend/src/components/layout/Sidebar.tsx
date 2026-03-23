import Link from 'next/link';
import { ShieldCheckIcon, HomeIcon, UsersIcon, MessageSquareWarningIcon, SettingsIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function Sidebar() {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon },
    { name: 'Lok Sabha', href: '/lok-sabha', icon: UsersIcon },
    { name: 'My Grievances', href: '/grievances/report', icon: MessageSquareWarningIcon },
    { name: 'Profile Settings', href: '/profile/activity', icon: SettingsIcon },
  ];

  return (
    <div className="w-64 min-h-screen bg-[#111827] text-slate-300 flex flex-col items-center pt-5 shadow-2xl z-50 shrink-0 border-r border-slate-800">
      {/* Sidebar Logo */}
      <div className="flex flex-col items-center justify-center mb-10 w-full px-6 border-b border-slate-800 pb-6">
        <div className="w-10 h-10 flex items-center justify-center font-bold text-[8px] leading-tight text-center text-[#D4AF37] mb-2 border border-[#D4AF37] rounded-sm bg-slate-900 shadow-inner">
            Emblem
        </div>
        <div className="flex items-center gap-1.5 ml-2">
            <h1 className="text-[22px] font-bold tracking-tight text-white drop-shadow-sm">Rajneeti<span className="text-slate-400">X</span></h1>
            <ShieldCheckIcon className="w-4 h-4 text-blue-500 fill-blue-500/20" />
        </div>
        <p className="text-[8px] uppercase tracking-[0.15em] text-center mt-2 text-slate-400 font-bold opacity-80">National Portal</p>
      </div>

      {/* Navigation */}
      <nav className="w-full flex-1 flex flex-col gap-1 px-4">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href) && item.href !== '/dashboard' || pathname === item.href;
          
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={`flex flex-col items-center justify-center py-5 transition-all rounded-lg ${isActive ? 'bg-blue-600/10 text-white shadow-inner border border-blue-500/30' : 'border border-transparent hover:bg-slate-800/50 hover:text-white'}`}
            >
              <item.icon className={`w-6 h-6 mb-2 ${isActive ? 'text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]' : 'text-slate-500'}`} />
              <span className={`text-[11px] font-bold tracking-wide ${isActive ? 'text-blue-200' : 'text-slate-500'}`}>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
