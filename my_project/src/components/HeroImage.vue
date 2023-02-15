<script setup>
import CounterButton from '../components/CounterButton.vue';
</script>

<template>

    <div id="img-container">
        <h1>Välkommen till skogen</h1>
    <div id="content-container">
        <h2>Kan du räkna hur många träd det finns?</h2>
    </div>

    <CounterButton/>
    </div>


   
</template>
<style scoped>

#img-container{
    margin:0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-image: url(../assets/forest-g2572bc09f_1920.jpg);

}

h1{
    color: aliceblue;
    margin: 0;
    text-align: center;
    padding-top: 4em;
}

#content-container{
    display: flex;
    justify-content: center;
}

h2{
    color: aliceblue;
    text-align: center;
    margin-top: 3em;
    background-color: black;
    padding: 0.5em;
    width: fit-content;

}


</style>