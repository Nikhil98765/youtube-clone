# YouTube Clone

A React-based YouTube clone application that replicates core YouTube functionality.

## Features

### Home Page
- Video grid layout displaying popular videos from YouTube API
- Category filter buttons for content filtering
- Responsive design with Tailwind CSS
- Collapsible sidebar navigation

### Video Playback
- Dedicated watch page for video playback
- Embedded YouTube player with autoplay
- Video title and details display
- Nested comments section with threaded replies

### Search Functionality
- Search bar with real-time suggestions
- Debounced API calls for performance optimization
- Caching of search suggestions for faster repeat searches
- Search suggestions dropdown

### Navigation
- Collapsible sidebar with navigation links
- Toggle sidebar visibility
- Home page link via YouTube logo

### State Management
- Redux store using Redux Toolkit
- Separate slices for UI state and search functionality
- Efficient state updates with Redux

### Performance Optimizations
- Debouncing for search API calls
- Caching of search results
- Higher Order Components for code reuse

## Technical Implementation

### React Features Used
- Functional components with hooks (useState, useEffect)
- Custom hooks
- React Router for navigation
- Context API

### State Management
- Redux Toolkit for global state
- Local component state with useState

### Styling
- Tailwind CSS for responsive design
- Material UI icons

### API Integration
- YouTube Data API for video content
- YouTube Search API for search suggestions

### Advanced Concepts
- Higher Order Components (HOC) for enhanced components
- Debouncing for optimized API calls
- Caching mechanisms for performance
- Early return pattern for conditional rendering

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Create a `.env` file with your YouTube API key as `REACT_APP_API_KEY`
4. Start the development server with `npm start`

Concepts that got covered:

1. components
2. custom hooks
3. redux
4. router
5. higher order components
6. debouncing
7. caching for search suggestions
8. Comments
