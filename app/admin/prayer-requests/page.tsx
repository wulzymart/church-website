import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { HandIcon as PrayingHands, MoreHorizontal, Search } from "lucide-react"

// Mock data
const prayerRequests = [
  {
    id: "1",
    requester: "Sarah Johnson",
    type: "Personal",
    request: "Please pray for my upcoming surgery next week",
    status: "active",
    date: "2024-03-15",
    prayerCount: 24,
  },
  {
    id: "2",
    requester: "Michael Taylor",
    type: "Family",
    request: "Praying for my son's college applications",
    status: "answered",
    date: "2024-03-10",
    prayerCount: 56,
  },
]

export default function PrayerRequestsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif text-amber-900 mb-2">Prayer Requests</h1>
          <p className="text-amber-800">Manage and respond to prayer requests</p>
        </div>
        <Button className="bg-amber-800 hover:bg-amber-900">
          <PrayingHands className="mr-2 h-4 w-4" />
          Prayer Report
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search prayer requests..." className="pl-8" />
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Filter</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Active</DropdownMenuItem>
            <DropdownMenuItem>Answered</DropdownMenuItem>
            <DropdownMenuItem>Archived</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Filter by Type</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Personal</DropdownMenuItem>
            <DropdownMenuItem>Family</DropdownMenuItem>
            <DropdownMenuItem>Health</DropdownMenuItem>
            <DropdownMenuItem>Financial</DropdownMenuItem>
            <DropdownMenuItem>Spiritual</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Requester</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Request</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Prayer Count</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {prayerRequests.map((request) => (
              <TableRow key={request.id}>
                <TableCell className="font-medium">{request.requester}</TableCell>
                <TableCell>{request.type}</TableCell>
                <TableCell className="max-w-md truncate">{request.request}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      request.status === "active"
                        ? "bg-blue-50 text-blue-700 border-blue-200"
                        : "bg-green-50 text-green-700 border-green-200"
                    }
                  >
                    {request.status}
                  </Badge>
                </TableCell>
                <TableCell>{request.date}</TableCell>
                <TableCell>{request.prayerCount}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>Mark as answered</DropdownMenuItem>
                      <DropdownMenuItem>Send encouragement</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Archive request</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}