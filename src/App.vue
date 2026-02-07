<script setup lang="ts"></script>

<template>
  <div class="app-container">
    <div class="mobile-frame">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style>
/* 全局样式重置 */
body {
  margin: 0;
  padding: 0;
  font-family: Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
}

/* App 容器：负责处理桌面端的背景和居中 */
.app-container {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333; /* 桌面端深色背景，突出手机框 */
}

/* 手机框容器：所有页面内容的父级 */
.mobile-frame {
  width: 100%;
  max-width: 430px; /* 常见的手机宽度上限 (iPhone Pro Max) */
  min-height: 100vh;
  position: relative;
  background-color: #F6F1E5; /* 默认页面背景色 */
  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: 0 0 20px rgba(0,0,0,0.5); /* 桌面端阴影 */
}

/* 📱 手机端适配：当屏幕小于 480px 时，占满全屏 */
@media (max-width: 480px) {
  .app-container {
    background-color: transparent;
    display: block; /* 取消 flex 居中，让页面自然流式布局 */
  }
  
  .mobile-frame {
    max-width: 100%;
    min-height: 100vh; /* 确保占满 */
    box-shadow: none;
  }
}

/* 页面切换动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
