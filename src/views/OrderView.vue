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
  <div class="container mx-auto flex items-center justify-center">
    <div class="m-auto flex flex-col border border-cyan-800 p-4 rounded max-w-3xl">
    <h2>{{ $t('order.form.tarrifChoose') }}</h2>
    <div class="tariff-list">
      <TarifSelector 
        :tariffs="tariffs"
        @changeTariff="selectTariff"      
      />
    </div>

    <h2>{{ $t('order.form.submit') }}</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="fullName">{{ $t('order.form.fullName') }}:</label>
        <input type="text" id="fullName" v-model="form.fullName" required />
        <span v-if="errors.fullName" class="error">{{ errors.fullName }}</span>
      </div>

      <div class="form-group">
        <label for="email">{{ $t('order.form.email') }}:</label>
        <input type="email" id="email" v-model="form.email" required />
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </div>

      <div class="form-group">
        <label for="password">{{ $t('order.form.password') }}:</label>
        <input type="password" id="password" v-model="form.password" required autocomplete="new-password" />
        <span v-if="errors.password" class="error">{{ errors.password }}</span>
      </div>

      <h3>{{ $t('order.form.sailВata') }}</h3>

      <div class="form-group">
        <label for="cardNumber">{{ $t('order.form.cardNumber') }}:</label>
        <input type="text" id="cardNumber" v-model="form.cardNumber" required />
        <span v-if="errors.cardNumber" class="error">{{ errors.cardNumber }}</span>
      </div>

      <div class="form-group">
        <label for="expiryDate">{{ $t('order.form.date') }}:</label>
        <input type="text" id="expiryDate" placeholder="MM/YY" v-model="form.expiryDate" required />
        <span v-if="errors.expiryDate" class="error">{{ errors.expiryDate }}</span>
      </div>

      <div class="form-group">
        <label for="cvc">CVC:</label>
        <input type="text" id="cvc" v-model.trim="form.cvc" required />
        <span v-if="errors.cvc" class="error">{{ errors.cvc }}</span>
      </div>

      <button type="submit">{{ $t('order.form.submit') }}</button>

      <!-- Success Message -->
      <p v-if="successMessage" class="success">{{ successMessage }}</p>
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
