<script>
    let date = new Date();
    let year = date.getFullYear();
    const SocialPlatforms = [
        {
            name: "Facebook",
            link: "https://www.facebook.com/satees55/",
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/satees_prajapati/",
        },
        {
            name: "Twitter",
            link: "https://twitter.com/SatishP42242976",
        }
    ]


</script>

<main class=" bg-slate-900 text-slate-500 flex flex-col justify-center items-center py-4 px-2 mt-4">
    <h1 class="  text-xl sm:text-2xl">Social Media</h1>
    <div class=" grid  grid-cols-1 sm:grid-cols-3 gap-8 my-4">
        {#each SocialPlatforms as platform}
            <a href={platform.link} target="_blank" class="hover:text-white">{platform.name}</a>
        {/each}
    </div>
    <p>&copy; {year} Satish Prajapati made with love. All Rights Reserved.</p>
</main>