export interface Article {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  category: string;
  imageUrl: string;
  likes: number;
  comments: number;
  publishedAt: string;
  rating?: number;
}

// Template articles - these will be replaced with real content
export const articles: Article[] = [
  {
    id: 1,
    title: "Sample Article Title - Cinema",
    excerpt: "This is a sample excerpt for a cinema article. Replace this with your actual content about Algerian movies, directors, or film industry news.",
    author: "Sample Author",
    readTime: "5 min read",
    category: "Cinema",
    imageUrl: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    likes: 0,
    comments: 0,
    publishedAt: "2024-01-15",
    rating: 4.5
  },
  {
    id: 2,
    title: "Sample Article Title - TV Shows",
    excerpt: "This is a sample excerpt for a TV show article. Replace this with your actual content about Algerian television series, actors, or industry updates.",
    author: "Sample Author",
    readTime: "4 min read",
    category: "TV Shows",
    imageUrl: "https://images.pexels.com/photos/5662857/pexels-photo-5662857.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    likes: 0,
    comments: 0,
    publishedAt: "2024-01-12"
  },
  {
    id: 3,
    title: "Sample Article Title - Actors",
    excerpt: "This is a sample excerpt for an actor profile article. Replace this with your actual content about Algerian actors, their careers, or interviews.",
    author: "Sample Author",
    readTime: "6 min read",
    category: "Actors",
    imageUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    likes: 0,
    comments: 0,
    publishedAt: "2024-01-10"
  }
];