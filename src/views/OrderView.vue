<script setup lang="ts">
import { ref, computed } from 'vue'
import type { FormData, FormDataErrors } from '@/common/resources'
import TarifSelector from '@/components/TarifSelector.vue'
// Определяем реактивные данные
import { usePlansStore } from '@/stores/plansStore'

const plansStore = usePlansStore()
// Инициализируем планы при загрузке компонента
plansStore.initializePlans()

const tariffs = computed(() => plansStore.getPlansShort)

const selectedTariff = ref<number | null>(null)

const form = ref<FormData>({
  fullName: '',
  email: '',
  password: '',
  cardNumber: '',
  expiryDate: '',
  cvc: ''
})

// можно отрефакторить на vuelidate, но это уже другая история
const errors = ref<FormDataErrors>({
  fullName: '',
  email: '',
  password: '',
  cardNumber: '',
  expiryDate: '',
  cvc: ''
})

const successMessage = ref<string>('')

const selectTariff = (id: number): void => {
  selectedTariff.value = id
}

const validateForm = () => {
  // Reset errors
  Object.keys(errors.value).forEach((key) => (errors.value[key as keyof FormData] = ''))

  let isValid = true

  if (!form.value.fullName) {
    errors.value.fullName = 'Полное имя обязательно.'
    isValid = false
  }

  if (!form.value.email) {
    errors.value.email = 'Email обязателен.'
    isValid = false
  } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
    errors.value.email = 'Некорректный формат email.'
    isValid = false
  }

  if (!form.value.password) {
    errors.value.password = 'Пароль обязателен.'
    isValid = false
  }

  if (!form.value.cardNumber) {
    errors.value.cardNumber = 'Номер карты обязателен.'
    isValid = false
  } else if (!/^\d{16}$/.test(form.value.cardNumber)) {
    errors.value.cardNumber = 'Некорректный номер карты.'
    isValid = false
  }

  if (!form.value.expiryDate) {
    errors.value.expiryDate = 'Месяц/Год обязателен.'
    isValid = false
  }

  if (!form.value.cvc) {
    errors.value.cvc = 'CVC обязателен.'
    isValid = false
  } else if (!/^\d{3}$/.test(form.value.cvc)) {
    errors.value.cvc = 'Некорректный CVC.'
    isValid = false
  }

  return isValid
}

const submitForm = () => {
  if (validateForm()) {
    // тут должна быть какая-то логика отправки, но мы ничего никуда не отправляем, поэтому её нет
    successMessage.value = 'Аккаунт создан, пожалуйста проверьте входящие сообщения.'
    Object.keys(form.value).forEach((key) => (form.value[key as keyof FormData] = ''))
    selectedTariff.value = null
  }
}
</script>

<template>
  <div class="container mx-auto flex items-center justify-center p-12">
    <div class="m-auto flex flex-col border border-cyan-800 p-4 rounded max-w-3xl">
    <h2 class="text-lg font-semibold text-gray-800 mx-auto">{{ $t('order.form.tarrifChoose') }}</h2>
    <div class="tariff-list">
      <TarifSelector 
        :tariffs="tariffs"
        @changeTariff="selectTariff"      
      />
    </div>

    <h2 class="text-lg font-semibold text-gray-800 mt-4 mx-auto">{{ $t('order.form.submit') }}</h2>
    <form @submit.prevent="submitForm" class="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
        <div class="form-group mb-4">
          <label for="fullName" class="block text-gray-700 font-semibold mb-2">{{ $t('order.form.fullName') }}:</label>
          <input type="text" id="fullName" v-model="form.fullName" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <span v-if="errors.fullName" class="text-red-500 text-sm mt-1">{{ errors.fullName }}</span>
        </div>

        <div class="form-group mb-4">
          <label for="email" class="block text-gray-700 font-semibold mb-2">{{ $t('order.form.email') }}:</label>
          <input type="email" id="email" v-model="form.email" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <span v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</span>
        </div>

        <div class="form-group mb-4">
          <label for="password" class="block text-gray-700 font-semibold mb-2">{{ $t('order.form.password') }}:</label>
          <input type="password" id="password" v-model="form.password" required autocomplete="new-password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <span v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password }}</span>
        </div>

        <h3 class="text-lg font-semibold text-gray-800 mb-4">{{ $t('order.form.sailВata') }}</h3>

        <div class="form-group mb-4">
          <label for="cardNumber" class="block text-gray-700 font-semibold mb-2">{{ $t('order.form.cardNumber') }}:</label>
          <input type="text" id="cardNumber" v-model="form.cardNumber" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <span v-if="errors.cardNumber" class="text-red-500 text-sm mt-1">{{ errors.cardNumber }}</span>
        </div>

        <div class="flex space-x-4 mb-4">
          <div class="flex-1">
            <label for="expiryDate" class="block text-gray-700 font-semibold mb-2">{{ $t('order.form.date') }}:</label>
            <input type="text" id="expiryDate" placeholder="MM/YY" v-model="form.expiryDate" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <span v-if="errors.expiryDate" class="text-red-500 text-sm mt-1">{{ errors.expiryDate }}</span>
          </div>

          <div class="flex-1">
            <label for="cvc" class="block text-gray-700 font-semibold mb-2">CVC:</label>
            <input type="text" id="cvc" v-model.trim="form.cvc" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <span v-if="errors.cvc" class="text-red-500 text-sm mt-1">{{ errors.cvc }}</span>
          </div>
        </div>

        <button type="submit" class="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">{{ $t('order.form.submit') }}</button>

        <!-- Success Message -->
        <p v-if="successMessage" class="text-green-500 text-center mt-4">{{ successMessage }}</p>
      </form>
  </div>
  </div>
  
</template>

<style scoped>
.error {
  color: red;
  font-size: 0.875rem;
}

.success {
  color: green;
  font-size: 1rem;
}

.form-group {
  margin-bottom: 16px;
}
</style>
