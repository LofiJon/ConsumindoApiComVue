import axios from 'axios'
export default{
data(){
    return{
        users: [
        ]
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
    }
    
  }

     