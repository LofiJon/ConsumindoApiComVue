<template>
  <div class="container">
      <!-- "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
    "name": "Lusheeta Toel Ul Laputa",
    "gender": "Female",
    "films": [
      "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
    ], -->
      <div>
          <div class="col-md-2"></div>
             <div class="col-md-12">
                   <li v-for="people in peoples" :key="people.id" class="mt-5">
                       <div class="card">
                        <div class="card-body">
                    <h5 class="card-title"> <strong>Name: </strong>{{people.name}}</h5>
                    <p class="card-text"><strong> Gender : </strong>{{people.gender}}</p>
                    <p class="card-text"> <strong>Age : </strong> {{people.age}}</p>
                    
  </div>
</div>

                    </li>
             </div>
          <div class="col-md-2"></div>
             <Footer/>
      </div>
   
  </div>
</template>

<script>
 import GetFilms from '@/mixins/GetFilms.js'
 import Footer from '@/components/Footer.vue'
export default {
 name: "PeopleGhibli",
 components:{
    Footer
  },


mixins: [GetFilms],

mounted(){
        this.GetPeople()
    }

}

</script>

<style>

</style>