import React from 'react'
import { useParams} from 'react-router-dom'
import {ProjListDisp} from '../helpers/ProjListDisp'
import '../styles/ProjectDisplay.css'

function ProjectDisplay() {
    const {id} = useParams();
    const project = ProjListDisp[id]
  return (
    <div className="project">
        <h1>{project.name}</h1>
            <img src={project.image}/>

        
    </div>
  )
}

export default ProjectDisplay