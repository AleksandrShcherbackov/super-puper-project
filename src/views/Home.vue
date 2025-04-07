  <script lang="ts" setup>
  import { ref } from 'vue'
  import Header from '@/components/base/Header.vue'
  import Footer from '@/components/base/Footer.vue'
  // Определяем реактивные данные
  const pricingPlans = ref([
    { title: 'Free Plan', price: 'Free', description: '10 super-pupers included.', features: ['Feature A', 'Feature B'] },
    // другие тарифы...
  ]);
  </script>
  
  <template>
    <div class="bg-cover bg-center h-screen w-full flex flex-col justify-between" style="background-image: url('/background.jpg')">
      <Header />
      <section class="container text-white p-8">
        <h1>{{ $t('home.title') }}</h1>
        <p>{{ $t('home.description1') }}</p>
        <p>{{ $t('home.description2') }}</p>
        <router-link to="/order" class="bg-blue-500 text-white px-4 py-2 rounded">{{ $t('home.cta') }}</router-link>
      </section>
  
      <!-- Pricing Section -->
      <section class="container flex justify-around mt-8">
        <!-- Пример карточек тарифов -->
        
      </section>
  
      <Footer />
    </div>
  </template>
  
