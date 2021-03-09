<template>
   <div class="container">
  
      <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8 col-sm-12">
                <h2>Lista de usuários puxados da <a href="https://jsonplaceholder.typicode.com/users" class="linkUser">JSONPlaceholder</a></h2>
              <table class="table mt-4">
                  <thead>
                      <tr>
                                <th scope="col">id</th>
                                <th scope="col">nome</th>
                                <th scope="col">email</th>
                                <th scope="col">telefone</th>
                                
                       </tr>
                  </thead>
                   <tbody>
               <tr v-for="user in users" :key="user.id">
                 <td>{{user.id}}</td>
                 <td>{{user.name}}</td>
                 <td>{{user.email}}</td>
                 <td>{{user.phone}}</td>

               </tr>
                   </tbody>
              </table>
          </div>
          <div class="col-md-2"></div>
      </div>

    </div>
</template>

<script>
import GetUsers from '@/mixins/GetUsers.js'
export default {
 name: 'Users',
 mixins: [GetUsers],
 
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