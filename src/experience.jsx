import React from 'react';

const Experience = () => {
  return (
    <div className="experience" id='experience'>
        <h1>Professional Experience</h1>
        <div className="container">
            <img src='./logos/alphaledger-logo.jpg' alt="Alphaledger Logo"/>
            <div>
                <h2>Alphaledger</h2>
                <p>Software Engineer</p>
                <p>May 2022 - October 2022</p> 
            </div>
        </div>
        
        <p className='summary'>Startup working to bring blockchain technology to the municipal bond market</p>
        <ul>
            <li>Developed, configured, and tested multiple containerized Hyperledger Fabric topologies to fit different account architectures that better suited the client’s needs.</li>
            <li>Built confidence in the project by creating a Python application to monitor data transfers between PostgreSQL and the Hyperledger fabric CouchDB that led to multiple bug fixes.</li>
            <li>Increased data reliability and speed by developing Java Spring Batch jobs to handle transferring of large amounts of data utilizing API calls to populate CouchDB environments.</li>
            <li>Adapted to constantly changing business requirements of a startup company by utilizing agile development and scrum methodology while staying organized with Azure DevOps.</li>
        </ul>
    </div>
  )
}
  
export default Experience