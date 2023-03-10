<template>
    <div class="wrapper">

        <betweenPagesComponent/>

        <form @submit.prevent="add()">
            <input autofocus v-model="inputTodo" type="text">
        </form>

        <div id="List">
            <div v-for="todoItem in todos" v-bind:key="todoItem" class="todoItem">
                <div>
                    {{ todoItem }}
                </div>
                <img @click.prevent="toCompleted()" src="../assets/doneArrowGreen.svg">
            </div>
        </div>
        <div id="List">
            <div v-for="completedTodo in completedTodos" v-bind:key="completedTodo">
                <div>
                    {{ completedTodo }}
                </div>
            </div>
        </div>

    </div>
</template>



<script>
    import betweenPagesComponent from './betweenPagesComponent.vue';

    export default {

  components: {
    betweenPagesComponent,

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
            this.todoItem  
        )
    },
  },
  data() {
    return {
        inputTodo: '',
        todos: [],
        completedTodos: [],
    }
  },
}
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

    img {
        width: 40px;
    }

    img:hover {
        width: 45px;
        transition: 100ms;
    }

    

</style>