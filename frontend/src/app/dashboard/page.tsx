import { Header } from '@/components/layout/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Landmark, FileText, Megaphone, Search, User, Flag, Star, BarChart, TrendingUp, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans relative overflow-x-hidden">
      <Header />

      {/* Decorative India Map Output on Right */}
      <div className="absolute right-0 top-0 w-[50%] h-full bg-[url('/map_india.png')] bg-no-repeat bg-right-top bg-cover opacity-[0.03] pointer-events-none z-0 mix-blend-multiply flex items-center justify-end" />

      {/* Main Content Container */}
      <main className="max-w-[1400px] mx-auto px-8 py-10 relative z-10">
        
        {/* Welcome Section */}
        <div className="mb-10 mt-4">
          <h1 className="text-[2.2rem] text-slate-800 font-normal tracking-wide">
            Welcome, Citizen <span className="font-bold text-slate-900">Rohan Joshi!</span>
          </h1>
          <h2 className="text-[2.2rem] font-bold text-slate-900 tracking-wide mt-1">
            Your Portal for Accountable Governance.
          </h2>
        </div>

        {/* Sabhas Section */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-slate-800 mb-4 tracking-tight">
            Sabhas
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Lok Sabha Card */}
            <Card className="group relative overflow-hidden bg-gradient-to-tr from-[#DEEFFD] to-[#F4F9FF] border border-[#AFCFF0] shadow-[0_8px_20px_rgba(0,0,0,0.06)] rounded-2xl h-[240px] hover:shadow-[0_12px_25px_rgba(0,0,0,0.08)] transition-all">
              <CardContent className="p-0 flex h-full">
                {/* Left Visual Area */}
                <div className="w-[45%] h-full relative flex items-center justify-center pt-8">
                  <div className="absolute left-2 top-2 opacity-10">
                    <img src="/ashok_stambh.png" alt="Emblem" className="w-12 h-auto grayscale" />
                  </div>
                  <div className="relative">
                    <Landmark className="w-24 h-24 text-[#2E4A71] opacity-90 drop-shadow-sm" strokeWidth={1.5} />
                    <span className="absolute -top-1 right-2 text-xl">🇮🇳</span>
                  </div>
                </div>
                {/* Right Content Area */}
                <div className="w-[55%] p-5 pl-2 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-xl text-slate-900 leading-tight">LOK SABHA</h4>
                    <p className="text-sm text-slate-600 mb-3">House of the People</p>
                    <ul className="space-y-1 text-[13px] font-medium text-slate-700">
                      <li className="flex items-center gap-1.5"><span className="w-1 h-1 bg-slate-700 rounded-full"></span> Track your MP</li>
                      <li className="flex items-center gap-1.5"><span className="w-1 h-1 bg-slate-700 rounded-full"></span> Work Done</li>
                      <li className="flex items-center gap-1.5"><span className="w-1 h-1 bg-slate-700 rounded-full"></span> Attendance</li>
                    </ul>
                  </div>
                  <Link href="/lok-sabha">
                    <Button className="w-full bg-[#1A62B7] hover:bg-[#154d8f] text-white font-medium h-9 rounded-md mt-4 shadow-sm">
                      View Sabha
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Rajya Sabha Card */}
            <Card className="group relative overflow-hidden bg-gradient-to-tr from-[#D6F0E0] to-[#EEFDF3] border border-[#A7D8BA] shadow-[0_8px_20px_rgba(0,0,0,0.06)] rounded-2xl h-[240px] hover:shadow-[0_12px_25px_rgba(0,0,0,0.08)] transition-all">
              <CardContent className="p-0 flex h-full">
                <div className="w-[45%] h-full relative flex items-center justify-center pt-8">
                  <div className="absolute left-2 top-2 opacity-10">
                    <img src="/ashok_stambh.png" alt="Emblem" className="w-12 h-auto grayscale" />
                  </div>
                  <div className="relative">
                     <Landmark className="w-24 h-24 text-[#2C6242] opacity-90 drop-shadow-sm" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="w-[55%] p-5 pl-2 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-xl text-slate-900 leading-tight">RAJYA SABHA</h4>
                    <p className="text-sm text-slate-600 mb-3">Council of States</p>
                    <ul className="space-y-1 text-[13px] font-medium text-slate-700">
                      <li className="flex items-center gap-1.5"><span className="w-1 h-1 bg-slate-700 rounded-full"></span> State Representatives</li>
                      <li className="flex items-center gap-1.5"><span className="w-1 h-1 bg-slate-700 rounded-full"></span> Committee Reports</li>
                    </ul>
                  </div>
                  <Link href="/dashboard">
                    <Button className="w-full bg-[#468A62] hover:bg-[#356d4d] text-white font-medium h-9 rounded-md mt-4 shadow-sm">
                      View Sabha
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Vidhan Sabha Card */}
            <Card className="group relative overflow-hidden bg-gradient-to-tr from-[#FBE8CD] to-[#FFF8EF] border border-[#E9C496] shadow-[0_8px_20px_rgba(0,0,0,0.06)] rounded-2xl h-[240px] hover:shadow-[0_12px_25px_rgba(0,0,0,0.08)] transition-all">
              <CardContent className="p-0 flex h-full">
                <div className="w-[45%] h-full relative flex items-center justify-center pt-8">
                  <div className="absolute left-2 top-2 opacity-10">
                    <img src="/ashok_stambh.png" alt="Emblem" className="w-12 h-auto grayscale" />
                  </div>
                  <div className="relative">
                     <Landmark className="w-24 h-24 text-[#8C5D23] opacity-90 drop-shadow-sm" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="w-[55%] p-5 pl-2 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-xl text-slate-900 leading-tight">VIDHAN SABHA</h4>
                    <p className="text-sm text-slate-600 mb-3">State Legislative Assembly</p>
                    <ul className="space-y-1 text-[13px] font-medium text-slate-700">
                      <li className="flex items-center gap-1.5"><span className="w-1 h-1 bg-slate-700 rounded-full"></span> Local MLAs</li>
                      <li className="flex items-center gap-1.5"><span className="w-1 h-1 bg-slate-700 rounded-full"></span> Constituency Progress</li>
                      <li className="flex items-center gap-1.5"><span className="w-1 h-1 bg-slate-700 rounded-full"></span> State Bills</li>
                    </ul>
                  </div>
                  <Link href="/dashboard">
                    <Button className="w-full bg-[#E59740] hover:bg-[#c67c2d] text-white font-medium h-9 rounded-md mt-4 shadow-sm">
                      View Sabha
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

        {/* Interaction Section */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 tracking-tight">
            Interaction
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Grievance Card */}
            <Card className="group relative overflow-hidden bg-white border border-[#D1DFFA] shadow-[0_8px_20px_rgba(0,0,0,0.04)] rounded-2xl h-[220px] hover:shadow-[0_12px_25px_rgba(0,0,0,0.06)] transition-all">
              <CardContent className="p-0 flex h-full">
                {/* Left Blue Accent Bar + Icon */}
                <div className="w-[40%] h-full relative flex items-center justify-center border-l-8 border-[#3D7BD4] bg-slate-50/50">
                   <div className="relative z-10 flex text-[#3D7BD4]">
                     <FileText className="w-12 h-12" strokeWidth={1.5} />
                     <Megaphone className="w-10 h-10 absolute -bottom-3 -right-6 transform -rotate-12" strokeWidth={1.5} />
                   </div>
                </div>
                <div className="w-[60%] p-4 pl-3 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-[15px] text-slate-900 leading-tight uppercase">REPORT CORRUPTION<br/>& GRIEVANCES</h4>
                    <p className="text-[12px] text-slate-600 mt-1 mb-2 font-medium">Vigilance & Grievances Dept.</p>
                    <ul className="space-y-0.5 text-[11px] font-medium text-slate-700 tracking-tight">
                      <li className="flex items-center gap-1.5"><span className="w-1 h-1 bg-slate-700 rounded-full"></span> File Corruption Complaints</li>
                      <li className="flex items-center gap-1.5"><span className="w-1 h-1 bg-slate-700 rounded-full"></span> Public Misconduct</li>
                      <li className="flex items-center gap-1.5"><span className="w-1 h-1 bg-slate-700 rounded-full"></span> Infrastructure Issues</li>
                      <li className="flex items-center gap-1.5"><span className="w-1 h-1 bg-slate-700 rounded-full"></span> Service Delays</li>
                    </ul>
                  </div>
                  <Link href="/grievances/report">
                    <Button className="w-full bg-[#3D7BD4] hover:bg-[#2c5fbd] text-white font-medium h-8 text-[13px] rounded-md mt-2 shadow-sm">
                      Submit Report
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Search Politician Card */}
            <Card className="group relative overflow-hidden bg-[#FAFBFC] border border-[#DEE3E9] shadow-[0_8px_20px_rgba(0,0,0,0.04)] rounded-2xl h-[220px] hover:shadow-[0_12px_25px_rgba(0,0,0,0.06)] transition-all">
              <CardContent className="p-0 flex h-full">
                <div className="w-[40%] h-full relative flex items-center justify-center">
                   <div className="relative z-10 text-[#476587] flex flex-col items-center">
                     <div className="relative">
                       <Search className="w-14 h-14 absolute -top-2 -right-2 z-10 text-[#2C4159]" strokeWidth={2} />
                       <User className="w-16 h-16 opacity-80" strokeWidth={1.5} />
                     </div>
                     <div className="absolute -left-2 top-2  transform -rotate-12 text-[#6D8DAE]"><Flag className="w-6 h-6" strokeWidth={1.5} /></div>
                     <div className="absolute -right-1 bottom-4 transform rotate-12 text-[#6D8DAE]"><Flag className="w-6 h-6" strokeWidth={1.5} /></div>
                   </div>
                </div>
                <div className="w-[60%] p-4 pl-3 flex flex-col justify-between">
                  <div className="pt-2">
                    <h4 className="font-bold text-[17px] text-slate-900 leading-tight uppercase">SEARCH<br/>POLITICIAN</h4>
                    <p className="text-[13px] text-slate-600 mt-2 font-medium">Find by Name,<br/>Constituency, or Party</p>
                  </div>
                  <Link href="/dashboard">
                    <Button className="w-[90%] bg-[#5C7D9E] hover:bg-[#466585] text-white font-medium h-8 text-[13px] rounded-md mt-2 shadow-sm mx-auto block">
                      View Marp
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Public Reviews Card */}
            <Card className="group relative overflow-hidden bg-gradient-to-tr from-[#FFF7DD] to-[#FFFDF7] border border-[#E9D8A4] shadow-[0_8px_20px_rgba(0,0,0,0.04)] rounded-2xl h-[220px] hover:shadow-[0_12px_25px_rgba(0,0,0,0.06)] transition-all">
              <CardContent className="p-0 flex h-full">
                <div className="w-[40%] h-full relative flex items-center justify-center">
                   <div className="relative z-10 flex flex-col items-center justify-center w-full px-2">
                     <div className="flex border-b-2 border-[#8C6D23] pb-1 w-full justify-center">
                       <Star className="w-5 h-5 text-[#D1A02E] fill-[#D1A02E]" />
                       <Star className="w-5 h-5 text-[#D1A02E] fill-[#D1A02E]" />
                       <Star className="w-5 h-5 text-[#D1A02E] fill-[#D1A02E]" />
                       <Star className="w-5 h-5 text-[#D1A02E] fill-[#D1A02E]" />
                       <Star className="w-5 h-5 text-[#D1A02E] fill-[#e6e6e6]" />
                     </div>
                     <div className="flex w-full items-end justify-center mt-2 gap-1 relative h-10">
                       <div className="w-4 bg-[#6D8E5F] h-4"></div>
                       <div className="w-4 bg-[#6D8E5F] h-6"></div>
                       <div className="w-4 bg-[#6D8E5F] h-8"></div>
                       <div className="w-4 bg-[#6D8E5F] h-10"></div>
                       <TrendingUp className="w-10 h-10 text-[#B88719] absolute -top-2 right-1" strokeWidth={2.5} />
                     </div>
                   </div>
                </div>
                <div className="w-[60%] p-4 pl-3 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-[16px] text-slate-900 leading-tight uppercase">PUBLIC REVIEWS<br/>& OPINION</h4>
                    <ul className="space-y-1.5 text-[12px] font-medium text-slate-700 tracking-tight mt-3">
                      <li className="flex items-start gap-1.5"><span className="w-1.5 h-1.5 mt-1 bg-slate-700 rounded-full flex-shrink-0"></span> Overall Citizen Verdict</li>
                      <li className="flex items-start gap-1.5"><span className="w-1.5 h-1.5 mt-1 bg-slate-700 rounded-full flex-shrink-0"></span> View Detailed<br/>Community Reviews</li>
                    </ul>
                  </div>
                  <Link href="/dashboard">
                    <Button className="w-full bg-[#C29630] hover:bg-[#a67d22] text-white font-medium h-8 text-[13px] rounded-md mt-2 shadow-sm">
                      View Reviews
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

      </main>

      {/* Watermark Logo Bottom Right */}
      <div className="fixed bottom-6 right-8 flex items-end gap-2 z-0 opacity-80 pointer-events-none">
        <div className="text-right">
          <p className="text-[14px] font-bold text-slate-800 leading-tight">My<br/>Bharat</p>
          <p className="text-[10px] font-bold text-[#E48A3C] uppercase tracking-wider">2026</p>
        </div>
        <img src="/map_india.png" alt="India flag colors" className="w-10 h-14 object-contain brightness-95 opacity-90" />
      </div>
    </div>
  );
}
