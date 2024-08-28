<script>
    let currentTitle;
    let arrayLinks = [];
    let special_list;
    let goLeft = false;
    export let list

    if (list) {
        console.log(list)

    }




    let specialList1 = [
        { title: "Entreprises", num: setFactories },
        { title: "Sociétés", num: setSocieties },
        { title: "Asbl", num: setAsbl },
        { title: "Boutiques", num: setSpecialList4 },
        { title: "Magasins", num: setSpecialList5 },
        { title: "Hôtels", num: setSpecialList6 },
        { title: "Alimentations", num: setSpecialList6 },
        { title: "Restaurants", num: setSpecialList6 },
        { title: "Supermarchés", num: setSpecialList6 },
        { title: "Autres", num: setSpecialList6 },
    ];
    let specialList2 = [
        { title: "Vitrines Portfolio", num: setSpecialInnovations1 },
        { title: "Vitrines Landing Page", num: setSpecialInnovations2 },
        { title: "Vitrines spécifiques", num: setSpecialInnovations3 },
    ];

    let specialListSubItems = [
        { header_title: "Catégories", list: specialList1 },
        { header_title: "Vitrines", list: specialList2 },
    ];

    function setFactories() {
        goLeft = !goLeft;
        currentTitle = "Entreprises";
        arrayLinks = [];
        arrayLinks = [
            { key: "/1", value: "Entreprises commerciales" },
            { key: "/2", value: "PME" },
            { key: "/3", value: "Nouvelles entreprises" },
        ];
    }
    function setSocieties() {
        goLeft = !goLeft;
        currentTitle = "Sociétés";
        arrayLinks = [];
        arrayLinks = [
            { key: "/4", value: "Sociétés 1" },
            { key: "/5", value: "Sociétés 2" },
            { key: "/6", value: "Sociétés 3" },
        ];
    }
    function setAsbl() {
        goLeft = !goLeft;
        currentTitle = "Asbl";
        arrayLinks = [];
        arrayLinks = [
            { key: "/7", value: "Asbl 1" },
            { key: "/8", value: "Asbl 2" },
            { key: "/9", value: "Asbl 3" },
        ];
    }
    function setSpecialList4() {
        goLeft = !goLeft;
        currentTitle = "Titre 3";
        arrayLinks = [];
        arrayLinks = [
            { key: "/7", value: "Numérique 1 Titre 4" },
            { key: "/8", value: "Numérique 2 Titre 4" },
            { key: "/9", value: "Numérique 3 Titre 4" },
        ];
    }
    function setSpecialList5() {
        goLeft = !goLeft;
        currentTitle = "Titre 3";
        arrayLinks = [];
        arrayLinks = [
            { key: "/7", value: "Numérique 1 Titre 5" },
            { key: "/8", value: "Numérique 2 Titre 5" },
            { key: "/9", value: "Numérique 3 Titre 5" },
        ];
    }
    function setSpecialList6() {
        goLeft = !goLeft;
        currentTitle = "Titre 3";
        arrayLinks = [];
        arrayLinks = [
            { key: "/7", value: "Numérique 1 Titre 6" },
            { key: "/8", value: "Numérique 2 Titre 6" },
            { key: "/9", value: "Numérique 3 Titre 6" },
        ];
    }
    function setSpecialInnovations1() {
        goLeft = !goLeft;
        currentTitle = "Titre Innovation 1";
        arrayLinks = [];
        arrayLinks = [
            { key: "/7", value: "Innovation 1 Titre 1" },
            { key: "/8", value: "Innovation 2 Titre 1" },
            { key: "/9", value: "Innovation 3 Titre 1" },
        ];
    }
    function setSpecialInnovations2() {
        goLeft = !goLeft;
        currentTitle = "Titre Innovation 2";
        arrayLinks = [];
        arrayLinks = [
            { key: "/7", value: "Innovation 1 Titre 2" },
            { key: "/8", value: "Innovation 2 Titre 2" },
            { key: "/9", value: "Innovation 3 Titre 2" },
        ];
    }
    function setSpecialInnovations3() {
        goLeft = !goLeft;
        currentTitle = "Titre Innovation 3";
        arrayLinks = [];
        arrayLinks = [
            { key: "/7", value: "Innovation 1 Titre 3" },
            { key: "/8", value: "Innovation 2 Titre 3" },
            { key: "/9", value: "Innovation 3 Titre 3" },
        ];
    }

    function updateGoLeft(params) {
        goLeft = params;
    }

    import Side from "./Side.svelte";

</script>

<div class="container_parent_all_sub_items">
    <div class="container_all_sub_items">
        <div class="container_sub_items container_sub_items_main" class:goLeft>
            <div class="sub_items">
                <div class="item_title">
                    <span>Accès rapides</span>
                </div>
                <div class="container_items">
                    <ul>
                        <a href="/">
                            <li>Accueil</li>
                        </a>
                        <a href="/">
                            <li> A propos</li>
                        </a>
                        <a href="/">
                            <li>Services</li>
                        </a>
                        <a href="/">
                            <li>Contact</li>
                        </a>
                    </ul>
                </div>
            </div>

            {#each specialListSubItems as subItem (subItem.header_title)}
                <div class="sub_items">
                    <div class="item_title">
                        <span>{subItem.header_title}</span>
                    </div>
                    <div class="container_items">
                        <ul>
                            {#each subItem.list as item (item.title)}
                                <li class="special_list">
                                    <button on:click={item.num}>
                                        <span>{item.title}</span>
                                        <svg
                                            width="20px"
                                            height="20px"
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
                                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                            />
                                        </svg>
                                    </button>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>
            {/each}



            
        </div>
        <Side
            goSide={goLeft}
            on:update={(event) => updateGoLeft(event.detail)}
            {currentTitle}
            {arrayLinks}
        >
            <span slot="item_title">Title sec</span>
            <ul slot="list_link">
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
</div>
