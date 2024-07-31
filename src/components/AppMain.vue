<script>
export default {

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
                    <div class="col-12 mt-4">
                        <div class="content">
                            <div class="square p-5">
                                <div class="top bg-dark p-2">
                                    <h2 class="text-white">Found {{ counter }} cards</h2>
                                </div>
                                <div class="card" style="width: 10rem;">
                                    <img src="..." class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title text-center">Card title</h5>
                                        <p class="card-text text-center">alien</p>
                                    </div>
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

    .square {
        background-color: #fff;
        width: 1000px;
        height: 1000px;

        .card-body {
            background-color: #D48F38;
        }
    }

}
</style>