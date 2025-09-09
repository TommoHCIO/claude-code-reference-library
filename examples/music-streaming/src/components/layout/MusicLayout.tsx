'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  Home,
  Music,
  Radio,
  Heart,
  Clock,
  Plus,
  User,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  Download,
  Shuffle,
  SkipBack,
  SkipForward,
  Play,
  Pause,
  Repeat,
  Volume2,
  VolumeX,
  Maximize2,
  MoreHorizontal,
  Mic2,
  Users,
  Library,
  TrendingUp,
  Disc3
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Slider } from '@/components/ui/slider'
import { Progress } from '@/components/ui/progress'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from '@/components/ui/theme-toggle'

interface MusicLayoutProps {
  children: React.ReactNode
}

interface CurrentTrack {
  id: string
  title: string
  artist: string
  album: string
  coverUrl: string
  duration: number
}

export default function MusicLayout({ children }: MusicLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentTrack, setCurrentTrack] = useState<CurrentTrack>({
    id: '1',
    title: 'Midnight Dreams',
    artist: 'Luna Eclipse',
    album: 'Nocturnal Vibes',
    coverUrl: '/placeholder/album-1.jpg',
    duration: 245
  })
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState([75])
  const [isMuted, setIsMuted] = useState(false)
  const [repeat, setRepeat] = useState(false)
  const [shuffle, setShuffle] = useState(false)

  const sidebarItems = [
    { name: 'Home', icon: Home, href: '/', active: true },
    { name: 'Search', icon: Search, href: '/search', active: false },
    { name: 'Your Library', icon: Library, href: '/library', active: false },
  ]

  const libraryItems = [
    { name: 'Recently Played', icon: Clock, href: '/recent' },
    { name: 'Liked Songs', icon: Heart, href: '/liked' },
    { name: 'Downloaded', icon: Download, href: '/downloaded' },
  ]

  const playlists = [
    { id: '1', name: 'My Playlist #1', trackCount: 24 },
    { id: '2', name: 'Chill Vibes', trackCount: 18 },
    { id: '3', name: 'Workout Mix', trackCount: 32 },
    { id: '4', name: 'Road Trip', trackCount: 45 },
    { id: '5', name: 'Study Focus', trackCount: 16 },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying && currentTime < currentTrack.duration) {
        setCurrentTime(prev => prev + 1)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [isPlaying, currentTime, currentTrack.duration])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleProgressChange = (value: number[]) => {
    setCurrentTime(value[0])
  }

  const handleVolumeChange = (value: number[]) => {
    setVolume(value)
    if (value[0] > 0) {
      setIsMuted(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-80' : 'w-20'} transition-all duration-300 bg-card border-r flex-shrink-0 hidden lg:flex flex-col`}>
        {/* Sidebar Header */}
        <div className="p-6 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 music-gradient rounded-lg flex items-center justify-center">
              <Music className="w-6 h-6 text-white" />
            </div>
            {sidebarOpen && (
              <div>
                <div className="text-xl font-bold">TuneWave</div>
                <div className="text-sm text-muted-foreground">Music Platform</div>
              </div>
            )}
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex-1 p-4 custom-scrollbar overflow-y-auto">
          <nav className="sidebar-nav mb-6">
            {sidebarItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <div className={`sidebar-item ${item.active ? 'active' : ''}`}>
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {sidebarOpen && <span>{item.name}</span>}
                </div>
              </Link>
            ))}
          </nav>

          {sidebarOpen && (
            <>
              <Separator className="my-4" />

              {/* Library */}
              <nav className="sidebar-nav mb-6">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-3">
                  Your Library
                </h3>
                {libraryItems.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <div className="sidebar-item">
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      <span>{item.name}</span>
                    </div>
                  </Link>
                ))}
              </nav>

              <Separator className="my-4" />

              {/* Playlists */}
              <div>
                <div className="flex items-center justify-between mb-3 px-3">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Playlists
                  </h3>
                  <Button variant="ghost" size="sm" className="w-6 h-6 p-0">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <nav className="sidebar-nav">
                  {playlists.map((playlist) => (
                    <Link key={playlist.id} href={`/playlist/${playlist.id}`}>
                      <div className="sidebar-item">
                        <Disc3 className="w-5 h-5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium truncate">{playlist.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {playlist.trackCount} songs
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>
            </>
          )}
        </div>

        {/* Sidebar Toggle */}
        <div className="p-4 border-t">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full justify-center"
          >
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <div className="flex items-center justify-between p-4">
            {/* Left Section */}
            <div className="flex items-center gap-4">
              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>

              {/* Logo - Mobile */}
              <Link href="/" className="flex items-center gap-2 lg:hidden">
                <div className="w-8 h-8 music-gradient rounded-lg flex items-center justify-center">
                  <Music className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold">TuneWave</span>
              </Link>
            </div>

            {/* Center Search */}
            <div className="flex-1 max-w-2xl mx-4">
              <div className="search-bar">
                <div className="relative">
                  <Search className="search-icon" />
                  <Input
                    className="search-input"
                    placeholder="Search songs, artists, albums, or playlists..."
                  />
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2">
              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-2 -right-2 w-4 h-4 p-0 flex items-center justify-center text-xs">
                  3
                </Badge>
              </Button>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder/user-avatar.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="hidden md:flex flex-col items-start text-xs">
                      <span className="font-semibold">John Doe</span>
                      <span className="text-muted-foreground">Premium</span>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Your Stats
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 pb-24">
          {children}
        </main>
      </div>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className="fixed left-0 top-0 h-full w-80 bg-card z-50 shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 music-gradient rounded-lg flex items-center justify-center">
                    <Music className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold">TuneWave</div>
                    <div className="text-sm text-muted-foreground">Music Platform</div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="p-4 custom-scrollbar overflow-y-auto">
                {/* Main Navigation */}
                <nav className="sidebar-nav mb-6">
                  {sidebarItems.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <div className={`sidebar-item ${item.active ? 'active' : ''}`}>
                        <item.icon className="w-5 h-5" />
                        <span>{item.name}</span>
                      </div>
                    </Link>
                  ))}
                </nav>

                <Separator className="my-4" />

                {/* Library */}
                <nav className="sidebar-nav mb-6">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-3">
                    Your Library
                  </h3>
                  {libraryItems.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <div className="sidebar-item">
                        <item.icon className="w-5 h-5" />
                        <span>{item.name}</span>
                      </div>
                    </Link>
                  ))}
                </nav>

                <Separator className="my-4" />

                {/* Playlists */}
                <div>
                  <div className="flex items-center justify-between mb-3 px-3">
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Playlists
                    </h3>
                    <Button variant="ghost" size="sm" className="w-6 h-6 p-0">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <nav className="sidebar-nav">
                    {playlists.map((playlist) => (
                      <Link key={playlist.id} href={`/playlist/${playlist.id}`}>
                        <div className="sidebar-item">
                          <Disc3 className="w-5 h-5" />
                          <div className="flex-1 min-w-0">
                            <div className="font-medium truncate">{playlist.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {playlist.trackCount} songs
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Now Playing Bar */}
      <div className="now-playing-bar">
        <div className="flex items-center justify-between p-4">
          {/* Track Info */}
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={currentTrack.coverUrl}
                alt={currentTrack.title}
                width={56}
                height={56}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="font-medium truncate">{currentTrack.title}</h4>
              <p className="text-sm text-muted-foreground truncate">{currentTrack.artist}</p>
            </div>

            <Button variant="ghost" size="sm">
              <Heart className="w-4 h-4" />
            </Button>
          </div>

          {/* Player Controls */}
          <div className="flex flex-col items-center gap-2 flex-1 max-w-md">
            <div className="player-controls">
              <Button 
                variant="ghost" 
                size="sm" 
                className={`control-button ${shuffle ? 'text-primary' : ''}`}
                onClick={() => setShuffle(!shuffle)}
              >
                <Shuffle className="w-4 h-4" />
              </Button>

              <Button variant="ghost" size="sm" className="control-button">
                <SkipBack className="w-4 h-4" />
              </Button>

              <Button
                size="sm"
                className="play-button"
                onClick={togglePlayPause}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </Button>

              <Button variant="ghost" size="sm" className="control-button">
                <SkipForward className="w-4 h-4" />
              </Button>

              <Button 
                variant="ghost" 
                size="sm" 
                className={`control-button ${repeat ? 'text-primary' : ''}`}
                onClick={() => setRepeat(!repeat)}
              >
                <Repeat className="w-4 h-4" />
              </Button>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center gap-2 w-full">
              <span className="text-xs text-muted-foreground min-w-fit">
                {formatTime(currentTime)}
              </span>
              <Slider
                value={[currentTime]}
                max={currentTrack.duration}
                step={1}
                className="flex-1"
                onValueChange={handleProgressChange}
              />
              <span className="text-xs text-muted-foreground min-w-fit">
                {formatTime(currentTrack.duration)}
              </span>
            </div>
          </div>

          {/* Volume & Extras */}
          <div className="flex items-center gap-2 flex-1 justify-end">
            <Button variant="ghost" size="sm" className="control-button">
              <Mic2 className="w-4 h-4" />
            </Button>

            <Button variant="ghost" size="sm" className="control-button">
              <Users className="w-4 h-4" />
            </Button>

            <Button variant="ghost" size="sm" onClick={toggleMute}>
              {isMuted || volume[0] === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </Button>

            <Slider
              value={isMuted ? [0] : volume}
              max={100}
              step={1}
              className="w-20"
              onValueChange={handleVolumeChange}
            />

            <Button variant="ghost" size="sm" className="control-button">
              <Maximize2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}