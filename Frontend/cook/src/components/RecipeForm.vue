<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label>Title:</label>
        <input v-model="localRecipe.title" @input="emitChange" required />
      </div>
      <div>
        <label>Ingredients:</label>
        <input v-model="newIngredient" @keyup.enter="addIngredient" />
        <button @click.prevent="addIngredient">Add</button>
        <ul>
          <li v-for="(ingredient, index) in localRecipe.ingredients" :key="index">
            {{ ingredient }}
            <button @click.prevent="removeIngredient(index)">Remove</button>
          </li>
        </ul>
      </div>
      <div>
        <label>Instructions:</label>
        <textarea v-model="localRecipe.instructions" @input="emitChange" required></textarea>
      </div>
      <div>
        <label>Cooking Time:</label>
        <input v-model="localRecipe.cookingTime" @input="emitChange" type="number" required />
      </div>
      <div>
        <label>Difficulty:</label>
        <input v-model="localRecipe.difficulty" @input="emitChange" required />
      </div>
      <button type="submit">{{ isEdit ? 'Update' : 'Add' }} Recipe</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
      required: true,
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      localRecipe: JSON.parse(JSON.stringify(this.recipe)),
      newIngredient: '',
    };
  },
  methods: {
    addIngredient() {
      if (this.newIngredient) {
        this.localRecipe.ingredients.push(this.newIngredient);
        this.newIngredient = '';
        this.emitChange();
      }
    },
    removeIngredient(index) {
      this.localRecipe.ingredients.splice(index, 1);
      this.emitChange();
    },
    emitChange() {
      this.$emit('update:recipe', this.localRecipe);
    },
    submitForm() {
      this.$emit('submit');
    },
  },
  watch: {
    recipe: {
      handler(newValue) {
        this.localRecipe = JSON.parse(JSON.stringify(newValue));
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
/* Add any styles specific to RecipeForm.vue here */
</style>
