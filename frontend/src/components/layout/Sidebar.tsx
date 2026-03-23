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
    <div className="w-64 min-h-screen bg-[#001f44] text-slate-300 flex flex-col items-center py-6 border-r border-[#001f44] shadow-xl z-50 shrink-0">
      {/* Sidebar Logo */}
      <div className="flex flex-col items-center justify-center mb-10 w-full px-6">
        <div className="w-10 h-14 flex items-center justify-center font-bold text-[10px] leading-tight text-center text-amber-400 mb-2">
            Emblem
        </div>
        <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight text-white">Rajneeti<span className="text-slate-400">X</span></h1>
            <ShieldCheckIcon className="w-4 h-4 text-blue-300" />
        </div>
        <p className="text-[9px] text-center mt-1 text-slate-400 font-medium">National e-Governance Portal</p>
      </div>

      {/* Navigation */}
      <nav className="w-full flex-1 flex flex-col">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href) && item.href !== '/dashboard' || pathname === item.href;
          
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={`flex flex-col items-center justify-center py-5 transition-colors border-l-4 ${isActive ? 'bg-[#002B5B] border-amber-400 text-white shadow-inner' : 'border-transparent hover:bg-white/5 hover:text-white'}`}
            >
              <item.icon className={`w-6 h-6 mb-2 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
              <span className="text-xs font-semibold">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
