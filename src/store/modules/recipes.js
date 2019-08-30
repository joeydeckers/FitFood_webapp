import axios from 'axios'


const state = {
    recipes: []
};

const getters = {
    getAllRecipes:(state) =>{
        return state.recipes;
    },
    getSpecificRecipe(state){
        return projectName => state.items.filter(item => {
            return item.name === projectName;
        })
    }
};

const actions = {
    getRecipes ({commit}){
        axios
            .get("http://127.0.0.1:8000/api/recipes", {headers: { 'content-type': 'application/json' }})
            .then(r => r.data)
            .then(recipes => {
                commit('SET_RECIPES', recipes)
            })
    }
};

const mutations = {
    SET_RECIPES(state, recipes){
        state.recipes = recipes;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}