const logotext = "PIYUSH";
import profile from './assets/images/profile.jpeg';
import stepmintImg from './assets/images/Screenshot 2025-08-04 at 10.47.30 PM.png'
import testaintyImg from './assets/images/Screenshot 2025-08-04 at 10.50.39 PM.png'
import airStudio from './assets/images/WhatsApp Image 2025-08-04 at 22.55.24.jpeg'
import artiesImg from './assets/images/Screenshot 2025-08-04 at 11.15.56 PM.png'


const meta = {
    title: "Piyush Kumawat",
    description: "I’m Piyush Kumawat, a Full Stack Developer and Blockchain enthusiast specializing in React, Node, and TypeScript.",
};

const introdata = {
    title: "I’m Piyush Kumawat",
    animated: {
        first: "I love building web apps",
        second: "I develop full stack applications",
        third: "I explore blockchain tech",
    },
    description: "Passionate Full Stack Developer with expertise in JavaScript frameworks and Blockchain technologies. Let's build something great together!",
    your_img_url: profile, // Replace with your own image URL if needed
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I'm a full stack developer with experience in modern web technologies including React, Node.js, Express, MongoDB, and relational databases like MySQL and PostgreSQL. I'm also exploring the world of Blockchain and smart contracts with a focus on decentralized solutions.",
};
const worktimeline = [
  {
    jobtitle: "Sr. Full Stack Developer",
    where: "ESP Softtech Pvt. Ltd (Indore)",
    date: "June 2024 - Present",
  },
  {
    jobtitle: "Sr. Software Engineer",
    where: "Certainty Infotech Pvt. Ltd (Indore)",
    date: "July 2023 - June 2024",
  },
  {
    jobtitle: "Software Developer",
    where: "Cyber Infrastructure (P) Ltd (Indore)",
    date: "Nov 2020 - July 2023",
  },
  {
    jobtitle: "Software Developer",
    where: "Dollop Infotech Pvt. Ltd (Indore)",
    date: "Nov 2019 - Nov 2020",
  },
];


const skills = [
    { name: "React.js", value: 90 },
    { name: "Node.js", value: 85 },
    { name: "Express.js", value: 85 },
    { name: "MongoDB", value: 70 },
    { name: "MySQL", value: 70 },
    { name: "PostgreSQL", value: 70 },
    { name: "Blockchain", value: 40 },
    { name: "Web3.js / Ethers.js", value: 70 },
    { name: "TypeScript", value: 80 },
];

const services = [
    {
        title: "Full Stack Web Development",
        description: "Building responsive and dynamic web applications using MERN stack and TypeScript.",
    },
    {
        title: "Blockchain Development",
        description: "Creating smart contracts and decentralized applications (DApps) on Ethereum blockchain.",
    },
    {
        title: "Database Design",
        description: "Structuring and optimizing both SQL and NoSQL databases for scalability and performance.",
    },
];

const dataportfolio = [
  {
    img: stepmintImg,
    title: "Step Mint",
    description: "Move-to-earn fitness platform using React, Node.js & Web3. Rewards users with MNT tokens for daily steps.",
    link: "https://stepmint.io/",
  },
  {
    img: testaintyImg,
    title: "Testainty",
    description: "Full-stack task management system built with the MERN stack. Organize, assign, and track tasks easily.",
    link: "https://testainty.com/",
  },
  {
    img: airStudio,
    title: "Airstudio",
    description: "High-volume photography studio platform with advanced scheduling & equipment management. Built with React, Apollo, Django & GraphQL.",
    link: "https://srp.sbx.airstudio.io",
  },
   {
    img: artiesImg,
    title: "Artis Property",
    description: "AArtis Property – Australia’s largest off-market real estate platform, enabling users to buy and sell properties not listed publicly. Offers direct buyer-seller interaction, low fees, and nationwide property access.",
    link: "https://artisapp.com/",
  },
];


const contactConfig = {
    YOUR_EMAIL: "piyushkumawat8989@gmail.com", // Replace with your real email
    YOUR_FONE: "+91-7566193913", // Replace with your real number
    description: "Feel free to reach out if you'd like to collaborate on a project, have a question, or just want to connect!",
    YOUR_SERVICE_ID: "service_6dm43hx",
    YOUR_TEMPLATE_ID: "template_3f0r5bm",
    YOUR_USER_ID: "Fu8dJ3oKS7Fc3NvUA",
};

const socialprofils = {
    //github: "https://github.com/yourusername",
    //facebook: "https://facebook.com/yourprofile",
    linkedin: "https://www.linkedin.com/in/piyush-kumawat8989/",
    //twitter: "https://twitter.com/yourhandle",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
