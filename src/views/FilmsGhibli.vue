<template>
  <!-- "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
  "title": "Grave of the Fireflies",
  "original_title": "火垂るの墓",
  "original_title_romanised": "Hotaru no haka", -->

<div class="container-fluid">
<div class="container">
  <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
      <h2>Lista de usuários puxados da api livre  <a href="https://ghibliapi.herokuapp.com/films" class="linkUser">Studio Ghibli</a></h2>
   
         <li v-for="film in films" :key="film.id">
           <div class="card mt-5">
                <div class="card-body m-3">
                 <h5 class="card-title"><strong>Titulo: </strong>{{film.title}}</h5>
                 <p class="card-text">{{film.description}}</p>
                 <p class="card-text"><strong>Diretor: </strong>{{film.director}}</p>
              </div>
           </div>
         </li>
      
      <router-link to="filmsGhibli/peopleghibli" class="btn btn-primary m-5">Studio ghibli character names</router-link>
      <transition name="slide-fade">
      <router-view></router-view>
      </transition>


    </div>
    <div class="col-md-2"></div>
  </div>
 
 </div>
  
 </div>
</template>

<script>
import GetFilms from '@/mixins/GetFilms.js'
// import Footer from '@/components/Footer.vue'
export default { 
name: 'FilmsGhibli',
mixins: [GetFilms],
components:{
  //  Footer
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
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>