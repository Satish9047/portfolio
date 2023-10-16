

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.102d0dc6.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.d0112d41.js","_app/immutable/chunks/singletons.efb7ece7.js","_app/immutable/chunks/paths.8ae08851.js"];
export const stylesheets = [];
export const fonts = [];
