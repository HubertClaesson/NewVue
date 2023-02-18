<script>
export default {
  data() {
    return {
      textout: 0,
      text: "",
    };
  },
  methods: {
    OnClick() {
      this.textout++;
    },
    byClick() {
      this.textout = this.textout = 0;
    },
  },
};
</script>

<template>
  <div id="flex-container">
    <input type="button" value="Räkna träd" @click="OnClick" />
    <input id="B-button" type="button" value="Börja om" @click="byClick" />
  </div>

  <h1>{{ textout }}</h1>
</template>

<style scoped>
h1 {
  color: red;
  text-align: center;
  background-color: aliceblue;
  margin-left: 35%;
  margin-right: 35%;
  padding: 0.1em;
  margin-top: 2em;
}

input {
  font-weight: 700;
  background-color: rgb(255, 119, 0);
  border: none;
  padding: 1em;
  border-radius: 15px;
}

#B-button {
  background-color: rgb(255, 0, 21);
  color: aliceblue;
}

#flex-container {
  display: flex;
  justify-content: center;
  gap: 5em;
  margin-top: 2em;
}
</style>
