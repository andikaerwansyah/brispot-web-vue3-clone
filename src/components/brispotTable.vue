<template>
  <div class="shadow overflow-auto border-b border-gray-200 sm:rounded-lg">
    <table class="min-w-full divide-y divide-gray-200 brispot-accent">
      <thead class="bg-gray-50">
        <tr>
          <th
            v-for="item in tableHeader"
            :key="item.index"
            scope="col"
            class="
              px-3
              py-2
              text-left text-xs text-gray-500
              tracking-wider
              whitespace-nowrap
            "
          >
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="person in people" :key="person.refrenceNumber">
          <td class="px-3 py-4 whitespace-nowrap">
            <div class="flex items-center">
              <div class="ml-4">
                <div class="text-xs font-medium text-gray-900">
                  {{ person.no }}
                </div>
              </div>
            </div>
          </td>
          <td class="px-3 py-4 whitespace-nowrap">
            <div class="text-xs text-gray-500">
              {{ person.kodeUker }}
            </div>
          </td>
          <td class="px-3 py-4 whitespace-nowrap">
            <div class="text-xs text-gray-500">
              {{ person.namaUker }}
            </div>
          </td>
          <td class="px-3 py-4 whitespace-nowrap">
            <div class="text-xs text-gray-500">
              {{ person.refrenceNumber }}
            </div>
          </td>
          <td class="px-3 py-4 whitespace-nowrap">
            <div class="text-xs text-gray-500">
              {{ person.namaPemohon }}
            </div>
          </td>
          <td class="px-3 py-4 whitespace-nowrap">
            <div class="text-xs text-gray-500">
              {{ person.noKTP }}
            </div>
          </td>
          <td class="px-3 py-3">
            <div class="text-xs text-gray-500">
              <p class="overflow-ellipsis overflow-hidden">
                {{ person.alamat }}
              </p>
            </div>
          </td>
          <td class="px-3 py-4 whitespace-nowrap">
            <div class="text-xs text-gray-500">
              {{ person.pemrakarsa }}
            </div>
          </td>

          <td class="px-3 py-4 whitespace-nowrap">
            <div class="text-xs text-gray-500">
              {{ person.jumlahPinjaman }}
            </div>
          </td>
          <td class="px-3 py-4 whitespace-nowrap">
            <div class="text-xs text-gray-500">
              {{ person.channel }}
            </div>
          </td>
          <td
            class="px-3 py-4 whitespace-nowrap text-right text-sm font-medium"
          >
            <a class="text-indigo-600 hover:text-indigo-900">Detail</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const people = [
  {
    no: "1",
    kodeUker: "953",
    namaUker: "UNIT CILANDAK",
    refrenceNumber: "PK2108ZRXQ",
    namaPemohon: "ASRI HANDAAYANI",
    noKTP: "1717160419660032",
    alamat: "Jl Pegangsaan no 23 KEBAGUSAN PASAR MINGGU Jakarta Selatan",
    pemrakarsa: "(00182952)",
    jumlahPinjaman: "100000000",
    channel: "-",
  },
  {
    no: "1",
    kodeUker: "953",
    namaUker: "UNIT CILANDAK",
    refrenceNumber: "PK2108ZRXQ",
    namaPemohon: "ASRI HANDAAYANI",
    noKTP: "1717160419660032",
    alamat: "Jl Pegangsaan no 23 KEBAGUSAN PASAR MINGGU Jakarta Selatan",
    pemrakarsa: "(00182952)",
    jumlahPinjaman: "100000000",
    channel: "-",
  },
  {
    no: "1",
    kodeUker: "953",
    namaUker: "UNIT CILANDAK",
    refrenceNumber: "PK2108ZRXQ",
    namaPemohon: "ASRI HANDAAYANI",
    noKTP: "1717160419660032",
    alamat: "Jl Pegangsaan no 23 KEBAGUSAN PASAR MINGGU Jakarta Selatan",
    pemrakarsa: "(00182952)",
    jumlahPinjaman: "100000000",
    channel: "-",
  },
  {
    no: "1",
    kodeUker: "953",
    namaUker: "UNIT CILANDAK",
    refrenceNumber: "PK2108ZRXQ",
    namaPemohon: "ASRI HANDAAYANI",
    noKTP: "1717160419660032",
    alamat: "Jl Pegangsaan no 23 KEBAGUSAN PASAR MINGGU Jakarta Selatan",
    pemrakarsa: "(00182952)",
    jumlahPinjaman: "100000000",
    channel: "-",
  },
  {
    no: "1",
    kodeUker: "953",
    namaUker: "UNIT CILANDAK",
    refrenceNumber: "PK2108ZRXQ",
    namaPemohon: "ASRI HANDAAYANI",
    noKTP: "1717160419660032",
    alamat: "Jl Pegangsaan no 23 KEBAGUSAN PASAR MINGGU Jakarta Selatan",
    pemrakarsa: "(00182952)",
    jumlahPinjaman: "100000000",
    channel: "-",
  },
];

const tableHeader = [
  "No",
  "Kode Uker",
  "Nama Uker",
  "Refrence Number",
  "Nama Pemohon",
  "No KTP",
  "Alamat",
  "Pemrakarsa",
  "Jum. Pinjaman",
  "Channel",
  "Aksi",
];

export default {
  setup() {
    return {
      people,
      tableHeader,
    };
  },
};
</script>

<style>
.brispot-accent {
  border-left: 2px solid orange;
}
</style>