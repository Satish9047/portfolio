<script>

    const Technologies = [
        {
            name: "HTML",
            icon: "/icons/html.svg",
        },
        {
            name: "CSS",
            icon: "/icons/css.svg",
        },
        {
            name: "JavaScript",
            icon: "/icons/javascript.svg",
        },
        {
            name: "TypeScript",
            icon: "/icons/typescript.svg",
        },
        {
            name: "Node.js",
            icon: "/icons/node.svg",
        },
        {
            name: "React.js",
            icon: "/icons/react.svg",
        },
        {
            name: "Svelte",
            icon: "icons/svelte.svg",
        },
        {
            name: "Angular",
            icon: "/icons/angular.svg",
        },
        {
            name: "Next.js",
            icon: "/icons/next.svg",
        },
        {
            name: "MongoDB",
            icon: "/icons/mongodb.svg",
        },
        {
            name: "Express.js",
            icon: "/icons/express.svg",
        },
        {
            name: "Prisma",
            icon: "/icons/prisma.svg",
        },
        {
            name: "Mongoose",
            icon: "/icons/mongoose.svg",
        },
        {
            name: "GoLang",
            icon: "/icons/golang.svg",
        },
        {
            name: "GitHub",
            icon: "/icons/github.svg",
        },
        {
            name: "Docker",
            icon: "/icons/docker.svg",
        },
        {
            name: "Redux",
            icon: "/icons/redux.svg",
        },
        {
            name: "RTK Query",
            icon: "/icons/rtk-query.svg",
        },
        {
            name: "SCSS",
            icon: "/icons/scss.svg",
        },
        {
            name: "Shadcn",
            icon: "/icons/shadcn.svg",
        },
        {
            name: "PostgreSQL",
            icon: "/icons/postgresql.svg",
        },
        {
            name: "MySql",
            icon: "/icons/mysql.svg",
        },
        
        
    ];

</script>
<h2 class="justify-center col-span-2 text-2xl sm:text-3xl">My Technical Expertise</h2>
<section
 
  class="grid w-screen grid-cols-1 gap-4 p-6 md:grid-cols-3 no-scroll"
    >
    {#each Technologies as technology}
    <div class="flex items-center justify-start p-2 rounded-md bg-zinc-300 hover:bg-orange-300 no-scroll">
        <img src={technology.icon} alt={technology.name} width={100} height={100} class="w-10 sm:w-14 md:w-16"/>
        <div class="flex flex-col justify-start px-2 m-1 no-scroll">
            <h2 class="font-semibold">{technology.name}</h2>
        </div>
    </div>
    {/each}
</section>
