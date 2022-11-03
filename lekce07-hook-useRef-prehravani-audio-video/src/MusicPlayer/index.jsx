import React, {useState, useEffect, useRef} from 'react'

const MusicPlayer = ({src}) => {
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
        <div className='music-player'>
            <audio ref={audioRef} src={src}/>
            <button onClick={handlePlay}>{playing ? 'pause' : 'play'}</button>
        </div>
    )
}

export default MusicPlayer