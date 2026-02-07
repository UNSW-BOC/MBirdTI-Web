<script setup lang="ts">
type Variant = 'default' | 'active' | 'disabled'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    prevDisabled?: boolean
    nextDisabled?: boolean
    showNext?: boolean
  }>(),
  {
    variant: 'default',
    prevDisabled: false,
    nextDisabled: false,
    showNext: true,
  },
)

const emit = defineEmits<{
  (e: 'prev'): void
  (e: 'next'): void
}>()

const onPrev = () => emit('prev')
const onNext = () => emit('next')
</script>

<template>
  <div class="step">
    <button
      class="circle prev"
      type="button"
      :class="`is-${props.variant}`"
      :disabled="props.variant === 'disabled' || props.prevDisabled"
      @click="onPrev"
      aria-label="Previous"
    >
      <span class="icon left" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M13 5l7 7-7 7"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path d="M20 12H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
      </span>
    </button>

    <button
      v-if="showNext"
      class="circle next"
      type="button"
      :class="`is-${props.variant}`"
      :disabled="props.variant === 'disabled' || props.nextDisabled"
      @click="onNext"
      aria-label="Next"
    >
      <span class="icon" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M13 5l7 7-7 7"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path d="M20 12H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
      </span>
    </button>
  </div>
</template>

<style scoped>
.step {
  display: flex;
  align-items: center;
  gap: 24px;
  width: 128px;
  height: 52px;
}

.circle {
  width: 52px;
  height: 52px;
  border-radius: 32px;
  border: none;
  padding: 0;

  display: grid;
  place-items: center;

  cursor: pointer;
  user-select: none;
}

.icon {
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  color: #ffffff;
}

.icon.left {
  transform: rotate(180deg);
}

/* Default */
.prev.is-default {
  background: #b4ae9a;
}
.next.is-default {
  background: #564a24;
}

/* Active */
.prev.is-active {
  background: rgba(180, 174, 154, 0.85);
}
.next.is-active {
  background: rgba(86, 74, 36, 0.85);
}

/* Disabled */
.prev.is-disabled,
.prev:disabled {
  background: rgba(180, 174, 154, 0.45);
  cursor: not-allowed;
}

.next.is-disabled,
.next:disabled {
  background: rgba(86, 74, 36, 0.45);
  cursor: not-allowed;
}
</style>
