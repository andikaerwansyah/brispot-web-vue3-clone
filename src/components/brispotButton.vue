<template>
  <button class="inline-flex items-center py-2 px-4 hover:bg-gray-600 rounded">
    <component :is="btnIcon" class="h-5 w-5 mr-2 text-white-500 fill-current" />
    <span>
      {{ btnText }}
    </span>
  </button>
  <!-- <button
            class="
              bg-gray-300
              hover:bg-gray-400
              text-gray-800
              font-bold
              py-2
              px-4
              rounded
              inline-flex
              items-center
            "
          >
            <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download</span>
          </button> -->
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
  TrashIcon,
  XCircleIcon,
} from "@heroicons/vue/solid";

export default {
  props: ["btnText", "btnIcon"],
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
    TrashIcon,
    XCircleIcon,
  },
  data() {
    return {};
  },
};
</script>

<style>
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
</style>