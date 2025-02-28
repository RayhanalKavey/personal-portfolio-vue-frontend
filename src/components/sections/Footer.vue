<script setup></script>

<template>
  <footer
    class="bg-[var(--primary-v2)] dark:bg-[var(--secondary-v2)] text-[var(--text-light)] dark:text-[var(--text-dark)] pt-16 pb-10 rounded-[var(--border-radius-base)] mt-[var(--section-p)]">
    <div class="mx-auto px-6">
      <!-- Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-20">
        <!-- Column 1: About -->
        <div>
          <h3 class="text-2xl font-bold">RAK</h3>
          <p
            class="mt-2 text-[var(--text-light-v2)] dark:text-[var(--text-dark-v2)] text-lg">
            Find essential links and resources below to help you navigate and
            stay connected.
          </p>
          <div class="flex space-x-4 mt-4">
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

        <!-- Column 2: Latest News -->
        <div>
          <h3 class="text-2xl font-bold">Latest News</h3>
          <ul class="mt-4 space-y-4">
            <li>
              <p class="text-lg font-semibold">News title</p>
              <p
                class="text-[var(--text-light-v2)] dark:text-[var(--text-dark-v2)] text-lg">
                January 12, 2022
              </p>
            </li>
            <li>
              <p class="text-lg font-semibold">News title</p>
              <p
                class="text-[var(--text-light-v2)] dark:text-[var(--text-dark-v2)] text-lg">
                January 12, 2022
              </p>
            </li>
          </ul>
        </div>

        <!-- Column 3: Contact -->
        <div>
          <h3 class="text-2xl font-bold">Contact</h3>
          <ul class="mt-4 space-y-2 text-lg">
            <li
              class="flex items-center space-x-2 text-[var(--text-light-v2)] dark:text-[var(--text-dark-v2)]">
              <i class="fas fa-map-marker-alt"></i>
              <span>Hasnabad Housing, South Keraniganj, Dhaka.</span>
            </li>
            <li
              class="flex items-center space-x-2 text-[var(--text-light-v2)] dark:text-[var(--text-dark-v2)]">
              <i class="fas fa-envelope"></i>
              <span>rayhanalkavey@gmail.com</span>
            </li>
            <li
              class="flex items-center space-x-2 text-[var(--text-light-v2)] dark:text-[var(--text-dark-v2)]">
              <i class="fas fa-phone"></i>
              <span>+8801757582470</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div
        class="border-t border-[var(--secondary)] dark:border-[var(--primary-v2)] my-6"></div>

      <!-- Bottom Section -->
      <div
        class="flex justify-center items-center text-[var(--text-light-v2)] dark:text-[var(--text-dark-v2)] text-lg">
        <p>Rayhan Al Kavey © All Rights Reserved</p>
        <!-- <div class="space-x-6">
                <a href="#" class="hover:text-[var(--text-light-v2)] dark:hover:text-[var(--text-dark-v2)]">Service and Policy</a>
                <a href="#" class="hover:text-[var(--text-light-v2)] dark:hover:text-[var(--text-dark-v2)]">Terms and Condition</a>
            </div> -->
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
