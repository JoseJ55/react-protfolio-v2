import React from "react";
import "./style.css";

function Projects() {
    return (
        <div id="projects">
            <h2 id="projectsTitle">Projects</h2>
            <a href="/1">
                <button className="project" id="project1">
                    <h2>Porject 1</h2>
                </button>
            </a>
            <a href="/2">
                <button className="project" id="project2">
                    <h2>Porject 2</h2>
                </button>
            </a>
            <a href="/3">
                <button className="project" id="project3">
                    <h2>Porject 3</h2>
                </button >
            </a>
        </div>
    )
}

export default Projects;