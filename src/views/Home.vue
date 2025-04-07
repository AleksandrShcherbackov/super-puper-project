  <script lang="ts" setup>
  import { ref } from 'vue'
  import Header from '@/components/base/Header.vue'
  // Определяем реактивные данные
  const pricingPlans = ref([
    { title: 'Free Plan', price: 'Free', description: '10 super-pupers included.', features: ['Feature A', 'Feature B'] },
    // другие тарифы...
  ]);
  </script>
  
  <template>
    <div class="bg-cover bg-center h-screen" style="background-image: url('/background.jpg')">
      <Header />
      <section class="text-white p-8">
        <h1>{{ $t('home.title') }}</h1>
        <p>{{ $t('home.description1') }}</p>
        <p>{{ $t('home.description2') }}</p>
        <router-link to="/order" class="bg-blue-500 text-white px-4 py-2 rounded">{{ $t('home.cta') }}</router-link>
      </section>
  
      <!-- Pricing Section -->
      <section class="flex justify-around mt-8">
        <!-- Пример карточек тарифов -->
        
      </section>
  
      <Footer />
    </div>
  </template>
  
