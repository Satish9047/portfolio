<script>
    let what = [
        "Node Developer",
        "IT Enthusiast",
        "Next.js Developer",
        "Svelte Developer",
    ];
    let index = 0;
    let who =what[index];
    setInterval(()=>{
        index = (index + 1) % what.length;
        who =what[index];
    }, 2000);
</script>
<main>
    <h1 class=" text-2xl sm:text-4xl font-thin">
        I am a <strong>{who}</strong>. 
    </h1>
</main>