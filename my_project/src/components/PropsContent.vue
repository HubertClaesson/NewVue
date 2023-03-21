<script>
export default{
    data(){
    
    },

props: ['message']

}
  
</script>

<template>
        <h4>{{ message.info }}</h4>
        <h1>{{ message.name }}</h1>
</template>

<style scoped>
h4{
 display: flex;
 justify-content: center;
}
</style>