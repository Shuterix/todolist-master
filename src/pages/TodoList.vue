<template>
    <div class="wrapper">

        <TodoForm :inputTodo="inputTodo"
            @addTodo="this.todos.push($event),
                      $event = ''"
        />

        <div class="test">
          <input autofocus type="text" v-model="nameInput">
          <button @click="this.name.push(
            this.nameInput
        ),
         this.nameInput = ''">
            Click
          </button>
        </div>

      <h1  class="test">
        {{ name }}
      </h1>

        <TodoList :todoList="todos"
            @toCompleted="this.completedTodos.push($event),
                          todos = todos.filter(item => item !== $event)"
        />

        <CompletedList :completedTodoList="completedTodos"
            @removeTodo="completedTodos = completedTodos.filter(item => item !== $event)"
        />

        <ApiList/>

    </div>
</template>



<script>
    import CompletedList from '../components/CompletedList.vue';
    import TodoList from "@/components/TodoList.vue";
    import TodoForm from "@/components/TodoForm.vue";
    import ApiList from "@/components/ApiList.vue";


    export default {

  components: {
    CompletedList,
    TodoList,
    TodoForm,
    ApiList,
  },

  props: [
    'inputTodo'
  ],

  methods: {

  },
  data() {
    return {
        todos: [],
        completedTodos: [],
        name: [],
        nameInput: '',
    }
  },

  mounted() {
    if (localStorage.nameInput) {
      this.nameInput = localStorage.nameInput;
    }
  },
  watch: {
    name(newNameInput) {
      localStorage.nameInput = newNameInput;
    }
  },

  name: "App",
    };
</script>

<style scoped>
  .test {
    display: flex;
    justify-content: center;
    font-size: 24px !important;
  }
</style>

























<style>
    #List {
        border: rgba(255, 255, 255, 0.27) 1px solid;
        padding: 20px;
        margin: 3rem;
        height: 80vh;
        width: 100vh;
        color: #FFF;
        font-size: 25px;
    }

    input {
        background: black;
        color: white;
        padding: 20px;
        border: none;
        border-radius: 1rem;
        width: 80vh;
    }

    form {
        display: flex;
        justify-content: center;
        margin-top: 2rem;
    }

    .todoItem {
        display: flex;
        align-items: center;
    }

    .todoItem > div {
        padding-right: 20px;
    }

    .todoItem > span {
        color: yellow;
        font-size: 20px;
    }

    h1 {
        text-align: center;
        margin-top: 2rem;
    }

    .completed {
        border: rgba(255, 255, 255, 0.27) 1px solid;
        padding: 20px;
        margin: 3rem;
        height: 80vh;
        width: 100vh;
        color: #FFF;
        font-size: 25px;
    }

</style>