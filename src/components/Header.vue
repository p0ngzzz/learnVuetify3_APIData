<template>
  <v-app-bar>
    <v-toolbar-title @click="$router.push('/')">
      Shopping Website
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn class="text-none" stacked>
      <v-badge :content="9" color="error">
        <v-icon> mdi-cart-outline </v-icon>
      </v-badge>
    </v-btn>
    <span class="material-symbols-outlined"> shopping_basket </span>
    
  </v-app-bar>
</template>

<script>
export default {
  setup() {},
};
</script>

<style></style>
