<script setup>
import { defineProps } from "vue";
import Button from "@/components/utilities/Button.vue";

/**
 * Define a prop named 'blogs', which should be an array.
 * Each blog object might look like:
 * {
 *   id: Number,
 *   title: String,
 *   excerpt: String,
 *   image: String,
 * }
 */
const props = defineProps({
  blogs: {
    type: Array,
    default: () => [],
  },
});

/**
 * Helper function to replicate Blade's Str::limit(...)
 */
function limitExcerpt(text, limit = 100) {
  if (!text) return "";
  return text.length > limit ? text.slice(0, limit) + "..." : text;
}
</script>

<template>
  <!-- Render this section only if blogs array is not empty -->
  <section
    v-if="blogs.length"
    class="section-blogs mt-[var(--section-p)] px-6 sm:px-10 py-16 text-[var(--text-light)] dark:text-[var(--text-dark)] bg-[var(--primary-v2)] dark:bg-[var(--secondary-v2)] rounded-[var(--border-radius-base)]">
    <div class="mx-auto">
      <!-- Section Title -->
      <div
        class="flex justify-between items-start mb-16 md:flex-row flex-col gap-6">
        <div class="md:text-start text-center">
          <h2
            class="heading-secondary mb-6 text-[var(--text-light)] dark:text-[var(--text-dark)]">
            Explore My Latest Blogs
          </h2>
          <p
            class="mb-6 text-[var(--text-light-v2)] dark:text-[var(--text-dark-v2)] leading-[var(--line-height-base)]">
            Stay updated with my thoughts, tutorials, and insights on web
            development, technology, and design.
          </p>
        </div>
        <!-- View All Button -->
        <div class="mt-1">
          <!-- Replace 'href' with your desired path or a router-link -->
          <Button href="/blogs" label="View All →" type="primary" />
        </div>
      </div>

      <!-- Blogs Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="blog in blogs"
          :key="blog.id"
          class="bg-[var(--primary)] dark:bg-[var(--tertiary)] p-6 rounded-xl shadow-[var(--card-shadow)]">
          <!-- Thumbnail -->
          <div class="rounded-lg overflow-hidden h-40 relative">
            <!-- Adjust the image source path if needed -->
            <img
              :src="`/storage/${blog.image}`"
              :alt="blog.title"
              class="w-full h-full object-cover transition-transform duration-300 transform hover:scale-[1.05]" />
          </div>

          <!-- Blog Info -->
          <div class="mt-6">
            <h3
              class="text-xl font-semibold text-[var(--text-light)] dark:text-[var(--text-dark)]">
              {{ blog.title }}
            </h3>
            <!-- Limit excerpt to 100 characters, then add "..." -->
            <p
              class="text-sm text-[var(--text-light)] dark:text-[var(--text-dark)] pt-1">
              {{ limitExcerpt(blog.excerpt, 100) }}
            </p>
            <!-- Read More Button -->
            <a
              :href="`/blogs/${blog.id}`"
              class="mt-4 inline-block text-sm font-semibold text-[var(--text-light-v2)] dark:text-[var(--text-dark-v2)] hover:text-[var(--text-light)] dark:hover:text-[var(--text-dark)] pb-1 border-b-[1.5px] border-transparent hover:border-[var(--text-light-v2)] dark:hover:border-[var(--text-dark-v2)]">
              Read More →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- Typically, you'd rely on Tailwind + global CSS variables, so you can leave this empty or remove it -->
<style></style>
