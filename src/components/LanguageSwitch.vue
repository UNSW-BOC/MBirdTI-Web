<template>
  <button class="lang-switch" @click="appStore.toggleLanguage">
    <span :class="{ active: appStore.language === 'zh' }">CN</span>
    <span class="divider">/</span>
    <span :class="{ active: appStore.language === 'en' }">EN</span>
  </button>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
</script>

<style scoped>
.lang-switch {
  background: none;
  border: 1px solid #766630;
  border-radius: 20px;
  padding: 4px 12px;
  cursor: pointer;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  color: #766630;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: all 0.2s ease;
}

.lang-switch:hover {
  background-color: rgba(118, 102, 48, 0.1);
}

.divider {
  opacity: 0.5;
}

.active {
  font-weight: 700;
}
</style>
