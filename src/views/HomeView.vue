<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

import HeroSection from "@/components/sections/HeroSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import ProjectsSection from "@/components/sections/ProjectsSection.vue";
import WorkingSection from "@/components/sections/WorkingSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
import BlogsSection from "@/components/sections/BlogsSection.vue";
import FaqSection from "@/components/sections/FaqSection.vue";

/* Reactive state to store the projects */
const projects = ref([]);
/**
 * Fetch projects from your server/API when the component mounts.
 * Adjust the URL to your actual endpoint (e.g., "/api/projects").
 */
async function fetchProjects() {
  try {
    const response = await axios.get("/admin-dashboard/project-manager");
    // console.log(response);
    projects.value = response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
}
console.log(projects.value);

/* onMounted runs once when the component is first rendered */
onMounted(() => {
  fetchProjects();
});
</script>

<template>
  <HeroSection />
  <AboutSection />
  <ProjectsSection />
  <WorkingSection />
  <ContactSection />
  <BlogsSection />
  <FaqSection />
</template>
