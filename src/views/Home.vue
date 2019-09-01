<template>
  <div class="home">
    <section id="intro">
      <b-row>
        <b-col lg="6">
          <div class="intro-text">
            <h1>
              Quality fitness recipes<br>
              <strong>for free.</strong>
            </h1>
            <p>Discover quality food recipes for fitness enthousiast,<br> by fitness enthousiast.</p>
            <Button
              style="box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);"
              buttonText="Discover more"
              buttonColor="#FF9900"
              buttonBorderColor="#FF9900"
              buttonFontColor="#fff"
            />
          </div>
        </b-col>
        <b-col>
          <img class="intro-img" src="@/assets/intro-img.jpg" alt="" srcset="">
        </b-col>
      </b-row>
    </section>
    <section id="featured-food">
      <b-row>
        <b-col lg="6">
          <h2 class="featured-food-heading">Our featured food</h2>
        </b-col>
        <b-col lg="6">
          <p class="cta-see-more">See more</p>
        </b-col>
      </b-row>
      
      
      <b-row>
        <b-col lg="3" v-for="recipe in getAllRecipes.slice(0,5)" :key="recipe.id">
          <RecipeCard :recipeImage="recipe.recipe_image" :recipeName="recipe.recipe_name" :recipeCategory="recipe.recipe_category"/>
        </b-col>
      </b-row>
      <Button
        style="box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16); margin: 0 auto; display:block;"
        buttonText="Discover more"
        buttonColor="#FF9900"
        buttonBorderColor="#FF9900"
        buttonFontColor="#fff"
      />

    </section>
    <section id="cta">
      <h2>Have some great recipes you want to share?</h2>
      <Button
        buttonText="Register now"
        buttonColor="#FF9900"
        buttonBorderColor="#FF9900"
        buttonFontColor="#fff"
      />
    </section>
    <section id="about"></section>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from "./../components/Button";
import RecipeCard from "./../components/RecipeCard";

export default {
  name: "home",
  components: {
    Button,
    RecipeCard
  },
  computed: {
    getAllRecipes() {
      return this.$store.getters.getAllRecipes;
    }
  }
};
</script>
