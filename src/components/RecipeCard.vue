<template>
  <div class="recipe">
    <img class="recipe-image" :src="recipeImage" />
    {{recipeName}}
    {{recipeCategory}}
    asdads
  </div>
</template>

<script>
export default {
    props:['recipeImage',' recipeName', 'recipeCategory'],
};
</script>

<style>
</style>