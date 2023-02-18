<script setup>
import PropsContent from "../components/PropsContent.vue";
</script>

<script>
export default {
  data() {
    return {
      text: "",
      lists: [],
    };
  },
  methods: {
    OnClick() {
      this.lists.push(this.text);
    },
    ByClick(){
      this.lists.splice(-1)
    },
    OffClick(){
      this.lists.splice(0)
    }
  },
};
</script>

<template>
  <h1 id="header">Här kan du skriva ett recept på en god svampsoppa</h1>

  <!--Textrutan för att skriva ett recept-->
  <div id="textboxcontainer">
    <input v-model="text" />
<!--Kanppen för att skriva en punkt på receptet-->
    <input
      type="button"
      value="Skriv"
      @click="OnClick"
      :disabled="this.text.length === 0"
    />
    
    <!--Knappen tarbort en punkt-->
    <input type="button" @click="ByClick" value="Bort">

<!--Knappen tarbort alla punkter-->
    <input type="button" @click="OffClick" value="Radera">
  </div>

  <div id="wrapp-container">

    <div id="recept-container">
      <!--Här är min props komponent-->
      <PropsContent :message="'Recept'" />

<p v-if="this.text.length === 0">Fyll på med ingredienser</p>

<div class="list-container">

<!--Texten som renderas ut när man trycker på knappen-->
<ol>
    <li v-for="(lists) in lists">{{ lists }}</li>
      </ol>
</div>
 
    </div>
  </div>
</template>

<style scoped>

#textboxcontainer {
  display: flex;
  justify-content: center;
}

#recept-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: solid black;
  width: 30vw;
  height: auto;
  margin-bottom: 4em;
  margin-top: 1em; 
}

#header {
  text-align: center;
  margin-bottom: 2em;
  margin-top: 2em;
}

p{
  text-align: center;
}


#wrapp-container {
  display: flex;
  justify-content: center;
  margin-top: 2em;
}

#list-container{
  display: flex;
  justify-content: center;
}


</style>
