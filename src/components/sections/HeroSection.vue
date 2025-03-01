<script setup>
import Button from "@/components/utilities/Button.vue";

const heroBg = "../../../public/images/hero-bg.jpg";
</script>

<template>
  <section
    class="bg-cover bg-center mt-[3rem] py-[var(--section-p)] px-[2rem] rounded-[var(--border-radius-base)]"
    :style="{
      backgroundImage: `linear-gradient(to right, #22223abf, #9a8c9899), url(${heroBg})`,
    }">
    <h1 class="text-[var(--text-light)] text-center">
      <span class="text-3xl md:text-4xl block">Hello, I'm</span>
      <span
        class="text-6xl md:text-7xl font-semibold block py-[2rem] md:py-[3rem]"
        >Rayhan Al Kavey</span
      >
      <span class="text-4xl md:text-5xl block"
        >A Professional Web-Developer</span
      >
    </h1>
    <div class="flex space-x-4 mt-[4rem] md:mt-[6rem] justify-center">
      <Button type="primary" label="Get in Touch" href="#contact" />
    </div>
  </section>
</template>

<style scoped></style>
