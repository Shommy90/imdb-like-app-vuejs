<template>
    <div class="favorites">
        <h1>Favorites</h1>
        <div class="row">
            <MovieItem
                class="col-3 mb-4"
                v-for="movie in favorites"
                v-bind:key="movie.imdbID"
                :movie="movie"
                :removeFromFavorites="removeFromFavorites"
                :isInFavorites="isInFavorites"
            />
        </div>
    </div>
</template>

<script>
import MovieItem from '../components/MovieItem'

export default {
    name: "FavoritesPage",
    components: {
        MovieItem,
    },
    computed: {
        favorites() {
            return this.$store.state.favorites
        }
    },
    mounted() {
        console.log(this.$store.state.favorites)
    },
    methods: {
        removeFromFavorites(movie)  {
            const index = this.$store.state.favorites.indexOf(movie)
            this.$store.state.favorites.splice(index, 1)
        },

        isInFavorites(movie) {
            return this.$store.state.favorites.some(fav => fav.imdbID === movie.imdbID)
        },
    }
}
</script>

<style>

</style>