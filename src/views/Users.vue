<template>
<div class="container-fluid">
   <div class="container">
  
      <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8 col-sm-12">
                <h2>Lista de usuários puxados da <a href="https://jsonplaceholder.typicode.com/users" class="linkUser">JSONPlaceholder</a></h2>
              <table class="table table-dark mt-4">
                  <thead>
                      <tr>
                                
                                <th scope="col">nome</th>
                                <th scope="col">email</th>
                                <th scope="col">telefone</th>
                                
                                
                       </tr>
                  </thead>
                   <tbody>
               <tr v-for="user in users" :key="user.id">
               
                 <td>{{user.name}}</td>
                 <td>{{user.email}}</td>
                 <td>{{user.phone}}</td>

               </tr>
                   </tbody>
              </table>
          </div>
          <div class="col-md-2"></div>
      </div>
      <div class="row">
          <div class="col-md-2"></div>
         
          <div class="col-md-8 col-sm-12  align-self">
               <h2>Inserir dados </h2>
              <input type="text" v-model="newUser" class="form-control">
              <input type="text" v-model="newEmail" class="form-control mt-2">
              <input type="text" v-model="newPhone" class="form-control mt-2">
              <button class="btn btn-success mt-4" @click="addUsers"> Adicionar  </button>
             
          </div>
           <div class="col-md-2"></div>
      </div>
    </div>
    
</div>
</template>

<script>
import GetUsers from '@/mixins/GetUsers.js'
// import Footer from '@/components/Footer.vue'
export default {
 name: 'Users',
 mixins: [GetUsers],
 components:{
    //  Footer
 },
 mounted(){
     this.GetUsers()
 },
}
</script>

<style>
.linkUser{
    color: #582ec2;
    text-decoration: none;
}
</style>