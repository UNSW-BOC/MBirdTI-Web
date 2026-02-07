import { ref } from 'vue'
import { defineStore } from 'pinia'

export type Language = 'zh' | 'en'

export const useAppStore = defineStore('app', () => {
  // Initialize from localStorage or default to 'zh'
  const savedLang = localStorage.getItem('language') as Language
  const language = ref<Language>(savedLang || 'zh')

  function setLanguage(lang: Language) {
    language.value = lang
    localStorage.setItem('language', lang)
  }

  function toggleLanguage() {
    setLanguage(language.value === 'zh' ? 'en' : 'zh')
  }

  return { language, setLanguage, toggleLanguage }
})
