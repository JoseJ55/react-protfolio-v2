import React from "react";
import "./style.css";

function ProjectHeader({ title, desc, links}) {
    let num = 1;
    let l;
    return(
        <div className="projectHeader">
            <div className="projectHead">
                <button>Back</button>
            </div>
            
            <h2 className="projectName">{title}</h2>
            <div className="projectDesc">
                <p>{desc}</p>
            </div>
            {/* -------------Important------------- */}
            {/* For the links the first needs to be github and then live project */}
            <div className="projectLinks">
                {links.map((data) => {
                    
                    if (num === 1){
                        l = <p className="gitLink">Github: <a href={data}>{data}</a></p>
                        num++;
                    } else {
                        l = <p>Live Project: <a href={data}>{data}</a></p>
                        num--;
                    }
                    return l;
                })}
            </div>
        </div>
    )
}

export default ProjectHeader;