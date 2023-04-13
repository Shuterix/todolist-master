<template>
    <div id="List">
        <div class="shadow my-1 mx-4 rounded border border-gray-600 p-4 flex" v-for="completedTodo in completedTodoList" v-bind:key="completedTodo">
            <div class="mr-auto item">
                {{ completedTodo }}
            </div>
            <img class="pt-1" style="width: 25px; height: 25px;" @click.prevent="$emit('removeTodo', completedTodo)" src="../assets/remove.svg">
        </div>
    </div>
</template>

<script>
    export default {
        name: "CompletedList",

        props: [
            'completedTodoList'
        ]
    }
</script>