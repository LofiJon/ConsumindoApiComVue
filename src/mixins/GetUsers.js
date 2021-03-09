import axios from 'axios'


export default{
data(){
    return{
        users: [
        ],
        newPhone: '',
        newUser: '',
        newEmail: '',
        inserindo: false
      
    }
  },

  methods:{
    async GetUsers(){
     const resposta = await axios.get("https://jsonplaceholder.typicode.com/users")
     if(resposta.status== 200){
        this.users = resposta.data
     }else{
       console.error("ocorreu um erro na requisição")
     }
    },

    addUsers(){
      this.inserindo = true
     
      axios.post("https://jsonplaceholder.typicode.com/users",{
      
      phone: this.newPhone,
      name: this.newUser,
        email: this.newEmail
      
      })
      .then((response)=>{
         const data = response.data
         this.users.push(data)
         this.newUser = ''
         this.inserindo = false
      })

      

    }
    }
    
  }

     