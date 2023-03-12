<template>
    <div id="List">
        <div class="todoItem" v-for="completedTodo in completedTodoList" v-bind:key="completedTodo">
            <div>
                {{ completedTodo }}
            </div>
            <img style="width: 25px;" @click.prevent="$emit('removeCompletedTodo', completedTodo)" src="../assets/remove.svg">
        </div>
    </div>
</template>

<script>
    export default {
        methods: {

        },


        data() {
            return {
                
            }
        },


        props: [
            'completedTodoList'
        ]
    }
</script>