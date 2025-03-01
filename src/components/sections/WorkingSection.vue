<script setup></script>

<template>
  <section
    class="section-working pt-[var(--section-p)] bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] transition-colors duration-300">
    <!-- Heading -->
    <h2
      class="heading-secondary mb-10 text-center text-[var(--text-light)] dark:text-[var(--text-dark)]">
      My Working Process
    </h2>

    <!-- Process Steps -->
    <div class="space-y-10">
      <!-- Step 1 -->
      <div class="flex flex-col md:flex-row md:items-center gap-6">
        <div
          class="text-[var(--text-light-v2)] dark:text-[var(--text-dark-v2)] text-xl md:text-2xl font-bold md:w-1/12 text-center">
          01
        </div>
        <div
          class="text-[var(--text-light)] dark:text-[var(--text-dark)] font-medium text-lg md:w-2/12 text-center md:text-left">
          Research
        </div>
        <div
          class="text-[var(--text-light-v2)] dark:text-[var(--text-dark-v2)] leading-[var(--line-height-base)] md:w-9/12">
          I start by learning and researching based on the brief and available
          resources to gain insights about the needs, goals, products, and
          requirements to ensure a successful outcome.
        </div>
      </div>

      <!-- Step 2 -->
      <div class="flex flex-col md:flex-row md:items-center gap-6">
        <div
          class="text-[var(--text-light-v2)] dark:text-[var(--text-dark-v2)] text-xl md:text-2xl font-bold md:w-1/12 text-center">
          02
        </div>
        <div
          class="text-[var(--text-light)] dark:text-[var(--text-dark)] font-medium text-lg md:w-2/12 text-center md:text-left">
          Strategy
        </div>
        <div
          class="text-[var(--text-light-v2)] dark:text-[var(--text-dark-v2)] leading-[var(--line-height-base)] md:w-9/12">
          Then, I start planning and structuring the project process and budget
          based on the discovery phase before proceeding with development.
        </div>
      </div>

      <!-- Step 3 -->
      <div class="flex flex-col md:flex-row md:items-center gap-6">
        <div
          class="text-[var(--text-light-v2)] dark:text-[var(--text-dark-v2)] text-xl md:text-2xl font-bold md:w-1/12 text-center">
          03
        </div>
        <div
          class="text-[var(--text-light)] dark:text-[var(--text-dark)] font-medium text-lg md:w-2/12 text-center md:text-left">
          Development
        </div>
        <div
          class="text-[var(--text-light-v2)] dark:text-[var(--text-dark-v2)] leading-[var(--line-height-base)] md:w-9/12">
          Once all processes, goals, and scope are defined, I begin the
          development process, including creating the core code and programming
          the required features.
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
