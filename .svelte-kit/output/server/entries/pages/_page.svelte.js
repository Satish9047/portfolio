import { c as create_ssr_component, a as escape, e as each, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { N as Navbar } from "../../chunks/navbar.js";
const HomeFlex = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let what = ["Node Developer", "IT Enthusiast", "Next.js Developer", "Svelte Developer"];
  let index = 0;
  let who = what[index];
  setInterval(
    () => {
      index = (index + 1) % what.length;
      who = what[index];
    },
    2e3
  );
  return `<main><h1 class="text-2xl sm:text-4xl font-thin">I am a <strong>${escape(who)}</strong>.</h1></main>`;
});
const Expertise = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const Technologies = [
    {
      name: "Node.js",
      icon: "/icons/node.svg",
      level: "intermediate +"
    },
    {
      name: "JavaScript",
      icon: "/icons/javascript.svg",
      level: "intermediate +"
    },
    {
      name: "Next.js",
      icon: "/icons/next.svg",
      level: "intermediate +"
    },
    {
      name: "MongoDB",
      icon: "/icons/mongodb.svg",
      level: "intermediate +"
    },
    {
      name: "Prisma",
      icon: "/icons/prisma.svg",
      level: "intermediate"
    },
    {
      name: "Mongoose",
      icon: "/icons/mongoose.svg",
      level: "intermediate +"
    },
    {
      name: "GitHub",
      icon: "/icons/github.svg",
      level: "intermediate"
    },
    {
      name: "Docker",
      icon: "/icons/docker.svg",
      level: "beginner +"
    },
    {
      name: "Svelte",
      icon: "icons/svelte.svg",
      level: "intermediate +"
    },
    {
      name: "MySql",
      icon: "/icons/mysql.svg",
      level: "intermediate"
    },
    {
      name: "React.js",
      icon: "/icons/react.svg",
      level: "intermediate +"
    },
    {
      name: "TypeScript",
      icon: "/icons/typescript.svg",
      level: "beginner"
    }
  ];
  return `<h2 class="col-span-2 justify-center text-2xl sm:text-3xl" data-svelte-h="svelte-1fsx37q">My Technical Expertise</h2> <main class="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-1 sm:w-5/6 ">${each(Technologies, (technology) => {
    return `<div class="md:ml-5 m-1 px-4 py-1 flex justify-start items-center w-screen sm:w-5/6 bg-gray-300 hover:bg-orange-300 overflow-y-scroll rounded-md"><img${add_attribute("src", technology.icon, 0)}${add_attribute("alt", technology.name, 0)}${add_attribute("width", 100, 0)}${add_attribute("height", 100, 0)} class="w-10 sm:w-14 md:w-16"> <div class="m-1 px-2 flex flex-col justify-start"><h2>${escape(technology.name)}</h2> <p>Level: ${escape(technology.level)}</p></div> </div>`;
  })}</main>`;
});
const downloadUrl = "/downloads/CV-Satish Prajapati.pdf";
const file = "CV-Satish Prajapati.pdf";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="pt-0 mt-0 justify-center">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="flex flex-col justify-center items-center"><img src="/graduate.webp" alt="graduate" class="h-96 w-screen object-cover"> <div class="flex flex-col justify-center items-center" data-svelte-h="svelte-1vfvcjc"><h1 class="text-2xl sm:text-5xl font-thin overflow-hidden">Welcome to My Portfolio Website</h1> <h2 class="text-lg sm:text-2xl font-thin py-4">Hi, I am Satish Prajapati.<br> &quot;A JavaScript developer&quot;</h2> <img src="/single-graduate.webp" alt="Satish" class="rounded-full w-3/5 my-2 sm:my-4"></div> ${validate_component(HomeFlex, "HomeFlex").$$render($$result, {}, {}, {})}</div> <hr class="border my-4"> <div class="flex justify-center flex-col items-center">${validate_component(Expertise, "Expertise").$$render($$result, {}, {}, {})}</div> <hr> <div class="flex flex-col justify-center items-center m-1 p-2"><h1 class="text-xl" data-svelte-h="svelte-1rhnud6">CheckOut My CV</h1> <a${add_attribute("href", downloadUrl, 0)}${add_attribute("download", file, 0)}><button class="p-1 px-2 my-4 bg-lime-600 hover:bg-lime-400 rounded-md" data-svelte-h="svelte-190g7xz">Download CV File</button></a></div></div>`;
});
export {
  Page as default
};
