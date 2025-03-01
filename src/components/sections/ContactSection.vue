<script setup>
import { reactive } from "vue";
import Button from "@/components/utilities/Button.vue";

const form = reactive({
  name: "",
  email: "",
  message: "",
});

function submitForm() {
  // Handle form submission logic here (e.g., send form data via an API)
  console.log("Form submitted:", form);
}
</script>

<template>
  <section
    id="contact"
    class="section-contact px-6 sm:px-10 py-32 mt-[var(--section-p)] bg-[var(--secondary)] dark:bg-[var(--secondary-v2)] rounded-[var(--border-radius-base)]">
    <div class="mx-auto">
      <h2
        class="heading-secondary mb-16 text-center text-[var(--text-light)] dark:text-[var(--text-dark)]">
        Let’s Get to Work
      </h2>
      <div class="grid lg:grid-cols-2 gap-18 items-start justify-center w-full">
        <div class="space-y-10">
          <div class="flex items-start gap-6">
            <i
              class="fa-solid fa-pen-to-square text-[var(--text-light)] dark:text-[var(--text-dark)] text-3xl"></i>
            <div>
              <h3
                class="text-[var(--text-light)] dark:text-[var(--text-dark)] font-semibold">
                Easy Customization
              </h3>
              <p
                class="text-[var(--text-light-v2)] dark:text-[var(--text-dark-v2)] leading-[var(--line-height-base)]">
                Depending on your needs, you can change the product easily from
                the layout to look in no time.
              </p>
            </div>
          </div>
          <div class="flex items-start gap-6">
            <i
              class="fa-solid fa-pen text-[var(--text-light)] dark:text-[var(--text-dark)] text-3xl"></i>
            <div>
              <h3
                class="text-[var(--text-light)] dark:text-[var(--text-dark)] font-semibold">
                Pixel Perfect
              </h3>
              <p
                class="text-[var(--text-light-v2)] dark:text-[var(--text-dark-v2)] leading-[var(--line-height-base)]">
                My designs are clean, minimalist, and versatile without
                sacrificing features.
              </p>
            </div>
          </div>
          <div class="flex items-start gap-6">
            <i
              class="fa-solid fa-pager text-[var(--text-light)] dark:text-[var(--text-dark)] text-3xl"></i>
            <div>
              <h3
                class="text-[var(--text-light)] dark:text-[var(--text-dark)] font-semibold">
                Fully Responsive
              </h3>
              <p
                class="text-[var(--text-light-v2)] dark:text-[var(--text-dark-v2)] leading-[var(--line-height-base)]">
                Use products on any device—tablet, mobile, or desktop—without
                worrying about size.
              </p>
            </div>
          </div>
        </div>

        <form
          @submit.prevent="submitForm"
          class="flex flex-col gap-6"
          enctype="multipart/form-data">
          <div class="relative">
            <input
              type="text"
              v-model="form.name"
              class="bg-[var(--tertiary)] w-full py-3 px-4 rounded-[var(--border-radius-base)] text-[var(--text-dark)] dark:text-[var(--text-dark-v2)] focus:outline-none focus:ring-4 focus:ring-[var(--text-light-v2)] dark:focus:ring-[var(--secondary)]"
              placeholder="Name" />
            <i
              class="fa-solid fa-file-signature absolute right-4 top-1/2 transform -translate-y-1/2 text-[var(--primary-v2)]"></i>
          </div>
          <div class="relative">
            <input
              type="email"
              v-model="form.email"
              class="bg-[var(--tertiary)] w-full py-3 px-4 rounded-[var(--border-radius-base)] text-[var(--text-dark)] dark:text-[var(--text-dark-v2)] focus:outline-none focus:ring-4 focus:ring-[var(--text-light-v2)] dark:focus:ring-[var(--secondary)]"
              placeholder="Email" />
            <i
              class="fa-solid fa-envelope absolute right-5 top-1/2 transform -translate-y-1/2 text-[var(--primary-v2)]"></i>
          </div>
          <div class="relative">
            <textarea
              rows="7"
              v-model="form.message"
              class="bg-[var(--tertiary)] w-full py-3 px-4 rounded-[var(--border-radius-base)] text-[var(--text-dark)] dark:text-[var(--text-dark-v2)] focus:outline-none focus:ring-4 focus:ring-[var(--text-light-v2)] dark:focus:ring-[var(--secondary)]"
              placeholder="Tell me what you are thinking!"></textarea>
            <i
              class="fa-solid fa-message absolute right-5 top-4 text-[var(--primary-v2)]"></i>
          </div>
          <div>
            <Button type="primary" label="Submit" />
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
