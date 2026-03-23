import { Header } from '@/components/layout/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LandmarkIcon, ShieldCheckIcon, AlertCircleIcon, UsersIcon, StarIcon, CheckCircle2Icon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F4F7F6] font-sans relative">
      <Header />

      {/* Decorative India Map Output on Right */}
      <div className="absolute right-0 top-0 w-1/3 h-[90vh] bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/e4/India_map_en.svg')] bg-no-repeat bg-right-top bg-contain opacity-5 pointer-events-none z-0 mix-blend-multiply" />

      {/* Main Content Container */}
      <main className="max-w-[1400px] mx-auto px-8 py-10 relative z-10">
        
        {/* Welcome Section */}
        <div className="mb-10">
          <h1 className="text-3xl text-slate-800 font-medium">
            Welcome, Citizen <span className="font-bold text-slate-900">Rohan Joshi!</span>
          </h1>
          <Card className="bg-blue-50/50 border-blue-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="mb-6 bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600">
                <LandmarkIcon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Lok Sabha</h3>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-center text-slate-700 text-sm font-medium">
                  <CheckCircle2Icon className="w-4 h-4 mr-2 text-blue-500" /> Track your MP
                </li>
                <li className="flex items-center text-slate-700 text-sm font-medium">
                  <CheckCircle2Icon className="w-4 h-4 mr-2 text-blue-500" /> Work Done
                </li>
                <li className="flex items-center text-slate-700 text-sm font-medium">
                  <CheckCircle2Icon className="w-4 h-4 mr-2 text-blue-500" /> Attendance
                </li>
              </ul>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                <Link href="/lok-sabha">View Sabha</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Rajya Sabha */}
          <Card className="bg-green-50/50 border-green-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="mb-6 bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center text-green-600">
                <LandmarkIcon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Rajya Sabha</h3>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-center text-slate-700 text-sm font-medium">
                  <CheckCircle2Icon className="w-4 h-4 mr-2 text-green-500" /> State Representatives
                </li>
                <li className="flex items-center text-slate-700 text-sm font-medium">
                  <CheckCircle2Icon className="w-4 h-4 mr-2 text-green-500" /> Committee Reports
                </li>
              </ul>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">
                <Link href="#">View Sabha</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Vidhan Sabha */}
          <Card className="bg-orange-50/50 border-orange-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="mb-6 bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center text-orange-600">
                <LandmarkIcon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Vidhan Sabha</h3>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-center text-slate-700 text-sm font-medium">
                  <CheckCircle2Icon className="w-4 h-4 mr-2 text-orange-500" /> Local MLAs
                </li>
                <li className="flex items-center text-slate-700 text-sm font-medium">
                  <CheckCircle2Icon className="w-4 h-4 mr-2 text-orange-500" /> Constituency Progress
                </li>
                <li className="flex items-center text-slate-700 text-sm font-medium">
                  <CheckCircle2Icon className="w-4 h-4 mr-2 text-orange-500" /> State Bills
                </li>
              </ul>
              <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                <Link href="#">View Sabha</Link>
              </Button>
            </CardContent>
          </Card>

        </div>

        {/* SECTION: Interaction */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <Link href="/grievances/report" className="block">
            <Card className="bg-white border-2 border-blue-500 shadow-sm hover:shadow-lg transition-all h-full cursor-pointer flex items-center p-6">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mr-6 shrink-0">
                <AlertCircleIcon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight">REPORT CORRUPTION & GRIEVANCES</h3>
                <p className="text-sm text-slate-500 font-medium">Vigilance & Grievances Dept.</p>
              </div>
            </Card>
          </Link>

          <Link href="/lok-sabha" className="block">
            <Card className="bg-white border border-slate-300 shadow-sm hover:shadow-lg transition-all h-full cursor-pointer flex items-center p-6">
              <div className="w-16 h-16 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center mr-6 shrink-0">
                <UsersIcon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight">SEARCH POLITICIAN</h3>
                <p className="text-sm text-slate-500 font-medium">Find by Name, Constituency, or Party</p>
              </div>
            </Card>
          </Link>

          <Link href="/profile/activity" className="block">
            <Card className="bg-white border-2 border-[#D4AF37] shadow-sm hover:shadow-lg transition-all h-full cursor-pointer flex items-center p-6">
              <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mr-6 shrink-0 relative">
                <StarIcon className="w-8 h-8 fill-amber-500 text-amber-500" />
                <span className="absolute -bottom-1 -right-1 bg-[#D4AF37] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">4.2</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight">PUBLIC REVIEWS & OPINION</h3>
                <p className="text-sm text-slate-500 font-medium">Ratings & Feedback</p>
              </div>
            </Card>
          </Link>

        </div>

      </main>
    </div>
  );
}
