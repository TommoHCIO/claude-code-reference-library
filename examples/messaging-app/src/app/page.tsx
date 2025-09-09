'use client'

import { useState } from 'react'
import { 
  Search, 
  Phone, 
  Video, 
  MoreVertical, 
  Send, 
  Paperclip, 
  Smile,
  Mic,
  Image,
  Plus
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function MessagingPage() {
  const [selectedChat, setSelectedChat] = useState(1)
  const [message, setMessage] = useState('')

  const conversations = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: '/avatars/sarah.jpg',
      lastMessage: 'Hey! How was your weekend?',
      timestamp: '2m ago',
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: 'Design Team',
      avatar: '/groups/design-team.jpg',
      lastMessage: 'Mike: The new mockups look great!',
      timestamp: '15m ago',
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: 'Alex Rivera',
      avatar: '/avatars/alex.jpg',
      lastMessage: 'Can we schedule a call for tomorrow?',
      timestamp: '1h ago',
      unread: 1,
      online: true
    },
    {
      id: 4,
      name: 'Marketing Team',
      avatar: '/groups/marketing.jpg',
      lastMessage: 'Lisa: Campaign results are in!',
      timestamp: '2h ago',
      unread: 0,
      online: false
    },
    {
      id: 5,
      name: 'Emma Davis',
      avatar: '/avatars/emma.jpg',
      lastMessage: 'Thanks for the quick turnaround',
      timestamp: '3h ago',
      unread: 0,
      online: false
    }
  ]

  const messages = [
    {
      id: 1,
      sender: 'Sarah Johnson',
      content: 'Hey! How was your weekend?',
      timestamp: '10:30 AM',
      own: false,
      status: 'read'
    },
    {
      id: 2,
      sender: 'You',
      content: 'It was great! Went hiking with some friends. How about yours?',
      timestamp: '10:32 AM',
      own: true,
      status: 'read'
    },
    {
      id: 3,
      sender: 'Sarah Johnson',
      content: 'That sounds amazing! I spent most of it working on the new project presentation.',
      timestamp: '10:35 AM',
      own: false,
      status: 'read'
    },
    {
      id: 4,
      sender: 'You',
      content: 'Oh nice! How\'s it coming along? Need any help with the design mockups?',
      timestamp: '10:37 AM',
      own: true,
      status: 'delivered'
    },
    {
      id: 5,
      sender: 'Sarah Johnson',
      content: 'Actually, yes! That would be super helpful. Could you take a look at the user flow?',
      timestamp: '10:40 AM',
      own: false,
      status: 'read'
    },
    {
      id: 6,
      sender: 'You',
      content: 'Absolutely! Send it over whenever you\'re ready.',
      timestamp: '10:42 AM',
      own: true,
      status: 'sent'
    }
  ]

  const currentChat = conversations.find(c => c.id === selectedChat)

  return (
    <div className="chat-container">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-80 border-r bg-card flex flex-col">
          {/* Search Header */}
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search conversations..." 
                className="pl-10"
              />
            </div>
          </div>

          {/* Conversations List */}
          <ScrollArea className="flex-1">
            <div className="p-2">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedChat(conversation.id)}
                  className={`conversation-item ${conversation.id === selectedChat ? 'active' : ''} ${conversation.unread > 0 ? 'unread' : ''}`}
                >
                  <div className="conversation-avatar">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={conversation.avatar} />
                      <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                    </Avatar>
                    {conversation.online && <div className="online-indicator" />}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold truncate">{conversation.name}</h3>
                      <span className="text-xs text-muted-foreground">
                        {conversation.timestamp}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      {conversation.lastMessage}
                    </p>
                  </div>
                  
                  {conversation.unread > 0 && (
                    <Badge className="unread-badge">
                      {conversation.unread}
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {currentChat ? (
            <>
              {/* Chat Header */}
              <div className="chat-header">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={currentChat.avatar} />
                    <AvatarFallback>{currentChat.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="font-semibold">{currentChat.name}</h2>
                    <p className="text-sm text-muted-foreground">
                      {currentChat.online ? 'Online' : 'Last seen 2h ago'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Video className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <ScrollArea className="chat-messages">
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`message-group ${msg.own ? 'own' : ''} group animate-message-in`}
                    >
                      {!msg.own && (
                        <div className="message-avatar">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={currentChat.avatar} />
                            <AvatarFallback>{msg.sender[0]}</AvatarFallback>
                          </Avatar>
                        </div>
                      )}
                      
                      <div className="message-content">
                        <div className={`message-bubble ${msg.own ? 'own' : 'other'}`}>
                          {msg.content}
                        </div>
                        <div className={`flex items-center space-x-2 mt-1 ${msg.own ? 'justify-end' : ''}`}>
                          <span className="message-timestamp">
                            {msg.timestamp}
                          </span>
                          {msg.own && (
                            <div className={`status-indicator ${msg.status}`}>
                              {msg.status === 'sent' && '✓'}
                              {msg.status === 'delivered' && '✓✓'}
                              {msg.status === 'read' && <span className="text-blue-500">✓✓</span>}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Typing Indicator */}
                  <div className="message-group">
                    <div className="message-avatar">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={currentChat.avatar} />
                        <AvatarFallback>{currentChat.name[0]}</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="typing-indicator">
                      <span className="text-sm">Sarah is typing...</span>
                      <div className="typing-dots">
                        <div className="typing-dot animate-typing" style={{animationDelay: '0s'}}></div>
                        <div className="typing-dot animate-typing" style={{animationDelay: '0.2s'}}></div>
                        <div className="typing-dot animate-typing" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>

              {/* Message Input */}
              <div className="chat-input">
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Plus className="w-4 h-4" />
                  </Button>
                  
                  <div className="flex-1 relative">
                    <Input
                      placeholder="Type a message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="pr-24"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          // Handle send message
                          setMessage('')
                        }
                      }}
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                      <Button variant="ghost" size="sm">
                        <Paperclip className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Image className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Smile className="w-4 h-4" />
                      </Button>
                      {message ? (
                        <Button size="sm" className="messaging-gradient text-white">
                          <Send className="w-4 h-4" />
                        </Button>
                      ) : (
                        <Button variant="ghost" size="sm">
                          <Mic className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Welcome to ChatSpace</h2>
                <p className="text-muted-foreground">Select a conversation to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}