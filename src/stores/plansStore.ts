import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'

export interface Plan {
  id: number
  title: string
  price: string
  description: string
  superPuppers: number
  features: string[] | null
}

export interface PlanShort {
  id: number
  title: string
  price: string
  superPuppers: number
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
      return state.plans.map((plan) => ({
        ...plan,
        title: getLocalizedString(plan.title),
        price: getLocalizedString(plan.price),
        description: getLocalizedString(plan.description),
        features: plan.features?.map((feature) => getLocalizedString(feature)) || null
      }))
    },
    getPlansShort(state): PlanShort[] {
      return state.plans.map((plan) => ({
        id: plan.id,
        title: getLocalizedString(plan.title),
        price: getLocalizedString(plan.price),
        superPuppers: plan.superPuppers
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
          id: 0,
          title: 'cards.freePlan.title',
          price: 'cards.freePlan.price',
          description: 'cards.freePlan.description',
          superPuppers: 10,
          features: null
        },
        {
          id: 1,
          title: 'cards.basicPlan.title',
          price: 'cards.basicPlan.price',
          description: 'cards.basicPlan.description',
          superPuppers: 50,
          features: null
        },
        {
          id: 2,
          title: 'cards.premiumPlan.title',
          price: 'cards.premiumPlan.price',
          description: 'cards.premiumPlan.description',
          superPuppers: Infinity,
          features: ['cards.premiumPlan.features']
        }
      ]
    }
  }
})
