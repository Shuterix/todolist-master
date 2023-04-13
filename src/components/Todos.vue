<template>
  <div id="List">
    <div v-for="todoItem in todoList" v-bind:key="todoItem" class="shadow border border-gray-600 my-1 rounded mx-4 p-4 flex">
      <div class="mr-auto item">
        {{ todoItem }}
      </div>
      <img style="width: 40px; height: 25px;" class="float-right pt-1" @click="$emit('toCompleted', todoItem)" src="../assets/doneArrowGreen.svg">
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",

  props: [
      'todoList'
  ],
}
</script>