<script>
    import { onMount } from "svelte";

    let displayedText = "";
    let text = "Bienvenue à l'espace de gestion de votre vitrine";
    let index = 0;

    // Fonction pour ajouter une lettre à la fois
    function revealNextLetter() {
        if (index < text.length) {
            displayedText += text[index];
            index += 1;
            setTimeout(revealNextLetter, 100); // Délai entre chaque lettre (en millisecondes)
        }
    }

    // Déclenche l'affichage des lettres une par une au chargement du composant
    onMount(() => {
        revealNextLetter();
    });
</script>

<h1>{displayedText}</h1>

