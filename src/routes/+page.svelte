<script>
    import Navbar from "../components/navbar.svelte";
    import HomeFlex from "../components/homeFlex.svelte";
    import Expertise from "../components/expertise.svelte";

    const downloadUrl = "/downloads/CV-Satish Prajapati.pdf";
    const file = "CV-Satish Prajapati.pdf";

</script>
<div class="pt-0 mt-0 justify-center">
    <Navbar />
    <div class="flex flex-col justify-center  items-center">
        <img
            src="/graduate.webp"
            alt="graduate"
            class=" h-96 w-screen object-cover"
        />
    <div class="flex flex-col justify-center items-center">
        <h1 class="text-2xl sm:text-5xl font-thin overflow-hidden">Welcome to My Portfolio Website</h1>
        <h2 class="text-lg sm:text-2xl font-thin py-4">Hi, I am Satish Prajapati.<br> "A JavaScript developer"</h2>
        <img src="/single-graduate.webp" alt="Satish"  class=" rounded-full w-3/5 my-2 sm:my-4"/>
    </div>
        <HomeFlex />
    </div>
    <hr class="border my-4">
    <div class="flex justify-center flex-col items-center">
        
        <Expertise />
    </div>
    <hr>
    <div class="flex flex-col justify-center items-center  m-1 p-2">
        <h1 class="text-xl">CheckOut My CV</h1>
        <a href={downloadUrl} download={file}>
            <button class="p-1 px-2 my-4 bg-lime-600 hover:bg-lime-400 rounded-md">Download CV File</button>
          </a>
    </div>
      
</div>

