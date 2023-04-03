import React from 'react'
import '../styles/Projects.css'
import ProjectItem from '../components/ProjectItem'
import { ProjectList } from '../helpers/ProjectList'
import sound from '../assets/rclick.mp3'

function Projects() {
    function play(){
        new Audio (sound).play()
    }

  return (
    <div>
        <div className ="projects ">
        <h2>Projects & More</h2>
        
       
        <div className='projectList' onClick={play}> 

          {ProjectList.map((project,idx)=>{
            return (<ProjectItem id = {idx} image = {project.image}  />
            )
          }

          )}
        
        </div>
       </div>
    </div>
  )
}

export default Projects


