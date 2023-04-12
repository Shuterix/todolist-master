<template>
  <div id="List">
    <div v-for="todoItem in todoList" v-bind:key="todoItem" class="shadow ">
      <div>
        {{ todoItem }}
      </div>
      <img style="width: 40px;" @click="$emit('toCompleted', todoItem)" src="../assets/doneArrowGreen.svg">
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