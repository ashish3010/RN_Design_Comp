import { useVideoPlayer, VideoView, VideoViewProps } from 'expo-video';
import { useState } from 'react';

export interface VideoScreenProps extends VideoViewProps {
  src: string
  width: number
  height: number
  muted?: boolean
  loop?: boolean
  autoplay?: boolean
}

const VideoScreen = (props: VideoScreenProps) => {
  const {
    src,
    width = 350,
    height = 275,
    muted = false,
    loop = false,
    autoplay = true
  } = props

  const [play, setPlay] = useState(autoplay);

  const player = useVideoPlayer(src, player => {
    player.loop = loop;
    player.muted = muted;
    if (play) {
      player.play();
    }
    else {
      player.pause();
    }
  });

  return (
    <VideoView
      {...props}
      style={{ width, height }}
      player={player}
      allowsFullscreen
      contentFit='contain'
    />
  );
}

export default VideoScreen;

