import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SmartphoneIcon, EyeIcon, FingerprintIcon, ExternalLinkIcon, FileTextIcon, ShieldCheckIcon } from 'lucide-react';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="min-h-screen bg-[#061225] flex flex-col relative overflow-hidden font-sans text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Government Building Background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541904815592-cb8e670d8a59?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay" />
        
        {/* Glowing light-blue India map outline (simulating the dotted/neon glow) */}
        <div className="absolute top-[40%] left-[20%] -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/e4/India_map_en.svg')] bg-no-repeat bg-center bg-contain opacity-40 drop-shadow-[0_0_15px_rgba(0,180,255,1)] filter brightness-[2] hue-rotate-[180deg] saturate-[300] mix-blend-screen" />
        
        {/* Vertical lines and nodes typical of the right side network background */}
        <div className="absolute right-0 top-0 bottom-0 w-[400px] bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover opacity-10 mix-blend-screen" />
      </div>

      {/* Top Header Strip - White gradient fading to transparent right */}
      <div className="w-full relative z-20 flex flex-col items-center">
        {/* The solid/gradient top bar */}
        <div className="absolute inset-0 w-full h-[80px] bg-gradient-to-r from-slate-100 via-white/80 to-transparent z-0"></div>
        
        <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between px-8 py-3 relative z-10">
          <div className="text-2xl font-bold tracking-tight text-slate-900 w-1/3">
            TransparencyGov
          </div>
          
          <div className="flex flex-col items-center justify-center w-1/3 -mt-2">
              {/* National Emblem replacing actual Ashoka Pillar */}
              <div className="w-[60px] h-[75px] flex items-center justify-center font-bold text-[10px] leading-tight text-center text-[#D4AF37] mb-1">
                  <ShieldCheckIcon className="w-10 h-10 text-[#D4AF37] drop-shadow-md" />
              </div>
              <p className="text-[14px] font-sans text-slate-800 tracking-wide font-medium whitespace-nowrap">
                National Portal of India <span className="text-slate-400 mx-1">|</span> e-Verification Services
              </p>
          </div>

          <div className="w-1/3" /> {/* Spacer */}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex w-full max-w-[1400px] mx-auto items-center justify-between px-12 z-10 relative pt-10 pb-20">
        
        {/* Left Side Hero Text */}
        <div className="max-w-2xl mt-12">
          {/* Strictly ONE line for "Your Voice, Verified." as requested by reference */}
          <h1 className="text-[3.5rem] font-bold text-white mb-4 leading-[1.1] drop-shadow-lg tracking-tight whitespace-nowrap">
            Your Voice, Verified.
          </h1>
          <p className="text-2xl text-slate-200/90 font-medium max-w-lg leading-snug drop-shadow-md">
            Access political accountability through secure verification.
          </p>
        </div>

        {/* Right Side Login Card */}
        <div className="w-[480px]">
          <Card className="bg-[rgba(15,25,45,0.4)] backdrop-blur-[24px] border-[1.5px] border-white/20 shadow-[0_0_50px_rgba(0,100,255,0.15)] rounded-[16px] relative pt-10 pb-4 overflow-visible">
            
            {/* Overlapping Top Emblem */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-b from-[#FFFBEA] to-[#F1DE92] border-2 border-white rounded-full flex flex-col items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] z-20">
              <ShieldCheckIcon className="w-10 h-10 text-slate-900" />
            </div>

            <CardHeader className="text-center pb-6">
              <h2 className="text-[22px] font-bold text-white tracking-tight drop-shadow-sm mt-2">Citizen Login &<br/>Accountability Portal</h2>
            </CardHeader>
            
            <CardContent className="px-8 flex flex-col items-center">
              <Tabs defaultValue="pan" className="w-full">
                
                {/* Tabs matching the pale gray/white style */}
                <TabsList className="grid w-full grid-cols-2 bg-slate-200 p-1.5 rounded-xl mb-6 h-12 shadow-inner">
                  <TabsTrigger 
                    value="pan" 
                    className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm text-slate-600 font-semibold text-[15px] h-full transition-all"
                  >
                    <FileTextIcon className="w-4 h-4 mr-2 opacity-70" />
                    PAN Card
                  </TabsTrigger>
                  <TabsTrigger 
                    value="voter" 
                    className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-slate-900 text-slate-600 font-semibold text-[15px] h-full transition-all"
                  >
                    Voter ID
                  </TabsTrigger>
                </TabsList>

                {/* Content */}
                <TabsContent value="pan" className="space-y-4">
                  <div className="relative">
                    <Input 
                      placeholder="Enter PAN Number" 
                      className="h-[52px] bg-white text-black border-slate-300 rounded-xl pr-10 pl-4 focus-visible:ring-2 focus-visible:ring-[#2B6CC4] text-[15px] shadow-sm"
                    />
                    <FileTextIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-800" />
                  </div>
                  <div className="relative">
                    <Input 
                      type="password"
                      placeholder="Enter Password" 
                      className="h-[52px] bg-white text-black border-slate-300 rounded-xl pr-10 pl-4 focus-visible:ring-2 focus-visible:ring-[#2B6CC4] text-[15px] shadow-sm"
                    />
                    <EyeIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-800 cursor-pointer hover:text-black" />
                  </div>

                  {/* Buttons Stacked Vertically with specific blue #2B6CC4 styling */}
                  <div className="flex flex-col gap-3 pt-2">
                    <Button className="w-full h-[52px] bg-[#2B6CC4] hover:bg-blue-700 text-white font-semibold rounded-xl text-[16px] transition-all flex items-center justify-center shadow-lg">
                      <SmartphoneIcon className="w-5 h-5 mr-2" />
                      Request OTP
                    </Button>
                    <Link href="/dashboard" className="w-full">
                      <Button className="w-full h-[52px] bg-[#2B6CC4] hover:bg-blue-700 text-white font-semibold rounded-xl text-[16px] transition-all shadow-lg">
                        Login with Password
                      </Button>
                    </Link>
                  </div>
                </TabsContent>
                
                {/* Voter ID fallback content */}
                <TabsContent value="voter" className="space-y-4">
                  <div className="relative">
                    <Input 
                      placeholder="Enter Voter ID" 
                      className="h-[52px] bg-white text-black border-slate-300 rounded-xl pr-10 pl-4 focus-visible:ring-2 focus-visible:ring-[#2B6CC4] text-[15px] shadow-sm"
                    />
                    <FingerprintIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-800" />
                  </div>
                  <div className="relative">
                    <Input 
                      type="password"
                      placeholder="Enter Password" 
                      className="h-[52px] bg-white text-black border-slate-300 rounded-xl pr-10 pl-4 focus-visible:ring-2 focus-visible:ring-[#2B6CC4] text-[15px] shadow-sm"
                    />
                    <EyeIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-800 cursor-pointer hover:text-black" />
                  </div>

                  <div className="flex flex-col gap-3 pt-2">
                    <Button className="w-full h-[52px] bg-[#2B6CC4] hover:bg-blue-700 text-white font-semibold rounded-xl text-[16px] transition-all flex items-center justify-center shadow-lg">
                      <SmartphoneIcon className="w-5 h-5 mr-2" />
                      Request OTP
                    </Button>
                    <Link href="/dashboard" className="w-full">
                      <Button className="w-full h-[52px] bg-[#2B6CC4] hover:bg-blue-700 text-white font-semibold rounded-xl text-[16px] transition-all shadow-lg">
                        Login with Password
                      </Button>
                    </Link>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            
            <CardFooter className="flex flex-col border-t border-white/20 px-8 py-5 mt-2 space-y-4">
              <div className="flex justify-between w-full text-[13px]">
                <Link href="#" className="flex items-center text-white/90 hover:text-white transition-colors">
                  <FileTextIcon className="w-3.5 h-3.5 mr-1.5 opacity-70" /> Detail Register
                </Link>
                <Link href="#" className="text-white/90 hover:text-white transition-colors">
                  Forgot Password?
                </Link>
              </div>
              <div className="w-full text-center flex items-center justify-center pt-2">
                <Link href="#" className="flex items-center text-[13px] text-white/90 hover:text-white transition-colors">
                  <EyeIcon className="w-3.5 h-3.5 mr-1.5 opacity-70" />
                  Sign in using other methods
                  <ExternalLinkIcon className="w-3.5 h-3.5 ml-1.5 opacity-70" />
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>

      {/* Official Disclaimers Footer */}
      <footer className="absolute bottom-0 w-full text-center py-3 bg-[rgba(5,15,30,0.8)] backdrop-blur-md border-t border-white/10 z-20">
        <p className="text-[12px] text-slate-400 font-medium tracking-wide">
          Official disclaimers: National portal of India including e-services or accountabilities. Citizens, registers and for official government.
        </p>
      </footer>
    </div>
  );
}
