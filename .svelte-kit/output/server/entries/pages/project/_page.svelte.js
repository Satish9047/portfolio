import { c as create_ssr_component, e as each, b as add_attribute, a as escape, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar } from "../../../chunks/navbar.js";
const projects = [
  {
    img: "/chat.svg",
    link: "https://github.com/Satish9047/gossip",
    technology: "Next.js, MongoDB, Node.js, socket.io, express, tailwind, jsonwebtoken",
    projectName: "Gossip App",
    description: "Chat application,(Still builing) user can have a live chat "
  },
  {
    img: "/sales.svg",
    link: "https://github.com/Satish9047/sales-management",
    technology: "Node.js, express, jsonwebtoken",
    projectName: "Sales Management API",
    description: "api for managing sales. features: add, update, report making, delete order"
  },
  {
    img: "/todo.svg",
    link: "https://github.com/Satish9047/next-tailwind-todo",
    technology: "Next.js, tailwind css",
    projectName: "Todo-App",
    description: " its the todo task manager (no database)"
  },
  {
    img: "/portfolio.svg",
    link: "https://github.com/Satish9047/personal-website",
    technology: "html, css",
    projectName: "Portfolio Website",
    description: "This is my beginner level portfolio website."
  },
  {
    img: "/portfolio2.svg",
    link: "",
    technology: "svelte, tailwind, formsubmit, ",
    projectName: "Portfolio Website intermediate",
    description: "intermediate level portfoliowebsite"
  }
];
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="flex flex-col justify-center items-center">${each(projects, (project) => {
    return `<div class="mx-2 my-2 px-5 py-2 flex sm:flex-col justify-center items-center bg-gray-300 sm:w-3/4 max-w-screen-md"><div class="flex flex-col items-center sm:flex-row text-justify w-full"><img${add_attribute("src", project.img, 0)}${add_attribute("height", 150, 0)}${add_attribute("width", 100, 0)}${add_attribute("alt", project.projectName, 0)} class="px-4 py-1"> <div class="flex flex-col"><h1 class="text-2xl">${escape(project.projectName)}</h1> <p class="overflow-y-scroll h-20">technology: ${escape(project.technology)}<br>
                description: ${escape(project.description)}<br>
                project link: <a${add_attribute("href", project.link, 0)} target="_blank">${escape(project.link)}</a></p> </div></div> </div>`;
  })}</main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <h1 class="text-xl sm:text-2xl md:text-5xl font-thin mx-4 my-1 p-2 flex justify-center" data-svelte-h="svelte-13h7w4e">My projects</h1> ${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
