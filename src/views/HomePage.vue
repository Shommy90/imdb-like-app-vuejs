<template>
  <div class="home">
      <form @submit.prevent="getResults">
        <div class="form-group">
            <input
                class="form-control input-search"
                type="text" 
                placeholder="Search Movie..."
                v-model="searchTerm"
            />
        </div>

        <div class="form-group">
            <label for="movieType">Type: </label>
            <select v-model="movieType" class="custom-select" name="movieType" id="movieType">
                <option value="movie">Movie</option>
                <option value="series">Series</option>
            </select>
        </div>

        <div class="form-group">
            <label for="">Year: </label>
            <input v-model="movieYear" class="form-control input-year" type="number" placeholder="Year">
        </div>

        <button type="submit" class="btn btn-info button-search">Search</button>
      </form>

      
      <div class="row movies-list">
          <Spinner v-if="loading" />

          <div v-if="error" class="alert alert-danger col" role="alert">
            {{error}}
          </div>

          <MovieItem
            class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            v-for="movie in results"
            v-bind:key="movie.imdbID"
            :movie="movie"
            :addToFavorites="addToFavorites"
            :isInFavorites="isInFavorites"
            :removeFromFavorites="removeFromFavorites"
          />
      </div>

  </div>
</template>

<script>
import MovieItem from '../components/MovieItem'
import Spinner from '../components/Spinner'

const api_key = 'ea87ca23'
const api_url = `http://www.omdbapi.com/?apikey=${api_key}`
const search_param = `&s=`

export default {
    name: "HomePage",
    components: {
        MovieItem,
        Spinner,
    },
    computed: {
      results() {
        return this.$store.state.results
      }
    },
    data: () => ({
        searchTerm: "",
        movieType: "",
        movieYear: "",
        error: "",
        loading: false,
    }),
    methods: {
        async getResults() {
            this.loading = true
            this.$store.state.results = []
            this.error = ""
            const type = `&type=${this.movieType}`;
            const year = `&y=${this.movieYear}`;
            const url = `${api_url}${type}${year}${search_param}${this.searchTerm}`
            const response = await fetch(url)
            const data = await response.json()

            if (data.Error) {
                this.$store.state.results = []
                this.error = data.Error
                this.loading = false
            } else {
                this.$store.state.results = data.Search
                this.error = ""
                this.loading = false
            }

            console.log("data: ", data.Search)
        },

        addToFavorites(movie) {
            this.$store.state.favorites.push(movie)
        },

        isInFavorites(movie) {
            return this.$store.state.favorites.some(fav => fav.imdbID === movie.imdbID)
        },

        removeFromFavorites(movie)  {
            const index = this.$store.state.favorites.indexOf(movie)
            this.$store.state.favorites.splice(index, 1)
        },
    }
}
</script>

<style>

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-nav {
  width: 100%;
}

form {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  flex-wrap: wrap;
}

.form-group {
  margin: 0;
  margin-right: 15px;
  display: flex;
  align-items: center;
}

.form-group label {
  margin-bottom: 0;
  margin-right: 5px;
}

.input-search {
  width: 400px;
}

.input-year {
  width: 80px;
}

.button-search {
  width: 150px;
}

@media only screen and (max-width: 992px) {
  form {
    flex-direction: column;
  }

  form .form-group {
    margin-bottom: 20px;
    margin-right: 0;
  }
}

@media only screen and (max-width: 576px) {
  .input-search {
    width: 250px;
  }
}

</style>