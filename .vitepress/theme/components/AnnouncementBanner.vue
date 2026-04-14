<template>
  <div v-if="showAnnouncement" class="announcement-banner">
    <div class="announcement-content">
      <span class="announcement-icon">⚠️</span>
      <span class="announcement-text">
        <strong>重要公告：</strong>Discord 服务器已停止运营。点击查看详情。
      </span>
      <a href="/docs/announcement/discord-shutdown" class="announcement-link">查看详情 →</a>
      <button @click="dismiss" class="dismiss-btn" aria-label="关闭公告">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showAnnouncement = ref(true)

onMounted(() => {
  const dismissed = localStorage.getItem('announcement-dismissed')
  if (dismissed === 'true') {
    showAnnouncement.value = false
  }
})

const dismiss = () => {
  showAnnouncement.value = false
  localStorage.setItem('announcement-dismissed', 'true')
}
</script>

<style scoped>
.announcement-banner {
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
  color: white;
  padding: 0.75rem 1.5rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);
}

.announcement-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.announcement-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
}

.announcement-text {
  flex: 1;
  font-size: 0.9rem;
  line-height: 1.5;
}

.announcement-text strong {
  font-weight: 600;
  margin-right: 0.25rem;
}

.announcement-link {
  color: white;
  text-decoration: underline;
  font-weight: 500;
  font-size: 0.85rem;
  white-space: nowrap;
  transition: opacity 0.2s;
}

.announcement-link:hover {
  opacity: 0.8;
}

.dismiss-btn {
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background-color 0.2s;
  flex-shrink: 0;
}

.dismiss-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

@media (max-width: 768px) {
  .announcement-content {
    gap: 0.5rem;
  }
  
  .announcement-text {
    width: 100%;
    order: 2;
  }
  
  .announcement-link {
    order: 3;
  }
  
  .dismiss-btn {
    order: 1;
    margin-left: auto;
  }
}
</style>
