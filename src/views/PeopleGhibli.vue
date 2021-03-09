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
                       <div class="card mycard">
                        <div class="card-body">
                    <h5 class="card-title"> <strong>Name: </strong>{{people.name}}</h5>
                    <p class="card-text"><strong> Gender : </strong>{{people.gender}}</p>
                    <p class="card-text"> <strong>Age : </strong> {{people.age}}</p>
                    
  </div>
</div>

                    </li>
             </div>
          <div class="col-md-2"></div>
         
      </div>
   
  </div>
</template>

<script>
 import GetFilms from '@/mixins/GetFilms.js'

export default {
 name: "PeopleGhibli",
 components:{
   
  },


mixins: [GetFilms],

mounted(){
        this.GetPeople()
    }

}

</script>

<style>

.mycard{
  -webkit-box-shadow: 8px 5px 8px 3px rgba(0,0,0,0.75);
-moz-box-shadow: 8px 5px 8px 3px rgba(0,0,0,0.75);
box-shadow: 8px 5px 8px 3px rgba(0,0,0,0.75);
}

.mycard:hover{
  transform: scale(1.1);
  transition: all 1s;
}
</style>