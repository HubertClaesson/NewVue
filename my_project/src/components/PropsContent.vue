<script>
export default{
    props:['message'],
}
</script>

<template>
    <h4>{{ message }}</h4>
</template>

<style scoped>
h4{
 display: flex;
 justify-content: center;
}
</style>