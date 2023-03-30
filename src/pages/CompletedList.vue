<template>
  <div>
    <CompletedList :completedTodoList="completedTodos"
                   @removeTodo="completedTodos = completedTodos.filter(item => item !== $event)"
    />
  </div>
</template>

<script>
import CompletedList from "@/components/CompletedTodos.vue";
export default {

  data() {
    return {
      completedTodos: [],
    }
  },

  components: {
    CompletedList,
  },
  name: "CompletedList"
}
</script>