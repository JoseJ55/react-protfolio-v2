import React, { useState, useContext, useEffect } from "react";

import ProjectHeader from "./../ProjectHeader/ProjectHeader";
import ProjectImages from "../ProjectImages/ProjectImages";
import ProjectVideo from "../ProjectVideo/ProjectVideo";
import { ProjectsContext } from "./../../projectsContext";


function Project({ title }) {
    const { projects } = useContext(ProjectsContext)
    const [project, setProject] = useState({})
    console.log(projects)

    useEffect(() => {
        console.log(projects)
        var result = projects.find((project) => {
            return project.title === title;
        })

        setProject(result)
    }, [])

    console.log(project)
    return (
        <div>
            {/* {title} */}
            <ProjectHeader 
                title={project.title}
                desc={project.description}
                links={project.links}
            />
            <ProjectImages images={project.images} />
            <ProjectVideo video ={project.video} />
        </div>
    )
}

export default Project;