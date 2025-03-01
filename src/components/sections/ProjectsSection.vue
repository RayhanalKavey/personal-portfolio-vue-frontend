<script setup>
import { defineProps } from "vue";
import Button from "@/components/utilities/Button.vue";

/**
 * We expect an array of project objects to be passed in as a prop.
 * Each project object might look like:
 * {
 *   id: Number,
 *   name: String,
 *   title: String,
 *   thumbnail_img: String
 * }
 */
const props = defineProps({
  projects: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <!-- Only render if there are projects -->
  <section
    v-if="projects.length > 0"
    class="section-projects mt-[var(--section-p)] px-6 sm:px-10 py-16 text-[var(--text-light)] dark:text-[var(--text-dark)] bg-[var(--primary-v2)] dark:bg-[var(--secondary-v2)] rounded-[var(--border-radius-base)]">
    <div class="mx-auto">
      <!-- Section Title -->
      <div
        class="flex justify-between items-start mb-16 md:flex-row flex-col gap-6">
        <div class="md:text-start text-center">
          <h2
            class="heading-secondary mb-6 text-[var(--text-light)] dark:text-[var(--text-dark)]">
            Take A Look At My Projects
          </h2>
          <p
            class="mb-6 text-[var(--text-light-v2)] dark:text-[var(--text-dark-v2)] leading-[var(--line-height-base)]">
            Explore a variety of innovative web development projects showcasing
            creativity, functionality, and modern design.
          </p>
        </div>
        <!-- View All Button -->
        <div class="mt-1">
          <!-- Replace `href` with your desired link or router-link -->
          <Button href="/projects" label="View All →" type="primary" />
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="project in projects"
          :key="project.id"
          class="bg-[var(--secondary)] dark:bg-[var(--tertiary)] p-6 rounded-xl shadow-[var(--card-shadow)]">
          <!-- Thumbnail -->
          <div class="rounded-lg overflow-hidden h-40 relative">
            <!-- If you have an API endpoint for images, adjust the `src` accordingly -->
            <img
              :src="`/storage/${project.thumbnail_img}`"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-300 transform hover:scale-[1.05]" />
          </div>

          <!-- Project Info -->
          <div class="mt-6">
            <h3
              class="text-xl font-semibold text-[var(--text-light)] dark:text-[var(--text-dark)]">
              {{ project.name }}
            </h3>
            <p
              class="text-sm text-[var(--text-light)] dark:text-[var(--text-dark)] pt-1">
              {{ project.title }}
            </p>
            <!-- Replace with your desired link or router-link -->
            <a
              :href="`/projects/${project.id}`"
              class="mt-4 inline-block text-sm font-semibold text-[var(--text-light-v2)] dark:text-[var(--text-dark-v2)] hover:text-[var(--text-light)] dark:hover:text-[var(--text-dark)] pb-1 border-b-[1.5px] border-transparent hover:border-[var(--text-light-v2)] dark:hover:border-[var(--text-dark-v2)]">
              Visit Details →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- If you have no component-specific CSS, you can omit <style> entirely.
     If you do need custom rules, you can place them here, typically unscoped
     so your Tailwind and CSS variables are recognized. -->
<style></style>
