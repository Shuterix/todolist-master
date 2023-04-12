<template>
    <div class=" container mx-auto">

        <TodoForm :inputTodo="inputTodo"
            @addTodo="this.todos.push($event),
                      $event = ''"
        />

        <TodoList :todoList="todos"
            @toCompleted="test($event)"
        />

    </div>
</template>



<script>
    import TodoList from "@/components/Todos.vue";
    import TodoForm from "@/components/TodoForm.vue";
    import Navigation from "@/components/Navigation.vue";


    export default {

  components: {
    Navigation,
    TodoList,
    TodoForm,
  },

  props: [
    'inputTodo'
  ],

  methods: {
    test($event) {
      console.log($event)

      let newCompletedTodos = JSON.parse(localStorage.getItem('completedTodos')) || []
      let newTodos = JSON.parse(localStorage.getItem('todos')) || []

      newTodos = newTodos.filter(item => item !== $event)
      newCompletedTodos.push($event)

      localStorage.setItem('todos', JSON.stringify(newTodos))
      localStorage.setItem('completedTodos', JSON.stringify(newCompletedTodos))
      this.todos = JSON.parse(localStorage.todos)
    },
  },

  data() {
    return {
      todos: [],
    }
  },

  mounted() {
    if (localStorage.todos) {
      this.todos = JSON.parse(localStorage.todos)
    }
  },
  watch: {

    todos: {
      handler(newTodo) {
        localStorage.todos = JSON.stringify(newTodo)
      },
      deep: true
    },
  },

  name: "App",
    };
</script>