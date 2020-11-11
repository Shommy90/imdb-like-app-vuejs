<template>
    <Spinner v-if="loading" />

    <div v-else class="details__holder">
        <div class="details__image">
            <img :src="movieDetail.Poster" :alt="movieDetail.Title">
        </div>

        <div class="details__info-holder">
            <h1>{{movieDetail.Title}}</h1>

            <p class="details__content">
                <span class="details__info">Year: </span>
                <span class="details__info-name">{{movieDetail.Year}}</span>
            </p>
            <p class="details__content">
                <span class="details__info">Genre: </span>
                <span class="details__info-name">{{movieDetail.Genre}}</span>
            </p>
            <p class="details__content">
                <span class="details__info">Type: </span>
                <span class="details__info-name">{{movieDetail.Type}}</span>
            </p>
            <p class="details__content">
                <span class="details__info">Director: </span>
                <span class="details__info-name">{{movieDetail.Director}}</span>
            </p>
            <p class="details__content">
                <span class="details__info">Actors: </span>
                <span class="details__info-name">{{movieDetail.Actors}}</span>
            </p>
            <p class="details__content">
                <span class="details__info">Awards: </span>
                <span class="details__info-name">{{movieDetail.Awards}}</span>
            </p>
            <p class="details__content">
                <span class="details__info">imdb Rating: </span>
                <span class="details__info-name">{{movieDetail.imdbRating}}</span>
            </p>
            <p class="details__content">
                <span class="details__info">imdb Votes: </span>
                <span class="details__info-name">{{movieDetail.imdbVotes}}</span>
            </p>
        </div>
    </div>
</template>

<script>
import Spinner from '../components/Spinner'

const api_key = 'ea87ca23'
const api_url = `http://www.omdbapi.com/?apikey=${api_key}&i=`

export default {
    name: "MovieDetailsPage",
    components: {
        Spinner,
    },
    data: () => ({
        movieDetail: {},
        loading: false
    }),
    mounted() {
        this.getMovie()
        console.log(this.$route)
    },
    methods: {
        async getMovie() {
            this.loading = true
            const url = `${api_url}${this.$route.params.id}`
            const response = await fetch(url)
            const data = await response.json()
            this.movieDetail = data
            this.loading = false
            console.log("single movie data: ", data)
        }
    }
}
</script>

<style>

.details__holder {
    display: flex;
    justify-content: center;
}

.details__info-holder {
    padding-left: 50px;
}

.details__info-name {
    font-weight: bold;
    margin-left: 5px;
}

@media only screen and (max-width: 768px) {
    .details__holder {
        flex-direction: column;
        align-items: center;
    }

    .details__info-holder {
        padding-left: 0;
        margin-top: 30px;
        text-align: center;
    }
}

</style>