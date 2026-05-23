import { mockVideos } from "../data/mockVideos";
import VideoCard from "../components/VideoCard";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <main className="flex h-[100dvh] bg-black overflow-hidden">
      <Navigation />
      
      <div className="flex-1 h-[100dvh] overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar relative">
        {mockVideos.map((video) => (
          <VideoCard key={video.id} data={video} />
        ))}
      </div>
    </main>
  );
}