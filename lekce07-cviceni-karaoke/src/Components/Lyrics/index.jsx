import React, {useRef, useEffect} from 'react'

const Lyrics = ({lines, currentLineIndex}) => {
  const lineRef = useRef(lines[currentLineIndex]);

  const lineRefs = useRef([]) 

  useEffect(() => {
    if (currentLineIndex >= 0) {
      lineRefs.current[currentLineIndex].scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth',
      });
    }    
  }, [currentLineIndex])

  return (
    <div className="lyrics">
      {lines.map((line, index) => {
          const lineRef = (element) => (lineRefs.current.push(element))
          return <p ref={lineRef} key={index} className={index === currentLineIndex ? 'current-line' : undefined}>{line.text}</p>
        }
      )}
    </div>
  )
}

export default Lyrics