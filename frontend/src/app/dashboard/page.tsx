import { Header } from '@/components/layout/Header';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BuildingIcon, UserSearchIcon, FileWarningIcon, LandmarkIcon, MapIcon, LineChartIcon } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F4F7F6] font-sans flex flex-col relative overflow-hidden">
      {/* Background subtle map graphic */}
      <div className="absolute right-0 top-20 w-1/2 h-full opacity-5 pointer-events-none bg-no-repeat bg-right bg-contain" 
           style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/India_map_en.svg/1024px-India_map_en.svg.png')" }} />
      
      <Header variant="dark" />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-10 z-10 relative">
        <div className="mb-10">
          <h2 className="text-3xl font-light text-slate-800">
            Welcome, Citizen <span className="font-bold">Rohan Joshi!</span>
          </h2>
          <p className="text-xl font-medium text-slate-800 tracking-tight">
            Your Portal for Accountable Governance.
          </p>
        </div>

        <div className="space-y-10">
          <section>
            <h3 className="text-lg font-bold text-slate-800 mb-4 tracking-tight">Sabhas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Lok Sabha Card */}
              <Card className="bg-gradient-to-b from-blue-50 to-white border-blue-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col">
                <div className="absolute left-4 bottom-4 opacity-10 w-32 h-32">
                  <LandmarkIcon className="w-full h-full text-blue-900" />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex flex-col items-end text-right">
                    <h4 className="text-xl font-black text-slate-900 tracking-tight">LOK SABHA</h4>
                    <span className="text-xs text-slate-500 font-medium">House of the People</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="text-sm font-medium text-slate-700 space-y-1.5 flex flex-col items-end">
                    <li>• Track your MP</li>
                    <li>• Work Done</li>
                    <li>• Attendance</li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-end pt-4 pb-6 border-none">
                  <Button className="bg-[#427ab3] hover:bg-[#325c8a] text-white rounded-lg px-8 py-2 h-auto text-sm font-semibold shadow-sm transition-all">
                    View Sabha
                  </Button>
                </CardFooter>
              </Card>

              {/* Rajya Sabha Card */}
              <Card className="bg-gradient-to-b from-green-50 to-white border-green-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col">
                <div className="absolute left-4 bottom-4 opacity-10 w-32 h-32">
                  <BuildingIcon className="w-full h-full text-green-900" />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex flex-col items-end text-right">
                    <h4 className="text-xl font-black text-slate-900 tracking-tight">RAJYA SABHA</h4>
                    <span className="text-xs text-slate-500 font-medium">Council of States</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="text-sm font-medium text-slate-700 space-y-1.5 flex flex-col items-end">
                    <li>• State Representatives</li>
                    <li>• Committee Reports</li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-end pt-4 pb-6 border-none">
                  <Button className="bg-[#65a176] hover:bg-[#4b805a] text-white rounded-lg px-8 py-2 h-auto text-sm font-semibold shadow-sm transition-all">
                    View Sabha
                  </Button>
                </CardFooter>
              </Card>

              {/* Vidhan Sabha Card */}
              <Card className="bg-gradient-to-b from-orange-50 to-white border-orange-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col">
                <div className="absolute left-4 bottom-4 opacity-10 w-32 h-32">
                  <MapIcon className="w-full h-full text-orange-900" />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex flex-col items-end text-right">
                    <h4 className="text-xl font-black text-slate-900 tracking-tight">VIDHAN SABHA</h4>
                    <span className="text-xs text-slate-500 font-medium">State Legislative Assembly</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="text-sm font-medium text-slate-700 space-y-1.5 flex flex-col items-end">
                    <li>• Local MLAs</li>
                    <li>• Constituency Progress</li>
                    <li>• State Bills</li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-end pt-4 pb-6 border-none">
                  <Button className="bg-[#e49c54] hover:bg-[#c98341] text-white rounded-lg px-8 py-2 h-auto text-sm font-semibold shadow-sm transition-all">
                    View Sabha
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-800 mb-4 tracking-tight">Interaction</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Report Corruption Card */}
              <Card className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-20 w-24 h-24">
                  <FileWarningIcon className="w-full h-full text-blue-900" />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex flex-col items-end text-right">
                    <h4 className="text-lg font-black text-slate-900 tracking-tight uppercase leading-tight">Report Corruption<br/>& Grievances</h4>
                    <span className="text-xs text-slate-500 font-medium">Vigilance & Grievances Dept.</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 z-10">
                  <ul className="text-sm font-medium text-slate-700 space-y-1 flex flex-col items-end">
                    <li>• File Corruption Complaints</li>
                    <li>• Public Misconduct</li>
                    <li>• Infrastructure Issues</li>
                    <li>• Service Delays</li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-end pt-4 pb-6 border-none z-10">
                  <Button className="bg-[#2d6bb3] hover:bg-[#20518a] text-white rounded-xl px-6 py-2 h-auto text-sm font-semibold shadow-sm transition-all border border-blue-400">
                    Submit Report
                  </Button>
                </CardFooter>
                {/* Visual blue accent on left edge like reference */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-[#2d6bb3]" />
              </Card>

              {/* Search Politician Card */}
              <Card className="bg-gradient-to-tr from-slate-100 to-white border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 w-20 h-20 opacity-80 text-[#3d6ca1]">
                  <UserSearchIcon className="w-full h-full" />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex flex-col items-end text-right">
                    <h4 className="text-lg font-black text-slate-900 tracking-tight uppercase leading-tight">Search<br/>Politician</h4>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm font-medium text-slate-700 text-right mt-2">
                    Find by Name,<br/>Constituency, or Party
                  </p>
                </CardContent>
                <CardFooter className="flex justify-end pt-4 pb-6 border-none">
                  <Button className="bg-[#567c9c] hover:bg-[#436380] text-white rounded-lg px-8 py-2 h-auto text-sm font-semibold shadow-sm transition-all">
                    View Map
                  </Button>
                </CardFooter>
              </Card>

              {/* Public Reviews Card */}
              <Card className="bg-gradient-to-tr from-amber-50 to-amber-100/50 border-amber-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 w-24 h-24 opacity-80 text-amber-600">
                  <LineChartIcon className="w-full h-full" />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex flex-col items-end text-right">
                    <h4 className="text-lg font-black text-slate-900 tracking-tight uppercase leading-tight">Public Reviews<br/>& Opinion</h4>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="text-sm font-medium text-slate-700 space-y-1 flex flex-col items-end mt-2 text-right">
                    <li>• Overall Citizen Verdict</li>
                    <li>• View Detailed<br/>Community Reviews</li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-end pt-4 pb-6 border-none z-10">
                  <Button className="bg-[#c2964b] hover:bg-[#a67d38] text-white rounded-full px-6 py-2 h-auto text-sm font-semibold shadow-sm transition-all">
                    View Reviews
                  </Button>
                </CardFooter>
              </Card>

            </div>
          </section>
        </div>
      </main>
      
      {/* Bottom right watermark */}
      <div className="absolute bottom-4 right-6 flex items-center gap-2 opacity-50 z-0">
        <span className="text-xs font-bold text-slate-800">My Bharat</span>
        <span className="text-xs font-black text-blue-900 border border-blue-900 rounded-sm px-1">2026</span>
      </div>
    </div>
  );
}
