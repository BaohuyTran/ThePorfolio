import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

import { ExperienceList } from "../data/Data";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        {ExperienceList.map((exp) => {
          return (
            <VerticalTimelineElement
              className={"vertical-timeline-element--" + exp.type}
              contentStyle={
                exp.type === "study"
                  ? { background: "#3e497a", color: "#fff" }
                  : { background: "#e9d35b", color: "#000" }
              }
              contentArrowStyle={
                exp.type === "study"
                  ? { borderRight: '7px solid  #3e497a' }
                  : { borderRight: '7px solid  #e9d35b' }
              }
              date={exp.from + " - " + exp.to}
              iconStyle={
                exp.type === "study"
                  ? { background: "#3e497a", color: "#fff" }
                  : { background: "#e9d35b", color: "#fff" }
              }
              icon={exp.type === "study" ? <SchoolIcon /> : <WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">{exp.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{exp.position}</h4>
              <p>{exp.description}</p>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;