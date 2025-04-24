import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, Calendar, Video, Bell } from "lucide-react"

export default function AdminDashboardPage() {
  return (
    <main>
      <h1 className="text-3xl font-serif text-amber-900 mb-2">Admin Dashboard</h1>
      <p className="text-amber-800 mb-8">
        Welcome to the Faith Church admin dashboard. Manage your church content and members from here.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Users className="h-5 w-5 text-amber-800" />
              <span>Members</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-amber-900">248</p>
            <p className="text-sm text-amber-700">12 pending approval</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Video className="h-5 w-5 text-amber-800" />
              <span>Sermons</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-amber-900">56</p>
            <p className="text-sm text-amber-700">3 drafts</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Calendar className="h-5 w-5 text-amber-800" />
              <span>Events</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-amber-900">18</p>
            <p className="text-sm text-amber-700">4 upcoming this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <FileText className="h-5 w-5 text-amber-800" />
              <span>Blog Posts</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-amber-900">32</p>
            <p className="text-sm text-amber-700">5 drafts</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-amber-900">Recent Member Registrations</CardTitle>
            <CardDescription>New members awaiting approval</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between border-b border-amber-100 pb-3">
                  <div>
                    <p className="font-medium">John Doe {i}</p>
                    <p className="text-sm text-amber-700">john.doe{i}@example.com</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-amber-100 text-amber-800 rounded-md text-sm hover:bg-amber-200">
                      View
                    </button>
                    <button className="px-3 py-1 bg-amber-800 text-white rounded-md text-sm hover:bg-amber-900">
                      Approve
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-amber-900">Recent Notifications</CardTitle>
            <CardDescription>Latest activity on the website</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  icon: <Bell className="h-4 w-4" />,
                  text: "New prayer request from Sarah Johnson",
                  time: "10 minutes ago",
                },
                {
                  icon: <Users className="h-4 w-4" />,
                  text: "Michael Taylor commented on a testimony",
                  time: "1 hour ago",
                },
                { icon: <Calendar className="h-4 w-4" />, text: "Youth Camp event was updated", time: "3 hours ago" },
                {
                  icon: <FileText className="h-4 w-4" />,
                  text: "New blog post published: 'Finding Peace in Chaos'",
                  time: "Yesterday",
                },
              ].map((notification, i) => (
                <div key={i} className="flex gap-3 border-b border-amber-100 pb-3">
                  <div className="bg-amber-100 text-amber-800 p-2 rounded-full h-8 w-8 flex items-center justify-center">
                    {notification.icon}
                  </div>
                  <div>
                    <p className="text-sm">{notification.text}</p>
                    <p className="text-xs text-amber-700">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
