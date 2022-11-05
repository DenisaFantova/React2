import React, {useState, useRef, useEffect} from 'react'

const Player = ({src, handleTimeUpdate}) => {
    const [playing, setPlaying] = useState(false);
    const audioRef = useRef();

    const handlePlay = () => {
        setPlaying(!playing);
    }

    const onTimeUpdate = (e) => {
      handleTimeUpdate(e.target.currentTime)
    }

    useEffect(() => {
      if (playing) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    
    }, [playing])
    

    return (
    <div>
        <audio onTimeUpdate={onTimeUpdate} ref={audioRef} src={src}></audio>
        <button onClick={handlePlay}>{playing ? 'pause' : 'play'}</button>
    </div>
  )
}

export default Player