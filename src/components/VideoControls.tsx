import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseCircleRoundedIcon from "@mui/icons-material/PauseCircleRounded";
import VolumeOffRoundedIcon from "@mui/icons-material/VolumeOffRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRoundedIcon from "@mui/icons-material/VolumeDownRounded";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";
import FullscreenExitRoundedIcon from "@mui/icons-material/FullscreenExitRounded";
import AspectRatioRoundedIcon from "@mui/icons-material/AspectRatioRounded";
import FitScreenOutlinedIcon from "@mui/icons-material/FitScreenOutlined";

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
								<PauseCircleRoundedIcon />
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
					<input
						type="range"
						min="0"
						max="1"
						step="0.1"
						value={volume}
						onChange={(e) => handleVolume(e)}
					/>
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
