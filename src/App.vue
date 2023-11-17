<template>
  <v-app id="inspire">
    <!-- Header -->

    <Header />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
  
    
</template>

<script>
import Header from './components/Header.vue';
export default {
  name: "App",
  components: {Header},
  setup() {
  

    return {}
  },
};
</script>
