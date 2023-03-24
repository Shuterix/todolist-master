<template>
    <div class="wrapper">

        <betweenPagesComponent/>

      <form @submit.prevent="addTodo(inputTodo)">
        <input placeholder="New Todo Item" autofocus v-model="inputTodo" type="text">
      </form>

        <TodoList :todoList="todos"
            @toCompleted="this.completedTodos.push($event),
                          todos = todos.filter(item => item !== $event)"
        />

        <CompletedList :completedTodoList="completedTodos"
            @removeTodo="completedTodos = completedTodos.filter(item => item !== $event)"
        />

        <div id="List">
            <div>
                <div v-if="postsFetch.length">
                    {{postsFetch[0].title}}
                </div>
            </div>
        </div>

    </div>
</template>



<script>
    import betweenPagesComponent from '../components/betweenPagesComponent.vue';
    import CompletedList from '../components/CompletedList.vue';
    import TodoList from "@/components/TodoList.vue";
    import axios from "axios"; 

    export default {

  components: {
    betweenPagesComponent,
    CompletedList,
    TodoList,
  },

  methods: {
    addTodo(inputTodo) {
      this.todos.push(
          inputTodo
      )
      this.inputTodo = ''
    },

    toCompleted(todoItem) {
        this.completedTodos.push(
            todoItem    
        )
        this.todos = this.todos.filter(item => item !== todoItem)
    },
  },
  data() {
    return {
        todos: [],
        completedTodos: [],
        postsFetch: [],
        inputTodo: '',
    }
  },
  name: "App",
    async mounted() {
        try {
            const fetchedPosts = await axios.get("https://jsonplaceholder.typicode.com/posts") 
            this.postsFetch = fetchedPosts.data
            console.log(fetchedPosts)
            console.log(fetchedPosts)
        } catch (e) {
            console.log(e)
        }
    },
};
</script>

























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