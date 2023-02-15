<script setup>
import PropsContent from "../components/PropsContent.vue";
</script>

<script>
export default {
  data() {
    return {
      textout: "",
      text: "",
    };
  },

  methods: {
    OnClick() {
      if (this.text.length > 0) {
        return (this.textout = this.text);
      }
    },
  },
};
</script>

<template>
  <h1 id="header">Här kan du skriva ett svamprecept</h1>

  <div id="textboxcontainer">
    <input v-model="text" />
    <input type="button" value="Skriv" @click="OnClick" />
  </div>
  <div id="recept-container">
    <h3 id="textout">{{ textout }}</h3>
  </div>
  <!--Här är min props komponent-->
  <PropsContent v-if="this.text.length === 0" :message="'Skriv ett recept'" />
</template>

<style scoped>

#textout {
  color: red;
  text-align: center;
}
#textboxcontainer {
  display: flex;
  justify-content: center;
}

#recept-container{
  display: flex;
  justify-content: center;
}

#header {
  text-align: center;
  margin-bottom: 2em;
  margin-top: 2em;
}

</style>
