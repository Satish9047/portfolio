<script>

    const Technologies = [
        {
            name: "Node.js",
            icon: "/icons/node.svg",
            level: "intermediate +",
        },
        {
            name: "JavaScript",
            icon: "/icons/javascript.svg",
            level: "intermediate +",
        },
        {
            name: "Next.js",
            icon: "/icons/next.svg",
            level: "intermediate +",
        },
        {
            name: "MongoDB",
            icon: "/icons/mongodb.svg",
            level: "intermediate +",
        },
        {
            name: "Prisma",
            icon: "/icons/prisma.svg",
            level: "intermediate",
        },
        {
            name: "Mongoose",
            icon: "/icons/mongoose.svg",
            level: "intermediate +",
        },
        {
            name: "GitHub",
            icon: "/icons/github.svg",
            level: "intermediate",
        },
        {
            name: "Docker",
            icon: "/icons/docker.svg",
            level: "beginner +",
        },
        {
            name: "Svelte",
            icon: "icons/svelte.svg",
            level: "intermediate +",
        },
        {
            name: "MySql",
            icon: "/icons/mysql.svg",
            level: "intermediate",
        },
        {
            name: "React.js",
            icon: "/icons/react.svg",
            level: "intermediate +",
        },
        {
            name: "TypeScript",
            icon: "/icons/typescript.svg",
            level: "beginner",
        },
    ];

</script>
<h2 class=" col-span-2 justify-center text-2xl sm:text-3xl">My Technical Expertise</h2>
<main class=" flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-1 sm:w-5/6 ">
    
    {#each Technologies as technology}
    <div class=" md:ml-5 m-1 px-4 py-1 flex justify-start items-center w-screen sm:w-5/6 bg-gray-300 hover:bg-orange-300 overflow-y-scroll rounded-md no-scroll">
        <img src={technology.icon} alt={technology.name} width={100} height={100} class="w-10 sm:w-14 md:w-16"/>
        <div class=" m-1 px-2 flex flex-col justify-start no-scroll">
            <h2>{technology.name}</h2>
            <p>Level: {technology.level}</p>
        </div>
    </div>
    {/each}
</main>
