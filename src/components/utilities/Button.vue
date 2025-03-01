<template>
  <!-- 
   -- Renders an anchor if href exists; otherwise, a button 
   -- In Vue, the special attribute $attrs contains all the attributes (including event listeners) passed to your component that aren’t defined as props. By using v-bind="$attrs", you ensure that these extra attributes are automatically forwarded to the underlying element (either the <a> or <button> in this case). This makes your component more flexible and reusable, allowing consumers to add custom attributes like id, data-* attributes, or even custom event listeners without having to modify the component itself.
   -->

  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :class="computedClass"
    v-bind="$attrs">
    {{ label }}
  </component>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "primary",
  },
  href: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: "Click Me",
  },
  extraClass: {
    type: String,
    default: "",
  },
});

const computedClass = computed(() => {
  let styleClass = "";
  switch (props.type) {
    case "primary":
      styleClass =
        "btn-main px-6 py-3 rounded-[var(--border-btn)] bg-[var(--tertiary)] text-[var(--primary)] font-medium text-uppercase transition-transform duration-200 ease-in-out inline-block hover:-translate-y-1 hover:shadow-[var(--btn-shadow-dark)] active:-translate-y-0.5 active:shadow-[var(--btn-shadow-dark-v2)]";
      break;
    case "secondary":
      styleClass = "bg-gray-500 text-white hover:bg-gray-600";
      break;
    case "danger":
      styleClass = "bg-red-500 text-white hover:bg-red-600";
      break;
    case "outline":
      styleClass =
        "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white";
      break;
    case "submit":
      styleClass =
        "btn-main px-6 py-3 rounded-[var(--border-btn)] bg-[var(--tertiary)] text-[var(--primary)] font-medium text-uppercase transition-transform duration-200 ease-in-out inline-block hover:-translate-y-1 hover:shadow-[var(--btn-shadow-dark)] active:-translate-y-0.5 active:shadow-[var(--btn-shadow-dark-v2)]";
      break;
    default:
      styleClass = "bg-green-500 text-white hover:bg-green-600";
  }
  // Merge any additional classes passed via extraClass prop
  return `${styleClass} ${props.extraClass}`.trim();
});
</script>
