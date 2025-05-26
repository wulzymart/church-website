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
import { MoreHorizontal, Search, Upload } from "lucide-react"

// Mock data
const sermons = [
  {
    id: "1",
    title: "Walking in God's Light",
    preacher: "Pastor Ayo",
    series: "Faith Foundations",
    date: "2024-03-15",
    duration: "45:30",
    views: 156,
    status: "published",
  },
  {
    id: "2",
    title: "The Power of Prayer",
    preacher: "Pastor Elliot",
    series: "Prayer Series",
    date: "2024-03-08",
    duration: "38:15",
    views: 203,
    status: "processing",
  },
]

export default function SermonsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif text-amber-900 mb-2">Sermons</h1>
          <p className="text-amber-800">Manage and upload sermon recordings</p>
        </div>
        <Button className="bg-amber-800 hover:bg-amber-900">
          <Upload className="mr-2 h-4 w-4" />
          Upload Sermon
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search sermons..." className="pl-8" />
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Filter</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Published</DropdownMenuItem>
            <DropdownMenuItem>Processing</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Filter by Series</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Faith Foundations</DropdownMenuItem>
            <DropdownMenuItem>Prayer Series</DropdownMenuItem>
            <DropdownMenuItem>Life Application</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Preacher</TableHead>
              <TableHead>Series</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Views</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sermons.map((sermon) => (
              <TableRow key={sermon.id}>
                <TableCell className="font-medium">{sermon.title}</TableCell>
                <TableCell>{sermon.preacher}</TableCell>
                <TableCell>{sermon.series}</TableCell>
                <TableCell>{sermon.date}</TableCell>
                <TableCell>{sermon.duration}</TableCell>
                <TableCell>{sermon.views}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      sermon.status === "published"
                        ? "bg-green-50 text-green-700 border-green-200"
                        : "bg-yellow-50 text-yellow-700 border-yellow-200"
                    }
                  >
                    {sermon.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit details</DropdownMenuItem>
                      <DropdownMenuItem>View sermon</DropdownMenuItem>
                      <DropdownMenuItem>Download</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        Delete sermon
                      </DropdownMenuItem>
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