<script>
import { cards } from "../store.js";

export default {
    data() {
        return {
            cards
        }
    },
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12 pt-4">
                    <div class="content ps-3">
                        <select class="form-select" @change="$emit('filter_cards')" v-model="cards.archetype_search">
                            <option value="">Seleziona Archetipo</option>
                            <option :value="archetype" v-for="(archetype, index) in cards.archetypesArray" :key="index">
                                {{ archetype }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="container-white p-5 mt-3">
                    <div class="col-12">
                        <div class="content">
                            <div class="top bg-dark p-2">
                                <h2 class="text-white">Found {{ cards.cardsArray.length }} cards</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row row-cols-5">
                        <div class="col mt-3 d-flex justify-content-center" v-for="card in cards.cardsArray"
                            :key="card.id">
                            <div class="card w-100">
                                <img :src="card.card_images[0].image_url" class="card-img-top" alt="Card image">
                                <div class="card-body d-flex flex-column justify-content-between">
                                    <p class="card-title text-center">{{ card.name }}</p>
                                    <p class="card-text text-center">Type: {{ card.race }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    background-color: #D48F38;

    .form-select {
        width: 150px;
    }

    .container-white {
        background-color: #fff;
        margin-bottom: 100px;

        img {
            width: 100%;
        }

        .card-body {
            background-color: #D48F38;
            min-height: 120px;
            padding: 10px 0px 10px 0px;
            border-bottom-right-radius: 5px;
            border-bottom-left-radius: 5px;
        }
    }
}
</style>
