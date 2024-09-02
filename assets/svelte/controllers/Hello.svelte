<script>
    let currentTitle;
    let arrayLinks = [];
    let goLeft = false;
    export let category;

    let specialList2 = [
        { title: "Vitrines Portfolio", num: setSpecialInnovations1 },
        { title: "Vitrines Landing Page", num: setSpecialInnovations2 },
        { title: "Vitrines spécifiques", num: setSpecialInnovations3 },
    ];

    let list = [];

    category.forEach((element) => {
        list.push({ title: element.name, num: () => setCategory(element.name, element.items) });
    });

    function setCategory(name, items) {
        goLeft = !goLeft;
        currentTitle = name;
        arrayLinks = [];

        items.forEach((element) => {
            arrayLinks.push({ key: "/1", value: element.name });
        });

    }
    let specialListSubItems = [
        { header_title: "Catégories", list: list },
        { header_title: "Vitrines", list: specialList2 },
    ];

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
                            <li>A propos</li>
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
