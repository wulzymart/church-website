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
import { MessageSquare, MoreHorizontal, Search } from "lucide-react"

// Mock data
const testimonies = [
  {
    id: "1",
    author: "David Martinez",
    title: "Miracle of Healing",
    testimony: "After months of prayer, God healed my chronic back pain completely!",
    category: "Healing",
    status: "published",
    date: "2024-03-15",
    likes: 45,
  },
  {
    id: "2",
    author: "Ruth Wilson",
    title: "Financial Breakthrough",
    testimony: "God provided a new job when we needed it most",
    category: "Provision",
    status: "pending",
    date: "2024-03-14",
    likes: 0,
  },
]

export default function TestimoniesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif text-amber-900 mb-2">Testimonies</h1>
          <p className="text-amber-800">Manage and moderate testimonies</p>
        </div>
        <Button className="bg-amber-800 hover:bg-amber-900">
          <MessageSquare className="mr-2 h-4 w-4" />
          Featured Testimonies
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search testimonies..." className="pl-8" />
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
            <DropdownMenuItem>Pending</DropdownMenuItem>
            <DropdownMenuItem>Featured</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Healing</DropdownMenuItem>
            <DropdownMenuItem>Provision</DropdownMenuItem>
            <DropdownMenuItem>Salvation</DropdownMenuItem>
            <DropdownMenuItem>Breakthrough</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Author</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Testimony</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Likes</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {testimonies.map((testimony) => (
              <TableRow key={testimony.id}>
                <TableCell className="font-medium">{testimony.author}</TableCell>
                <TableCell>{testimony.title}</TableCell>
                <TableCell className="max-w-md truncate">{testimony.testimony}</TableCell>
                <TableCell>{testimony.category}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      testimony.status === "published"
                        ? "bg-green-50 text-green-700 border-green-200"
                        : "bg-yellow-50 text-yellow-700 border-yellow-200"
                    }
                  >
                    {testimony.status}
                  </Badge>
                </TableCell>
                <TableCell>{testimony.date}</TableCell>
                <TableCell>{testimony.likes}</TableCell>
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
                      {testimony.status === "pending" ? (
                        <DropdownMenuItem>Approve</DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem>Unpublish</DropdownMenuItem>
                      )}
                      <DropdownMenuItem>Feature testimony</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        Delete testimony
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