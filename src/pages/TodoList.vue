<template>
    <div class=" container mx-auto">

        <TodoForm :inputTodo="inputTodo"
            @addTodo="this.todos.push($event),
                      $event = ''"
        />

        <TodoList :todoList="todos"
            @toCompleted="console.log($event),
                          localStorage.getItem('completedTodos'),
                          localStorage.setItem('completedTodos', $event),
                          todos = todos.filter(item => item !== $event)"
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

  },

  data() {
    return {
      todos: [],
      test: '',
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