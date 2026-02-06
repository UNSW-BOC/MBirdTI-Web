<script setup lang="ts">
defineProps<{
  disabled?: boolean
}>()
</script>

<template>
  <button class="btn-language-option" :disabled="disabled">
    <span class="btn-text">
      <slot>Text</slot>
    </span>
    <span class="btn-icon" aria-hidden="true"> > </span>
  </button>
</template>

<style scoped>
/* ===== Button / Language Option (Default) ===== */
.btn-language-option {
  position: relative;

  width: 180px;
  min-width: 180px;
  height: 48px;

  background: #564a24;
  border-radius: 32px;
  border: none;

  display: inline-flex; /* ✅ flex */
  align-items: center;
  justify-content: center; /* 内容整体居中 */
  gap: 8px;
  cursor: pointer;
  user-select: none;
}

/* ===== Icon  ===== */
.btn-icon {
  width: 310px;
  height: 48px;
  border-radius: 32px;

  border: none;
  padding: 0 24px;

  display: inline-flex; /* ✅ flex */
  align-items: center;

  font-family: 'Poppins', system-ui, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  cursor: pointer;
  user-select: none;
  color: #ffffff;
}

/* ===== Text ===== */ /* 注意：这里放弃absolute定位align有问题 但语言的text又不是固定的 */
.btn-text {
  right: 24px;
  top: 14px;

  width: 108px;
  min-width: 108px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', system-ui, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  color: #ffffff;
}

/* ===== Active（Property 1 = Active） ===== */
.btn-language-option:active {
  background: #e9debb;
  color: #564a24;
}

/* ===== Disabled（Property 1 = Disabled） ===== */
.btn-language-option:disabled {
  background: rgba(233, 222, 187, 0.45);
  color: rgba(86, 74, 36, 0.45);
  cursor: not-allowed;
}
</style>
