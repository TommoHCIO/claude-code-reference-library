'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Play, 
  Pause, 
  Heart, 
  Plus, 
  MoreHorizontal,
  Shuffle,
  Repeat,
  Volume2,
  Music,
  Headphones,
  TrendingUp,
  Clock,
  Users,
  Star,
  ChevronRight,
  Mic,
  Radio,
  Disc3
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'

interface Track {
  id: string
  title: string
  artist: string
  album: string
  duration: number
  coverUrl: string
  audioUrl: string
  genre: string
  releaseDate: string
  plays: number
  liked: boolean
  explicit: boolean
}

interface Album {
  id: string
  title: string
  artist: string
  coverUrl: string
  year: number
  tracks: Track[]
  genre: string
  totalDuration: number
}

interface Artist {
  id: string
  name: string
  imageUrl: string
  followers: number
  verified: boolean
  genres: string[]
  monthlyListeners: number
}

interface Playlist {
  id: string
  title: string
  description: string
  coverUrl: string
  creator: string
  trackCount: number
  duration: number
  isPublic: boolean
  followers: number
}

const featuredTracks: Track[] = [
  {
    id: '1',
    title: 'Midnight Dreams',
    artist: 'Luna Eclipse',
    album: 'Nocturnal Vibes',
    duration: 245,
    coverUrl: '/placeholder/album-1.jpg',
    audioUrl: '/audio/track-1.mp3',
    genre: 'Electronic',
    releaseDate: '2024-01-15',
    plays: 2847593,
    liked: true,
    explicit: false
  },
  {
    id: '2',
    title: 'Electric Pulse',
    artist: 'Neon Nights',
    album: 'Synth Wave',
    duration: 198,
    coverUrl: '/placeholder/album-2.jpg',
    audioUrl: '/audio/track-2.mp3',
    genre: 'Synthwave',
    releaseDate: '2024-02-03',
    plays: 1956432,
    liked: false,
    explicit: false
  },
  {
    id: '3',
    title: 'City Lights',
    artist: 'Metro Sound',
    album: 'Urban Stories',
    duration: 267,
    coverUrl: '/placeholder/album-3.jpg',
    audioUrl: '/audio/track-3.mp3',
    genre: 'Pop',
    releaseDate: '2024-01-28',
    plays: 3421876,
    liked: true,
    explicit: false
  },
  {
    id: '4',
    title: 'Cosmic Journey',
    artist: 'Space Voyage',
    album: 'Interstellar',
    duration: 312,
    coverUrl: '/placeholder/album-4.jpg',
    audioUrl: '/audio/track-4.mp3',
    genre: 'Ambient',
    releaseDate: '2023-12-12',
    plays: 987654,
    liked: false,
    explicit: false
  }
]

const trendingAlbums: Album[] = [
  {
    id: '1',
    title: 'Nocturnal Vibes',
    artist: 'Luna Eclipse',
    coverUrl: '/placeholder/album-1.jpg',
    year: 2024,
    tracks: [],
    genre: 'Electronic',
    totalDuration: 2847
  },
  {
    id: '2',
    title: 'Synth Wave',
    artist: 'Neon Nights',
    coverUrl: '/placeholder/album-2.jpg',
    year: 2024,
    tracks: [],
    genre: 'Synthwave',
    totalDuration: 2156
  },
  {
    id: '3',
    title: 'Urban Stories',
    artist: 'Metro Sound',
    coverUrl: '/placeholder/album-3.jpg',
    year: 2024,
    tracks: [],
    genre: 'Pop',
    totalDuration: 1893
  },
  {
    id: '4',
    title: 'Interstellar',
    artist: 'Space Voyage',
    coverUrl: '/placeholder/album-4.jpg',
    year: 2023,
    tracks: [],
    genre: 'Ambient',
    totalDuration: 3421
  }
]

const featuredArtists: Artist[] = [
  {
    id: '1',
    name: 'Luna Eclipse',
    imageUrl: '/placeholder/artist-1.jpg',
    followers: 2847593,
    verified: true,
    genres: ['Electronic', 'Ambient'],
    monthlyListeners: 5643821
  },
  {
    id: '2',
    name: 'Neon Nights',
    imageUrl: '/placeholder/artist-2.jpg',
    followers: 1956432,
    verified: true,
    genres: ['Synthwave', 'Electronic'],
    monthlyListeners: 3287456
  },
  {
    id: '3',
    name: 'Metro Sound',
    imageUrl: '/placeholder/artist-3.jpg',
    followers: 3421876,
    verified: true,
    genres: ['Pop', 'Rock'],
    monthlyListeners: 6789123
  },
  {
    id: '4',
    name: 'Space Voyage',
    imageUrl: '/placeholder/artist-4.jpg',
    followers: 987654,
    verified: false,
    genres: ['Ambient', 'Experimental'],
    monthlyListeners: 1456789
  }
]

const featuredPlaylists: Playlist[] = [
  {
    id: '1',
    title: 'Today\'s Top Hits',
    description: 'The most played songs right now',
    coverUrl: '/placeholder/playlist-1.jpg',
    creator: 'TuneWave',
    trackCount: 50,
    duration: 12600,
    isPublic: true,
    followers: 8947523
  },
  {
    id: '2',
    title: 'Chill Vibes',
    description: 'Relaxing music for any time of day',
    coverUrl: '/placeholder/playlist-2.jpg',
    creator: 'TuneWave',
    trackCount: 35,
    duration: 8940,
    isPublic: true,
    followers: 4567821
  },
  {
    id: '3',
    title: 'Workout Mix',
    description: 'High energy tracks to fuel your workout',
    coverUrl: '/placeholder/playlist-3.jpg',
    creator: 'TuneWave',
    trackCount: 45,
    duration: 10800,
    isPublic: true,
    followers: 3287456
  },
  {
    id: '4',
    title: 'Focus Flow',
    description: 'Instrumental music for productivity',
    coverUrl: '/placeholder/playlist-4.jpg',
    creator: 'TuneWave',
    trackCount: 28,
    duration: 7200,
    isPublic: true,
    followers: 2156789
  }
]

const genres = [
  { name: 'Pop', color: 'bg-pink-500', tracks: 15420 },
  { name: 'Rock', color: 'bg-red-500', tracks: 12380 },
  { name: 'Hip Hop', color: 'bg-orange-500', tracks: 9870 },
  { name: 'Electronic', color: 'bg-purple-500', tracks: 8560 },
  { name: 'Jazz', color: 'bg-blue-500', tracks: 6720 },
  { name: 'Classical', color: 'bg-emerald-500', tracks: 4530 },
  { name: 'R&B', color: 'bg-amber-500', tracks: 5890 },
  { name: 'Country', color: 'bg-yellow-500', tracks: 3450 }
]

export default function MusicHome() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [likedTracks, setLikedTracks] = useState<Set<string>>(new Set(['1', '3']))

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`
    }
    return num.toString()
  }

  const toggleLike = (trackId: string) => {
    setLikedTracks(prev => {
      const newSet = new Set(prev)
      if (newSet.has(trackId)) {
        newSet.delete(trackId)
      } else {
        newSet.add(trackId)
      }
      return newSet
    })
  }

  const playTrack = (track: Track) => {
    setCurrentTrack(track)
    setIsPlaying(true)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero Section */}
      <section className="music-gradient text-white py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Music, Your World
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Discover millions of songs, create playlists, and connect with artists you love
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <Play className="w-5 h-5 mr-2" />
                Start Listening Free
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Headphones className="w-5 h-5 mr-2" />
                Try Premium
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Songs', value: '100M+', icon: Music },
              { label: 'Artists', value: '2M+', icon: Mic },
              { label: 'Playlists', value: '50M+', icon: Disc3 },
              { label: 'Podcasts', value: '5M+', icon: Radio },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="stats-card">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="stats-value">{stat.value}</div>
                  <div className="stats-label">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="discover" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:w-fit lg:grid-cols-4 mb-8">
            <TabsTrigger value="discover">Discover</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="genres">Genres</TabsTrigger>
            <TabsTrigger value="radio">Radio</TabsTrigger>
          </TabsList>

          <TabsContent value="discover" className="space-y-12">
            {/* Featured Tracks */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Featured Tracks</h2>
                <Button variant="ghost">
                  View All <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredTracks.map((track, index) => (
                  <motion.div
                    key={track.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="track-card">
                      <div className="relative">
                        <div className="aspect-square relative overflow-hidden rounded-t-lg">
                          <Image
                            src={track.coverUrl}
                            alt={track.title}
                            fill
                            className="album-cover"
                          />
                        </div>
                        
                        <Button
                          size="sm"
                          className="absolute bottom-2 right-2 w-10 h-10 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => playTrack(track)}
                        >
                          <Play className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="p-4">
                        <h3 className="track-title mb-1">{track.title}</h3>
                        <p className="track-artist mb-2">{track.artist}</p>
                        
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                          <span>{formatNumber(track.plays)} plays</span>
                          <span>{formatDuration(track.duration)}</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleLike(track.id)}
                            className={likedTracks.has(track.id) ? 'text-red-500' : ''}
                          >
                            <Heart className={`w-4 h-4 ${likedTracks.has(track.id) ? 'fill-current' : ''}`} />
                          </Button>
                          
                          <div className="flex items-center gap-1">
                            <Button variant="ghost" size="sm">
                              <Plus className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Featured Artists */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Featured Artists</h2>
                <Button variant="ghost">
                  View All <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              <div className="artist-grid">
                {featuredArtists.map((artist, index) => (
                  <motion.div
                    key={artist.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="artist-card">
                      <div className="artist-avatar">
                        <Image
                          src={artist.imageUrl}
                          alt={artist.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <h3 className="artist-name">{artist.name}</h3>
                        {artist.verified && (
                          <Badge variant="secondary" className="text-xs">
                            <Star className="w-3 h-3 mr-1 fill-current" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      
                      <p className="artist-followers mb-3">
                        {formatNumber(artist.followers)} followers
                      </p>

                      <div className="flex flex-wrap gap-1 justify-center mb-4">
                        {artist.genres.slice(0, 2).map((genre) => (
                          <Badge key={genre} variant="outline" className="text-xs">
                            {genre}
                          </Badge>
                        ))}
                      </div>

                      <Button size="sm" className="w-full">
                        Follow
                      </Button>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Featured Playlists */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Featured Playlists</h2>
                <Button variant="ghost">
                  View All <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              <div className="playlist-grid">
                {featuredPlaylists.map((playlist, index) => (
                  <motion.div
                    key={playlist.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="track-card">
                      <div className="relative">
                        <div className="aspect-square relative overflow-hidden rounded-t-lg">
                          <Image
                            src={playlist.coverUrl}
                            alt={playlist.title}
                            fill
                            className="album-cover"
                          />
                        </div>
                        
                        <Button
                          size="sm"
                          className="absolute bottom-2 right-2 w-10 h-10 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Play className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="p-4">
                        <h3 className="track-title mb-1">{playlist.title}</h3>
                        <p className="track-artist mb-2">by {playlist.creator}</p>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {playlist.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                          <span>{playlist.trackCount} songs</span>
                          <span>{formatNumber(playlist.followers)} followers</span>
                        </div>

                        <Button size="sm" className="w-full">
                          Play Playlist
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>
          </TabsContent>

          <TabsContent value="trending" className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-6">Trending Albums</h2>
              <div className="playlist-grid">
                {trendingAlbums.map((album, index) => (
                  <motion.div
                    key={album.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="track-card">
                      <div className="relative">
                        <div className="aspect-square relative overflow-hidden rounded-t-lg">
                          <Image
                            src={album.coverUrl}
                            alt={album.title}
                            fill
                            className="album-cover"
                          />
                        </div>
                        
                        <Button
                          size="sm"
                          className="absolute bottom-2 right-2 w-10 h-10 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Play className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="p-4">
                        <h3 className="track-title mb-1">{album.title}</h3>
                        <p className="track-artist mb-2">{album.artist}</p>
                        
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                          <span>{album.year}</span>
                          <Badge variant="secondary" className="text-xs">
                            {album.genre}
                          </Badge>
                        </div>

                        <Button size="sm" className="w-full">
                          Play Album
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>
          </TabsContent>

          <TabsContent value="genres" className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-6">Browse by Genre</h2>
              <div className="genre-grid">
                {genres.map((genre, index) => (
                  <motion.div
                    key={genre.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="genre-card">
                      <div className={`genre-gradient ${genre.color}`} />
                      <div className="relative z-10">
                        <h3 className="genre-title">{genre.name}</h3>
                        <p className="genre-description">
                          {formatNumber(genre.tracks)} tracks
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>
          </TabsContent>

          <TabsContent value="radio" className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-6">Radio Stations</h2>
              <div className="text-center py-12">
                <Radio className="w-24 h-24 mx-auto mb-6 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Personalized radio stations based on your music taste are coming soon. 
                  Stay tuned for 24/7 music tailored just for you.
                </p>
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}