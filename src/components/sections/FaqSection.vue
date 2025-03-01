<script setup>
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const heading = item.querySelector(".faq-heading");
    heading.addEventListener("click", () => {
      const description = item.querySelector(".faq-description");
      const icon = item.querySelector(".faq-icon");

      // Toggle visibility
      description.classList.toggle("hidden");
      icon.classList.toggle("fa-plus");
      icon.classList.toggle("fa-minus");

      // Close other FAQ items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.querySelector(".faq-description").classList.add("hidden");
          const otherIcon = otherItem.querySelector(".faq-icon");
          otherIcon.classList.add("fa-plus");
          otherIcon.classList.remove("fa-minus");
        }
      });
    });
  });
});
</script>

<template>
  <section id="faq" class="section-faq pt-[var(--section-p)]">
    <div class="mx-auto grid lg:grid-cols-2 gap-10 items-center">
      <!-- FAQ Header -->
      <div>
        <h2
          class="heading-secondary mb-6 text-[var(--text-light)] dark:text-[var(--text-dark)]">
          FAQ
        </h2>
        <p
          class="text-[var(--text-light-v2)] dark:text-[var(--text-dark-v2)] leading-[var(--line-height-base)]">
          Find answers to some of the most common questions regarding services,
          project processes, and collaboration.
        </p>
      </div>

      <!-- FAQ Items -->
      <div>
        <div class="space-y-8">
          <!-- FAQ Item Template -->
          <div
            class="faq-item border border-[var(--border-primary)] rounded-[var(--border-radius-base)] px-6 hover:text-[var(--text-light-v2)] dark:hover:text-[var(--text-light-v3)] hover:transition hover:duration-300 transition duration-300">
            <div
              class="flex justify-between items-center cursor-pointer faq-heading py-6">
              <h3
                class="faq-title text-[var(--text-light)] dark:text-[var(--text-dark)]">
                Do you offer ongoing support?
              </h3>
              <i
                class="fa-solid fa-plus text-[var(--text-light)] dark:text-[var(--text-dark)] faq-icon"></i>
            </div>
            <p
              class="faq-description mb-6 text-[var(--text-light-v2)] dark:text-[var(--text-dark-v2)] hidden">
              Not only do I offer the expected maintenance and security, but I
              also offer design and logo support. My goal is to become an
              extension of your in-house marketing team and tailor solutions
              that empower your internal team.
            </p>
          </div>

          <div
            class="faq-item border border-[var(--border-primary)] rounded-[var(--border-radius-base)] px-6 hover:text-[var(--text-light-v2)] dark:hover:text-[var(--text-light-v3)] hover:transition hover:duration-300 transition duration-300">
            <div
              class="flex justify-between items-center cursor-pointer faq-heading py-6">
              <h3
                class="faq-title text-[var(--text-light)] dark:text-[var(--text-dark)]">
                Do you work with small businesses?
              </h3>
              <i
                class="fa-solid fa-plus text-[var(--text-light)] dark:text-[var(--text-dark)] faq-icon"></i>
            </div>
            <p
              class="faq-description mb-6 text-[var(--text-light-v2)] dark:text-[var(--text-dark-v2)] hidden">
              I am passionate about collaborating with businesses of all sizes,
              including small enterprises. I understand the unique challenges
              and aspirations of small businesses and tailor services to meet
              their needs. Whether you're just starting or looking to refresh
              your brand, I am here to elevate your presence with creativity and
              strategic design.
            </p>
          </div>

          <div
            class="faq-item border border-[var(--border-primary)] rounded-[var(--border-radius-base)] px-6 hover:text-[var(--text-light-v2)] dark:hover:text-[var(--text-light-v3)] hover:transition hover:duration-300 transition duration-300">
            <div
              class="flex justify-between items-center cursor-pointer faq-heading py-6">
              <h3
                class="faq-title text-[var(--text-light)] dark:text-[var(--text-dark)]">
                How long does the project take on average?
              </h3>
              <i
                class="fa-solid fa-plus text-[var(--text-light)] dark:text-[var(--text-dark)] faq-icon"></i>
            </div>
            <p
              class="faq-description mb-6 text-[var(--text-light-v2)] dark:text-[var(--text-dark-v2)] hidden">
              The time to complete a project depends on its complexity. Basic
              websites typically take 2 to 4 weeks, while more complex projects
              may take 6 to 12 weeks or longer. I work closely with clients to
              meet deadlines while maintaining high quality.
            </p>
          </div>

          <div
            class="faq-item border border-[var(--border-primary)] rounded-[var(--border-radius-base)] px-6 hover:text-[var(--text-light-v2)] dark:hover:text-[var(--text-light-v3)] hover:transition hover:duration-300 transition duration-300">
            <div
              class="flex justify-between items-center cursor-pointer faq-heading py-6">
              <h3
                class="faq-title text-[var(--text-light)] dark:text-[var(--text-dark)]">
                Is there a possibility of offline meetings?
              </h3>
              <i
                class="fa-solid fa-plus text-[var(--text-light)] dark:text-[var(--text-dark)] faq-icon"></i>
            </div>
            <p
              class="faq-description mb-6 text-[var(--text-light-v2)] dark:text-[var(--text-dark-v2)] hidden">
              Yes, offline meetings can be arranged based on your location.
              However, for distant clients, virtual meetings are recommended for
              regular updates and faster collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
