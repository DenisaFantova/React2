import React from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Zalozky = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <h2>Home</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tenetur distinctio enim hic ipsum error doloremque rerum corrupti explicabo nulla?</p>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <h2>Profile</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quibusdam ex consectetur sapiente accusamus deserunt similique corrupti molestiae, unde adipisci quisquam autem excepturi. Architecto maiores quas necessitatibus dicta doloremque recusandae.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eligendi itaque iste obcaecati unde. Obcaecati hic officiis modi dolore voluptates.</p>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <h2>Contact</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quos!</p>
      </Tab>
    </Tabs>
  )
}

export default Zalozky