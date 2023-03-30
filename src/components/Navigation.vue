<template>
  <section class="p-4 border-b flex font-bold text-xl text-blue-50 justify-around">
    <RouterLink to="/TodoList">Todo</RouterLink>
    <RouterLink to="/CompletedList">Done</RouterLink>
  </section>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style scoped>

</style>