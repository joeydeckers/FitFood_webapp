import axios from 'axios'


const state = {
    recipes: []
};

const getters = {
    getAllRecipes:(state) =>{
        return state.items;
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
            .get("http://127.0.0.1:8000/api/recipes")
            .then(r => r.data)
            .then(items => {
                console.log(items);
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