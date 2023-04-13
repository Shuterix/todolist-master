<template>
  <section class="p-4 border-b flex font-bold text-xl text-blue-50 justify-around">
    <RouterLink to="/">Todo</RouterLink>
    <RouterLink to="/CompletedList">Done</RouterLink>
  </section>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style scoped>
  a.router-link-exact-active {
    color: white;
    text-decoration: underline;
    font-weight: bold;
  }

  a {
    font-weight: normal;
  }
</style>