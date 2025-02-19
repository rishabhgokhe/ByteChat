"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import {
  Bell,
  Calendar,
  ChevronDown,
  FileText,
  MessageSquare,
  MoreVertical,
  Plus,
  Search,
  Send,
  Settings,
  Smile,
  Star,
  Users2,
} from "lucide-react"

export default function ChatInterface() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex h-screen bg-[#2B55CF] text-foreground">
      {/* Left Sidebar */}
      <div className="w-16 flex flex-col items-center py-4 space-y-8">
        <div className="w-8 h-8 bg-white rounded-full" />
        <nav className="flex flex-col items-center space-y-6">
          <Button variant="ghost" size="icon" className="text-white hover:bg-blue-600">
            <FileText className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-blue-600">
            <Calendar className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-blue-600">
            <MessageSquare className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-blue-600">
            <Bell className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-blue-600">
            <Users2 className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-blue-600">
            <Settings className="h-6 w-6" />
          </Button>
        </nav>
      </div>

      {/* Chat List */}
      <div className="w-72 bg-white rounded-l-3xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">Chat</h1>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>

        <Button variant="outline" className="w-full justify-start mb-4 gap-2">
          <Plus className="h-5 w-5" />
          Create New
        </Button>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        <ScrollArea className="h-[calc(100vh-220px)]">
          <div className="space-y-4">
            {chatUsers.map((user) => (
              <div key={user.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <Avatar>
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-muted-foreground">{user.time}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main Chat */}
      <div className="flex-1 bg-white">
        <div className="p-4 flex justify-between items-center border-b">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-73c010468ef1b31e17fd0af32f1859b6.jpg-q0wxEee2piBsYHVJ4XDmsZrG2gOHfO.png" />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">Melonie Sherk</p>
              <p className="text-sm text-muted-foreground">Online</p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>

        <ScrollArea className="h-[calc(100vh-180px)] p-6">
          <div className="space-y-6">
            <div className="flex gap-3 items-start">
              <Avatar className="mt-1">
                <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-73c010468ef1b31e17fd0af32f1859b6.jpg-q0wxEee2piBsYHVJ4XDmsZrG2gOHfO.png" />
                <AvatarFallback>WS</AvatarFallback>
              </Avatar>
              <div>
                <div className="bg-[#FF8BB4] text-white p-3 rounded-2xl rounded-tl-none max-w-md">
                  <p>Hello. Good Morning..! 😊</p>
                  <p>How is marketing going for brand?</p>
                </div>
                <p className="text-sm text-muted-foreground mt-1">4:05PM</p>
              </div>
            </div>

            <div className="flex gap-3 items-start justify-end">
              <div className="text-right">
                <div className="bg-gray-100 p-3 rounded-2xl rounded-tr-none max-w-md">
                  <p>Very Good Morning..! We are growing gradually.</p>
                  <p>Here is the complete growth report.</p>
                </div>
                <p className="text-sm text-muted-foreground mt-1">4:06PM</p>
              </div>
              <Avatar className="mt-1">
                <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-73c010468ef1b31e17fd0af32f1859b6.jpg-q0wxEee2piBsYHVJ4XDmsZrG2gOHfO.png" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
            </div>

            <div className="ml-12">
              <p className="text-sm mb-3">Melonie Sherk shared 3 docs :</p>
              <div className="grid grid-cols-3 gap-4 max-w-md">
                {["PDF", "DOC", "DOC"].map((type, i) => (
                  <div key={i} className="bg-gray-50 p-4 rounded-lg flex flex-col items-center gap-2 border">
                    <div className={`text-sm font-medium ${type === "PDF" ? "text-red-500" : "text-blue-500"}`}>
                      {type}
                    </div>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-1">4:09PM</p>
            </div>
          </div>
        </ScrollArea>

        <div className="p-4 border-t">
          <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Plus className="h-5 w-5" />
            </Button>
            <Input placeholder="Type a message here..." className="border-0 bg-transparent focus-visible:ring-0" />
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Smile className="h-5 w-5" />
            </Button>
            <Button size="icon" className="bg-[#2B55CF] text-white hover:bg-blue-700">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 bg-white rounded-r-3xl p-6">
        <div className="flex flex-col items-center mb-6">
          <Avatar className="h-16 w-16 mb-3">
            <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-73c010468ef1b31e17fd0af32f1859b6.jpg-q0wxEee2piBsYHVJ4XDmsZrG2gOHfO.png" />
            <AvatarFallback>WS</AvatarFallback>
          </Avatar>
          <h2 className="font-bold">Wilburn Stoltenberg</h2>
          <p className="text-sm text-muted-foreground">CEO & Founder</p>
        </div>

        <div className="space-y-4">
          <Button variant="outline" className="w-full justify-between">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-500" />
              Starred Messages
            </div>
            <ChevronDown className="h-4 w-4" />
          </Button>

          <Button variant="outline" className="w-full justify-between bg-pink-50">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-pink-500" />
              Media (43)
            </div>
            <ChevronDown className="h-4 w-4" />
          </Button>

          <div className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Files & Docs (5)
              </div>
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="space-y-3">
              {files.map((file, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{file}</span>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <Button variant="outline" className="w-full justify-between">
            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Information
            </div>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

const chatUsers = [
  {
    id: 1,
    name: "Karlyn Carabello",
    time: "23 mins ago",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-73c010468ef1b31e17fd0af32f1859b6.jpg-q0wxEee2piBsYHVJ4XDmsZrG2gOHfO.png",
  },
  {
    id: 2,
    name: "Junior Sabine",
    time: "1 hour ago",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-73c010468ef1b31e17fd0af32f1859b6.jpg-q0wxEee2piBsYHVJ4XDmsZrG2gOHfO.png",
  },
  {
    id: 3,
    name: "Melonie Sherk",
    time: "3 hours ago",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-73c010468ef1b31e17fd0af32f1859b6.jpg-q0wxEee2piBsYHVJ4XDmsZrG2gOHfO.png",
  },
  {
    id: 4,
    name: "Harrison Palmatier",
    time: "7 hours ago",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-73c010468ef1b31e17fd0af32f1859b6.jpg-q0wxEee2piBsYHVJ4XDmsZrG2gOHfO.png",
  },
  {
    id: 5,
    name: "Tressa Duhart",
    time: "10 hours ago",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-73c010468ef1b31e17fd0af32f1859b6.jpg-q0wxEee2piBsYHVJ4XDmsZrG2gOHfO.png",
  },
  {
    id: 6,
    name: "Erick Spiva",
    time: "13 hours ago",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-73c010468ef1b31e17fd0af32f1859b6.jpg-q0wxEee2piBsYHVJ4XDmsZrG2gOHfO.png",
  },
  {
    id: 7,
    name: "Josefina Simpson",
    time: "Yesterday",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-73c010468ef1b31e17fd0af32f1859b6.jpg-q0wxEee2piBsYHVJ4XDmsZrG2gOHfO.png",
  },
]

const files = ["Mockup_Design.zip", "Feedback.docx", "Wirframe.zip", "Client_Requirements.txt", "New_Project_Brief.pdf"]