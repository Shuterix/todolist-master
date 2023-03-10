<template>
    <div>
            <h1>
                <router-link to="/todoList">TodoList</router-link>
            </h1>
        </div>
</template>

<script>
    export default {
        name: 'betweenPagesComponent',
    }
</script>


<style>
    template > div {
        margin-top: 2rem;
    }
</style>