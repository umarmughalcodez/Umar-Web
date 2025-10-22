"use client";

import { FC, useRef, useState } from "react";
import { notFound } from "next/navigation";
import { Play, Pause, Volume2, VolumeX, RotateCcw, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PageProps {
  params: { name: string };
}

const PersonalizedPage: FC<PageProps> = ({ params }) => {
  const { name } = params;

  // Hooks must be at the top
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(60);
  const [showControls, setShowControls] = useState(true);

  if (!name) return notFound(); // conditional check after hooks

  const displayName = name.charAt(0).toUpperCase() + name.slice(1);

  let hideControlsTimeout: NodeJS.Timeout;

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
      setShowControls(true);
      clearTimeout(hideControlsTimeout);
      hideControlsTimeout = setTimeout(() => setShowControls(false), 2000);
    } else {
      video.pause();
      setIsPlaying(false);
      setShowControls(true);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setMuted(video.muted);
    }
  };

  const restartVideo = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play();
      setIsPlaying(true);
      setShowControls(true);
      clearTimeout(hideControlsTimeout);
      hideControlsTimeout = setTimeout(() => setShowControls(false), 2000);
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video) {
      setProgress((video.currentTime / video.duration) * 100);
      setCurrentTime(video.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video && video.duration) setDuration(video.duration);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowControls(true);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-6 text-center mt-20">
      {/* Hero */}
      <motion.div
        className="max-w-2xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
          Only for you, <span className="text-green-500">{displayName}!</span>
        </h1>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          Hey{" "}
          <span className="text-green-500 font-semibold">{displayName}</span>, I
          crafted this short 60-second video to show you what your business
          could look like online — clean, modern, and built to impress. 🚀
        </p>
      </motion.div>

      {/* Video Player */}
      <motion.div
        className="relative w-full max-w-2xl bg-white border border-green-200 rounded-2xl shadow-xl overflow-hidden mb-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <video
          ref={videoRef}
          src="/video/demo.mp4"
          onClick={togglePlay}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleVideoEnd}
          className="w-full rounded-2xl cursor-pointer select-none"
          playsInline
        />

        {/* Timer */}
        <div className="absolute top-1 left-1 flex items-center gap-1 bg-white/80 text-green-600 text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
          <Clock size={10} /> {formatTime(currentTime)} / {formatTime(duration)}
        </div>

        {/* Controls */}
        <AnimatePresence>
          {showControls && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-white/85 backdrop-blur-md flex items-center justify-between p-2 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={togglePlay}
                className="text-green-500 hover:text-green-600 transition"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>

              <div className="flex-1 mx-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <button
                onClick={toggleMute}
                className="text-green-500 hover:text-green-600 transition"
              >
                {muted ? <VolumeX size={22} /> : <Volume2 size={22} />}
              </button>

              <button
                onClick={restartVideo}
                className="text-green-500 hover:text-green-600 transition ml-2"
              >
                <RotateCcw size={22} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  );
};

export default PersonalizedPage;
