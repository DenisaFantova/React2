import React, {useState, useRef, useEffect} from 'react'

const Player = ({src}) => {
    const [playing, setPlaying] = useState(false);
    const audioRef = useRef();

    const handlePlay = () => {
        setPlaying(!playing);
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
        <audio ref={audioRef} src={src}></audio>
        <button onClick={handlePlay}>{playing ? 'pause' : 'play'}</button>
    </div>
  )
}

export default Player