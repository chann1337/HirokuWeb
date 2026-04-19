<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()
const isRussian = computed(() => !lang.value.startsWith('en'))
</script>

<template>
  <section class="download-card">
    <h3>{{ isRussian ? 'Скачать HirokuLauncher' : 'Download HirokuLauncher' }}</h3>
    <p>
      {{
        isRussian
          ? 'Публичные ссылки на загрузку обновляются. Страница загрузки будет доступна здесь.'
          : 'Public download links are being refreshed. The download page will be available here.'
      }}
    </p>
    <p class="hint">
      {{
        isRussian
          ? 'Пока можно пользоваться документацией и новостями проекта.'
          : 'You can continue using the project documentation and news section meanwhile.'
      }}
    </p>
  </section>
</template>

<style scoped>
.download-card {
  margin: 1rem 0 2rem;
  padding: 1.2rem;
  border-radius: 14px;
  border: 1px solid var(--vp-c-divider);
  background: color-mix(in srgb, var(--vp-c-bg-soft) 70%, transparent);
}

h3 {
  margin: 0 0 0.5rem;
}

p {
  margin: 0;
  color: var(--vp-c-text-2);
}

.hint {
  margin-top: 0.65rem;
  font-size: 0.92rem;
  color: var(--vp-c-text-3);
}
</style>
