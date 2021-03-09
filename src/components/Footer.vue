<template>
<div class="container-fluid mt-5 footerdiv" >
  <footer>
   <p><strong>Criado por: </strong>Jonathan Malagueta </p>
 </footer>
</div>
</template>

<script>
export default {
   name: "Footer"
}
</script>

<style>
p{
  margin-top: 20px;
}

.footerdiv{
  margin-left: -2rem;
  width: 100%;
  margin: 0;
}
footer{
    background: #582ec2;
     position: absolute;
     color: #fff;
     /* margin-left: -10rem; */
     margin-bottom: 0rem;
    width: 100%;
    margin: 0;
    height: 50px;    
    text-align: center;
    line-height: 10px;
    margin-top: 100%;
}

@media screen and (min-width: 320px) and(max-width: 375px){
   footer{
     margin-top: 100%;  
   }
}
</style>