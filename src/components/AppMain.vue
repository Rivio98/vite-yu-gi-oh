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
                        <select class="form-select">
                            <option selected>Alien</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div class="container-white p-3 mt-3">
                    <div class="col-12">
                        <div class="content">
                            <div class="top bg-dark p-2">
                                <h2 class="text-white">Found {{ cards.cardsArray.length }} cards</h2>
                            </div>
                        </div>
                    </div>

                    <div class="row row-cols-5">
                        <div class="col" v-for="card in cards.cardsArray" :key="card.id">
                            <div class="card" style="width: 10rem;">
                                <img :src="card.card_images[0].image_url" class="card-img-top" alt="Card image">
                                <div class="card-body">
                                    <h5 class="card-title text-center">{{ card.name }}</h5>
                                    <p class="card-text text-center">{{ card.archetype }}</p>
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

        img {
            width: 100%;
        }

        .card-body {
            background-color: #D48F38;
        }
    }

}
</style>