<template>
  <button
    class="
      inline-flex
      items-center
      py-2
      px-4
      hover:bg-gray-600
      rounded
      min-width
    "
  >
    <component :is="btnIcon" class="h-5 w-5 mr-2 text-white-500 fill-current" />
    <span>
      {{ btnText }}
    </span>
  </button>
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
  SearchCircleIcon,
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
    SearchCircleIcon,
  },
  data() {
    return {};
  },
};
</script>
