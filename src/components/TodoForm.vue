<template>
  <form class="p-4" @submit.prevent="$emit('addTodo', inputTodo), resetForm()">
    <input class="rounded-full p-3 align-middle w-full" placeholder="New Todo Item" v-model="inputTodo" type="text">
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