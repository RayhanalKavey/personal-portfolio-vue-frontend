<script setup>
import { RouterView } from "vue-router";

import Header from "@/components/sections/Header.vue";
import Footer from "@/components/sections/Footer.vue";
</script>

<template>
  <Header />
  <main>
    <h1>Admin Layout</h1>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped></style>
