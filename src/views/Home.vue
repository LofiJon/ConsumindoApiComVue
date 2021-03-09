<template>
  <div class="home">
 
    <div class="card">
    <div class="image">
      <img  src="../assets/jonathanMalagueta.jpg"/>
    </div>
    <div class="details">
      <div class="center">
        <h1>Jonathan Malagueta <br><span>Candidato a estágio de desenvolvimento</span></h1>
        <p>Jonathan, 22 anos, estudante de engenharia da computação e apaixonado por estudar desenvolvimento de forma autodidata</p>
        <ul>
          <li><a href="https://github.com/jonathanmalagueta"><i class="fa fa-github" aria-hidden="true"></i></a></li>
          <li><a href="https://www.instagram.com/jonmalagueta.js/"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
          <li><a href="https://codepen.io/jonathanmalagueta"><i class="fa fa-codepen" aria-hidden="true"></i></a></li>
          <li><a href="https://www.linkedin.com/in/jonathan-malagueta-524391150/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
         
        </ul>
      </div>
    </div>
  </div>
  <span>
    Clique na imagem(mobile) ou passe o mouse por cima (desktop)
  </span>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {

  }
}
</script>
<style scoped>
.card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 360px;
    height: 400px;
    background: #000;
}
.card .image {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.card .image img {
    width: 100%;
    transition: .5s;
   
}
.card:hover .image img {
    opacity: .5;
    transform: translateX(30%);/*100%*/

}
.card .details {
    position: absolute;
    top: 0;
    left: 0;
    width: 70%;/*100%*/
    height: 100%;
    background: #582ec2;
    transition: .5s;
    transform-origin: left;
    transform: perspective(2000px) rotateY(-90deg);
}
.card:hover .details {
    transform: perspective(2000px) rotateY(0deg);
}
.card .details .center {
    padding: 20px;
    text-align: center;
    background: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.card .details .center h1 {
    margin: 0;
    padding: 0;
    color: #e8671c;
    line-height: 20px;
    font-size: 20px;
    text-transform: uppercase;
}
.card .details .center h1 span {
    font-size: 14px;
    color: #262626;
}
.card .details .center p {
    margin: 10px 0;
    padding: 0;
    color: #262626;
}
.card .details .center ul {
    margin: 10px auto 0;
    padding: 0;
    display: table;
}
.card .details .center ul li {
    list-style: none;
    margin: 0 5px;
    float: left;
}
.card .details .center ul li a {
    display: block;
    background: #262626;
    color: #fff;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    transform: .5s;
}
.card .details .center ul li a:hover {
    background: #e8671c;
}
</style>