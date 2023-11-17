import { ref } from "vue";

const getPosts = () => {
  const posts = ref(null);
  const error = ref(null);

  // fetch data here
  fetch(
    "https://raw.githubusercontent.com/igdev116/free-food-menus-api/main/menus/best-foods.json"
  ).then((res) => {
    console.log(res);
    return res.json();
  }).then((data) => {
    posts.value = data;
    console.log("data in Posts.js", data);
    // console.log(typeof data); // object
    // console.log(data[0])

    return posts.value
  }).catch((err) => {
    err.value = err.message;
    console.log(err.value)
  });

  
  return { posts, error };
};

export default getPosts;
