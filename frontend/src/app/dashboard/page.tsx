import { Header } from '@/components/layout/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileWarningIcon, LocateIcon, BarChart3Icon } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F4F7F6] font-sans relative">
      <Header />

      {/* Decorative India Map Output on Right */}
      <div className="absolute right-0 top-0 w-1/3 h-[90vh] bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/e4/India_map_en.svg')] bg-no-repeat bg-right-top bg-contain opacity-5 pointer-events-none z-0 mix-blend-multiply flex items-center justify-end" />

      {/* Main Content Container */}
      <main className="max-w-[1400px] mx-auto px-8 py-10 relative z-10">
        
        {/* Welcome Section */}
        <div className="mb-10">
          <h1 className="text-3xl text-slate-800 font-medium tracking-tight">
            Welcome, Citizen <span className="font-bold text-slate-900">Rohan Joshi!</span>
          </h1>
          <p className="text-slate-500 mt-2 text-sm font-medium">Select a Sabha to view members or interact with community modules below.</p>
        </div>

        {/* Top Split: Sabhas Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Lok Sabha Card */}
          <Link href="/lok-sabha">
            <Card className="group overflow-hidden relative cursor-pointer border-0 shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_50px_rgba(29,78,216,0.3)] transition-all duration-300 rounded-[24px] h-[360px]">
              {/* Background Architectural Drawing Mock */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582215682613-2d25ef6022e3?auto=format&fit=crop&w=600&q=80')] bg-cover bg-center grayscale opacity-15 group-hover:opacity-25 transition-opacity mix-blend-luminosity" />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#1D4ED8]/95 via-[#1D4ED8]/85 to-[#1e3a8a]/95" />
              
              <CardContent className="relative h-full flex flex-col items-center justify-center p-8 text-center text-white z-10">
                <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur border-2 border-white/20 flex items-center justify-center mb-6 shadow-2xl">
                  {/* Mock Emblem */}
                  <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-wider">Emblem</span>
                </div>
                <h2 className="text-[2.5rem] font-bold mb-3 tracking-tight drop-shadow-md">Lok Sabha</h2>
                <p className="opacity-90 font-medium font-sans text-base pt-3 border-t border-white/20 w-[80%] uppercase tracking-widest text-[#00E5FF]">Members of Parliament</p>
              </CardContent>
            </Card>
          </Link>

          {/* Rajya Sabha Card */}
          <Link href="/dashboard">
            <Card className="group overflow-hidden relative cursor-pointer border-0 shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_50px_rgba(4,120,87,0.3)] transition-all duration-300 rounded-[24px] h-[360px]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541904815592-cb8e670d8a59?auto=format&fit=crop&w=600&q=80')] bg-cover bg-center grayscale opacity-15 group-hover:opacity-25 transition-opacity mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#047857]/95 via-[#047857]/85 to-[#064e3b]/95" />
              
              <CardContent className="relative h-full flex flex-col items-center justify-center p-8 text-center text-white z-10">
                <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur border-2 border-white/20 flex items-center justify-center mb-6 shadow-2xl">
                  <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-wider">Emblem</span>
                </div>
                <h2 className="text-[2.5rem] font-bold mb-3 tracking-tight drop-shadow-md">Rajya Sabha</h2>
                <p className="opacity-90 font-medium font-sans text-base pt-3 border-t border-white/20 w-[80%] uppercase tracking-widest text-[#6EE7B7]">Council of States</p>
              </CardContent>
            </Card>
          </Link>

          {/* Vidhan Sabha Card */}
          <Link href="/dashboard">
            <Card className="group overflow-hidden relative cursor-pointer border-0 shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_50px_rgba(180,83,9,0.3)] transition-all duration-300 rounded-[24px] h-[360px]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510411850123-b1dca50a11ab?auto=format&fit=crop&w=600&q=80')] bg-cover bg-center grayscale opacity-15 group-hover:opacity-25 transition-opacity mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#b45309]/95 via-[#b45309]/85 to-[#78350f]/95" />
              
              <CardContent className="relative h-full flex flex-col items-center justify-center p-8 text-center text-white z-10">
                <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur border-2 border-white/20 flex items-center justify-center mb-6 shadow-2xl">
                  <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-wider">Emblem</span>
                </div>
                <h2 className="text-[2.5rem] font-bold mb-3 tracking-tight drop-shadow-md">Vidhan Sabha</h2>
                <p className="opacity-90 font-medium font-sans text-base pt-3 border-t border-white/20 w-[80%] uppercase tracking-widest text-[#FCD34D]">State Legislative Assembly</p>
              </CardContent>
            </Card>
          </Link>

        </div>

        {/* Bottom Split: Interaction Section */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center tracking-tight">
            <span className="w-2 h-8 bg-[#1D4ED8] rounded-full mr-4 inline-block shadow-sm"></span>
            Interaction & Services
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Grievance Module */}
            <Card className="border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-[24px] overflow-hidden bg-white hover:shadow-xl transition-all relative">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="font-bold text-xl text-slate-900 mb-2 tracking-tight">Report a Grievance</h4>
                    <p className="text-[15px] text-slate-500 font-medium leading-relaxed max-w-[85%]">Submit issues regarding local infrastructure or amenities directly to authorities.</p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50/80 flex items-center justify-center text-blue-600 border border-blue-100/50 shadow-inner flex-shrink-0">
                    <FileWarningIcon className="w-7 h-7" />
                  </div>
                </div>
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <Link href="/grievances/report" className="w-full">
                    <Button className="w-full bg-[#1D4ED8] hover:bg-blue-700 text-white font-bold h-12 rounded-xl shadow-[0_4px_15px_rgba(29,78,216,0.2)] transition-all">
                      Submit Report
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Constituencies Map Module */}
            <Card className="border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-[24px] overflow-hidden bg-white hover:shadow-xl transition-all">
              <CardContent className="p-8 flex flex-col h-full">
                 <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="font-bold text-xl text-slate-900 mb-2 tracking-tight">Constituency Maps</h4>
                    <p className="text-[15px] text-slate-500 font-medium leading-relaxed max-w-[85%]">Explore geographical boundaries and demographic data of electoral regions.</p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-purple-50/80 flex items-center justify-center text-purple-600 border border-purple-100/50 shadow-inner flex-shrink-0">
                    <LocateIcon className="w-7 h-7" />
                  </div>
                </div>
                <div className="mt-auto pt-6 border-t border-slate-100">
                   <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold h-12 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-all">
                      View Map
                   </Button>
                </div>
              </CardContent>
            </Card>

            {/* Performance Analytics */}
            <Card className="border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-[24px] overflow-hidden bg-white hover:shadow-xl transition-all">
              <CardContent className="p-8 flex flex-col h-full">
                 <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="font-bold text-xl text-slate-900 mb-2 tracking-tight">Performance Analytics</h4>
                    <p className="text-[15px] text-slate-500 font-medium leading-relaxed max-w-[85%]">View aggregated ratings, attendance records, and project completion data.</p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50/80 flex items-center justify-center text-emerald-600 border border-emerald-100/50 shadow-inner flex-shrink-0">
                    <BarChart3Icon className="w-7 h-7" />
                  </div>
                </div>
                <div className="mt-auto pt-6 border-t border-slate-100">
                    <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold h-12 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-all">
                      View Reviews
                    </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </main>

      {/* Watermark */}
      <div className="fixed bottom-10 right-10 opacity-[0.04] pointer-events-none z-0 flex items-center gap-4">
        <p className="text-[6rem] font-bold tracking-tighter text-slate-900 uppercase leading-none font-sans">
          My Bharat <br/> <span className="text-slate-950 font-black">2026</span>
        </p>
      </div>
    </div>
  );
}
