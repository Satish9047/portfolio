import { c as create_ssr_component, v as validate_component, b as add_attribute, a as escape } from "../../../chunks/ssr.js";
import { N as Navbar } from "../../../chunks/navbar.js";
const url = "https://formsubmit.co/18bc3b46707d3c782c8d030c2b4cbd32";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let subject = "";
  return `<main>${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="flex justify-center h-screen"><div class="flex justify-center items-center flex-col w-5/6 sm:w-2/4 md:w-1/3"><h1 class="m-2 text-3xl font-light " data-svelte-h="svelte-lpe2ta">Contact</h1> <form${add_attribute("action", url, 0)} method="POST" class="flex flex-col w-full"><label for="email" data-svelte-h="svelte-1p9d3fm">Email</label> <input type="text" id="email" name="email" class="px-4 py-1 mb-2 border border-gray-500 rounded-md"${add_attribute("value", email, 0)}> <label for="subject" data-svelte-h="svelte-ct7802">Subject</label> <input type="text" id="subject" name="subject" class="px-4 py-1 mb-2 border border-gray-500 rounded-md"${add_attribute("value", subject, 0)}> <label for="message" data-svelte-h="svelte-4uee20">Message</label> <textarea name="message" id="message" class="px-4 py-1 mb-4 border border-gray-500 rounded-md">${escape("")}</textarea> <button type="submit" class="px-4 py-1 bg-gray-500 hover:bg-gray-800 : text-slate-200 rounded-md " data-svelte-h="svelte-7z8oyh">Send message</button></form></div></div></main>`;
});
export {
  Page as default
};
