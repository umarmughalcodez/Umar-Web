"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, Pause, Play, RotateCcw, Volume2, VolumeX } from "lucide-react";

const Redesign = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(60);
  const [showControls, setShowControls] = useState(true);

  let hideControlsTimeout: NodeJS.Timeout;

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true; // mute to allow autoplay
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Autoplay blocked:", err));
    }
  }, []);

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
    <div className="w-full h-auto overflow-hidden grid place-items-center mt-36 px-2">
      {/* Hero Section */}
      <motion.div
        className="max-w-2xl w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
          A Special Preview for You!
        </h1>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          We created this short 60-second video to show how a business website
          can shine online — sleek, professional, and designed to attract more
          clients. 🌟
        </p>
      </motion.div>

      <p className="text-md mb-3 text-center">
        Here’s a website we redesigned for a business{" "}
        <span className="font-semibold text-green-500">for free</span> as part
        of our{" "}
        <span className="text-green-500 font-semibold">Launch Offer</span>.
      </p>

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

      {/* CTA Section */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-gray-700 mb-4">
          Inspired by what you saw? Let’s bring your business online with a
          professional website —{" "}
          <span className="text-green-500 font-semibold">
            free for first clients
          </span>
          .
        </p>

        <p className="text-gray-700 mb-4">
          We’re launching our agency and looking to collaborate with amazing pet
          businesses. This is a special opportunity to get a high-quality
          website at
          <span className="text-green-500 font-semibold"> no cost</span>.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/923364190319?text=Hi%20Umar!%20I%20just%20watched%20the%20demo!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-transform transform hover:-translate-y-1 duration-300"
          >
            Chat on WhatsApp 💬
          </a>

          <a
            href="mailto:hello@umarweb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-transform transform hover:-translate-y-1 duration-300"
          >
            Email Us 📩
          </a>
        </div>

        <p className="mt-4 text-gray-500 text-md">
          Available <span className="text-green-500 font-semibold">24/7</span> —
          quick responses guaranteed! ⚡
        </p>
      </motion.div>
    </div>
  );
};

export default Redesign;
