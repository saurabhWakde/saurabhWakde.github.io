// --------------------------------------- Project List
import plantImage from '../Assets/images/projects/plantorderapp.jpg'
import netmedsImage from '../Assets/images/projects/netmedsImage.png'
import adventourImage from '../Assets/images/projects/adventour.png'
import ecotourismImage from '../Assets/images/projects/ecotourism.png'
import html from "../Assets/techstack-icons/html.png";
import css from "../Assets/techstack-icons/css.png";
import javascript from "../Assets/techstack-icons/javascript.png";
import react from "../Assets/techstack-icons/react.png";
import redux from "../Assets/techstack-icons/redux.png";
import nodejs from "../Assets/techstack-icons/node.png";
import mongodb from "../Assets/techstack-icons/mongodb.png";
import express from "../Assets/techstack-icons/express.png";
import typescript from "../Assets/techstack-icons/typescript.png";
import chakraui from "../Assets/techstack-icons/chakra.png";
import git from "../Assets/techstack-icons/git.png";
import postman from "../Assets/techstack-icons/postman.png";


export const ProjectList = [
  {
    img: `${plantImage}`,
    title: "Plant Order Website",
    description: `Introducing our Plant Order Application - the ultimate green companion at your fingertips. Browse, select, and order from our wide range of exquisite plants for delivery to your doorstep. Embrace nature's beauty and bring it home effortlessly with our user-friendly app.`,
    tech_stack: "HTML, CSS, Javascript, ES6",
    github_url: "https://github.com/saurabhWakde/-Plant_Order_Application",
    demo_url: "https://plant-order-website.vercel.app/",
  },
  {
    img: `${netmedsImage}`,
    title: "Netmeds Clone",
    description:
      `Built a Netmeds clone using HTML, CSS, and JavaScript. Mirrored the online
      pharmacy's features, including a variety of medicines and services.
      Showcases proficiency in web development.`,
    tech_stack: "HTML, CSS, Javascript, ES6",
    github_url: "https://github.com/saurabhWakde/Netmeds",
    demo_url: "https://fantastic-khapse-deda88.netlify.app/",
  },
  {
    img: `${adventourImage}`,
    title: "Adventour : Travel APP",
    description: `Built ADVENTOUR with React, Redux, and Chakra UI for a dynamic and
    responsive user experience. Seamlessly blending these technologies, the
    project offers an immersive interface with intuitive navigation.
    `,
    tech_stack: "React.js, Redux, Chakra-UI",
    github_url: "https://github.com/ballalamit/Adventour",
    demo_url: "https://adventour-iota.vercel.app/",
  },
  {
    img: `${ecotourismImage}`,
    title: "Eco Tourism",
    description:
      "A implemenation of a travel application concept. Here, you can browse through eco friendly locations around the world, checkout interesting places, and book tickets through a customizable payment interface.",
    tech_stack: "React.js, Redux, Chakra-UI",
    github_url: "https://github.com/slowandrarecooked/ecotourism",
    demo_url: "https://ecotourismapp.vercel.app/",
  },
];

// --------------------------------------- Skills-------------------------//

export const stackList = [
  {
    img: html,
    name: "HTML",
  },
  {
    img: css,
    name: "CSS",
  },
  {
    img: javascript,
    name: "JavaScript",
  },
  {
    img: react,
    name: "ReactJS",
  },
  {
    img: redux,
    name: "Redux",
  },
  {
    img: nodejs,
    name: "NodeJS",
  },
  {
    img: mongodb,
    name: "MongoDB",
  },
  {
    img: express,
    name: "Express",
  },
  {
    img: typescript,
    name: "TypeScript",
  },
  {
    img: chakraui,
    name: "Chakra UI",
  },
  {
    img: git,
    name: "Git",
  },
  {
    img: postman,
    name: "Postman",
  },
];
