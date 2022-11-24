import React from 'react'

const Sidebar = ({title, content, left, right, children}) => {
  return (
    <aside className='sidebar'>
        <h1>{title}</h1>
        <p>{content}</p>
        <hr />
        <div className="flex">
            <div>{left}</div>
            <div>{right}</div>
        </div>
        <hr />
        {children}
    </aside>
  )
}

export default Sidebar