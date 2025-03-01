<script setup></script>

<template>
  <section id="about" class="section-about pt-[var(--section-p)]">
    <div class="mx-auto grid lg:grid-cols-2 gap-10 items-center">
      <!-- Text Content -->
      <div>
        <h2
          class="heading-secondary mb-12 text-[var(--text-light)] dark:text-[var(--text-dark)]">
          About Me
        </h2>
        <p
          class="mb-6 text-[var(--text-light-v2)] dark:text-[var(--text-dark-v2)] leading-[var(--line-height-base)]">
          I am a passionate web developer with 2 years of experience in creating
          custom websites and web applications. My mission is to help businesses
          and organizations achieve their goals through effective and efficient
          web development solutions.
        </p>
        <p
          class="text-[var(--text-light-v2)] dark:text-[var(--text-dark-v2)] leading-[var(--line-height-base)]">
          As a dedicated web developer, I am committed to staying up-to-date
          with the latest technologies and trends in the industry. I approach
          each project with enthusiasm, creativity, and a focus on delivering
          high-quality products that meet the unique needs of each client.
        </p>
        <!-- Social Links -->
        <div class="flex items-center gap-6 mt-10">
          <a
            href="https://github.com/RayhanalKavey"
            target="_blank"
            class="text-[var(--text-light)] dark:text-[var(--text-dark)] hover:text-[var(--text-light-v2)] dark:hover:text-[var(--text-dark-v2)] hover:transition hover:duration-300">
            <i class="fab fa-github text-5xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rayhanalkavey"
            target="_blank"
            class="text-[var(--text-light)] dark:text-[var(--text-dark)] hover:text-[var(--text-light-v2)] dark:hover:text-[var(--text-dark-v2)] hover:transition hover:duration-300">
            <i class="fab fa-linkedin text-5xl"></i>
          </a>
          <a
            href="https://www.facebook.com/rayhan.kavey"
            target="_blank"
            class="text-[var(--text-light)] dark:text-[var(--text-dark)] hover:text-[var(--text-light-v2)] dark:hover:text-[var(--text-dark-v2)] hover:transition hover:duration-300">
            <i class="fab fa-facebook text-5xl"></i>
          </a>
        </div>
      </div>

      <!-- Image -->
      <div>
        <img
          src="../../../public/images/about-section.png"
          alt="Image of Rayhan Al Kavey"
          class="rounded-[var(--border-radius-base)] shadow-[var(--card-shadow)]" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
