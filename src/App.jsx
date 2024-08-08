import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import All from "./Pages/All";
import FullStack from "./Pages/FullStack";
import DataScience from "./Pages/DataScience";
import CyberSecuR from "./Pages/CyberSecuR";
import Career from "./Pages/Career";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nopage from "./Pages/PageNotFound";
import "./App.css";

const App = () => {
  let data = [
    {
      img: "https://www.icoderzsolutions.com/blog/wp-content/uploads/2022/10/Top-10-Full-Stack-Project-Ideas-1024x538.png",
      head: "Full Stack Development",
      content: "Best Full-Stack Development Project Ideas in 2024",
      name: "By Isha Sharma",
      date: "07 Aug 2024",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp" ,
      head: "Full Stack Development",
      content: "How Long Would It Take to Be a Full Stack Developer?",
      name: "By Meghana D",
      date: "07 Aug 2024",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/03/Feature-3.webp" ,
      head: "Full Stack Development",
      content: "7 Unique Web Development Project Ideas for Beginners",
      name: "By Lukesh S",
      date: "07 Aug 2024",
    },
    {
      img: "https://www.learncomputerscienceonline.com/wp-content/uploads/2019/08/Commonly-Used-DBMS.jpg" ,
      head: "Full Stack Development",
      content: "10 Best database Management Systems For Software Developers",
      name: "By Isha Sharma",
      date: "07 Aug 2024",
    },
    {
      img: "https://b1694534.smushcdn.com/1694534/wp-content/uploads/2022/03/Post-Light-2.png?lossy=1&strip=1&webp=1" ,
      head: "Full Stack Development",
      content: "10 Best React Project Ideas for Developers",
      name: "By Isha Sharma",
      date: "07 Aug 2024",
    },
    {
      img: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/06/what-is-apache.webp" ,
      head: "Full Stack Development",
      content: "How does Apache work? A detailed introduction to Apache",
      name: "By Tushar Vinocha",
      date: "07 Aug 2024",
    },    
    {
      img: "https://img.freepik.com/free-vector/big-data-background-technology-visualization-artificial_598544-133.jpg?size=626&ext=jpg&ga=GA1.1.135842764.1717664345&semt=ais_hybrid" ,
      head: "Data Science Program",
      content: "Top 10 High Paying Non-Coding Jobs in Data Science Program in 2024",
      name: "By Isha Sharma",
      date: "23 Jul, 2024",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-2048x1072.webp" ,
      head: "Data Science Program",
      content: "12 Real-World Data Science Program Examples: Power Of Data Science Program",
      name: "By Lukesh S",
      date: "25 Mar, 2024",
    },
    {
      img: "https://qph.cf2.quoracdn.net/main-qimg-19ae1038852c4aa7295486bf29a702f1-lq" ,
      head: "Data Science Program",
      content: "Can A Commerce Student Do Data Science Program?",
      name: "By Saakshi Priyadarshini",
      date: "16 Apr, 2024",
    },
    {
      img: "https://www.datasciencecentral.com/wp-content/uploads/2021/10/1235543088.jpeg" ,
      head: "Data Science Program",
      content: "Roles and Responsibilities of a data Scientist",
      name: "By Jaishree Tomar",
      date: "16 Apr, 2024",
    },
    {
      img: "https://img.freepik.com/free-vector/abstract-banner-data-visualization-big-data-processing-cloud-storage-server-hosting_39422-978.jpg?size=626&ext=jpg&ga=GA1.1.135842764.1717664345&semt=ais_hybrid" ,
      head: "Data Science Program",
      content: "Top Product-Based Companies for data Scientists in 2024",
      name: "By Jaishree Tomar",
      date: "26 Mar, 2024",
    },
    {
      img: "https://img.freepik.com/free-vector/mobile-service-data-analysis-information-statistic-financial-report-online-bank-icon_39422-799.jpg?ga=GA1.1.135842764.1717664345&semt=ais_hybrid" ,
      head: "Data Science Program",
      content: "10 Best Data Science Program Online Courses for Beginners | 2024",
      name: "By Srinithi Sankar",
      date: "02 Apr, 2024",
    },
    {
      img: "https://img.freepik.com/free-vector/data-security-technology-background-vector-blue-tone_53876-112201.jpg?w=1060&t=st=1723106754~exp=1723107354~hmac=243b6dc5339f4809d32f6a5944a898b2a5d8f54d01902ce07871ed1d53061df4" ,
      head: "Cyber Security",
      content: "What Is Hacking? Types of Hacking & More",
      name: "By Meghana D",
      date: "25 Mar, 2024",
    },
    {
      img: "https://fortifydata.com/wp-content/uploads/8-main-cyber-security-threats-scaled.jpg" ,
      head: "Cyber Security",
      content: "8 Different Types of Cybersecurity and Threats Involved",
      name: "By Tushar Vinocha",
      date: "08 Sep, 2023",
    },
    {
      img: "https://img.freepik.com/free-vector/internet-security-technology-template-vector-social-media-post-dark-blue-tone_53876-112209.jpg?w=740&t=st=1723106779~exp=1723107379~hmac=3b1920572a7995115d776cc48dd2b591e3ec1ab01423799103f5cb2f3d4d01d3" ,
      head: "Cyber Security",
      content: "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
      name: "By Tushar Vinocha",
      date: "25 Mar, 2024",
    },
    {
      img: "https://www.grandviewresearch.com/static/img/research/global-cyber-security-market.png",
      head: "Cyber Security",
      content: "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
      name: "By Tushar Vinocha",
      date: "25 Mar, 2024",
    },
    {
      img: "https://miro.medium.com/v2/resize:fit:1200/1*GgvmjkzTFSj-IFXoo-9CFw.png" ,
      head: "Cyber Security",
      content: "The Ultimate Cybersecurity Roadmap for Beginners",
      name: "By Srinithi Sankar",
      date: "23 Mar, 2024",
    },
    {
      img: "https://static.vecteezy.com/system/resources/previews/016/270/671/non_2x/abstract-mesh-hacker-and-shield-cybersecurity-concept-vs-comparison-between-ethical-hacking-ethical-attack-white-hat-hacking-and-system-on-beautiful-blue-background-digital-futuristic-modern-vector.jpg" ,
      head: "Cyber Security",
      content: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      name: "By Tushar Vinocha",
      date: "16 Apr, 2024",
    },
    {
        img: "https://img.freepik.com/free-photo/programming-background-collage_23-2149901789.jpg?t=st=1723110799~exp=1723114399~hmac=0d51c043c5b4f60f3bdb23d283a60571c9d538204f45f852098f6492a0bbce89&w=1060",
        head: "Career Development Program",
        content: "Java Full Stack Development Course",
        name: "By Manik Basha",
        date: "25-Mar-2024",
      },
      {
        img: "https://img.freepik.com/free-vector/3d-block-layers-infographic_23-2148559631.jpg?t=st=1723110901~exp=1723114501~hmac=62e176e0a31d9e5d75a7b16868d4d588f3b5f65602fd013fbc32d5ce515ea551&w=740",
        head: "Career Development Program",
        content: "MERN Full Stack Development",
        name: "By Sandy",
        date: "26-Mar-2024",
      },
      {
        img: "https://img.freepik.com/free-vector/roboticist-online-service-platform-robotic-engineering-constructing-artificial-intelligence-modeling-industry-online-course-flate-vector-illustration_613284-2863.jpg?t=st=1723111030~exp=1723114630~hmac=516e1e64587b4f381c61456eec35570f7ab1de02017ae2460bb2d4197bdd7e96&w=826",
        head: "Career Development Program",
        content: "Data Science Program Course",
        name: "By Nikki",
        date: "28-Mar-2024",
      },
      {
        img: "https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595850.jpg?ga=GA1.1.135842764.1717664345&semt=ais_hybrid",
        head: "Career Development Program",
        content: "Ratification Technology",
        name: "By Vijay",
        date: "12-June-2024",
      },
      {
        img: "https://img.freepik.com/free-photo/view-brain-depicted-as-fantastical-tree_23-2150833947.jpg?ga=GA1.1.135842764.1717664345&semt=ais_hybrid",
        head: "Career Development Program",
        content: "Neuromorphic Computing",
        name: "By Ajith",
        date: "15-June-2024",
      },
      {
        img: "https://img.freepik.com/free-vector/nanotechnology-nanomedicine-innovative-technologies-with-microchip-microscope-dna-color-background-isometric-vector-illustration_1284-78798.jpg?size=626&ext=jpg&ga=GA1.2.135842764.1717664345&semt=ais_hybrid",
        head: "Career Development Program",
        content: "Nano-Technology",
        name: "By STR",
        date: "18-June-2024",
      },
  ];

  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar></Navbar>
        </div>
        <Routes>
          <Route path="/" element={<All data={data} />} />
          <Route path="/FullStackDevelopment" element={<FullStack data={data} />} />
          <Route path="/DataScience" element={<DataScience data={data} />} />
          <Route path="/CyberSecurity" element={<CyberSecuR data={data} />} />
          <Route path="/Career" element={<Career data={data} />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;