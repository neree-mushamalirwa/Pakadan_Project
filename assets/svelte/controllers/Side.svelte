<script>
    import { createEventDispatcher } from "svelte";

    export let goSide = false;
    export let currentTitle;
    export let arrayLinks;

    let hideSide = false;
    const dispatch = createEventDispatcher();

    function hideSideBar() {
        hideSide = !hideSide;
        goSide = false;
        dispatch("update", false);
    }
</script>

<div
    class="container_sub_items container_sub_items_secondary"
    class:goSide
    class:hideSide
>
    <div class="sub_items">
        <button class="item_title" on:click={hideSideBar}>
            <svg
                width="25px"
                height="25px"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewbox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
            </svg>
            <span>Menu principal</span>
        </button>
        <div class="item_title">
            <span>{currentTitle}</span>
        </div>
        <div class="container_items">
            <ul>
                {#if arrayLinks}
                    {#each arrayLinks as item (item.key)}
                        <a href="/category/categoryItem/{item.key}">
                            <li>{item.value}</li>
                        </a>
                    {/each}
                {/if}
            </ul>
        </div>
    </div>
</div>
