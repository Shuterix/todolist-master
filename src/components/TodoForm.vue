<template>
  <form @submit.prevent="$emit('addTodo', inputTodo), resetForm()">
    <input placeholder="New Todo Item" v-model="inputTodo" type="text">
  </form>
</template>

<script>
export default {
  name: "TodoForm",

  data() {
    return {
      inputTodo: '',
    }
  },

  methods: {
    resetForm() {
      this.inputTodo = '';
    }
  }
}
</script>

<style scoped>

</style>