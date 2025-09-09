'use client'

import { useState } from 'react'
import { Heart, MessageCircle, Share, Send, MoreHorizontal, Search, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function HomePage() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: { name: 'Sarah Chen', username: 'sarahc', avatar: '/avatars/sarah.jpg' },
      content: 'Just finished building my first React component library! The feeling of creating reusable UI elements is incredible. 🚀',
      image: '/posts/react-components.jpg',
      likes: 142,
      comments: 23,
      shares: 8,
      timestamp: '2 hours ago',
      liked: false
    },
    {
      id: 2,
      user: { name: 'Alex Rivera', username: 'alexdev', avatar: '/avatars/alex.jpg' },
      content: 'Morning coffee and code review sessions are the best way to start the day. What\'s your morning routine?',
      likes: 89,
      comments: 16,
      shares: 4,
      timestamp: '4 hours ago',
      liked: true
    },
    {
      id: 3,
      user: { name: 'Maya Patel', username: 'mayap', avatar: '/avatars/maya.jpg' },
      content: 'Excited to share that our team just shipped a major feature! Collaboration and persistence really paid off. Special thanks to everyone who contributed.',
      image: '/posts/team-celebration.jpg',
      likes: 234,
      comments: 45,
      shares: 12,
      timestamp: '6 hours ago',
      liked: false
    }
  ])

  const [stories] = useState([
    { id: 1, user: { name: 'You', username: 'you', avatar: '/avatars/you.jpg' }, viewed: false },
    { id: 2, user: { name: 'Emma', username: 'emma', avatar: '/avatars/emma.jpg' }, viewed: false },
    { id: 3, user: { name: 'John', username: 'john', avatar: '/avatars/john.jpg' }, viewed: true },
    { id: 4, user: { name: 'Lisa', username: 'lisa', avatar: '/avatars/lisa.jpg' }, viewed: false },
    { id: 5, user: { name: 'David', username: 'david', avatar: '/avatars/david.jpg' }, viewed: true }
  ])

  const handleLike = (postId: number) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            SocialSpace
          </h1>
          
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search posts, people, hashtags..." className="pl-10" />
            </div>
          </div>

          <Button size="sm" className="social-button">
            <Plus className="w-4 h-4 mr-2" />
            Create Post
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-2xl">
        {/* Stories Section */}
        <div className="mb-8">
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {stories.map((story) => (
              <div key={story.id} className="flex-shrink-0 text-center">
                <div className={`story-ring ${story.viewed ? 'viewed' : ''} mb-2`}>
                  {story.user.username === 'you' ? (
                    <div className="relative">
                      <Avatar className="w-14 h-14">
                        <AvatarImage src={story.user.avatar} />
                        <AvatarFallback>You</AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                        <Plus className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  ) : (
                    <Avatar className="w-14 h-14">
                      <AvatarImage src={story.user.avatar} />
                      <AvatarFallback>{story.user.name[0]}</AvatarFallback>
                    </Avatar>
                  )}
                </div>
                <p className="text-xs text-muted-foreground max-w-[60px] truncate">
                  {story.user.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.id} className="social-post">
              <CardContent className="p-0">
                {/* Post Header */}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={post.user.avatar} />
                      <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm">{post.user.name}</p>
                      <p className="text-xs text-muted-foreground">@{post.user.username} • {post.timestamp}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>

                {/* Post Content */}
                <div className="px-4 pb-3">
                  <p className="text-sm leading-relaxed">{post.content}</p>
                </div>

                {/* Post Image */}
                {post.image && (
                  <div className="mb-3">
                    <img 
                      src={post.image} 
                      alt="Post content" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                )}

                {/* Post Actions */}
                <div className="px-4 pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-6">
                      <button 
                        onClick={() => handleLike(post.id)}
                        className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-red-500 transition-colors"
                      >
                        <Heart className={`w-5 h-5 ${post.liked ? 'text-red-500 fill-red-500 animate-like-heart' : ''}`} />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-blue-500 transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-green-500 transition-colors">
                        <Share className="w-5 h-5" />
                        <span>{post.shares}</span>
                      </button>
                    </div>
                  </div>

                  {/* Comment Input */}
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/avatars/you.jpg" />
                      <AvatarFallback>You</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 relative">
                      <Input 
                        placeholder="Write a comment..." 
                        className="pr-12 rounded-full"
                      />
                      <Button size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 rounded-full p-0">
                        <Send className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" className="social-button">
            Load More Posts
          </Button>
        </div>
      </div>
    </div>
  )
}