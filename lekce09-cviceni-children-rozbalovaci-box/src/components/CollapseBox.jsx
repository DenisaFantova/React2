import React, {useState} from 'react'

const CollapseBox = ({title, children}) => {
    const [showMore, setShowMore] = useState(false);
    
    return (
    <>
        <div
        className='collapsebox__title'
        onClick={() => setShowMore(!showMore)}>    
            <h1>{title} &rsaquo;</h1>
        </div>
        <div>
            {showMore ? children : null}
        </div>        
    </>
    
  )
}

export default CollapseBox