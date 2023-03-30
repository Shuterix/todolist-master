<template>
    <div class=" container mx-auto">

        <TodoForm :inputTodo="inputTodo"
            @addTodo="this.todos.push($event),
                      $event = ''"
        />

        <TodoList :todoList="todos"
            @toCompleted="this.completedTodos.push($event),
                          todos = todos.filter(item => item !== $event)"
        />

    </div>
</template>



<script>
    import TodoList from "@/components/TodoList.vue";
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

<style>
    /*#List {*/
    /*    border: rgba(255, 255, 255, 0.27) 1px solid;*/
    /*    padding: 20px;*/
    /*    margin: 3rem;*/
    /*    height: 80vh;*/
    /*    width: 100vh;*/
    /*    color: #FFF;*/
    /*    font-size: 25px;*/
    /*}*/

    /*input {*/
    /*    background: black;*/
    /*    color: white;*/
    /*    padding: 20px;*/
    /*    border: none;*/
    /*    border-radius: 1rem;*/
    /*    width: 80vh;*/
    /*}*/

    /*form {*/
    /*    display: flex;*/
    /*    justify-content: center;*/
    /*    margin-top: 2rem;*/
    /*}*/

    /*.todoItem {*/
    /*    display: flex;*/
    /*    align-items: center;*/
    /*}*/

    /*.todoItem > div {*/
    /*    padding-right: 20px;*/
    /*}*/

    /*.todoItem > span {*/
    /*    color: yellow;*/
    /*    font-size: 20px;*/
    /*}*/

    /*h1 {*/
    /*    text-align: center;*/
    /*    margin-top: 2rem;*/
    /*}*/

    /*.completed {*/
    /*    border: rgba(255, 255, 255, 0.27) 1px solid;*/
    /*    padding: 20px;*/
    /*    margin: 3rem;*/
    /*    height: 80vh;*/
    /*    width: 100vh;*/
    /*    color: #FFF;*/
    /*    font-size: 25px;*/
    /*}*/

</style>