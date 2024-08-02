import { reactive } from "vue";

export const cards = reactive({
    apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?offset=0",
    apiArchetypes: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    cardsArray: [],
    archetypesArray: [],
    archetype_search: "",
});
