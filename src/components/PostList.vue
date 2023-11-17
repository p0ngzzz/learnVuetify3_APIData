<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <!-- create new component SinglePost -->
      <!-- <SinglePost  :post="post" /> -->
      <h1>Name: {{ post.name }}</h1>
      <v-img :width="300" aspect-ratio="16/9" cover :src="post.img"></v-img>
    </div>
  </div>
</template>

<script>
export default {
  props: ["posts"],
};
</script>

<style></style>
