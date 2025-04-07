<script lang="ts" setup>
import { ref } from 'vue'
import { scrollToSection } from '@/common/utils';
import BaseHeader from '@/components/base/BaseHeader.vue'
import BaseFooter from '@/components/base/BaseFooter.vue'
// Определяем реактивные данные
import { usePlansStore } from '@/stores/plansStore'

const plansStore = usePlansStore()

// Инициализируем планы при загрузке компонента
plansStore.initializePlans()

const plans = plansStore.getPlans
</script>

<template>
  <div class="h-screen w-full flex flex-col">
    <BaseHeader />
    <section class="bg-darkBlue text-white pt-8 pb-8">
      <div class="container mx-auto">
        <h1>{{ $t('home.title') }}</h1>
        <p>{{ $t('home.description1') }}</p>
        <p>{{ $t('home.description2') }}</p>

        <button 
          class="bg-orange text-white px-4 py-2 rounded"
          @click="scrollToSection('plans')"
        >{{
          $t('home.cta')
        }}</button>
      </div>
    </section>

    <!-- Pricing Section -->
    <section
      id="plans"
      class="bg-cover bg-center text-white p-8 h-full max-h-12"
      style="background-image: url('./src/assets/images/main-bg-1.jpg')"
    >
      <!-- Пример карточек тарифов -->
      <div class="container mx-auto"></div>
    </section>

    <BaseFooter />
  </div>
</template>
