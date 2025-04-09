<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'
import type { PlanShort } from '@/stores/plansStore'
const props = defineProps<{
  tariffs: Array<PlanShort>
}>()
const emits = defineEmits(['changeTariff'])
const selectedTariff = ref<number | null>(null)

const selectTariff = (tariffId: number) => {
  selectedTariff.value = tariffId
  emits('changeTariff', tariffId)
}
</script>
<template>
  <div class="flex justify-between items-center space-x-4">
    <div
      v-for="tariff in props.tariffs"
      :key="tariff.id"
      class="p-4 m-2 border rounded-lg cursor-pointer transition-colors duration-300 w-52 h-36"
      :class="{ 'bg-blue-100': selectedTariff === tariff.id }"
      @click="selectTariff(tariff.id)"
    >
      <div class="flex space-x-4">
        <div class="indicator text-green-500 text-xl" v-if="selectedTariff === tariff.id">✔️</div>
        <h3 class="text-lg font-semibold">{{ tariff.title }}</h3>
      </div>

      <p class="text-sm">{{ $t('texts.supepupers', 1) }}: {{ tariff.superPuppers }}</p>
      <p class="text-sm">{{ $t('texts.price', 0) }}: {{ tariff.price }} ₽</p>
    </div>
  </div>
</template>
