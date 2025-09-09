# Social Media Platform Example

A modern social media platform showcasing the Claude Code reference library for social networking, content sharing, and community building applications.

## Features

- **Social Feed**: Infinite scroll feed with posts, images, and videos
- **User Profiles**: Customizable profiles with bio, followers, and activity
- **Content Creation**: Rich post composer with media upload and mentions
- **Social Interactions**: Likes, comments, shares, and reactions
- **Real-time Chat**: Direct messaging with typing indicators
- **Story Features**: Temporary content with view tracking
- **Live Notifications**: Real-time updates for social activities
- **Discovery**: Trending posts, hashtags, and user suggestions

## Components Showcased

### Social Feed Components
- Post cards with media galleries and interaction buttons
- Infinite scroll loading with skeleton states
- Story carousel with progress indicators
- Comment threads with nested replies
- Reaction picker with emoji selection
- Share dialog with platform options
- Post composer with rich text and media upload

### User Profile Features
- Profile header with cover photo and avatar
- Bio editing with character count and formatting
- Follower/following lists with search
- Activity timeline with post history
- Profile customization options
- Privacy settings and blocking controls
- Achievement badges and verification status

### Messaging System
- Chat list with unread indicators and search
- Message bubbles with read receipts and timestamps
- Typing indicators and online status
- Media sharing in conversations
- Group chat creation and management
- Message reactions and reply threading
- Voice message recording and playback

### Social Discovery
- Trending hashtags with post counts
- User suggestions based on interests
- Explore page with curated content
- Search functionality across users and posts
- Location-based discovery features
- Topic-based content filtering
- Personalized recommendation engine

## Pages Structure

- **Home Feed**: Main social feed with posts from followed users
- **Profile**: User profile with posts, followers, and customization
- **Messages**: Direct messaging interface with conversations
- **Explore**: Discovery page with trending content and users
- **Notifications**: Activity feed with social interactions
- **Stories**: Story viewer with swipe navigation
- **Create**: Post composer with media and privacy options
- **Search**: Global search across users, posts, and hashtags

## Key Technologies

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Socket.io** - Real-time messaging and notifications
- **React Intersection Observer** - Infinite scroll and lazy loading
- **React Mentions** - User tagging and mentions
- **Emoji Picker React** - Emoji selection and reactions
- **React Dropzone** - Media file upload handling
- **Zustand** - State management for social features

## Social Features Architecture

### Content Management
- **Posts**: Text, images, videos with rich formatting
- **Stories**: Temporary content with 24-hour expiration
- **Comments**: Threaded discussions with mentions
- **Reactions**: Like, love, laugh, angry, sad, wow
- **Hashtags**: Content categorization and discovery
- **Mentions**: User tagging with notifications

### User Relationships
- **Following/Followers**: Asymmetric social connections
- **Friends**: Mutual connections with enhanced features
- **Blocked Users**: Privacy and safety controls
- **Muted Keywords**: Content filtering preferences
- **Close Friends**: Private story sharing groups

### Privacy & Safety
- **Content Moderation**: Automated and manual review
- **Reporting System**: User-generated safety reports
- **Privacy Controls**: Post visibility and audience selection
- **Account Settings**: Profile visibility and data controls
- **Blocking & Muting**: User interaction management

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3008](http://localhost:3008)

## Features Demonstrated

### Real-time Features
- Live notifications for likes, comments, and follows
- Real-time message delivery with read receipts
- Typing indicators in direct messages
- Online status tracking for users
- Live story view counts and reactions

### Content Creation
- Rich text post composer with formatting
- Multiple image/video upload with previews
- Story creation with filters and stickers
- Voice message recording for chat
- Location tagging and check-ins

### Social Interactions
- Infinite scroll feed with optimistic updates
- Smooth animations for like and reaction buttons
- Contextual menus for post actions
- Swipe gestures for story navigation
- Pull-to-refresh for content updates

### Performance Optimizations
- Virtual scrolling for large feeds
- Image lazy loading with progressive enhancement
- Optimistic UI updates for immediate feedback
- Efficient state management with selective re-renders
- Background data synchronization

## User Experience Features

### Mobile-First Design
- Touch-optimized interactions and gestures
- Responsive layout adapting to all screen sizes
- Native-like navigation with bottom tabs
- Swipe gestures for stories and content
- Haptic feedback simulation for interactions

### Accessibility
- Screen reader support for all social features
- Keyboard navigation for power users
- High contrast mode for visual accessibility
- Alternative text for images and media
- Voice-over announcements for new content

### Personalization
- Customizable feed algorithms and preferences
- Theme options with dark/light modes
- Notification frequency and type controls
- Content filtering and sensitivity settings
- Language and localization preferences

## Content Moderation

### Safety Features
- Automated content filtering with ML
- User reporting system with categorization
- Community guidelines enforcement
- Spam detection and prevention
- Hate speech and harassment protection

### Moderation Tools
- Admin dashboard for content review
- Bulk moderation actions
- User account management
- Content appeal processes
- Analytics for safety metrics

## Monetization Features

### Creator Tools
- Analytics dashboard for content performance
- Audience insights and demographics
- Monetization options for creators
- Brand partnership management
- Content promotion and boosting

### Platform Revenue
- Sponsored post integration
- Premium subscription features
- Virtual gifts and tipping
- Marketplace for creator services
- Advertising placement optimization

## Customization

Easy to customize:
- Brand colors and visual identity
- Feed algorithm parameters
- Content types and formats
- User interaction options
- Privacy policy enforcement
- Community guidelines

## Use Cases

Perfect for:
- Social networking platforms
- Community-driven applications
- Content creator platforms
- Professional networking sites
- Interest-based social apps
- Local community platforms

## Development Patterns

Demonstrates:
- Real-time data synchronization
- Infinite scroll implementation
- Social graph management
- Content moderation workflows
- Push notification systems
- Media handling and optimization