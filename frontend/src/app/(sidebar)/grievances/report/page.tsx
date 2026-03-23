import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { DropletIcon, ZapIcon, Building2Icon, ScaleIcon, ShieldIcon, GraduationCapIcon, ChevronRightIcon, FileOutputIcon } from 'lucide-react';

export default function ReportGrievance() {
  return (
    <div className="p-8 max-w-6xl mx-auto w-full">
      <h2 className="text-3xl font-serif text-[#002B5B] font-bold mb-6 tracking-tight">Report a Problem</h2>
      
      {/* Progress Steps */}
      <div className="flex w-full mb-10 overflow-hidden rounded-lg shadow-sm font-semibold border border-slate-200 bg-white items-center">
        {/* Step 1 Active */}
        <div className="flex-1 py-4 text-center bg-[#002B5B] text-white flex items-center justify-center relative">
          <span>1. Select Category</span>
          {/* Chevron pointer right */}
          <div className="absolute -right-5 z-10 w-10 h-10 bg-[#002B5B] transform rotate-45 border-t border-r border-[#002B5B]" />
        </div>
        
        {/* Step 2 Inactive */}
        <div className="flex-1 py-4 text-center text-slate-600 bg-white relative">
          <span>2. Details</span>
          <div className="absolute -right-5 z-10 w-10 h-10 bg-white transform rotate-45 border-t border-r border-slate-200" />
        </div>
        
        {/* Step 3 Inactive */}
        <div className="flex-1 py-4 text-center text-slate-600 bg-white">
          <span>3. Review</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Side: Category Selection */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <h3 className="text-2xl font-bold text-slate-900">1. Select Ministry</h3>
            <div className="relative flex-1 max-w-sm">
               <Input 
                 placeholder="Search for Ministry by Name or ID" 
                 className="pl-10 h-12 rounded-lg border-amber-500/50 focus:border-amber-500 ring-offset-0 focus-visible:ring-0 shadow-sm"
               />
               <div className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-600 font-medium text-sm border border-amber-200 bg-amber-50 px-2 rounded">
                 Search Ministry
               </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Water category (Active) */}
            <div className="relative">
                <Card className="border-2 border-blue-500 shadow-[0_4px_20px_rgba(59,130,246,0.15)] bg-gradient-to-b from-blue-50 to-white cursor-pointer relative z-10 transition-all">
                <CardContent className="flex flex-col items-center justify-center p-8 gap-4">
                    <DropletIcon className="w-16 h-16 text-blue-600 stroke-[1.5]" />
                    <span className="font-bold text-[15px] tracking-wide text-blue-800">WATER</span>
                </CardContent>
                </Card>
                
                {/* Simulated dropdown under Water category */}
                <div className="absolute left-0 -bottom-20 w-80 bg-white border border-blue-200 shadow-xl rounded-xl p-4 z-20 animate-in slide-in-from-top-2">
                    <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Select Problem Type</p>
                    <Select defaultValue="no_supply">
                        <SelectTrigger className="w-full bg-slate-50 border-slate-200 focus:ring-0">
                            <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="no_supply" className="font-medium text-slate-700">No Supply</SelectItem>
                            <SelectItem value="contamination" className="font-medium text-slate-700">Contamination</SelectItem>
                            <SelectItem value="pipeline_burst" className="font-medium text-slate-700">Pipeline Burst</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Inactive categories */}
            <Card className="border-slate-200 hover:border-slate-300 shadow-sm bg-white cursor-pointer transition-colors opacity-80">
              <CardContent className="flex flex-col items-center justify-center p-8 gap-4">
                <ZapIcon className="w-16 h-16 text-slate-700" />
                <span className="font-bold text-lg text-slate-800">ELECTRICITY</span>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:border-slate-300 shadow-sm bg-white cursor-pointer transition-colors opacity-80">
              <CardContent className="flex flex-col items-center justify-center p-8 gap-4">
                <Building2Icon className="w-16 h-16 text-slate-700" />
                <span className="font-bold text-lg text-slate-800">PANCHAYAT</span>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:border-slate-300 shadow-sm bg-white cursor-pointer transition-colors opacity-80 mt-16 lg:mt-0">
              <CardContent className="flex flex-col items-center justify-center p-8 gap-4">
                <ScaleIcon className="w-16 h-16 text-slate-700" />
                <span className="font-bold text-lg text-slate-800">POLICY</span>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:border-slate-300 shadow-sm bg-white cursor-pointer transition-colors opacity-80 mt-16 md:mt-16 lg:mt-0">
              <CardContent className="flex flex-col items-center justify-center p-8 gap-4">
                <ShieldIcon className="w-16 h-16 text-slate-700" />
                <span className="font-bold text-lg text-slate-800">POLICE</span>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:border-slate-300 shadow-sm bg-white cursor-pointer transition-colors opacity-80 mt-16 md:mt-16 lg:mt-0">
              <CardContent className="flex flex-col items-center justify-center p-8 gap-4">
                <GraduationCapIcon className="w-16 h-16 text-slate-700" />
                <span className="font-bold text-lg text-slate-800">EDUCATION</span>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Side: Selection Summary */}
        <div className="w-full lg:w-96 mt-[120px] lg:mt-12">
          <Card className="border-blue-200 shadow-sm bg-white overflow-hidden">
            <div className="w-full h-1 bg-blue-500" />
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                <div className="p-2 bg-blue-50 rounded-full">
                  <DropletIcon className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-[15px] text-slate-600">Category Selected:<br/><strong className="text-lg text-slate-900">Water</strong></span>
              </div>
              
              <div className="flex items-center gap-4 border-b border-slate-100 pb-4 pl-14">
                <span className="text-[15px] text-slate-600">Problem Type:<br/><strong className="text-lg text-slate-900">No Supply</strong></span>
              </div>
              
              <div className="flex items-center gap-3 pt-2 bg-slate-50 p-4 rounded-lg border border-slate-100">
                <FileOutputIcon className="w-5 h-5 text-slate-400 shrink-0" />
                <span className="text-xs text-slate-600 font-medium leading-relaxed">Specify Water Problem in Details (Step 2)</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
