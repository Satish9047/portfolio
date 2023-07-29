<script>
    import { projects } from "../utils/projectDetails";

</script>

<main class="flex flex-col justify-center items-center">

    {#each projects as project}
    <div class=" mx-2 my-2 px-5 py-2 flex sm:flex-col justify-center items-center bg-gray-300 sm:w-3/4 max-w-screen-md">
        <div class="flex flex-col items-center sm:flex-row text-justify w-full">
            <img src={project.img}
            height={150}
            width={100}
            alt={project.projectName}
            class="px-4 py-1"/>
            <div class="flex flex-col">
                <h1 class="text-2xl">{project.projectName}</h1>
                <p class=" overflow-y-scroll h-20">
                technology: {project.technology}<br>
                description: {project.description}<br>
                project link: <a href={project.link} target="_blank">{project.link}</a>   
                </p>
            </div>
        </div>
    </div>
    {/each}

</main>