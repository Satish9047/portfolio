<script>
    import { projects } from "../utils/projectDetails";

</script>

<main class="flex flex-col items-center justify-center">

    {#each projects as project}
    <div class="flex items-center justify-center max-w-screen-md px-5 py-2 mx-2 my-2 bg-gray-300  sm:flex-col sm:w-3/4">
        <div class="flex flex-col items-center w-full text-justify sm:flex-row no-scroll">
            <img src={project.img}
            height={150}
            width={100}
            alt={project.projectName}
            class="px-4 py-1"/>
            <div class="flex flex-col no-scroll">
                <a href={project.link} target="_blank"><h1 class="text-2xl">{project.projectName}</h1></a>
                <p class="h-20 overflow-y-scroll  no-scroll">
                technology: {project.technology}<br>
                description: {project.description}<br>
                project link: <a href={project.link} target="_blank">{project.link}</a>   
                </p>
            </div>
        </div>
    </div>
    {/each}

</main>
