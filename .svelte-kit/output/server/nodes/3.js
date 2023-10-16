

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.a999a6ac.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.d0112d41.js","_app/immutable/chunks/navbar.bd3e29d8.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.8ae08851.js"];
export const stylesheets = [];
export const fonts = [];
