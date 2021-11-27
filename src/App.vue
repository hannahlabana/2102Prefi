<template>
  <Header />
  <router-view/>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
    components: {
      Header,
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
*, *::after, *::before{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #E9DADA;
  color: #fff;
  /* height: 100vh;
  width: 100%; */
  scroll-behavior: smooth;
  overflow: transparent;
}
.grid{
  display: grid;
}
a{
  text-decoration: none;
}
.flex{
  display: flex;
}
.flex-1{
    flex: 1;
}
.flex-2{
    flex: 2;
}
.flex-col{
  flex-direction: column;
}
button:hover{
  cursor: pointer;
}
input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
</style>
