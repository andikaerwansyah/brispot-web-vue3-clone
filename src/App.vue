<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative min-h-screen flex">
    <SideBar />
    <div class="flex-1">
      <NavBar />
      <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center">
            <h1 class="text-3xl font-bold text-gray-900 order-first">
              {{ currentRouteName }}
            </h1>
            <span class="order-last"> Hari {{ timestamp }} </span>
          </div>
        </div>
      </header>
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-gray-100">
          <!-- Content Halaman Disini  -->
          <router-view />
          <!-- End Content Halaman -->
        </div>
      </main>
    </div>
  </div>
</template>

<script>
/** Component UI */
import SideBar from "./components/sideBar.vue";
import NavBar from "./components/navigationBar.vue";

export default {
  components: {
    SideBar,
    NavBar,
  },
  data() {
    return {
      timestamp: "00:00:00",
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    updateTime() {
      setInterval(() => {
        const self = this;
        var time = new Date();
        let clock = time.toLocaleString("id-ID", {
          year: "numeric",
          month: "long",
          day: "2-digit",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          weekday: "long",
          hour12: false,
        });
        this.timestamp = clock;
      }, 1000);
    },
  },
  created() {
    this.updateTime();
  },
  setup() {},
};
</script>

<style>
.bg-brispot {
  background-color: #013161;
  border-bottom: 3px solid orange;
}
.swal2-popup {
  border-radius: 15px !important;
}
nav li.router-link-active {
  @apply bg-gray-200;
  @apply text-yellow-600;
  @apply rounded;
}
</style>
