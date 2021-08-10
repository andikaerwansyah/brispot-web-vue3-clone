<template>
  <div class="sticky top-0 w-64 bg-brispot">
    <div class="flex-1 fixed mt-5">
      <div class="flex-shrink-0 ml-3">
        <router-link to="/">
          <img
            class="h-8 w-33"
            src="../assets/brispotweb_logos.png"
            alt="BRISpot Web Logo"
          />
        </router-link>
      </div>
      <!-- Scrollable Container -->
      <div
        class="overflow-y-scroll top-0 h-screen w-64 brispot-scroll-bar mt-3"
      >
        <template v-for="item in navigation" :key="item">
          <nav
            class="
              text-sm text-white
              py-2
              px-4
              hover:bg-gray-200
              hover:text-yellow-600
              focus:border-l-2
              rounded
              align-middle
            "
          >
            <router-link
              :to="item.url"
              class="
                whitespace-nowrap
                overflow-hidden overflow-ellipsis
                w-60
                align-middle
              "
            >
              <div class="inline-block overflow-hidden align-middle">
                <component :is="item.icon" class="h-5 w-5 text-white-500" />
              </div>
              <span class="ml-2">
                {{ item.text }}
              </span>
            </router-link>
          </nav>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import {
  BeakerIcon,
  HomeIcon,
  UserAddIcon,
  CheckCircleIcon,
  DocumentReportIcon,
  PencilAltIcon,
  CollectionIcon,
  ShieldCheckIcon,
  ArchiveIcon,
  ClipboardListIcon,
  CogIcon,
  IdentificationIcon,
  LinkIcon,
  OfficeBuildingIcon,
  TemplateIcon,
} from "@heroicons/vue/solid";

const navigation = [
  { text: "Home", url: "/", icon: "HomeIcon" },
  { text: "Calon Penyimpan Potensial (CPP)", url: "/cpp", icon: "UserAddIcon" },
  { text: "Prakarsa & Putusan Kredit", url: "/cpp", icon: "CheckCircleIcon" },
  { text: "Pencairan Pinjaman", url: "/cpp", icon: "PencilAltIcon" },
  { text: "Register SKPP", url: "/cpp", icon: "CollectionIcon" },
  { text: "Asuransi", url: "/cpp", icon: "ShieldCheckIcon" },
  { text: "Pengelolaan Agunan Lain", url: "/cpp", icon: "ArchiveIcon" },
  { text: "Pembinaan & Penagihan", url: "/cpp", icon: "ClipboardListIcon" },
  { text: "Reporting", url: "/cpp", icon: "DocumentReportIcon" },
  {
    text: "Laporan Ligas BRIvolution",
    url: "/cpp",
    icon: "DocumentReportIcon",
  },
  { text: "Pengaturan", url: "/cpp", icon: "CogIcon" },
  {
    text: "Pin Cash Pickup",
    url: "/pinCashPickup",
    icon: "IdentificationIcon",
  },
  { text: "Valuechain", url: "/pinCashPickup", icon: "LinkIcon" },
  { text: "Survey", url: "/pinCashPickup", icon: "ClipboardListIcon" },
  { text: "Administrator", url: "/pinCashPickup", icon: "OfficeBuildingIcon" },
  { text: "Lain Lain", url: "/pinCashPickup", icon: "TemplateIcon" },
];

export default {
  components: {
    BeakerIcon,
    HomeIcon,
    UserAddIcon,
    CheckCircleIcon,
    DocumentReportIcon,
    PencilAltIcon,
    CollectionIcon,
    ShieldCheckIcon,
    ArchiveIcon,
    ClipboardListIcon,
    CogIcon,
    IdentificationIcon,
    LinkIcon,
    OfficeBuildingIcon,
    TemplateIcon,
  },
  setup() {
    return {
      navigation,
    };
  },
};
</script>

<style>
.brispot-scroll-bar {
  scrollbar-color: #ffd580 grey;
  scrollbar-width: thin;
}
</style>
