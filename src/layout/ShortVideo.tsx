"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Avatar from "../components/Avatar";
import Video from "../components/Video";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import VideoControls from "@/components/VideoControls";
import Link from "next/dist/client/link";
import styles from "../styles/sass/layout/ShortVideo.module.scss";

type ShortVideoType = {
	video_src: string;
	replyCount?: number;
	likeCount?: number;
	author_avatar?: string;
	author?: string;
	video_title?: string;
	created_time?: Date | undefined;
	short?: boolean;
};

export const ShortVideo = (props: ShortVideoType) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const fullScreenDivRef = useRef<HTMLDivElement>(null);
	const { ref, inView, entry } = useInView({
		threshold: 1,
		delay: 1000,
	});

	const [volume, setVolume] = useState(0);
	const [paused, setPaused] = useState(true);
	const [currentTime, setCurrentTime] = useState([0, 0]);
	const [currentTimeSec, setCurrentTimeSec] = useState(0);
	const [duration, setDuration] = useState([0, 0]);
	const [durationSec, setDurationSec] = useState(0);
	const [muted, setMuted] = useState(true);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isFullScreen, setIsFullScreen] = useState(false);
	const [isBrowserFullScreen, setIsBrowserFullScreen] = useState(false);
	const [progress, setProgress] = useState(0);
	const [seeking, setSeeking] = useState(false);

	const secToMin = (sec: number) => {
		const min = Math.floor(sec / 60);
		const secRemain = Math.floor(sec % 60);
		return {
			min: min,
			sec: secRemain,
		};
	};

	const togglePlay = () => {
		if (isPlaying === true) {
			handlePause();
		} else {
			handlePlay();
		}
	};

	const handlePlay = () => {
		if (videoRef.current === null) return;
		videoRef.current.play();
		setIsPlaying(true);
	};
	const handlePause = () => {
		if (videoRef.current === null) return;
		videoRef.current.pause();
		setIsPlaying(false);
	};

	//AUTO PLAY DURING SCROLL
	useEffect(() => {
		if (videoRef.current === null) return;
		videoRef.current.muted = true;

		if (inView === true) {
			handlePlay();
		} else {
			handlePause();
		}
	}, [inView]);

	useEffect(() => {
		if (videoRef.current === null) return;

		const { min, sec } = secToMin(videoRef.current.duration);
		setDurationSec(videoRef.current.duration);
		setDuration([min, sec]);

		console.log(videoRef.current.duration);
		const interval = setInterval(() => {
			if (videoRef.current === null) return;
			const { min, sec } = secToMin(videoRef.current.currentTime);
			setCurrentTimeSec(videoRef.current.currentTime);
			setCurrentTime([min, sec]);
		}, 1000);

		return () => clearInterval(interval);
	}, [isPlaying]);

	const toggleComment = () => {};

	useEffect(() => {
		if (volume == 0) {
			setMuted(true);
		} else {
			setMuted(false);
		}
	}, [volume]);

	const toggleMute = () => {
		if (videoRef.current === null) return;

		if (volume === 0) {
			videoRef.current.muted = false;
			videoRef.current.volume = 0.2;
			setVolume(0.2);
			setMuted(false);
		} else {
			videoRef.current.muted = true;
			videoRef.current.volume = 0;
			setVolume(0);
			setMuted(true);
		}
	};

	const handleVolume = (e: any) => {
		if (videoRef.current === null) return;
		videoRef.current.volume = e.target.value;
		setVolume(e.target.value);
	};

	const toggleFullScreen = () => {
		if (fullScreenDivRef.current === null) return;
		if (isFullScreen) {
			document.exitFullscreen();
			setIsFullScreen(!isFullScreen);
		} else {
			fullScreenDivRef.current.requestFullscreen();
			setIsFullScreen(!isFullScreen);
		}
	};

	const handleSeekChange = (e: any) => {
		if (videoRef.current === null) return;
		videoRef.current.currentTime = parseFloat(e.target.value);
		setCurrentTimeSec(parseFloat(e.target.value));
	};

	const {
		video_src,
		replyCount,
		likeCount,
		author_avatar,
		author,
		video_title,
		created_time,
		short,
	} = props;
	return (
		<div className={styles.shortvideo} ref={fullScreenDivRef}>
			<div className={styles.shortvideo_container}>
				<div className={styles.player_container} ref={ref}>
					<Video src={video_src} ref={videoRef} />
				</div>
				{short ? (
					<>
						<div className={styles.player_overlay}>
							<div className={styles.info_container}>
								<div className={styles.avatar}>
									<Avatar avatar_src={author_avatar} size={50} />
								</div>
								<div className={styles.like}>
									<div className={styles.icon}>
										<FavoriteIcon />
									</div>
									<div className={styles.like_count}>{likeCount}</div>
								</div>
								<div className={styles.reply} onClick={() => toggleComment()}>
									<div className={styles.icon}>
										<CommentIcon />
									</div>
									<div className={styles.reply_count}>{replyCount}</div>
								</div>
							</div>
						</div>
						<div className={styles.video_info}>
							<Link href="#" className={styles.author}>
								<h5 className={styles.author}>@{author}</h5>
								<h5 className={styles.time}>{created_time?.toISOString()}</h5>
							</Link>
							<div className={styles.title}>{video_title}</div>
							<div className={styles.related_category}></div>
						</div>
					</>
				) : null}
				<div className={styles.control_overlay}>
					<VideoControls
						isPlaying={isPlaying}
						isFullScreen={isFullScreen}
						isBrowserFullScreen={isBrowserFullScreen}
						volume={volume}
						duration={duration}
						durationSec={durationSec}
						currentTime={currentTime}
						currentTimeSec={currentTimeSec}
						muted={muted}
						togglePlay={togglePlay}
						toggleFullScreen={toggleFullScreen}
						handleSeekChange={handleSeekChange}
						handleVolume={handleVolume}
						toggleMute={toggleMute}
					/>
				</div>
			</div>
		</div>
	);
};
