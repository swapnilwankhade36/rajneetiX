import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { AlertCircleIcon, CheckCircle2Icon, ClockIcon, MessageSquareIcon, ThumbsUpIcon } from 'lucide-react';

export default function CitizenActivityDashboard() {
  return (
    <div className="p-8 max-w-6xl mx-auto w-full">
      <div className="mb-8 border-b border-slate-200 pb-4">
        <h2 className="text-3xl font-serif text-[#002B5B] font-bold tracking-tight mb-2">Citizen Activity Dashboard</h2>
        <p className="text-slate-600 font-medium">Welcome back, <span className="text-slate-900 font-bold">Anil</span>! Here is an overview of your activity.</p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full lg:w-[600px] grid-cols-4 bg-white border border-slate-200 shadow-sm mb-8 h-12 p-1">
          <TabsTrigger value="overview" className="data-[state=active]:bg-[#002B5B] data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md transition-all text-xs sm:text-sm font-semibold text-slate-600">Overview</TabsTrigger>
          <TabsTrigger value="comments" className="data-[state=active]:bg-[#002B5B] data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md transition-all text-xs sm:text-sm font-semibold text-slate-600">Comments & Rating</TabsTrigger>
          <TabsTrigger value="grievance" className="data-[state=active]:bg-[#002B5B] data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md transition-all text-xs sm:text-sm font-semibold text-slate-600">Grievance</TabsTrigger>
          <TabsTrigger value="profile" className="data-[state=active]:bg-[#002B5B] data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md transition-all text-xs sm:text-sm font-semibold text-slate-600">Profile & Setting</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-slate-200 shadow-sm bg-gradient-to-br from-white to-blue-50/50">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-semibold text-slate-500">Active Grievances</CardTitle>
                <AlertCircleIcon className="w-5 h-5 text-amber-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-slate-900 mb-1">3</div>
                <p className="text-xs font-semibold text-amber-600 bg-amber-100/50 inline-block px-2 py-0.5 rounded text-amber-700">
                  +2 from last month
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm bg-gradient-to-br from-white to-green-50/50">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-semibold text-slate-500">Resolved Grievances</CardTitle>
                <CheckCircle2Icon className="w-5 h-5 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-slate-900 mb-1">12</div>
                <p className="text-xs font-semibold text-green-600 bg-green-100/50 inline-block px-2 py-0.5 rounded text-green-700">
                  85% resolution rate
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm bg-gradient-to-br from-white to-purple-50/50">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-semibold text-slate-500">Total Comments</CardTitle>
                <MessageSquareIcon className="w-5 h-5 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-slate-900 mb-1">45</div>
                <p className="text-xs font-semibold text-purple-600 bg-purple-100/50 inline-block px-2 py-0.5 rounded text-purple-700">
                  On various policies
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Details Lists */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
            
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="border-b border-slate-100 pb-4">
                <CardTitle className="text-lg font-bold text-slate-800">Recent Grievances</CardTitle>
                <CardDescription>Track the status of your reported issues</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-100">
                  <div className="p-4 hover:bg-slate-50 transition-colors flex justify-between items-center group cursor-pointer">
                    <div className="flex items-start gap-3 w-full">
                      <div className="mt-0.5 p-1.5 bg-blue-100 text-blue-600 rounded-md">
                        <AlertCircleIcon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-900 truncate">Water Supply Issue in Sector 4</p>
                        <p className="text-xs text-slate-500 mt-0.5">Reported exactly 2 days ago</p>
                      </div>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100 shrink-0 border-blue-200">
                        In Progress
                      </Badge>
                    </div>
                  </div>

                  <div className="p-4 hover:bg-slate-50 transition-colors flex justify-between items-center group cursor-pointer">
                    <div className="flex items-start gap-3 w-full">
                      <div className="mt-0.5 p-1.5 bg-green-100 text-green-600 rounded-md">
                        <CheckCircle2Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-900 truncate">Street Light not working</p>
                        <p className="text-xs text-slate-500 mt-0.5">Reported 12 days ago</p>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100 shrink-0 border-green-200">
                        Resolved
                      </Badge>
                    </div>
                  </div>

                  <div className="p-4 hover:bg-slate-50 transition-colors flex justify-between items-center group cursor-pointer">
                    <div className="flex items-start gap-3 w-full">
                      <div className="mt-0.5 p-1.5 bg-amber-100 text-amber-600 rounded-md">
                        <ClockIcon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-900 truncate">Potholes on Main Road</p>
                        <p className="text-xs text-slate-500 mt-0.5">Reported today</p>
                      </div>
                      <Badge variant="secondary" className="bg-amber-100 text-amber-700 hover:bg-amber-100 shrink-0 border-amber-200">
                        Pending
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="border-b border-slate-100 pb-4">
                <CardTitle className="text-lg font-bold text-slate-800">Recent Engagement</CardTitle>
                <CardDescription>Your public interactions and feedback</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-100">
                  <div className="p-4 hover:bg-slate-50 transition-colors flex gap-4">
                    <div className="mt-0.5 p-1.5 bg-purple-100 text-purple-600 rounded-full h-fit">
                      <MessageSquareIcon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">Commented on Education Policy 2023</p>
                      <p className="text-sm text-slate-600 mt-1 line-clamp-2">"The focus on digital literacy in rural areas is commendable, but implementation timelines are vague."</p>
                      <p className="text-xs font-medium text-slate-400 mt-2">2 days ago</p>
                    </div>
                  </div>

                  <div className="p-4 hover:bg-slate-50 transition-colors flex gap-4">
                    <div className="mt-0.5 p-1.5 bg-amber-100 text-amber-600 rounded-full h-fit">
                      <ThumbsUpIcon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">Rated MLA Performance</p>
                      <p className="text-sm text-slate-600 mt-1">Given 4/5 stars for recent infrastructure development in the constituency.</p>
                      <p className="text-xs font-medium text-slate-400 mt-2">1 week ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </TabsContent>
        {/* Empty tabs contents for other tabs (Comments, Grievance, Profile) to prevent errors and show structure */}
        <TabsContent value="comments"><div className="p-8 text-center text-slate-500 border border-dashed border-slate-300 rounded-lg">Comments module under construction</div></TabsContent>
        <TabsContent value="grievance"><div className="p-8 text-center text-slate-500 border border-dashed border-slate-300 rounded-lg">Detailed Grievance list under construction</div></TabsContent>
        <TabsContent value="profile"><div className="p-8 text-center text-slate-500 border border-dashed border-slate-300 rounded-lg">Profile settings module under construction</div></TabsContent>
      </Tabs>
    </div>
  );
}
