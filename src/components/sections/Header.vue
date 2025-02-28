<script setup>
import { RouterLink, RouterView } from "vue-router";
import ToggleButton from "@/components/utilities/ToggleButton.vue";

const toggleMenu = () => {
  const menu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");

  // Toggle hidden class on the menu
  menu.classList.toggle("hidden");

  // Toggle between hamburger and close icons
  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times"); // Close icon
  } else {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars"); // Hamburger icon
  }
};
</script>

<template>
  <header
    class="bg-[var(--primary-v2)] dark:bg-[var(--secondary-v2)] px-8 py-10 rounded-[var(--border-radius-base)]">
    <div class="mx-auto flex items-center justify-between">
      <!-- === Logo === -->
      <RouterLink
        to="/"
        class="text-4xl font-bold text-[var(--text-light)] dark:text-[var(--text-dark)]">
        RAK
      </RouterLink>

      <!-- === Navigation Links === -->
      <nav
        class="font-semibold hidden md:flex space-x-6 text-[var(--text-light)] dark:text-[var(--text-dark)]">
        <RouterLink
          to="/"
          class="hover:text-[var(--text-light-v2)] dark:hover:text-[var(--text-dark-v2)] hover:transition hover:duration-300">
          Home
        </RouterLink>
        <RouterLink
          to="/about"
          class="hover:text-[var(--text-light-v2)] dark:hover:text-[var(--text-dark-v2)] hover:transition hover:duration-300">
          About
        </RouterLink>
        <RouterLink
          to="/projects"
          class="hover:text-[var(--text-light-v2)] dark:hover:text-[var(--text-dark-v2)] hover:transition hover:duration-300">
          Projects
        </RouterLink>
        <RouterLink
          to="/contact"
          class="hover:text-[var(--text-light-v2)] dark:hover:text-[var(--text-dark-v2)] hover:transition hover:duration-300">
          Get in Touch
        </RouterLink>
      </nav>

      <div class="flex items-center justify-center gap-x-6">
        <!-- === Theme Toggle Button === -->
        <ToggleButton />

        <!-- === Hamburger Menu for Mobile === -->
        <button
          id="menu-toggle"
          class="md:hidden text-[var(--text-light)] dark:text-[var(--text-dark)] text-3xl p-1 focus:outline-none"
          @click="toggleMenu()"
          aria-label="Toggle Menu">
          <!-- Hamburger Icon -->
          <i id="menu-icon" class="fas fa-bars w-8"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      id="mobile-menu"
      class="font-semibold text-center hidden md:hidden mt-10 mx-4 space-y-2 text-[var(--text-light)] dark:text-[var(--text-dark)] bg-[var(--secondary)] rounded-[var(--border-radius-base)] px-10 pt-6 pb-8">
      <div class="flex flex-col justify-center gap-4">
        <RouterLink
          to="/"
          class="inline-block hover:text-[var(--text-light-v2)] dark:hover:text-[var(--text-dark-v2)] border-b-[.05rem] hover:transition hover:duration-300">
          Home
        </RouterLink>
        <RouterLink
          to="/about"
          class="inline-block hover:text-[var(--text-light-v2)] dark:hover:text-[var(--text-dark-v2)] border-b-[.05rem] hover:transition hover:duration-300">
          About
        </RouterLink>
        <RouterLink
          to="/projects"
          class="inline-block hover:text-[var(--text-light-v2)] dark:hover:text-[var(--text-dark-v2)] border-b-[.05rem] hover:transition hover:duration-300">
          Projects
        </RouterLink>
        <RouterLink
          to="/contact"
          class="inline-block hover:text-[var(--text-light-v2)] dark:hover:text-[var(--text-dark-v2)] border-b-[.05rem] hover:transition hover:duration-300">
          Get in Touch
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
