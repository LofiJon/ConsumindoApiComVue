<template>
  <!-- "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
  "title": "Grave of the Fireflies",
  "original_title": "火垂るの墓",
  "original_title_romanised": "Hotaru no haka", -->
<div class="container">
  <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
      <h2>Lista de usuários puxados da api livre  <a href="https://ghibliapi.herokuapp.com/films" class="linkUser">Studio Ghibli</a></h2>
   
         <li v-for="film in films" :key="film.id">
           <div class="card mt-5">
                <div class="card-body">
                 <h5 class="card-title"><strong>Titulo: </strong>{{film.title}}</h5>
                 <p class="card-text">{{film.description}}</p>
                 <p class="card-text"><strong>Diretor: </strong>{{film.director}}</p>
              </div>
           </div>
         </li>
      
      <router-link to="filmsGhibli/peopleghibli" class="btn btn-primary mt-5">Personagens do studio Ghibli</router-link>
      <transition name="fade">
      <router-view></router-view>
      </transition>


    </div>
    <div class="col-md-2"></div>
  </div>
  <Footer/>
 </div>
</template>

<script>
import GetFilms from '@/mixins/GetFilms.js'
import Footer from '@/components/Footer.vue'
export default { 
name: 'FilmsGhibli',
mixins: [GetFilms],
components:{
   Footer
},
mounted(){
    this.GetFilms()
}
}
</script>

<style>

li{
  list-style: none;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>