import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SmartphoneIcon, EyeOffIcon, FingerprintIcon, ExternalLinkIcon, FileTextIcon, IdCardIcon, EyeIcon } from 'lucide-react';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="min-h-screen bg-[#061225] flex flex-col relative overflow-hidden font-sans text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Government Building Background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541904815592-cb8e670d8a59?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center bg-no-repeat opacity-50 mix-blend-overlay" />
        
        {/* Glowing light-blue India map outline */}
        <div className="absolute top-[50%] left-[20%] -translate-y-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/e4/India_map_en.svg')] bg-no-repeat bg-center bg-contain opacity-40 drop-shadow-[0_0_15px_rgba(0,180,255,1)] filter brightness-[2] hue-rotate-[180deg] saturate-[300] mix-blend-screen" />
        
        {/* Vertical lines and nodes typical of the right side network background */}
        <div className="absolute right-0 top-0 bottom-0 w-[400px] bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover opacity-20 mix-blend-screen" />
      </div>

      {/* Top Header */}
      <div className="absolute top-0 w-full z-20 flex flex-col items-center">
        {/* TransparencyGov is at the top left */}
        <div className="absolute top-6 left-8 text-[22px] font-bold tracking-tight text-white drop-shadow-md">
          TransparencyGov
        </div>
        
        {/* Emblem at the top center */}
        <div className="mt-2 flex flex-col items-center z-30">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/800px-Emblem_of_India.svg.png" alt="Emblem of India" className="h-[75px] w-auto drop-shadow-lg" />
          <p className="text-[10px] font-bold text-black mt-1">सत्यमेव जयते</p>
        </div>

        {/* Horizontal strip */}
        <div className="w-full bg-[#f4f6f8]/90 backdrop-blur-sm h-[32px] mt-1 flex items-center justify-center shadow-sm">
          <p className="text-[14px] font-sans text-slate-800 tracking-wide font-medium">
            National Portal of India <span className="text-slate-400 mx-1">|</span> e-Verification Services
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex w-full max-w-[1400px] mx-auto items-center justify-between px-12 z-10 relative pt-20 pb-20 mt-10">
        
        {/* Left Side Hero Text */}
        <div className="max-w-2xl mt-12">
          <h1 className="text-[3.5rem] font-bold text-white mb-4 leading-[1.1] drop-shadow-lg tracking-tight whitespace-nowrap">
            Your Voice, Verified.
          </h1>
          <p className="text-[22px] text-slate-200/90 font-medium max-w-lg leading-snug drop-shadow-md">
            Access political accountability<br/>through secure verification.
          </p>
        </div>

        {/* Right Side Login Card */}
        <div className="w-[480px]">
          <Card className="bg-white/30 backdrop-blur-xl border border-blue-200/40 shadow-[0_0_50px_rgba(0,180,255,0.2)] rounded-[16px] relative pt-10 pb-4 overflow-visible px-4">
            
            {/* Overlapping Top Emblem */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-b from-[#FFFBEA] to-[#F1DE92] border-2 border-white rounded-full flex flex-col items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] z-20">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/800px-Emblem_of_India.svg.png" alt="Emblem" className="h-[46px] w-auto drop-shadow-md pb-1" />
              <p className="text-[5px] font-bold text-black absolute bottom-2">सत्यमेव जयते</p>
            </div>

            <CardHeader className="text-center pb-6">
              <h2 className="text-[22px] font-bold text-black tracking-tight drop-shadow-sm mt-2 leading-[1.2]">
                Citizen Login &<br/>Accountability Portal
              </h2>
            </CardHeader>
            
            <CardContent className="px-4 flex flex-col items-center">
              <Tabs defaultValue="pan" className="w-full">
                
                {/* Tabs matching the pale gray/white style */}
                <TabsList className="grid w-full grid-cols-2 bg-slate-200/80 p-1 rounded-xl mb-6 h-12 shadow-inner">
                  <TabsTrigger 
                    value="pan" 
                    className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm text-slate-600 font-semibold text-[15px] h-full transition-all flex items-center justify-center"
                  >
                    <IdCardIcon className="w-4 h-4 mr-2 opacity-70" />
                    PAN Card
                  </TabsTrigger>
                  <TabsTrigger 
                    value="voter" 
                    className="rounded-lg data-[state=active]:bg-transparent data-[state=active]:text-slate-900 text-slate-600 hover:text-slate-800 font-semibold text-[15px] h-full transition-all flex items-center justify-center"
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
                    <IdCardIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  </div>
                  <div className="relative">
                    <Input 
                      type="password"
                      placeholder="Enter Password" 
                      className="h-[52px] bg-white text-black border-slate-300 rounded-xl pr-10 pl-4 focus-visible:ring-2 focus-visible:ring-[#2B6CC4] text-[15px] shadow-sm"
                    />
                    <EyeOffIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 cursor-pointer hover:text-black" />
                  </div>

                  {/* Buttons Stacked Vertically with specific blue #2B6CC4 styling */}
                  <div className="flex flex-col gap-3 pt-2">
                    <Button className="w-full h-[52px] bg-[#2B6CC4] hover:bg-blue-700 text-white font-semibold rounded-xl text-[16px] transition-all flex items-center justify-center shadow-lg border border-blue-500/50">
                      <SmartphoneIcon className="w-5 h-5 mr-2" />
                      Request OTP
                    </Button>
                    <Link href="/dashboard" className="w-full">
                      <Button className="w-full h-[52px] bg-[#2B6CC4] hover:bg-blue-700 text-white font-semibold rounded-xl text-[16px] transition-all shadow-lg border border-blue-500/50">
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
                    <FingerprintIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  </div>
                  <div className="relative">
                    <Input 
                      type="password"
                      placeholder="Enter Password" 
                      className="h-[52px] bg-white text-black border-slate-300 rounded-xl pr-10 pl-4 focus-visible:ring-2 focus-visible:ring-[#2B6CC4] text-[15px] shadow-sm"
                    />
                    <EyeOffIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 cursor-pointer hover:text-black" />
                  </div>

                  <div className="flex flex-col gap-3 pt-2">
                    <Button className="w-full h-[52px] bg-[#2B6CC4] hover:bg-blue-700 text-white font-semibold rounded-xl text-[16px] transition-all flex items-center justify-center shadow-lg border border-blue-500/50">
                      <SmartphoneIcon className="w-5 h-5 mr-2" />
                      Request OTP
                    </Button>
                    <Link href="/dashboard" className="w-full">
                      <Button className="w-full h-[52px] bg-[#2B6CC4] hover:bg-blue-700 text-white font-semibold rounded-xl text-[16px] transition-all shadow-lg border border-blue-500/50">
                        Login with Password
                      </Button>
                    </Link>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            
            <CardFooter className="flex flex-col border-t border-white/20 px-4 py-5 mt-2 space-y-4">
              <div className="flex justify-between w-full text-[13px] text-white font-medium">
                <Link href="#" className="flex items-center hover:text-slate-200 transition-colors">
                  <FileTextIcon className="w-4 h-4 mr-1.5" /> Detail Register
                </Link>
                <Link href="#" className="hover:text-slate-200 transition-colors">
                  Forgot Password?
                </Link>
              </div>
              <div className="w-full text-center flex items-center justify-center pt-2">
                <Link href="#" className="flex items-center text-[13px] text-white font-medium hover:text-slate-200 transition-colors tracking-wide">
                  <EyeIcon className="w-4 h-4 mr-1.5" />
                  Sign in using other methods
                  <ExternalLinkIcon className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>

      {/* Official Disclaimers Footer */}
      <footer className="absolute bottom-0 w-full text-center py-2 bg-[#050f1e]/90 backdrop-blur-md border-t border-white/10 z-20">
        <p className="text-[12px] text-slate-400 font-medium tracking-wide">
          Official disclaimers: Natiol and spoce of India siiincluding: ovennocoudund:t or accoatablities. | Citizzars, registers andefor official government.
        </p>
      </footer>
    </div>
  );
}
