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

<div class="flex items-center justify-between px-2 py-5 bg-zinc-700">
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
    
        <div class="items-center justify-center w-full gap-8 hiddn md:flex">
            {#each menus as menu}
                <a href={menu.link}><h4 class="hidden font-semibold md:flex hover:text-yellow-400 md:text-lg">{menu.name}</h4></a>
            {/each}
        </div>
</div>

{#if $isClick}
<div class="block w-full bg-white shadow-md top-14 sm:hidden">
  {#each menus as menu}
    <a href={menu.link} class="block px-4 py-2 bg-gray-400 hover:bg-gray-200">{menu.name}</a>
  {/each}
</div>
{/if}