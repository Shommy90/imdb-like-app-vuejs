<template>
        <div class="card-holder">
            <div class="card">
    <router-link class="link" :to="{ name: 'MovieDetailsPage', params: {id: movie.imdbID} }">
                <img class="card-img-top" :src="movie.Poster" :alt="movie.Title">
    </router-link>
                <div class="card-body">
                    <h5 class="card-title">{{ movie.Title }}</h5>
                    <p class="card-text">({{ movie.Year }})</p>
                    <button
                        v-if="addToFavorites && !isInFavorites(movie)"
                        @click="addToFavorites(movie)"
                        class="btn btn-success"
                    >
                    Add to Favorites</button>

                    <button
                        v-if="isInFavorites(movie)"
                        @click="removeFromFavorites(movie)"
                        class="btn btn-danger"
                    >
                    Remove</button>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: "MovieItem",
    props: ['movie', "addToFavorites", "removeFromFavorites", "isInFavorites"],
}
</script>

<style>

.card-holder {
    padding: 10px;
    display: flex;
    justify-content: center;
}

.card {
    box-shadow: 0 0 17px 3px rgba(184,184,184,.5);
    height: 400px;
    max-width: 300px;
    width: 100%;
}

.card-img-top {
    height: 100%;
    object-fit: cover;
    width: 100%;
}

.card-body {
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.card-title {
overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;

}

.link {
    height: 50%;
}

</style>