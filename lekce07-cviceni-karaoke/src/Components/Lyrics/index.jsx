import React from 'react'

const Lyrics = ({lines, currentLineIndex}) => {
   console.log(lines)

  return (
    <div className="lyrics">
        {lines.map((line, index) => 
            <p className={index === currentLineIndex && 'current-line'}>{JSON.stringify(line.text)}</p>
        )}
    </div>
  )
}

export default Lyrics