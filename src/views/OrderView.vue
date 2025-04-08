<script setup lang='ts'>
import { ref } from 'vue';
import type { FormData } from '@/common/resources';

const tariffs = ref([
  { id: 1, name: 'Базовый', superPuppers: 5, price: 500 },
  { id: 2, name: 'Стандартный', superPuppers: 10, price: 1000 },
  { id: 3, name: 'Премиум', superPuppers: 20, price: 2000 },
]);

const selectedTariff = ref<number | null>(null);
const form = ref<FormData>({
  fullName: '',
  email: '',
  password: '',
  cardNumber: '',
  expiryDate: '',
  cvc: '',
});


// можно отрефакторить на vuelidate, но это уже другая история
const errors = ref<FormData>({
  fullName: '',
  email: '',
  password: '',
  cardNumber: '',
  expiryDate: '',
  cvc: '',
});

const successMessage = ref<string>('');

const selectTariff = (id: number): void => {
  selectedTariff.value = id;
};

const validateForm = () => {
  // Reset errors
  Object.keys(errors.value).forEach((key) => (errors.value[key as keyof FormData] = ''));

  let isValid = true;

  if (!form.value.fullName) {
    errors.value.fullName = 'Полное имя обязательно.';
    isValid = false;
  }

  if (!form.value.email) {
    errors.value.email = 'Email обязателен.';
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
    errors.value.email = 'Некорректный формат email.';
    isValid = false;
  }

  if (!form.value.password) {
    errors.value.password = 'Пароль обязателен.';
    isValid = false;
  }

  if (!form.value.cardNumber) {
    errors.value.cardNumber = 'Номер карты обязателен.';
    isValid = false;
  } else if (!/^\d{16}$/.test(form.value.cardNumber)) {
    errors.value.cardNumber = 'Некорректный номер карты.';
    isValid = false;
  }

  if (!form.value.expiryDate) {
    errors.value.expiryDate = 'Месяц/Год обязателен.';
    isValid = false;
  }

  if (!form.value.cvc) {
    errors.value.cvc = 'CVC обязателен.';
    isValid = false;
  } else if (!/^\d{3}$/.test(form.value.cvc)) {
    errors.value.cvc = 'Некорректный CVC.';
    isValid = false;
  }

  return isValid;
};

const submitForm = () => {
  if (validateForm()) {
    successMessage.value = 'Аккаунт создан, пожалуйста проверьте входящие сообщения.';
    Object.keys(form.value).forEach((key) => (form.value[key as keyof FormData] = ''));
    selectedTariff.value = null;
  }
};
</script>

<template>
  <div class="subscription-form border border-cyan-800 p-8 rounded">
    <h2>Выберите тариф</h2>
    <div class="tariff-list">
      <div
        v-for="tariff in tariffs"
        :key="tariff.id"
        class="tariff-card"
        :class="{ selected: selectedTariff === tariff.id }"
        @click="selectTariff(tariff.id)"
      >
        <div class="indicator" v-if="selectedTariff === tariff.id">✔️</div>
        <h3>{{ tariff.name }}</h3>
        <p>Супер-пуперы: {{ tariff.superPuppers }}</p>
        <p>Цена: {{ tariff.price }} ₽</p>
      </div>
    </div>

    <h2>Создать аккаунт</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="fullName">Полное имя:</label>
        <input type="text" id="fullName" v-model="form.fullName" required />
        <span v-if="errors.fullName" class="error">{{ errors.fullName }}</span>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required />
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </div>

      <div class="form-group">
        <label for="password">Пароль:</label>
        <input type="password" id="password" v-model="form.password" required />
        <span v-if="errors.password" class="error">{{ errors.password }}</span>
      </div>

      <h3>Данные для оплаты</h3>

      <div class="form-group">
        <label for="cardNumber">Номер карты:</label>
        <input type="text" id="cardNumber" v-model="form.cardNumber" required />
        <span v-if="errors.cardNumber" class="error">{{ errors.cardNumber }}</span>
      </div>

      <div class="form-group">
        <label for="expiryDate">Месяц/Год:</label>
        <input type="text" id="expiryDate" placeholder="MM/YY" v-model="form.expiryDate" required />
        <span v-if="errors.expiryDate" class="error">{{ errors.expiryDate }}</span>
      </div>

      <div class="form-group">
        <label for="cvc">CVC:</label>
        <input type="text" id="cvc" v-model.trim="form.cvc" required />
        <span v-if="errors.cvc" class="error">{{ errors.cvc }}</span>
      </div>

      <button type="submit">Создать аккаунт</button>

      <!-- Success Message -->
      <p v-if="successMessage" class="success">{{ successMessage }}</p>
    </form>
  </div>
</template>

<style scoped>
.subscription-form {
  max-width: 600px;
  margin: auto;
}

.tariff-list {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.tariff-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: border-color 0.3s;
}

.tariff-card.selected {
  border-color: #007bff; 
}

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