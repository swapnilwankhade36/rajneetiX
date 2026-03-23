import { Header } from '@/components/layout/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { BadgeCheckIcon, LocateIcon } from 'lucide-react';
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
    <div className="min-h-screen bg-[#F4F7F6] font-sans flex flex-col">
      <Header variant="light" />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-6 flex flex-col">
        {/* Title and Date */}
        <div className="flex justify-between items-end mb-4 border-b border-slate-200 pb-2">
          <h2 className="text-3xl font-serif text-slate-800 tracking-tight">Lok Sabha</h2>
          <span className="text-sm font-medium text-slate-500">Date: 06-2023, 10:00 PM</span>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-600">State:</span>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px] bg-white border-slate-300">
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
            <span className="text-sm font-medium text-slate-600">Party:</span>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px] bg-white border-slate-300">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {politicians.map((pol) => (
            <Card key={pol.id} className="bg-white border-slate-200 hover:border-amber-300 transition-colors shadow-sm relative overflow-hidden flex flex-col group">
              {/* V indicator (Verified/Terms) */}
              {pol.verified && (
                <div className="absolute top-2 right-2 flex items-center justify-center">
                  <span className="text-xl font-serif text-amber-600 font-bold drop-shadow-sm">V</span>
                </div>
              )}
              {/* Dummy party logo placeholder */}
              {!pol.verified && (
                <div className="absolute top-2 right-2 opacity-50 text-slate-400">
                  <LocateIcon className="w-5 h-5" />
                </div>
              )}

              <CardContent className="p-4 flex flex-col items-center flex-1">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full overflow-hidden bg-slate-200 mb-4 border border-slate-100 shadow-inner shrink-0 relative">
                  <Image src={pol.image} alt={pol.name} fill className="object-cover" />
                </div>

                {/* Info */}
                <div className="text-center w-full">
                  <h3 className="font-bold text-slate-900 text-[13px] leading-tight mb-1 truncate px-1" title={pol.name}>
                    {pol.name}
                  </h3>
                  
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <span className={`w-2 h-2 rounded-full ${pol.color}`}></span>
                    <span className="text-xs font-bold text-slate-700">{pol.party}</span>
                  </div>
                  
                  <p className="text-[11px] text-slate-500 font-medium">
                    Constituency: <span className="text-slate-800">{pol.constituency}</span>
                  </p>
                </div>
              </CardContent>
              <div className="p-3 pt-0 mt-auto">
                <Button variant="outline" className="w-full text-xs h-8 border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold rounded-md">
                  View Profile
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#1b2531] text-white/70 py-3 px-6 text-xs text-center border-t border-slate-800 mt-auto shadow-inner">
        &copy; Government of India. | All relevant disclaimers are technical and applied under relevant local authorities.
      </footer>
    </div>
  );
}
