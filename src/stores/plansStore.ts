import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'

export interface Plan {
  title: string
  price: string
  description: string
  features: string[] | null
}

const getLocalizedString = (key: string) => {
  const { t } = useI18n()
  return t(key)
}

export const usePlansStore = defineStore('plans', {
  state: () => ({
    plans: [] as Plan[]
  }),
  getters: {
    getPlans(state): Plan[] {
      return state.plans.map(plan => ({
        title: getLocalizedString(plan.title),
        price: getLocalizedString(plan.price),
        description: getLocalizedString(plan.description),
        features:
          plan.features?.map(feature => getLocalizedString(feature)) || null,
      }))
    }
  },
  actions: {
    // Пример действия для добавления нового плана
    addPlan(newPlan: Plan) {
      this.plans.push(newPlan)
    },
    // Пример действия для инициализации планов
    initializePlans() {
      this.plans = [
        {
          title: 'cards.freePlan.title',
          price: 'cards.freePlan.price',
          description: 'cards.freePlan.description',
          features: null
        },
        {
          title: 'cards.basicPlan.title',
          price: 'cards.basicPlan.price',
          description: 'cards.basicPlan.description',
          features: null
        },
        {
          title: 'cards.premiumPlan.title',
          price: 'cards.premiumPlan.price',
          description: 'cards.premiumPlan.description',
          features:['cards.premiumPlan.features']
        }
      ]
    }
  }
})
