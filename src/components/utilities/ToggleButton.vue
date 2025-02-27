<script setup>
const toggleTheme = () => {
  const root = document.documentElement;
  const themeIcon = document.getElementById("theme-icon");

  if (root.classList.contains("dark")) {
    root.classList.remove("dark");
    localStorage.setItem("theme", "light");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
};

// Set theme and icon on load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const themeIcon = document.getElementById("theme-icon");

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  } else {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  }
});
</script>

<template>
  <div class="flex items-center justify-center">
    <button
      id="theme-toggle"
      @click="toggleTheme()"
      class="min-h-10 min-w-10 rounded-md bg-[var(--tertiary)] hover:bg-[var(--secondary-v2)] dark:bg-[var(--primary)] dark:hover:bg-[var(--primary-v2)] text-[var(--text-dark)] dark:text-[var(--text-light)] shadow-lg transition duration-300 border border-[var(--primary)] dark:border-[var(--tertiary)]">
      <!-- Icon for Light/Dark Mode -->
      <i id="theme-icon" class="fas fa-sun text-xl w-8"></i>
    </button>
  </div>
</template>

<style scoped></style>
