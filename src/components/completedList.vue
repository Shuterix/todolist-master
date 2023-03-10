<template>
    <div id="List">
        <div class="todoItem" v-for="completedTodo in test" v-bind:key="completedTodo">
            <div>
                {{ completedTodo }}
            </div>
            <img style="width: 25px;" @click.prevent="remove(completedTodo)" src="../assets/remove.svg">
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            remove(completedTodo) {
                this.test = this.test.filter(item => item !== completedTodo)
            },
        },


        data() {
            return {
                
            }
        },


        props: [
            'test'
        ]
    }
</script>