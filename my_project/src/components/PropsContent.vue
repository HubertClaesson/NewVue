<script>
export default{
    props:['message'],
}
</script>

<template>
    <li>{{ message }}</li>
   <h2></h2> 
</template>

<style scoped>
h2{
    text-align: center;
}

li{
    list-style: none;
    text-align: center;
    margin-top: 2em;
}
</style>