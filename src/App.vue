<template>
  <div class="container">
     <header>
        <nav class="navbar navbar-expand-g navbar-dark bg-dark header-nav">
          <div>
            <router-link class="navbar-brand" to="/">Home</router-link>
            <router-link class="navbar-brand" to="/favorites">Favorites</router-link>
          </div>
        </nav>
      </header>

      <div class="app__content">
        <router-view />
      </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

a {
  text-decoration: none !important;
  padding: 0 !important;
}

.app__content {
  padding: 50px 0;
}

</style>
