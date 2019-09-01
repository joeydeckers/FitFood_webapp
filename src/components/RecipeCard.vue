<template>
  <div class="recipe">
    <div class="wrap">
      <img class="recipe-image" :src="recipeImage" />
    </div>
    <div class="recipe-info">
      <h3 class="recipe-title">{{recipeName}}</h3>
      <p class="recipe-category">{{recipeCategory}}</p>
    </div>
  </div>
</template>

<script>
export default {
    props:['recipeImage','recipeName', 'recipeCategory'],
};
</script>

<style>
</style>