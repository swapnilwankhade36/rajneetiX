import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { KeyRoundIcon, EyeIcon, FingerprintIcon, ExternalLinkIcon, ShieldCheckIcon, CreditCardIcon } from 'lucide-react';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="min-h-screen bg-[#050A14] flex flex-col relative overflow-hidden font-sans text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Government Building Background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541904815592-cb8e670d8a59?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay" />
        
        {/* Glowing light-blue India map outline */}
        <div className="absolute top-1/2 left-[30%] -translate-y-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/e4/India_map_en.svg')] bg-no-repeat bg-center bg-contain opacity-30 drop-shadow-[0_0_30px_rgba(0,229,255,1)] filter brightness-[2] hue-rotate-[180deg] saturate-[300]" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#050A14] via-[#050A14]/80 to-[#1D4ED8]/10" />
      </div>

      {/* Header */}
      <header className="w-full flex justify-between items-start p-6 z-10 relative">
        <div className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          TransparencyGov
        </div>
        
        <div className="flex flex-col items-center">
            {/* Gold Ashoka Pillar Mock */}
            <div className="w-12 h-16 flex items-center justify-center font-bold text-[10px] leading-tight text-center text-[#D4AF37] mb-2 border-2 border-[#D4AF37] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                Emblem
            </div>
            <p className="text-[11px] uppercase font-bold text-slate-200 tracking-[0.2em] drop-shadow-md">
              National Portal of India | e-Verification Services
            </p>
        </div>
        <div className="w-[200px]" /> {/* Spacer */}
      </header>

      {/* Main Content */}
      <main className="flex-1 flex w-full max-w-7xl mx-auto items-center justify-between px-12 z-10 relative pb-10">
        
        {/* Left Side Hero Text */}
        <div className="max-w-xl">
          <h1 className="text-[5rem] font-bold text-white mb-6 leading-[1.1] drop-shadow-lg tracking-tight">
            Your Voice,<br />
            <span className="text-[#00E5FF] drop-shadow-[0_0_20px_rgba(0,229,255,0.5)]">Verified.</span>
          </h1>
          <p className="text-xl text-slate-300 font-medium max-w-md leading-relaxed">
            Access political accountability through secure verification.
          </p>
        </div>

        {/* Right Side Login Card */}
        <div className="w-[480px]">
          <Card className="bg-white/10 backdrop-blur-[16px] border border-white/20 shadow-2xl rounded-[24px] relative pt-8 pb-4">
            {/* Top Decoration */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#050A14] border-2 border-[#D4AF37] rounded-full flex flex-col items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.6)] z-20">
              <span className="text-[#D4AF37] text-xs font-bold leading-none">Emblem</span>
            </div>

            <CardHeader className="text-center pb-6 mt-4">
              <h2 className="text-[26px] font-bold text-white tracking-tight drop-shadow-sm">Citizen Login & Accountability Portal</h2>
            </CardHeader>
            
            <CardContent className="px-8">
              <Tabs defaultValue="pan" className="w-full">
                
                <TabsList className="grid w-full grid-cols-2 bg-black/40 p-1.5 rounded-full mb-8 h-14 border border-white/10 shadow-inner">
                  <TabsTrigger 
                    value="pan" 
                    className="rounded-full data-[state=active]:bg-white data-[state=active]:text-slate-900 text-white/70 font-bold text-sm h-full transition-all"
                  >
                    <CreditCardIcon className="w-4 h-4 mr-2" />
                    PAN Card
                  </TabsTrigger>
                  <TabsTrigger 
                    value="voter" 
                    className="rounded-full data-[state=active]:bg-white data-[state=active]:text-slate-900 text-white/70 font-bold text-sm h-full transition-all bg-transparent"
                  >
                    <FingerprintIcon className="w-4 h-4 mr-2" />
                    Voter ID
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="pan" className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <Input 
                        placeholder="Enter PAN Number" 
                        className="h-14 bg-white text-black border-slate-300 rounded-xl pr-10 pl-4 focus-visible:ring-2 focus-visible:ring-[#1D4ED8] text-base font-medium"
                      />
                      <CreditCardIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    </div>
                    <div className="relative">
                      <Input 
                        type="password"
                        placeholder="Enter Password" 
                        className="h-14 bg-white text-black border-slate-300 rounded-xl pr-10 pl-4 focus-visible:ring-2 focus-visible:ring-[#1D4ED8] text-base font-medium"
                      />
                      <EyeIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 cursor-pointer hover:text-slate-600" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <Button className="h-14 bg-[#1D4ED8] hover:bg-blue-700 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(29,78,216,0.6)] text-base transition-all">
                      <KeyRoundIcon className="w-5 h-5 mr-2" />
                      Request OTP
                    </Button>
                    <Button asChild className="h-14 bg-[#1D4ED8] hover:bg-blue-700 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(29,78,216,0.6)] text-base transition-all">
                      <Link href="/dashboard">Login with Password</Link>
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="voter" className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <Input 
                        placeholder="Enter Voter ID Number" 
                        className="h-14 bg-white text-black border-slate-300 rounded-xl pr-10 pl-4 focus-visible:ring-2 focus-visible:ring-[#1D4ED8] text-base font-medium"
                      />
                      <FingerprintIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    </div>
                    <div className="relative">
                      <Input 
                        type="password"
                        placeholder="Enter Password" 
                        className="h-14 bg-white text-black border-slate-300 rounded-xl pr-10 pl-4 focus-visible:ring-2 focus-visible:ring-[#1D4ED8] text-base font-medium"
                      />
                      <EyeIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 cursor-pointer hover:text-slate-600" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <Button className="h-14 bg-[#1D4ED8] hover:bg-blue-700 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(29,78,216,0.6)] text-base transition-all">
                      <KeyRoundIcon className="w-5 h-5 mr-2" />
                      Request OTP
                    </Button>
                    <Button asChild className="h-14 bg-[#1D4ED8] hover:bg-blue-700 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(29,78,216,0.6)] text-base transition-all">
                      <Link href="/dashboard">Login with Password</Link>
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            
            <CardFooter className="flex flex-col border-t border-white/10 px-8 py-6 space-y-5 mt-4">
              <div className="flex justify-between w-full text-[15px]">
                <Link href="#" className="text-white hover:text-[#00E5FF] font-semibold transition-colors">Detail Register</Link>
                <Link href="#" className="text-white hover:text-[#00E5FF] font-semibold transition-colors">Forgot Password?</Link>
              </div>
              <div className="w-full text-center pt-2">
                <Link href="#" className="inline-flex items-center text-[15px] font-medium text-slate-300 hover:text-white transition-colors">
                  Sign in using other methods
                  <ExternalLinkIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>

      {/* Official Disclaimers Footer */}
      <footer className="absolute bottom-0 w-full text-center py-4 bg-black/40 backdrop-blur-sm border-t border-white/10 z-20">
        <p className="text-xs text-slate-400 font-medium tracking-wide">
          &copy; Government of India | Official Disclaimers and Privacy Policies apply. Unauthorized access is strictly prohibited.
        </p>
      </footer>
    </div>
  );
}
