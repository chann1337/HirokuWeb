---
layout: false
---

<style>
  :root {
    --md-primary: #4A7C59; --md-on-primary: #FFFFFF; --md-primary-container: #CCE8D4; --md-on-primary-container: #062413;
    --md-secondary: #4E6355; --md-on-secondary: #FFFFFF; --md-secondary-container: #D0E8D8; --md-on-secondary-container: #0B1F14;
    --md-tertiary: #3A6473; --md-on-tertiary: #FFFFFF; --md-tertiary-container: #BEE9FA; --md-on-tertiary-container: #001F28;
    --md-background: #F5FBF2; --md-on-background: #171D19; --md-surface: #F5FBF2; --md-on-surface: #171D19;
    --md-surface-variant: #DCE5DB; --md-on-surface-variant: #404943; --md-outline: #707973; --md-outline-variant: #C0C9C1;
    --md-surface-1: #ECF4EA; --md-surface-2: #E5F0E3; --md-surface-3: #DEEDDB; --md-surface-4: #DCEBD9; --md-surface-5: #D7E9D4;
    --shape-xl: 28px; --shape-full: 9999px;
    --elev-1: 0 1px 3px rgba(0,0,0,.1); --elev-3: 0 4px 8px rgba(0,0,0,.1);
  }
  [data-theme="dark"] {
    --md-primary: #9FCFAC; --md-on-primary: #0D3E22; --md-background: #0F1511; --md-on-background: #DEE4DD;
    --md-surface: #0F1511; --md-on-surface: #DEE4DD; --md-surface-1: #192019; --md-outline-variant: #404943;
  }
  .custom-layout { font-family: sans-serif; background: var(--md-background); color: var(--md-on-background); margin:0; }
  .nav-bar { position: fixed; top: 0; left: 0; right: 0; z-index: 100; height: 64px; display: flex; align-items: center; padding: 0 16px; background: rgba(245,251,242,0.8); backdrop-filter: blur(20px); border-bottom: 1px solid var(--md-outline-variant); }
  .nav-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; color: inherit; }
  .hero { min-height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 80px 24px; position: relative; }
  .btn-filled { padding: 12px 24px; background: var(--md-primary); color: var(--md-on-primary); border-radius: var(--shape-full); text-decoration: none; font-weight: 500; }
  .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; padding: 40px 0; }
  .feature-card { background: var(--md-surface-1); padding: 24px; border-radius: var(--shape-xl); border: 1px solid var(--md-outline-variant); }
</style>

<div class="custom-layout">
  <nav class="nav-bar">
    <a class="nav-logo" href="#">
      <span style="font-weight:700; font-size:20px;">Hiroku</span>
    </a>
  </nav>

  <section class="hero">
    <div class="hero-content">
      <h1 style="font-size: 64px; margin-bottom: 16px;">Hiroku Launcher</h1>
      <p style="font-size: 18px; opacity: 0.8; margin-bottom: 32px;">Полноценный Java Minecraft на вашем Android.</p>
      <a href="#download" class="btn-filled">Скачать APK</a>
    </div>
  </section>

  <section id="features" style="padding: 80px 24px;">
    <div style="max-width: 1100px; margin: 0 auto;">
      <h2 style="text-align:center; font-size: 36px; margin-bottom: 48px;">Возможности</h2>
      <div class="features-grid">
        <div class="feature-card">
          <h3>Все версии</h3>
          <p>От старой Beta до новейших Snapshot в несколько касаний.</p>
        </div>
        <div class="feature-card">
          <h3>Моды</h3>
          <p>Полная поддержка Forge, Fabric и NeoForge прямо из коробки.</p>
        </div>
        <div class="feature-card">
          <h3>Оптимизация</h3>
          <p>Встроенный JRE 17/21 и тонкая настройка памяти для FPS.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="download" style="padding: 100px 24px; text-align: center; background: var(--md-primary-container);">
    <h2 style="color: var(--md-on-primary-container); margin-bottom: 24px;">Готовы играть?</h2>
    <a href="#" class="btn-filled">Скачать для Android</a>
  </section>

  <footer style="padding: 40px; text-align: center; border-top: 1px solid var(--md-outline-variant);">
    <p>© 2026 Hiroku Team · GPL-3.0</p>
  </footer>
</div>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log('Hiroku Landing Loaded')
})
</script>
