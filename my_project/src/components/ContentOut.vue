<script setup>
// import propsContent from '../components/PropsContent.vue'
</script>


<script>
 export default{ 
 
 data(){
    return{
      textbox:'',
      outs:[]
    }
 },
//  created(){
//     fetch('info.json')
//   .then((response) => response.json())
//   .then((result) => {
//     this.outs = result 
//   })
//   },
  computed: {
    Itemlist() {
      if (this.textbox.length > 0) {
        return this.outs.filter((item) =>
          item.name.toLowerCase().includes(this.textbox.toLowerCase())
        )
      }

      return this.outs
    }
  },
  methods:{
    Bob(){
      fetch('info.json')
  .then((response) => response.json())
  .then((result) => {
    this.outs = result 
  })
    }
  }
}
</script>

<template>
  <div id="flexinput">
    <input type="text" v-model="textbox" placeholder="Sök på en svamp">
    <input @click="Bob" type="Button" value="Sök" id="">
  </div>
    <div id="wrapp">
    <div v-for="out in Itemlist" :key="out">
      <h2 v-if="this.textbox.length > 0">
      {{ out.
    name}}
    </h2>
      <h3 v-if="this.textbox.length > 0">{{ out.info}}</h3>
    </div>
</div>
</template>

<style scoped>

h1{
    text-align: center;
}

#wrapp{
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center; */
  display: grid;
  grid-template-columns: repeat( 3, 1fr);
  grid-template-rows: auto fill;
  gap: 2em;
}

div{
    margin-bottom: 4em;
    text-align: center;
    margin-left: 2em;
    margin-right: 2em;

}


h2{
    font-size: 1.2em;
    text-align: center;
    background-color: rgb(24, 24, 26);
    color: aliceblue;
    padding: 0.6em;
}

h3{ 
  font-size: 1em;
  font-weight: 300;
  height: auto;
  width: 20vw;
  background-color: rgb(38, 76, 50);
  color: rgb(255, 255, 255);
  padding: 1em;
}

#flexinput{
  display: flex;
  justify-content: center;
}
#centeritem{
  display: flex;
  justify-content: center;
  display: block;
}
</style>