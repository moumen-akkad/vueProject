// src/stores/formData.ts
import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => ({
    company: {},
    bankAccounts: [],
    mainAccountIndex: 0,
    businessFigures: [],
    mainReportIndex: 0,
    digital: {},
    government: {}
  }),

  actions: {
    updateSection(section: string, data: any) {
      this[section] = data
    },

    getFinalJson() {
      return {
        company: this.company,
        bankAccounts: this.bankAccounts,
        mainAccount: this.bankAccounts[this.mainAccountIndex],
        businessFigures: this.businessFigures,
        mainReport: this.businessFigures[this.mainReportIndex],
        digital: this.digital,
        government: this.government
      }
    }
  }
})
