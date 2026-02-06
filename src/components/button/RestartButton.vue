<script setup lang="ts">
defineProps<{
  disabled?: boolean
}>()
</script>

<template>
  <button class="btn-restart" :disabled="disabled">
    <span class="btn-text">
      <slot>Text</slot>
    </span>

    <span class="btn-icon" aria-hidden="true"> ↻ </span>
  </button>
</template>

<style scoped>
/* ===== Button / Restart (Default) ===== */
.btn-restart {
  position: relative;

  width: 180px;
  min-width: 180px;
  height: 48px;

  background: transparent;
  border: 1px solid #564a24;
  border-radius: 32px;

  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

/* ===== Text ===== */
.btn-text {
  left: 24px;
  top: 14px;

  width: 140px;
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

/* ===== Icon / arrow-right ===== */
.btn-icon {
  position: absolute;
  left: 140px;
  top: 12px;

  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  line-height: 1;
  color: #ffffff;
}

/* ===== Active（Property 1 = Active） ===== */
.btn-restart:active {
  background: rgba(86, 74, 36, 0.2);
  border: 1px solid #564a24;
}

/* ===== Disabled（Property 1 = Disabled） ===== */
.btn-restart:disabled {
  border: 1px solid rgba(86, 74, 36, 0.2);
  background: transparent;
  cursor: not-allowed;
}
</style>
