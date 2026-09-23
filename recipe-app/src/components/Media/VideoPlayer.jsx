/**
 * VideoPlayer.jsx
 * HTML5 Video Player component with custom play/pause overlay, seek bar, time display, and fullscreen.
 */

import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Play, Pause, Maximize, Volume2, VolumeX } from "lucide-react";
import { formatTime } from "../../utils/helpers";
import styles from "./Media.module.css";

export default function VideoPlayer({
  src,
  poster,
  title = "Step-by-Step Video Guide",
  className = "",
}) {
  const videoRef = useRef(null);
  const progressTrackRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showCenterPlay, setShowCenterPlay] = useState(true);

  // Pause and cleanup video when component unmounts or source changes
  useEffect(() => {
    const videoElement = videoRef.current;
    return () => {
      if (videoElement) {
        videoElement.pause();
      }
    };
  }, [src]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      setShowCenterPlay(true);
    } else {
      videoRef.current.play().catch((err) => {
        console.warn("Video playback error:", err);
      });
      setIsPlaying(true);
      setShowCenterPlay(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setShowCenterPlay(true);
    setCurrentTime(0);
  };

  const handleSeek = (e) => {
    if (!progressTrackRef.current || !videoRef.current || !duration) return;
    const rect = progressTrackRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = percentage * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className={`${styles.videoContainer} ${className}`.trim()}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className={styles.videoElement}
        onClick={togglePlay}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        preload="metadata"
        playsInline
      >
        <p className={styles.videoFallback}>
          Your browser doesn't support video —{" "}
          <a href={src} download>
            download it here
          </a>
          .
        </p>
      </video>

      {showCenterPlay && !isPlaying && (
        <button
          type="button"
          className={styles.centerPlayOverlay}
          onClick={togglePlay}
          aria-label={`Play ${title}`}
        >
          <Play size={28} fill="currentColor" className={styles.playNudge} />
        </button>
      )}

      <div className={styles.overlayControls}>
        <div
          ref={progressTrackRef}
          className={styles.progressTrack}
          onClick={handleSeek}
          role="progressbar"
          aria-valuenow={progressPercent}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className={styles.progressFill}
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className={styles.videoControlBar}>
          <div className={styles.videoControlGroup}>
            <button
              type="button"
              className={styles.videoBtn}
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
            </button>

            <button
              type="button"
              className={styles.videoBtn}
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            <span className={styles.videoTime}>
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <button
            type="button"
            className={styles.videoBtn}
            onClick={toggleFullscreen}
            aria-label="Fullscreen"
          >
            <Maximize size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

VideoPlayer.propTypes = {
  /** Video media source URL */
  src: PropTypes.string.isRequired,
  /** Preview poster image */
  poster: PropTypes.string,
  /** Title for accessibility */
  title: PropTypes.string,
  /** Optional class name */
  className: PropTypes.string,
};
