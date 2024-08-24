
<script>
     let currentTitle
     let arrayLinks = []
     let special_list
     let goLeft = false

     function setSpecialList1() {
        goLeft = !goLeft
        currentTitle = "Titre 1"
        arrayLinks = []
        arrayLinks = [
            {key: "/1" , value: "Numérique 1 Titre 1"},
            {key: "/2" , value: "Numérique 2 Titre 1"},
            {key: "/3" , value: "Numérique 3 Titre 1"}
        ]
	  }
     function setSpecialList2() {
        goLeft = !goLeft
        currentTitle = "Titre 2"
        arrayLinks = []
        arrayLinks = [
            {key: "/4" , value: "Numérique 1 Titre 2"},
            {key: "/5" , value: "Numérique 2 Titre 2"},
            {key: "/6" , value: "Numérique 3 Titre 2"}
        ]
	  }
     function setSpecialList3() {
        goLeft = !goLeft
        currentTitle = "Titre 3"
        arrayLinks = []
        arrayLinks = [
            {key: "/7" , value: "Numérique 1 Titre 3"},
            {key: "/8" , value: "Numérique 2 Titre 3"},
            {key: "/9" , value: "Numérique 3 Titre 3"}
        ]
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
                        <button on:click={setSpecialList1}>
                            <span>Visibilité numérique 1</span>
                            <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                            </svg>
                        </button>

                    </li>
                    <li class="special_list">
                        <button on:click={setSpecialList2}>
                            <span>Visibilité numérique 2</span>
                            <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                            </svg>
                        </button>

                    </li>
                    <li class="special_list">
                        <button on:click={setSpecialList3}>
                            <span>Visibilité numérique 3</span>
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
        currentTitle={currentTitle}
        arrayLinks={arrayLinks}
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


