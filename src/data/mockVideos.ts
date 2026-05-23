export interface VideoData {
  id: string;
  videoUrl: string;
  authorName: string;
  description: string;
  likesCount: number;
}

export const mockVideos: VideoData[] = [
  {
    id: "1",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    authorName: "@w3schools",
    description: "Big Buck Bunny Animation 🐰 #animation #blender",
    likesCount: 1250,
  },
  {
    id: "2",
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
    authorName: "@mdn_docs",
    description: "Happy Friday! Weekend vibes 🎉",
    likesCount: 890,
  },
  {
    id: "3",
    videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    authorName: "@sintel_movie",
    description: "Sintel Trailer - Open Movie Project 🐉",
    likesCount: 5430,
  },
];