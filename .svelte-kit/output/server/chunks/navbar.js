import { c as create_ssr_component, d as subscribe, b as add_attribute, e as each, a as escape } from "./ssr.js";
import { w as writable } from "./index.js";
const isClick = writable(false);
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isClick, $$unsubscribe_isClick;
  $$unsubscribe_isClick = subscribe(isClick, (value) => $isClick = value);
  let menus = [
    { name: "Home", link: "/" },
    { name: "Project", link: "/project" },
    { name: "Contact", link: "/contact" }
  ];
  $$unsubscribe_isClick();
  return `<div class="pt-0 mt-0 bg-gray-500 flex justify-between items-center pl-2 sm:pl-0 sm:px-3 h-12 sm:h-auto"><button class="sm:hidden">${$isClick ? `<img src="/cross.svg"${add_attribute("height", 20, 0)}${add_attribute("width", 20, 0)} alt="cross">` : `<img src="/menu.svg"${add_attribute("height", 20, 0)}${add_attribute("width", 20, 0)} alt="menu">`}</button> <header class="hidden sm:block text-2lg md:text-4xl px-1 sm:px-4 py-2" data-svelte-h="svelte-1i0z2g2">Satish Dev</header> <div class="sm:flex">${each(menus, (menu) => {
    return `<a${add_attribute("href", menu.link, 0)}><h4 class="sm:mx-1 sm:px-1 md:mx-2 md:px-4 md:py-1 sm:font-light md:font-normal hover:bg-gray-700 rounded-sm hidden sm:flex">${escape(menu.name)}</h4></a>`;
  })}</div></div> ${$isClick ? `<div class="bg-white block top-14 w-full shadow-md sm:hidden">${each(menus, (menu) => {
    return `<a${add_attribute("href", menu.link, 0)} class="block py-2 px-4 bg-gray-400 hover:bg-gray-200">${escape(menu.name)}</a>`;
  })}</div>` : ``}`;
});
export {
  Navbar as N
};
