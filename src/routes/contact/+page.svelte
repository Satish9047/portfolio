<script>
    import Navbar from "../../components/navbar.svelte";
    let email = "";
    let subject ="";
    let message ="";
    const url = "https://formsubmit.co/18bc3b46707d3c782c8d030c2b4cbd32";

</script>

<main>
    <Navbar />
    <div class="flex justify-center h-screen">
    <div class="flex justify-center items-center flex-col w-5/6 sm:w-2/4 md:w-1/3">
        <h1 class=" m-2 text-3xl font-light ">Contact</h1>
        <form action={url} method="POST" class="flex flex-col w-full">
            <label for="email">Email</label>
            <input type="text" id="email" name="email" bind:value={email} class=" px-4 py-1 mb-2 border border-gray-500 rounded-md"/>
            <label for="subject">Subject</label>
            <input type="text" id="subject" name="subject" bind:value={subject} class=" px-4 py-1 mb-2 border border-gray-500 rounded-md"/>
            <label for="message">Message</label>
            <textarea name="message" id="message" bind:value={message} class=" px-4 py-1 mb-4 border border-gray-500 rounded-md"/>
            <button type="submit" class="px-4 py-1 bg-gray-500 hover:bg-gray-800 : text-slate-200 rounded-md ">Send message</button>
        </form>
    </div>
    </div>
</main>