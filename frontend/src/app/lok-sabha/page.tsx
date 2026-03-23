import { Header } from '@/components/layout/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { LocateIcon } from 'lucide-react';
import Image from 'next/image';

const politicians = [
  { id: 1, name: 'Dr. Priya Sharma', party: 'BJP', color: 'bg-orange-500', constituency: 'Uttar Pradesh', verified: false, image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150' },
  { id: 2, name: 'Sh. Ramesh Kumar', party: 'INC', color: 'bg-blue-500', constituency: 'Rajasthan', verified: false, image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=150&h=150' },
  { id: 3, name: 'Smt. Lakshmi Singh', party: 'AAP', color: 'bg-yellow-500', constituency: 'Delhi', verified: true, image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150' },
  { id: 4, name: 'Shri Anand Patel', party: 'SP', color: 'bg-red-600', constituency: 'Uttar Pradesh', verified: true, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150' },
  { id: 5, name: 'Dr. Neha Goyal', party: 'AITC', color: 'bg-green-600', constituency: 'West Bengal', verified: false, image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=150&h=150' },
  { id: 6, name: 'Shri Vikrant Deshmukh', party: 'SHS', color: 'bg-orange-600', constituency: 'Maharashtra', verified: true, image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150' },
  { id: 7, name: 'Prof. Geeta Rao', party: 'TRS', color: 'bg-pink-600', constituency: 'Telangana', verified: true, image: 'https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?auto=format&fit=crop&q=80&w=150&h=150' },
  { id: 8, name: 'Shri Sanjay Singh', party: 'YSRCP', color: 'bg-blue-700', constituency: 'Andhra Pradesh', verified: false, image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150' },
  { id: 9, name: 'Smt. Anjali Gupta', party: 'CPM', color: 'bg-red-700', constituency: 'Kerala', verified: false, image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150' },
  { id: 10, name: 'Shri Abdul Khan', party: 'RJD', color: 'bg-green-700', constituency: 'Bihar', verified: false, image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=150&h=150' },
  { id: 11, name: 'Shri Praveen Jadhav', party: 'JDS', color: 'bg-green-800', constituency: 'Karnataka', verified: false, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150' },
  { id: 12, name: 'Shri Rajesh Reddy', party: 'TDP', color: 'bg-yellow-400', constituency: 'Andhra Pradesh', verified: false, image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150' },
];

export default function LokSabha() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans flex flex-col">
      <Header variant="light" />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-10 py-6 flex flex-col">
        {/* Title and Date */}
        <div className="flex justify-between items-end mb-4 border-b border-slate-200 pb-2">
          <h2 className="text-3xl font-serif text-slate-800 tracking-tight font-bold">Lok Sabha</h2>
          <span className="text-sm font-medium text-slate-600">Date: 06-2023, 10:00 PM</span>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-700">State:</span>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px] bg-white border-slate-300 shadow-sm focus:ring-0">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="up">Uttar Pradesh</SelectItem>
                <SelectItem value="mh">Maharashtra</SelectItem>
                <SelectItem value="dl">Delhi</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-700">Party:</span>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px] bg-white border-slate-300 shadow-sm focus:ring-0">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="bjp">BJP</SelectItem>
                <SelectItem value="inc">INC</SelectItem>
                <SelectItem value="aap">AAP</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Grid of Politicians */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {politicians.map((pol) => (
            <Card key={pol.id} className="bg-white border-[#D4AF37] border-opacity-70 shadow-sm relative overflow-hidden flex flex-col rounded-xl">
              
              <CardContent className="p-5 flex flex-col items-center flex-1 relative">
                
                {/* Party icon placeholder in top right of text area */}
                <div className="absolute top-4 right-4 text-slate-400 opacity-60">
                   <LocateIcon className="w-5 h-5" />
                </div>

                {/* Avatar */}
                <div className="w-20 h-20 rounded-full overflow-hidden bg-slate-200 mb-4 shadow-sm border border-slate-100 shrink-0 relative">
                  <Image src={pol.image} alt={pol.name} fill className="object-cover" />
                  
                  {/* Verified 'V' badge pinned to top-right of the avatar */}
                  {pol.verified && (
                    <div className="absolute top-0 right-0 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-[#D4AF37] font-serif font-bold text-sm leading-none pl-0.5">V</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="text-center w-full">
                  <h3 className="font-bold text-slate-900 text-[14px] leading-snug mb-2 truncate" title={pol.name}>
                    {pol.name}
                  </h3>
                  
                  <div className="flex items-center justify-center gap-1.5 mb-1.5">
                    <span className={`w-2 h-2 rounded-full ${pol.color} shadow-sm`}></span>
                    <span className="text-[11px] font-bold text-slate-700 tracking-wider uppercase">{pol.party}</span>
                  </div>
                  
                  <p className="text-[11px] text-slate-500 font-medium">
                    Constituency: <br/> <span className="text-slate-800 font-semibold">{pol.constituency}</span>
                  </p>
                </div>
              </CardContent>
              <div className="p-4 pt-0 mt-auto">
                <Button variant="outline" className="w-full text-xs h-8 border-slate-500 text-slate-800 hover:bg-slate-50 font-bold rounded-md bg-white">
                  View Profile
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#1F2937] text-slate-400 py-4 px-6 text-[11px] text-center mt-auto border-t border-slate-800">
        &copy; Government of India | All internet disclaimers are technical and applied under relevant local authorities.
      </footer>
    </div>
  );
}
