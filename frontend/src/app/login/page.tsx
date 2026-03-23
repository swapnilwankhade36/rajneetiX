import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FileIcon, SmartphoneIcon, EyeOffIcon, ExternalLinkIcon, ShieldAlertIcon } from 'lucide-react';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-slate-900">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596414086775-3e3215086d44?auto=format&fit=crop&q=80')" }}
      />
      
      {/* Left side graphical map overlay (simulated with a gradient/glow for now) */}
      <div className="absolute left-0 top-0 bottom-0 w-[50%] z-0 pointer-events-none bg-gradient-to-r from-primary/30 to-transparent flex items-center justify-center">
        {/* We would place a vector map of India here, for now using a glowing placeholder area */}
        <div className="w-[80%] h-[80%] rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <header className="relative z-10 w-full py-6 px-12 flex justify-between items-start">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <span className="bg-white/10 p-2 rounded-md backdrop-blur-sm border border-white/20">
              <ShieldAlertIcon className="w-6 h-6 text-white" />
            </span>
            TransparencyGov
          </h1>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] border border-primary/20 mb-2 overflow-hidden">
             {/* Emblem placeholder */}
             <div className="text-primary text-xs font-bold text-center leading-tight">National<br/>Emblem</div>
          </div>
          <p className="text-white text-sm font-medium tracking-wide drop-shadow-md">
            National Portal of India | e-Verification Services
          </p>
        </div>
        
        {/* Invisible right spacer to center the top emblem if it's supposed to be center. 
            Actually the reference shows the emblem at top center. Let's adjust header layout.
            Wait, the reference UI has "TransparencyGov" on the left, Embelem in the top center, and right is flag?
            Yes, Indian flag is visible in the background mostly. 
        */}
      </header>

      <main className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-between px-12 lg:px-24">
        
        <div className="flex flex-col max-w-lg mt-12 lg:mt-0 text-white drop-shadow-lg">
          <h2 className="text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
            Your Voice,<br />Verified.
          </h2>
          <p className="text-xl lg:text-2xl font-light text-slate-200">
            Access political accountability through secure verification.
          </p>
        </div>

        {/* Glassmorphic Login Card */}
        <div className="w-full max-w-md mt-16 lg:mt-0">
          <div className="relative">
            {/* National emblem overlapping card */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 w-20 h-20 bg-[#fffdf0]/90 backdrop-blur-md rounded-full shadow-xl border border-amber-200/40 flex items-center justify-center p-2">
              <div className="rounded-full border border-amber-500 w-full h-full flex items-center justify-center text-[10px] text-amber-700 font-bold text-center leading-tight">
                Emblem
              </div>
            </div>

            <Card className="pt-12 pb-6 px-6 bg-white/15 backdrop-blur-xl border-white/20 shadow-2xl text-white rounded-2xl relative z-10">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold tracking-tight text-white mb-1">
                  Citizen Login &<br/>Accountability Portal
                </CardTitle>
              </CardHeader>

              <CardContent>
                <Tabs defaultValue="pan" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-white/20 text-white/80 p-1 mb-6 rounded-xl">
                    <TabsTrigger value="pan" className="data-[state=active]:bg-white data-[state=active]:text-primary rounded-lg font-semibold py-2.5 shadow-sm transition-all flex gap-2 items-center">
                      <FileIcon className="w-4 h-4" /> PAN Card
                    </TabsTrigger>
                    <TabsTrigger value="voterid" className="data-[state=active]:bg-white data-[state=active]:text-primary rounded-lg font-semibold py-2.5 shadow-sm transition-all">
                      Voter ID
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="pan" className="mt-0 space-y-4">
                    <div className="relative group">
                      <Input 
                        placeholder="Enter PAN Number" 
                        className="h-12 pl-4 pr-10 bg-white text-slate-900 border-white/40 focus:border-primary focus:ring-primary rounded-xl font-medium shadow-inner placeholder:text-slate-400 uppercase"
                      />
                      <FileIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
                    </div>
                    
                    <div className="relative group">
                      <Input 
                        type="password"
                        placeholder="Enter Password" 
                        className="h-12 pl-4 pr-10 bg-white text-slate-900 border-white/40 focus:border-primary focus:ring-primary rounded-xl font-medium shadow-inner placeholder:text-slate-400"
                      />
                      <EyeOffIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer hover:text-slate-600 transition-colors" />
                    </div>

                    <div className="flex flex-col gap-3 mt-8">
                      <Button variant="outline" className="h-12 rounded-xl bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white font-semibold text-base transition-all gap-2">
                        <SmartphoneIcon className="w-5 h-5" />
                        Request OTP
                      </Button>
                      <Link href="/dashboard" className="w-full">
                        <Button className="w-full h-12 rounded-xl bg-[#004A99] hover:bg-[#003875] text-white font-semibold text-base shadow-lg transition-all border border-blue-400/30">
                          Login with Password
                        </Button>
                      </Link>
                    </div>
                  </TabsContent>

                  <TabsContent value="voterid" className="mt-0 space-y-4">
                    <div className="relative group">
                      <Input 
                        placeholder="Enter Voter ID" 
                        className="h-12 pl-4 pr-10 bg-white text-slate-900 border-white/40 focus:border-primary focus:ring-primary rounded-xl font-medium shadow-inner placeholder:text-slate-400 uppercase"
                      />
                      <FileIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
                    </div>
                    {/* Simplified for Voter ID tab */}
                    <Link href="/dashboard" className="w-full block mt-8">
                      <Button className="w-full h-12 rounded-xl bg-[#004A99] hover:bg-[#003875] text-white font-semibold text-base shadow-lg">
                        Request OTP
                      </Button>
                    </Link>
                  </TabsContent>
                </Tabs>
              </CardContent>

              <CardFooter className="flex flex-col gap-4 border-t border-white/10 pt-6 mt-4 pb-0 items-center text-sm font-medium text-white/80">
                <div className="flex justify-between w-full px-2">
                  <a href="#" className="flex gap-1 items-center hover:text-white transition-colors">
                    <FileIcon className="w-3.5 h-3.5" /> Detail Register
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    Forgot Password?
                  </a>
                </div>
                <a href="#" className="flex gap-1.5 items-center bg-black/20 px-4 py-2 rounded-full hover:bg-black/30 transition-colors text-white mt-1 border border-white/10 shadow-sm">
                  <EyeOffIcon className="w-3.5 h-3.5" /> Sign in using other methods <ExternalLinkIcon className="w-3.5 h-3.5 ml-1" />
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      <footer className="relative z-10 w-full py-4 px-8 text-center bg-black/30 backdrop-blur-md border-t border-white/10">
        <p className="text-white/60 text-xs tracking-wide">
          Official disclaimers: National portal of India including e-Verification features is accountable. Citizens must register officially.
        </p>
      </footer>
    </div>
  );
}
