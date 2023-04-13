<template>
  <div>
    <CompletedTodos :completedTodoList="completedTodos"
                    @removeTodo="removeTodo($event)"
    />
  </div>
</template>

<script>
import CompletedTodos from "@/components/CompletedTodos.vue";
export default {

  data() {
    return {
      completedTodos: [],
    }
  },

  methods: {
    removeTodo($event) {
      this.completedTodos = this.completedTodos.filter(item => item !== $event)
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
    CompletedTodos,
  },
  name: "CompletedList"
}
</script>