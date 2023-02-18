<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <ul>
      <li><RouterLink to="/">Hem</RouterLink></li>
      <li><RouterLink to="/svamp">Svampar</RouterLink></li>
      <li><RouterLink to="/recept">Recept</RouterLink></li>
    </ul>
  </nav>
  <RouterView />
</template>


<style scoped>
nav {
  text-align: center;
  background-color: rgb(0, 0, 0);
  height: 4em;
}

ul {
  margin: 0;
  padding-top: 1.4em;
}

li {
  display: inline;
}

ul li a {
  text-decoration: none;
  padding: 2em;
  color: aliceblue;
}

ul li a:hover {
  color: #88ca17;
}
</style>
