// src/components/Projects.js
import { HiCode } from "react-icons/hi";
import React from "react";


export default function Projects() {
     const projects = [
        {
          title: "Run Buddy",
          subtitle: "Html, Css",
          description:
            "Run buddy is a application that puts you in touch with a fitness trainer, to help you achieve your fitness goals.",
          image: require('../assets/run-buddy.jpg').default,
          link: "https://ryanblessing-35e74d648e.drafts.github.io/Run-Buddy/",
        },
        {
          title: "Easy-Link",
          subtitle: "HTML, CSS, JavaScript, API's",
          description:
            "Easy Link was a group project I was apart of, thats purpose was to connect people to other like-minded people. Helping them find new spots for food, drinks and entertainment. This is just the baseline of the App, and Future development is key for this to become a successful social networking system!",
          image: require('../assets/easyLink.png').default,
          link: "https://ryanblessing.github.io/Group-project-1/",
        },
        {
          title: "DevChat",
          subtitle: "React and Firebase",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
          image: "./project-3.gif",
          link: "https://jsbootcamp.com",
        },
        {
          title: "Epic Todo App",
          subtitle: "React Hooks",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
          image: "./project-4.gif",
          link: "https://pythonbootcamp.com",
        },
      ];
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <HiCode className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

