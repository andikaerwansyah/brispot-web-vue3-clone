<template>
  <div>
    <div class="flex justify-between">
      <template v-for="(item, index) in feStacks" :key="index">
        <div
          class="max-w-sm py-4 px-8 bg-white shadow-lg rounded-lg my-20 order-{{index == 0 ? `first` : {{index}}}}"
        >
          <div class="flex justify-center md:justify-end -mt-16">
            <img
              class="
                w-20
                h-20
                object-scale-down
                rounded-full
                border-2 border-indigo-500
              "
              :src="item.img"
            />
          </div>
          <h2 class="text-gray-800 text-3xl font-semibold">{{ item.title }}</h2>
          <div class="h-40 overflow-auto">
            <p class="mt-2 text-gray-600">
              {{ item.text }}
            </p>
          </div>
          <div class="flex justify-end mt-4">
            <a
              :href="item.url"
              target="_blank"
              class="text-xl font-medium text-indigo-500"
              >Dokumentasi</a
            >
          </div>
        </div>
      </template>
    </div>
    <!-- BUTTON -->
    <div>
      <h1 class="mb-3 text-3xl font-bold text-gray-900">Button</h1>
      <div class="grid grid-cols-6 gap-1">
        <div>
          <BrispotButton
            btn-text="Cari"
            btn-icon="HomeIcon"
            class="text-white bg-blue-600"
          />
        </div>
        <div>
          <BrispotButton btn-text="OK" class="text-white bg-yellow-600" />
        </div>
        <div>
          <BrispotButton btn-text="Ya" class="text-white bg-green-600" />
        </div>
        <div>
          <BrispotButton
            btn-text="Approve"
            class="text-white bg-green-600"
            btn-icon="CheckCircleIcon"
          />
        </div>
        <div>
          <BrispotButton
            btn-text="Hapus"
            class="text-white bg-red-600"
            btn-icon="TrashIcon"
          />
        </div>
        <div>
          <BrispotButton
            btn-text="Tolak"
            class="text-white bg-red-600"
            btn-icon="XCircleIcon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BrispotButton from "../components/brispotButton.vue";

let feStacks = [
  {
    title: "Vue.js V3",
    text: "Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.",
    img: "https://raw.githubusercontent.com/weizhanzhan/vue3-ts-template-h5/master/src/assets/images/vue3.png",
    url: "https://v3.vuejs.org/",
  },
  {
    title: "Tailwind CSS",
    text: "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
    img: "https://www.markusantonwolf.com/media/pages/blog/tailwind-css/265298487-1623549769/tailwind-css-logo.svg",
    url: "https://tailwindcss.com/",
  },
  {
    title: "Heroicons",
    text: "Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.",
    img: "https://bestofjs.org/logos/heroicons.svg",
    url: "https://vue-hero-icons.netlify.app/",
  },
];

export default {
  components: {
    BrispotButton,
  },
  setup() {
    return {
      feStacks,
    };
  },
};
</script>