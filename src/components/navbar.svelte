<script>
  import { goto } from "$app/navigation";
  import { isClick, setClicked, setUnClicked } from "$lib/store/smMenu";
  
 

    let menus =[
        {name: "Home", link: "/"},
        {name: "Project", link: "/project"},
        {name: "Contact", link: "/contact"},
    ];

    const handleLogout = ()=>{
        goto("/login");
    }

    const handleMenuClicked = ()=>{
        if($isClick){
            setUnClicked();
        } else{
            setClicked();
        }
    }



</script>

<div class=" pt-0 mt-0 bg-gray-500 flex justify-between items-center pl-2 sm:pl-0 sm:px-3 h-12 sm:h-auto">
    <button class="sm:hidden" on:click={handleMenuClicked} >
        {#if $isClick}
        <img
        src="/cross.svg"
        height={20}
        width={20}
        alt="cross"
        />
        {:else}
        <img
        src="/menu.svg"
        height={20}
        width={20}
        alt="menu"
        />
        {/if}    
    </button>
    <header class=" hidden sm:block text-2lg md:text-4xl px-1 sm:px-4 py-2">
        Satish Dev
    </header>
        <div class="sm:flex">
            {#each menus as menu}
                <a href={menu.link}><h4 class=" sm:mx-1 sm:px-1 md:mx-2 md:px-4 md:py-1 sm:font-light md:font-normal hover:bg-gray-700 rounded-sm hidden sm:flex">{menu.name}</h4></a>
            {/each}
        </div>
</div>

{#if $isClick}
<div class="bg-white block top-14 w-full shadow-md sm:hidden">
  {#each menus as menu}
    <a href={menu.link} class="block py-2 px-4 bg-gray-400 hover:bg-gray-200">{menu.name}</a>
  {/each}
</div>
{/if}