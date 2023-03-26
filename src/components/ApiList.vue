<template>
  <div id="List">
    <div>
      <div v-if="postsFetch.length">
        {{postsFetch[0].title}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ApiList",

  data() {
    return {
      postsFetch: [],
    }
  },

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
}
</script>