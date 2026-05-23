"use client";

import { useRef, useState, useEffect } from "react";
import { VideoData } from "../data/mockVideos";
import { Heart, MessageCircle, Share2 } from "lucide-react";

export default function VideoCard({ data }: { data: VideoData }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(data.likesCount);

  // Play/Pause
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  //Like/Unlike
  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  //Auto-play
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          videoRef.current?.play();
          setIsPlaying(true);
        } else {
          videoRef.current?.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.8 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <div className="relative w-full h-[100dvh] snap-start bg-black flex justify-center">
      {/* Video Element */}
      <video
        ref={videoRef}
        src={data.videoUrl}
        className="w-full h-full object-cover max-w-md mx-auto"
        loop
        onClick={togglePlay}
        playsInline
      />

      {/* Author Name */}
      <div className="absolute bottom-20 left-4 text-white z-10 md:left-1/3">
        <h3 className="font-bold text-lg">{data.authorName}</h3>
        <p className="text-sm mt-2">{data.description}</p>
      </div>

      {/* Buttons */}
      <div className="absolute bottom-20 right-4 flex flex-col items-center gap-6 text-white z-10 md:right-1/3">
        {/* Nút Like */}
        <button onClick={toggleLike} className="flex flex-col items-center group">
          <div className="p-3 bg-gray-800/50 rounded-full group-hover:bg-gray-800/80 transition">
            <Heart
              className={`w-7 h-7 transition-colors ${
                isLiked ? "fill-red-500 text-red-500" : "text-white"
              }`}
            />
          </div>
          <span className="text-sm font-semibold mt-1">{likes}</span>
        </button>

        {/* Share/Comment */}
        <button className="flex flex-col items-center">
          <div className="p-3 bg-gray-800/50 rounded-full"><MessageCircle className="w-7 h-7" /></div>
          <span className="text-sm font-semibold mt-1">120</span>
        </button>
        <button className="flex flex-col items-center">
          <div className="p-3 bg-gray-800/50 rounded-full"><Share2 className="w-7 h-7" /></div>
          <span className="text-sm font-semibold mt-1">Share</span>
        </button>
      </div>
    </div>
  );
}