<template>
    <div class="wrapper">

        <betweenPagesComponent/>

        <form @submit.prevent="add()">
            <input placeholder="New Todo Item" autofocus v-model="inputTodo" type="text">
        </form>

        <div id="List">
            <div v-for="todoItem in todos" v-bind:key="todoItem" class="todoItem">
                <div>
                    {{ todoItem }}
                </div>
                <img style="width: 40px;" @click.prevent="toCompleted(todoItem)" src="../assets/doneArrowGreen.svg">
            </div>
        </div>

        <completedList :completedTodoList="completedTodos"
            @removeCompletedTodo="completedTodos = completedTodos.filter(item => item !== $event)"
        />

        <div id="List">
            <div>
                <div>
                    {{ axiosData[1] }}
                </div>
            </div>
        </div>

    </div>
</template>



<script>
    import betweenPagesComponent from './betweenPagesComponent.vue';
    import completedList from './completedList.vue';
    import axios from "axios"; 

    export default {

  components: {
    betweenPagesComponent,
    completedList,

  },

  methods: {
    add() {
        this.todos.push(
            this.inputTodo
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
        inputTodo: '',
        todos: [],
        completedTodos: [],
        axiosData: [],
    }
  },
  name: "App",
    async mounted() {
    // The get method called by the function
        await axios
        .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                console.log(response);
                // using stringify to beautify the output
                this.axiosData = response.data;
            })
            .catch((errors) => {
                console.log(errors); // Errors
            });
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