<script>
    let currentTitle;
    let arrayLinks = [];
    let goLeft = false;
    export let category;

    export let links;
    export let linksCategories;



    let list = [];

    category.forEach((element) => {
        list.push({ title: element.name, num: () => setCategory(element.name, element.items) });
    });
    


    function setCategory(name, items) {
        goLeft = !goLeft;
        currentTitle = name;
        arrayLinks = [];

        items.forEach((element) => {
            arrayLinks.push({ key: element.key, value: element.name });
        });

    }
    let specialListSubItems = [
        { header_title: "Catégories", list: list },
    ];

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
                       {#each links as item}
                       <a href="{item.value}">
                            <li>{item.key}</li>
                        </a>
                       {/each}
                       {#each linksCategories as item}
                       <a href="/category/{item.key}">
                            <li>{item.value}</li>
                        </a>
                       {/each}
                       
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
