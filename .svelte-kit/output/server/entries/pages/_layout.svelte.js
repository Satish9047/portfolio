import { c as create_ssr_component, e as each, a as escape, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const app = "";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let date = /* @__PURE__ */ new Date();
  let year = date.getFullYear();
  const SocialPlatforms = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/satees55/"
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/satees_prajapati/"
    },
    {
      name: "Twitter",
      link: "https://twitter.com/SatishP42242976"
    }
  ];
  return `<main class="bg-slate-900 text-slate-500 flex flex-col justify-center items-center py-4 px-2 mt-4"><h1 class="text-xl sm:text-2xl" data-svelte-h="svelte-1j9nal8">Social Media</h1> <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 my-4">${each(SocialPlatforms, (platform) => {
    return `<a${add_attribute("href", platform.link, 0)} target="_blank" class="hover:text-white">${escape(platform.name)}</a>`;
  })}</div> <p>© ${escape(year)} Satish Prajapati made with love. All Rights Reserved.</p></main>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
