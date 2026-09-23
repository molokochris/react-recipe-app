/**
 * AudioPlayer.jsx
 * Fully interactive HTML5 Audio Player component.
 * Supports play/pause, time tracking, click-to-seek, volume mute toggle, and robust error handling.
 */

import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Play, Pause, Volume2, VolumeX, RotateCcw } from "lucide-react";
import { formatTime } from "../../utils/helpers";
import styles from "./Media.module.css";

export default function AudioPlayer({
  src,
  title = "Chef's Audio Cooking Tip",
  subtitle = "Kitchen Secrets & Techniques",
  badge = "Daily Tip",
  className = "",
}) {
  const audioRef = useRef(null);
  const progressTrackRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  // Pause and cleanup audio when component unmounts or source changes
  useEffect(() => {
    const audioElement = audioRef.current;
    return () => {
      if (audioElement) {
        audioElement.pause();
      }
    };
  }, [src]);

  // Sync play/pause with audio ref
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.warn("Audio playback interrupted or not permitted:", err);
      });
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleSeek = (e) => {
    if (!progressTrackRef.current || !audioRef.current || !duration) return;
    const rect = progressTrackRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = percentage * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleReset = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    setCurrentTime(0);
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className={`${styles.audioContainer} ${className}`.trim()}>
      <audio
        ref={audioRef}
        src={src}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        preload="metadata"
      >
        <p className={styles.audioFallback}>
          Your browser doesn't support audio —{" "}
          <a href={src} download>
            download it here
          </a>
          .
        </p>
      </audio>

      <div className={styles.audioHeader}>
        <div>
          <div className={styles.audioTitle}>{title}</div>
          <div className={styles.audioSubtitle}>{subtitle}</div>
        </div>
        {badge && <span className={styles.audioBadge}>{badge}</span>}
      </div>

      <div className={styles.progressBarContainer}>
        <div
          ref={progressTrackRef}
          className={styles.progressTrack}
          onClick={handleSeek}
          role="progressbar"
          aria-valuenow={progressPercent}
          aria-valuemin="0"
          aria-valuemax="100"
          tabIndex={0}
        >
          <div
            className={styles.progressFill}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className={styles.timeRow}>
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className={styles.controlsRow}>
        <button
          type="button"
          className={styles.volumeBtn}
          onClick={handleReset}
          aria-label="Restart audio"
          title="Restart"
        >
          <RotateCcw size={18} />
        </button>

        <button
          type="button"
          className={styles.playBtn}
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause audio" : "Play audio"}
        >
          {isPlaying ? (
            <Pause size={22} fill="currentColor" />
          ) : (
            <Play size={22} fill="currentColor" className={styles.playNudge} />
          )}
        </button>

        <button
          type="button"
          className={styles.volumeBtn}
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
    </div>
  );
}

AudioPlayer.propTypes = {
  /** Audio source URL */
  src: PropTypes.string.isRequired,
  /** Track title */
  title: PropTypes.string,
  /** Subtitle / episode info */
  subtitle: PropTypes.string,
  /** Optional category badge */
  badge: PropTypes.string,
  /** Optional custom styling class */
  className: PropTypes.string,
};
