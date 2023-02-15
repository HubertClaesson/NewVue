<script>
 
 export default{ 
 
 data(){
    return{
        outs:[]
    }
 },
 created(){
    fetch('info.json')
  .then((response) => response.json())
  .then((result) => {
    this.outs = result 
  })
  }
}
</script>

<template>
    <div id="wrapp">
    <div v-for="outs in outs">
      <h2>
      {{ outs.
    name}}
    </h2>
    <h3>{{ outs.info}}</h3>
    </div>
</div>
</template>

<style scoped>

h1{
    text-align: center;
}

#wrapp{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
</style>