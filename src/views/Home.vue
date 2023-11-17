<template>
  <div>Homepage</div>
  <h1>GG</h1>
  <!-- <img :src="posts[0].img" alt="" > -->
  <!-- <v-img
  :width="300"
  aspect-ratio="16/9"
  cover
  :src="posts[0].img"
></v-img> -->
  <v-btn @click="fetchData">
  Fetch Data
</v-btn>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length">
    <PostList :posts="posts" />
  </div>
  <div v-else>Loading data json...</div>
  
</template>

<script>
import PostList from "../components/PostList.vue";
import getPosts from "../reuseable-function/Post";

// Components
export default {
  name: "Home",
  components: { PostList },
  setup() {
    const { posts, error } = getPosts();

    const fetchData = () => {
      console.log(posts.value[0])
      console.log(posts.value[0].img)
    }
    return { posts, error, fetchData };
  },
};
</script>
