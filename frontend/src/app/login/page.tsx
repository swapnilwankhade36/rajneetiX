import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { KeyRoundIcon, EyeIcon, FingerprintIcon, ExternalLinkIcon, ShieldCheckIcon, CreditCardIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Login() {
  return (
    <div className="min-h-screen bg-[#050A14] flex flex-col relative overflow-hidden font-sans text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Neon Cyan Outline of India Map (Mock Graphic) */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/India_map_en.svg/800px-India_map_en.svg.png')] bg-no-repeat bg-contain opacity-20 filter invert sepia saturate-200 hue-rotate-[#00E5FF] drop-shadow-[0_0_15px_rgba(0,229,255,0.5)]" />
        
        {/* Subtle Parliament Imagery & Nodes */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-[url('https://images.unsplash.com/photo-1541904815592-cb8e670d8a59?auto=format&fit=crop&q=80')] bg-no-repeat bg-cover opacity-10 mix-blend-luminosity grayscale" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1D4ED8]/10 to-transparent" />
      </div>

      {/* Header */}
      <header className="w-full flex justify-between items-start p-6 z-10 relative">
        <div className="text-xl font-bold tracking-tight text-white">
          TransparencyGov
        </div>
        <div className="flex flex-col items-center">
            {/* Gold Ashoka Pillar Mock */}
            <div className="w-10 h-14 flex items-center justify-center font-bold text-[10px] leading-tight text-center text-[#D4AF37] mb-2 border border-[#D4AF37] rounded-full">
                Emblem
            </div>
            <p className="text-[10px] uppercase font-semibold text-slate-300 tracking-wider">
              National Portal of India | e-Verification Services
            </p>
        </div>
        <div className="w-[120px]" /> {/* Spacer for centering header text */}
      </header>

      {/* Main Content */}
      <main className="flex-1 flex w-full max-w-7xl mx-auto items-center justify-between px-12 z-10 relative">
        
        {/* Left Side Hero Text */}
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Your Voice, Verified.
          </h1>
          <p className="text-xl text-slate-300 font-medium">
            Access political accountability through secure verification.
          </p>
        </div>

        {/* Right Side Login Card */}
        <div className="w-[450px]">
          <Card className="bg-white/10 backdrop-blur-[12px] border border-white/20 shadow-2xl rounded-2xl relative pt-6 overflow-visible">
            {/* Top Decoration */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#050A14] border-2 border-[#D4AF37] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)] z-20">
              <span className="text-[#D4AF37] text-xs font-bold">Emblem</span>
            </div>

            <CardHeader className="text-center pb-2 mt-4">
              <h2 className="text-2xl font-semibold text-white tracking-tight">Citizen Login & Accountability Portal</h2>
            </CardHeader>
            
            <CardContent>
              <Tabs defaultValue="pan" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-slate-800/50 p-1 rounded-full mb-8 h-12 border border-white/10">
                  <TabsTrigger 
                    value="pan" 
                    className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black text-white/70 font-semibold"
                  >
                    <CreditCardIcon className="w-4 h-4 mr-2" />
                    PAN Card
                  </TabsTrigger>
                  <TabsTrigger 
                    value="voter" 
                    className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black text-white/70 font-semibold"
                  >
                    <FingerprintIcon className="w-4 h-4 mr-2" />
                    Voter ID
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="pan" className="space-y-5">
                  <div className="space-y-4">
                    <div className="relative">
                      <Input 
                        placeholder="Enter PAN Number" 
                        className="h-12 bg-white text-black border-slate-300 rounded-lg pr-10 focus-visible:ring-[#1D4ED8]"
                      />
                      <CreditCardIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    </div>
                    <div className="relative">
                      <Input 
                        type="password"
                        placeholder="Enter Password" 
                        className="h-12 bg-white text-black border-slate-300 rounded-lg pr-10 focus-visible:ring-[#1D4ED8]"
                      />
                      <EyeIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 cursor-pointer hover:text-slate-600" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <Button variant="outline" className="h-12 bg-transparent border-[#1D4ED8] text-[#1D4ED8] hover:bg-[#1D4ED8]/10 hover:text-[#1D4ED8] font-bold rounded-lg shadow-[0_0_10px_rgba(29,78,216,0.3)]">
                      <KeyRoundIcon className="w-5 h-5 mr-2" />
                      Request OTP
                    </Button>
                    <Button asChild className="h-12 bg-[#1D4ED8] hover:bg-blue-700 text-white font-bold rounded-lg shadow-[0_0_15px_rgba(29,78,216,0.5)]">
                      <Link href="/dashboard">Login with Password</Link>
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="voter" className="space-y-5">
                  {/* Same as PAN for mockup purposes */}
                  <div className="space-y-4">
                    <div className="relative">
                      <Input 
                        placeholder="Enter Voter ID Number" 
                        className="h-12 bg-white text-black border-slate-300 rounded-lg pr-10 focus-visible:ring-[#1D4ED8]"
                      />
                      <FingerprintIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    </div>
                    <div className="relative">
                      <Input 
                        type="password"
                        placeholder="Enter Password" 
                        className="h-12 bg-white text-black border-slate-300 rounded-lg pr-10 focus-visible:ring-[#1D4ED8]"
                      />
                      <EyeIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 cursor-pointer hover:text-slate-600" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <Button variant="outline" className="h-12 bg-transparent border-[#1D4ED8] text-[#1D4ED8] hover:bg-[#1D4ED8]/10 hover:text-[#1D4ED8] font-bold rounded-lg shadow-[0_0_10px_rgba(29,78,216,0.3)]">
                      <KeyRoundIcon className="w-5 h-5 mr-2" />
                      Request OTP
                    </Button>
                    <Button asChild className="h-12 bg-[#1D4ED8] hover:bg-blue-700 text-white font-bold rounded-lg shadow-[0_0_15px_rgba(29,78,216,0.5)]">
                      <Link href="/dashboard">Login with Password</Link>
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            
            <CardFooter className="flex flex-col border-t border-white/10 p-6 space-y-4 mt-2">
              <div className="flex justify-between w-full text-sm">
                <Link href="#" className="text-white hover:text-blue-300 font-medium transition-colors">Detail Register</Link>
                <Link href="#" className="text-white hover:text-blue-300 font-medium transition-colors">Forgot Password?</Link>
              </div>
              <div className="w-full text-center pt-2">
                <Link href="#" className="inline-flex items-center text-sm text-slate-300 hover:text-white transition-colors">
                  Sign in using other methods
                  <ExternalLinkIcon className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
