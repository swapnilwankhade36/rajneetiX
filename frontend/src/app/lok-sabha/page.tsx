import { Header } from '@/components/layout/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SearchIcon, MapPinIcon, ShieldCheckIcon } from 'lucide-react';
import Image from 'next/image';

const POLITICIANS = [
  {
    id: 1,
    name: 'Amit Shah',
    party: 'Bharatiya Janata Party',
    partyColor: 'bg-[#FF9933]',
    constituency: 'Gandhinagar, Gujarat',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Amit_Shah_%28cropped%29.jpg/800px-Amit_Shah_%28cropped%29.jpg',
    verified: true,
  },
  {
    id: 2,
    name: 'Rahul Gandhi',
    party: 'Indian National Congress',
    partyColor: 'bg-[#00BFFF]',
    constituency: 'Wayanad, Kerala',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Rahul_Gandhi_2019_portrait.jpg/800px-Rahul_Gandhi_2019_portrait.jpg',
    verified: true,
  },
  {
    id: 3,
    name: 'Nitin Gadkari',
    party: 'Bharatiya Janata Party',
    partyColor: 'bg-[#FF9933]',
    constituency: 'Nagpur, Maharashtra',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Nitin_Gadkari_Official_Portrait.jpg/800px-Nitin_Gadkari_Official_Portrait.jpg',
    verified: true,
  },
  {
    id: 4,
    name: 'Shashi Tharoor',
    party: 'Indian National Congress',
    partyColor: 'bg-[#00BFFF]',
    constituency: 'Thiruvananthapuram, Kerala',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Shashi_Tharoor_2019_%28cropped%29.jpg/800px-Shashi_Tharoor_2019_%28cropped%29.jpg',
    verified: true,
  },
  {
    id: 5,
    name: 'Asaduddin Owaisi',
    party: 'AIMIM',
    partyColor: 'bg-[#008000]',
    constituency: 'Hyderabad, Telangana',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Asaduddin_Owaisi_Portrait.jpg/800px-Asaduddin_Owaisi_Portrait.jpg',
    verified: true,
  },
  {
    id: 6,
    name: 'Smriti Irani',
    party: 'Bharatiya Janata Party',
    partyColor: 'bg-[#FF9933]',
    constituency: 'Amethi, Uttar Pradesh',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Smriti_Irani_2018_%28cropped%29.jpg/800px-Smriti_Irani_2018_%28cropped%29.jpg',
    verified: true,
  }
];

export default function LokSabha() {
  return (
    <div className="min-h-screen bg-[#F4F7F6] font-sans pb-20">
      
      {/* Explicitly White Header for Lok Sabha matched to Reference */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold text-xs">Logo</div>
             <span className="text-xl font-bold text-slate-900 tracking-tight">RajneetiX</span>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-slate-600 font-medium text-sm hidden md:block">
              Date: 06-2023, 10:00 PM
            </span>
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
               <span className="font-bold text-sm text-slate-700">RJ</span>
            </div>
          </div>
        </div>
      </header>
      
      {/* Search and Filters Section */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-8 py-5 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          <div className="relative w-full md:w-[400px]">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input 
              placeholder="Search by name or constituency..." 
              className="pl-12 h-12 bg-slate-50 border-slate-200 rounded-full focus-visible:ring-[#1D4ED8]"
            />
          </div>

          <div className="flex gap-4 w-full md:w-auto">
            <Select>
              <SelectTrigger className="w-[180px] h-12 rounded-full border-slate-200 bg-slate-50">
                <SelectValue placeholder="All States" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All States</SelectItem>
                <SelectItem value="ap">Andhra Pradesh</SelectItem>
                <SelectItem value="mh">Maharashtra</SelectItem>
                <SelectItem value="up">Uttar Pradesh</SelectItem>
                <SelectItem value="guj">Gujarat</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[180px] h-12 rounded-full border-slate-200 bg-slate-50">
                <SelectValue placeholder="All Parties" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Parties</SelectItem>
                <SelectItem value="bjp">BJP</SelectItem>
                <SelectItem value="inc">INC</SelectItem>
                <SelectItem value="aap">AAP</SelectItem>
              </SelectContent>
            </Select>
          </div>

        </div>
      </div>

      {/* Main Grid */}
      <main className="max-w-[1400px] mx-auto px-8 py-10">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Lok Sabha Representatives</h1>
            <p className="text-slate-500 font-medium mt-1 text-[15px]">Select a representative to view their detailed profile, performance, and submit grievances.</p>
          </div>
          <span className="text-sm font-semibold text-slate-500 bg-slate-200/50 px-4 py-1.5 rounded-full">{POLITICIANS.length} Members</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {POLITICIANS.map((politician) => (
            <Card key={politician.id} className="overflow-hidden border border-slate-200 shadow-sm hover:border-[#D4AF37]/50 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] transition-all duration-300 rounded-[24px] bg-white group cursor-pointer relative pb-4">
               <CardContent className="p-6 pb-2">
                 {/* Top Image & Party Icon section */}
                 <div className="flex justify-between items-start mb-6 relative">
                   <div className="relative">
                     <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-slate-100 shadow-sm relative group-hover:border-[#D4AF37] transition-colors">
                       <Image 
                         src={politician.image} 
                         alt={politician.name}
                         fill
                         className="object-cover"
                         sizes="80px"
                       />
                     </div>
                     {politician.verified && (
                       // Explicit Custom 'V' Badge based on subagent feedback
                       <div className="absolute top-0 -right-2 w-6 h-6 rounded-full bg-[#D4AF37] text-white font-bold flex items-center justify-center text-xs border-2 border-white shadow-md">
                         V
                       </div>
                     )}
                   </div>
                      <div className="bg-slate-50 border border-slate-100 p-2 rounded-xl">
                         <ShieldCheckIcon className="w-6 h-6 text-slate-400" />
                     </div>
                 </div>

                 {/* Text Content */}
                 <div className="text-center md:text-left flex flex-col items-center md:items-start">
                   <h3 className="font-bold text-xl text-slate-900 leading-tight mb-2 group-hover:text-[#1D4ED8] transition-colors">{politician.name}</h3>
                   <div className="flex items-center gap-2 mb-4">
                     <span className={`w-2 h-2 rounded-full ${politician.partyColor}`}></span>
                     <span className="text-sm text-slate-600 font-medium">{politician.party}</span>
                   </div>
                   
                   <div className="flex items-center text-slate-500 mb-6 bg-slate-50 rounded-lg p-3 border border-slate-100 w-full whitespace-nowrap overflow-hidden text-ellipsis">
                     <MapPinIcon className="w-4 h-4 mr-2 text-[#1D4ED8] shrink-0" />
                     <span className="text-sm font-semibold truncate leading-none pt-0.5">Constituency: {politician.constituency}</span>
                   </div>

                   {/* Distinct rounded-full button centered at the bottom of the card */}
                   <div className="w-full flex justify-center border-t border-slate-100 pt-5">
                     <Button className="w-2/3 bg-slate-900 hover:bg-[#1D4ED8] text-white font-bold h-11 rounded-full shadow-md transition-all">
                       View Profile
                     </Button>
                   </div>
                 </div>
               </CardContent>
            </Card>
          ))}
        </div>
      </main>
      
      {/* Official Disclaimers Footer */}
      <footer className="fixed bottom-0 w-full text-center py-4 bg-white border-t border-slate-200 z-20 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <p className="text-xs text-slate-500 font-medium tracking-wide">
          &copy; Government of India | Official Disclaimers and Privacy Policies apply. Information displayed is sourced from public parliamentary records.
        </p>
      </footer>
    </div>
  );
}
