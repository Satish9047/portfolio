<script>
    import Navbar from "../components/navbar.svelte";
    import HomeFlex from "../components/homeFlex.svelte";
    import Expertise from "../components/expertise.svelte";

    const downloadUrl = "/downloads/CV-Satish Prajapati.pdf";
    const file = "CV-Satish Prajapati.pdf";

</script>
<div class="justify-center pt-0 mt-0">
    <Navbar />
    <div class="flex flex-col items-center justify-center">
        <img
            src="/graduate.webp"
            alt="graduate"
            class="object-cover w-screen  h-96"
        />
    <div class="flex flex-col items-center justify-center">
        <h1 class="overflow-hidden text-2xl font-thin sm:text-5xl">Welcome to My Portfolio Website</h1>
        <h2 class="py-4 text-lg font-thin sm:text-2xl">Hi, I am Satish Prajapati.<br> "A JavaScript developer"</h2>
        <img src="/single-graduate.webp" alt="Satish"  class="w-3/5 my-2 rounded-full  sm:my-4"/>
    </div>
        <HomeFlex />
    </div>
    <hr class="my-4 border">
    <div class="flex flex-col items-center justify-center">
        
        <Expertise />
    </div>
    <hr>
    <div class="flex flex-col items-center justify-center p-2 m-1">
        <h1 class="text-xl">Checkout my CV</h1>
        <a href={downloadUrl} download={file}>
            <button class="p-1 px-2 my-4 rounded-md bg-lime-600 hover:bg-lime-400">Download CV File</button>
          </a>
    </div>
      
</div>

