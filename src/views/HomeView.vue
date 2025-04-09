<script lang="ts" setup>
import { scrollToSection } from '@/common/utils'
// Определяем реактивные данные
import { usePlansStore } from '@/stores/plansStore'

const plansStore = usePlansStore()

// Инициализируем планы при загрузке компонента
plansStore.initializePlans()

const plans = plansStore.getPlans
</script>

<template>
  <div class="h-screen w-full flex flex-col">
    <section class="bg-darkBlue text-white pt-8 pb-8">
      <div class="container mx-auto space-y-4">
        <h1>{{ $t('home.title') }}</h1>
        <p>{{ $t('home.description1') }}</p>
        <p>{{ $t('home.description2') }}</p>

        <button class="bg-orange text-white px-4 py-2 rounded" @click="scrollToSection('plans')">
          {{ $t('home.cta') }}
        </button>
      </div>
    </section>

    <!-- Pricing Section -->
    <section
      id="plans"
      class="relative bg-cover bg-center text-white p-8 h-full"
      style="background-image: url('./src/assets/images/main-bg-1.jpg')"
    >
      <div class="absolute inset-0 bg-black opacity-50 z-10"></div>
      <!-- Пример карточек тарифов -->
      <div class="relative container mx-auto z-20 flex flex-col gap-4">
        <h2 class="text-4xl capitalize">{{ $t('texts.plans', 1) }}:</h2>
        <ul class="flex flex-wrap justify-center gap-4">
          <li
            v-for="plan in plans"
            :key="plan.title"
            class="bg-white text-black p-6 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3"
          >
            <h3 class="text-xl font-semibold mb-2">{{ plan.title }}</h3>
            <p class="text-lg font-bold mb-4">{{ plan.price }}</p>
            <p class="mb-4">{{ plan.description }}</p>
            <p v-if="plan.features" class="mb-4">Особенности: {{ plan.features.join(', ') }}</p>
            <button class="bg-orange text-white px-4 py-2 rounded">{{ $t('home.cta') }}</button>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
