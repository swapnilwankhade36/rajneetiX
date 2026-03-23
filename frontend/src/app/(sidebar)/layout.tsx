'use client';

import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans flex overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header variant="light" hideLogo={true} />
        <main className="flex-1 overflow-y-auto w-full flex flex-col">
          {children}
          
          <footer className="w-full bg-[#1F2937] text-slate-400 py-4 px-6 text-[11px] text-center mt-auto border-t border-slate-800">
            &copy; Government of India | RajneetiX Portal - Committed to Citizen Grievance Redressal. GIGW Compliant.
          </footer>
        </main>
      </div>
    </div>
  );
}
