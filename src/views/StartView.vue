<template>
  <div class="start-container">
    <div class="header">
      <button class="back-button" @click="$router.back()">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="#766630" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <!-- Title -->
    <div class="title-container">
      Before begin, please chose a language to continue
    </div>

    <!-- Language Options -->
    <div class="options-container">
      <div class="lang-option" @click="selectLanguage('en')">
        <span class="lang-text">English</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="#766630" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      <div class="lang-option" @click="selectLanguage('zh')">
        <span class="lang-text">中文</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="#766630" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      UNSW Student Life x UNSW BOC
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'

const router = useRouter()
const appStore = useAppStore()

function selectLanguage(lang: 'en' | 'zh') {
  appStore.setLanguage(lang)
  router.push('/quiz')
}
</script>

<style scoped>
.start-container {
  width: 100%;
  min-height: 100vh;
  background-color: #F6F1E5;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  font-family: Poppins, sans-serif;
}

.header {
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.title-container {
  position: absolute;
  width: 334px;
  left: 28px;
  top: 180px;
  text-align: center;
  color: #766630;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
}

.options-container {
  position: absolute;
  top: 330px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.lang-option {
  width: 310px;
  background: white;
  border-radius: 32px;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.lang-option:active {
  transform: scale(0.98);
}

.lang-text {
  color: #766630;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
}

.footer {
  position: absolute;
  bottom: 16px; /* Adjusted from top: 812px to be relative to bottom */
  left: 0;
  right: 0;
  text-align: center;
  color: #DBCFA6; /* As per design spec color: #DBCFA6 */
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.48px;
}

/* Background Image Placeholder (Optional - if needed to match design background pattern) */
/* Assuming the background is just #F6F1E5 based on design code provided, 
   but design image shows some faint illustrations. 
   If there is a background image, we can add it here. */
</style>
