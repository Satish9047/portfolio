export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["chat.svg","cross.svg","downloads/CV-Satish Prajapati.pdf","favicon.png","graduate.webp","icons/docker.svg","icons/github.svg","icons/javascript.svg","icons/mongodb.svg","icons/mongoose.svg","icons/mysql.svg","icons/next.svg","icons/node.svg","icons/prisma.svg","icons/react.svg","icons/svelte.svg","icons/typescript.svg","menu.svg","portfolio.svg","portfolio2.svg","profile.jpg","sales.svg","single-graduate.webp","todo.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".pdf":"application/pdf",".png":"image/png",".webp":"image/webp",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.3998e792.js","app":"_app/immutable/entry/app.29b4bc85.js","imports":["_app/immutable/entry/start.3998e792.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.efb7ece7.js","_app/immutable/chunks/paths.8ae08851.js","_app/immutable/entry/app.29b4bc85.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.d0112d41.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/project",
				pattern: /^\/project\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
