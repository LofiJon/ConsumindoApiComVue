<template>
  <div id="app">
   
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/users">Consumo da api de usuários</router-link> |
      <router-link to="/filmsGhibli">Api studio ghibli</router-link>
    </div>
    <transition name="fade">
    <router-view/>
    </transition>
    <div class="sep">
    <Footer/>
    </div>
  </div>
  
</template>
<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components:{
    Footer
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
  margin: 1rem;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
.sep{
  margin-top: 50%;
  width: 100%;
}


#nav a.router-link-exact-active {
  color: #e8671c;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
