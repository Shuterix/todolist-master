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

  mounted() {
    if (localStorage.completedTodos) {
      this.completedTodos = JSON.parse(localStorage.completedTodos)
    }
  },

  watch: {
    completedTodos: {
      handler(newCompletedTodos) {
        localStorage.completedTodos = JSON.stringify(newCompletedTodos)
      },
      deep: true
    }
  },

  components: {
    CompletedList,
  },
  name: "CompletedList"
}
</script>