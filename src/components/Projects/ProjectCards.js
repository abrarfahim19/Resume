import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import ProjectDetails from "./ProjectDetails";

function ProjectCards({data}) {

  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="member member-1">
        {/* <div className="member-img"> */}
          <img className="member-img" src={data?.img_data[0].img}  />
        {/* </div> */}
        <div className="member-info">
          <h1 className="name ">{data?.name}</h1>
          <h3 className="position">My Project</h3>
          <h4 className="about">
            {data?.point1}
          </h4>
          {/* <a href="#contact" className="contact-member"> */}
            <span className="contact-member" onClick={()=>setModalShow(true)}>contact</span>
          {/* </a> */}
          <ProjectDetails show={modalShow} onHide={()=>setModalShow(false)} data={data} />
        </div>
      </div>
  );
}
export default ProjectCards;
