"use client";

import { useRef } from "react";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import VolumeOffRoundedIcon from "@mui/icons-material/VolumeOffRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRoundedIcon from "@mui/icons-material/VolumeDownRounded";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";
import FullscreenExitRoundedIcon from "@mui/icons-material/FullscreenExitRounded";
import AspectRatioRoundedIcon from "@mui/icons-material/AspectRatioRounded";
import FitScreenOutlinedIcon from "@mui/icons-material/FitScreenOutlined";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";

import styles from "../styles/sass/components/VideoControls.module.scss";

type VideoControlsPropType = {
	paused?: boolean;
	isPlaying?: boolean;
	volume?: number;
	duration?: Array<number>;
	durationSec?: number;
	currentTime?: Array<number> | undefined;
	currentTimeSec?: number;
	currentVolume?: number;
	muted?: boolean;
	isFullScreen?: boolean;
	isBrowserFullScreen?: boolean;
	togglePlay: Function;
	toggleFullScreen: Function;
	handleSeekChange: Function;
	handleVolume: Function;
	toggleMute: Function;
};

export default function VideoControls(props: VideoControlsPropType) {
	const volumeRef = useRef<HTMLDivElement>(null);

	const showVolumeSlider = () => {
		if (volumeRef.current === null) return;
		volumeRef.current.style.display = "block";
	};

	const hideVolumeSlider = () => {
		if (volumeRef.current === null) return;
		volumeRef.current.style.display = "none";
	};

	const {
		paused,
		muted,
		volume,
		duration,
		durationSec,
		currentTime,
		currentTimeSec,
		currentVolume,
		isPlaying,
		isFullScreen,
		isBrowserFullScreen,
		togglePlay,
		toggleFullScreen,
		handleSeekChange,
		handleVolume,
		toggleMute,
	} = props;

	return (
		<div className={styles.video_control}>
			<div className={styles.timeline}>
				<input
					type="range"
					min="0"
					max={durationSec}
					step="1"
					value={currentTimeSec}
					onChange={(e) => handleSeekChange(e)}
				/>
			</div>
			<div className={styles.control}>
				<div className={styles.basic}>
					<div>
						{isPlaying ? (
							<div onClick={() => togglePlay()}>
								<PauseRoundedIcon />
							</div>
						) : (
							<div onClick={() => togglePlay()}>
								<PlayArrowRoundedIcon />
							</div>
						)}
					</div>
					<div className={styles.duration}>
						<span>
							{currentTime[0]} : {currentTime[1]} / {duration[0]} :{" "}
							{duration[1]}
						</span>
					</div>
				</div>
				<div className={styles.feature}>
					<div
						className={styles.volume}
						onMouseEnter={() => showVolumeSlider()}
						onMouseLeave={() => hideVolumeSlider()}
					>
						{volume == 0 ? (
							<div onClick={() => toggleMute()}>
								<VolumeOffRoundedIcon />
							</div>
						) : volume < 0.5 ? (
							<div onClick={() => toggleMute()}>
								<VolumeDownRoundedIcon />
							</div>
						) : (
							<div onClick={() => toggleMute()}>
								<VolumeUpRoundedIcon />
							</div>
						)}
						<div ref={volumeRef} className={styles.volume_slider}>
							<input
								type="range"
								min="0"
								max="1"
								step="0.01"
								value={volume}
								onChange={(e) => handleVolume(e)}
								onMouseEnter={() => showVolumeSlider()}
								onMouseLeave={() => hideVolumeSlider()}
							/>
						</div>
					</div>
					{isBrowserFullScreen ? (
						<div>
							<FitScreenOutlinedIcon />
						</div>
					) : (
						<div>
							<AspectRatioRoundedIcon />
						</div>
					)}
					{isFullScreen ? (
						<div onClick={() => toggleFullScreen()}>
							<FullscreenExitRoundedIcon />
						</div>
					) : (
						<div onClick={() => toggleFullScreen()}>
							<FullscreenRoundedIcon />
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
