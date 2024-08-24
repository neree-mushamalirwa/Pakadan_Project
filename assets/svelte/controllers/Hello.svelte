
<script>
     let currentTitle = "";
     let special_list
     let goLeft = true
     function setTitle() {
        goLeft = !goLeft
        console.log("clicked")
	}
    function updateGoLeft(params) {
        goLeft = params
    }
    
    import Side from "./Side.svelte";
       
</script>

<div class="container_all_sub_items">

    <div class="container_sub_items container_sub_items_main" class:goLeft={goLeft}>
        <div class="sub_items">
            <div class="item_title">
                <span>Tendances</span>
            </div>
            <div class="container_items">
                <ul>
                    <a href="/">
                        <li>Meilleures ventes</li>
                    </a>
                    <a href="/">
                        <li>Nouveautés</li>
                    </a>
                    <a href="/">
                        <li>Nouveautés</li>
                    </a>
                    <a href="/">
                        <li>Nouveautés</li>
                    </a>
                </ul>
            </div>
        </div>

        <div class="sub_items">
            <div class="item_title">
                <span>Tendances & Services</span>
            </div>
            <div class="container_items">
                <ul>
                    <li class="special_list" bind:this={special_list}>
                        <button on:click={setTitle}>
                            <span>Visibilité numérique</span>
                            <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                            </svg>
                        </button>

                    </li>
                    <li class="special_list">
                        <button>
                            <span>Visibilité numérique</span>
                            <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                            </svg>
                        </button>

                    </li>
                    <li class="special_list">
                        <button>
                            <span>Visibilité numérique</span>
                            <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <Side goSide={goLeft}
        on:update={event => updateGoLeft(event.detail)}
    >
        <span slot="item_title">Title sec</span>
        <ul slot="list_link" >
            <a href="/">
                <li>Meilleures ventes</li>
            </a>
            <a href="/">
                <li>Nouveautés</li>
            </a>
            <a href="/">
                <li>Nouveautés</li>
            </a>
            <a href="/">
                <li>Nouveautés</li>
            </a>
        </ul>
    </Side>

    
</div>


