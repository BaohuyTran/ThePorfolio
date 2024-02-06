import Okr from "../assets/okr.png";
import Datawarehouse from "../assets/datawarehouse.png";
import Proj3 from "../assets/proj3.webp";
import Proj4 from "../assets/proj4.webp";
import Proj5 from "../assets/proj5.jpg";
import Proj6 from "../assets/proj6.png";

export const ProjectList = [
  {
    name: "OKR tool",
    image: Okr,
    skills: "Vus, Nest.js",
    description: `This is an internal project of Bosch. It is a OKR tool (Objective - Key Result) designed to help
                  manage teams' work progress.
                  My main role is to maintain this tool and also create some new functions (example: drag and drop
                  feature)
                  I also have some tasks in backend, to create new or fix api`,
    src: "",
  },
  {
    name: "Data warehouse",
    image: Datawarehouse,
    skills: "React, D3.js",
    description: `This is an internal project of KSE. It is a tool for analyzing and visualizing data, available in both
                  mobile and web versions.
                  My main role is to design the interface for this website and also in charge of visualizing data
                  recieved from back-end.
                  `,
    src: "",

  },
  {
    name: "Chat app",
    image: Proj3,
    skills: "React, Node.js, MongoDB, SocketIO",
    description: `I created this project on my own to study NodeJS and Socket, also to practice with React`,
    src: "https://github.com/BaohuyTran/chat_app/",
  },
  {
    name: "Movie Review",
    image: Proj4,
    skills: "Java Spring Boot, ReactJS, MongoDB",
    description: `I created this project on my own to study Java Spring Boot and practice with React`,
    src: "https://github.com/BaohuyTran/Movie",
  },
  {
    name: "Weird Race",
    image: Proj4,
    skills: "C#, Unity 3d",
    description: ``,
    src: "https://simmer.io/@BaoHuy_Tran/weird-race",
  },
  {
    name: "Sumo Balls",
    image: Proj5,
    skills: "C#, Unity 3d",
    description: ``,
    src: "https://simmer.io/@BaoHuy_Tran/sumo-balls",
  },
];

export const ExperienceList = [
  {
    title: "HUS High School for Gifted Student",
    position: "",
    description: "High school",
    from: "2016",
    to: "2019",
    type: "study",
  },
  {
    title: "University of Sience and Technology of Hanoi",
    position: "",
    description: "Bachelor degree in Information and technology",
    from: "2019",
    to: "2023",
    type: "study",
  },
  {
    title: "Aptech Hanoi",
    position: "",
    description: "Advanced Diploma in Software Engineering",
    from: "2021",
    to: "Present",
    type: "study",
  },
  {
    title: "KSE Solution",
    position: "Front-end developer Intern",
    description: "Data visualisation",
    from: "03/2022",
    to: "07/2022",
    type: "work",
  },
  {
    title: "Devfast",
    position: "Game developer Intern",
    description: "Getting started with Unity",
    from: "08/2022",
    to: "",
    type: "work",
  },
  {
    title: "Bosch Global Software Technologies",
    position: "Front-end developer Intern",
    description: "Develop OKR tools (Objective - key result)",
    from: "02/2023",
    to: "08/2023",
    type: "work",
  },
];