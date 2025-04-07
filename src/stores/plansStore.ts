import { defineStore } from 'pinia';
import { Plan } from '@/common/resources';

export const usePlansStore = defineStore('plans', {
    state: () => ({
        plans: [] as Plan[],
      }),
      getters: {
        getPlans(state): Plan[] {
          return state.plans;
        },
      },
      actions: {
        // Пример действия для добавления нового плана
        addPlan(newPlan: Plan) {
          this.plans.push(newPlan);
        },
        // Пример действия для инициализации планов
        initializePlans() {
          this.plans = [
            { title: 'Free Plan', price: 'Free', description: '10 super-pupers included.', features: ['Feature A', 'Feature B'] },
            { title: 'Basic Plan', price: '$10/month', description: '50 super-pupers included.', features: ['Feature C', 'Feature D'] },
            { title: 'Premium Plan', price: '$20/month', description: 'Unlimited super-pupers included.', features: ['Feature E', 'Feature F'] },
          ];
        },
      },
});