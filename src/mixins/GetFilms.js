import axios from 'axios'


export default{
data(){
    return{
        films: [
        ],
        peoples: [

        ]
    }
  },

  methods:{
    async GetPeople(){
    
        const resposta = await axios.get("https://ghibliapi.herokuapp.com/people")
        if(resposta.status== 200){
           this.peoples =  resposta.data
           // console.log(resposta.data)
        }else{
          console.error("ocorreu um erro na requisição")
        }
     
    },
    async GetFilms(){
     const resposta = await axios.get("https://ghibliapi.herokuapp.com/films")
     if(resposta.status== 200){
        this.films =  resposta.data
        // console.log(resposta.data)
     }else{
       console.error("ocorreu um erro na requisição")
     }
    },
    }
    
  }

     