---
layout: false
---
<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hiroku Launcher — Java Minecraft на Android</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&family=Google+Sans+Display:wght@400;500;700&family=Roboto+Flex:opsz,wght@8..144,300;8..144,400;8..144,500;8..144,600;8..144,700&display=swap" rel="stylesheet">
<style>
  :root {
    /* Material You — Minecraft Earthy Green Seed */
    --md-primary: #4A7C59;
    --md-on-primary: #FFFFFF;
    --md-primary-container: #CCE8D4;
    --md-on-primary-container: #062413;
    --md-secondary: #4E6355;
    --md-on-secondary: #FFFFFF;
    --md-secondary-container: #D0E8D8;
    --md-on-secondary-container: #0B1F14;
    --md-tertiary: #3A6473;
    --md-on-tertiary: #FFFFFF;
    --md-tertiary-container: #BEE9FA;
    --md-on-tertiary-container: #001F28;
    --md-error: #BA1A1A;
    --md-error-container: #FFDAD6;
    --md-background: #F5FBF2;
    --md-on-background: #171D19;
    --md-surface: #F5FBF2;
    --md-on-surface: #171D19;
    --md-surface-variant: #DCE5DB;
    --md-on-surface-variant: #404943;
    --md-outline: #707973;
    --md-outline-variant: #C0C9C1;
    --md-surface-1: #ECF4EA;
    --md-surface-2: #E5F0E3;
    --md-surface-3: #DEEDDB;
    --md-surface-4: #DCEBD9;
    --md-surface-5: #D7E9D4;
    --md-shadow: rgba(0, 0, 0, 0.15);
    --md-scrim: rgba(0, 0, 0, 0.32);

    /* Shapes */
    --shape-xs: 4px;
    --shape-sm: 8px;
    --shape-md: 12px;
    --shape-lg: 16px;
    --shape-xl: 28px;
    --shape-full: 9999px;

    /* Elevation Shadows */
    --elev-1: 0 1px 2px rgba(0,0,0,.12), 0 1px 3px 1px rgba(0,0,0,.08);
    --elev-2: 0 1px 2px rgba(0,0,0,.12), 0 2px 6px 2px rgba(0,0,0,.10);
    --elev-3: 0 1px 3px rgba(0,0,0,.12), 0 4px 8px 3px rgba(0,0,0,.10);
    --elev-4: 0 2px 3px rgba(0,0,0,.12), 0 6px 10px 4px rgba(0,0,0,.10);
    --elev-5: 0 4px 4px rgba(0,0,0,.12), 0 8px 12px 6px rgba(0,0,0,.10);
  }

  [data-theme="dark"] {
    --md-primary: #9FCFAC;
    --md-on-primary: #0D3E22;
    --md-primary-container: #265638;
    --md-on-primary-container: #BBE9C8;
    --md-secondary: #B5CCBA;
    --md-on-secondary: #203528;
    --md-secondary-container: #364B3D;
    --md-on-secondary-container: #D0E8D6;
    --md-tertiary: #A2CDDD;
    --md-on-tertiary: #013543;
    --md-tertiary-container: #1F4C5B;
    --md-on-tertiary-container: #BEE9FA;
    --md-background: #0F1511;
    --md-on-background: #DEE4DD;
    --md-surface: #0F1511;
    --md-on-surface: #DEE4DD;
    --md-surface-variant: #404943;
    --md-on-surface-variant: #C0C9C1;
    --md-outline: #8A938C;
    --md-outline-variant: #404943;
    --md-surface-1: #192019;
    --md-surface-2: #1E2720;
    --md-surface-3: #222D26;
    --md-surface-4: #242F28;
    --md-surface-5: #27332B;
    --md-shadow: rgba(0, 0, 0, 0.40);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Roboto Flex', sans-serif;
    background: var(--md-background);
    color: var(--md-on-background);
    overflow-x: hidden;
    transition: background .3s, color .3s;
  }

  /* ── NAV BAR ── */
  .nav-bar {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    height: 64px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    background: color-mix(in srgb, var(--md-surface) 92%, transparent);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--md-outline-variant);
    transition: background .3s;
  }

  .nav-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
  }

  .nav-logo-icon {
    width: 36px;
    height: 36px;
    border-radius: var(--shape-md);
    background: var(--md-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--elev-1);
    flex-shrink: 0;
  }

  .nav-logo-icon svg { width: 22px; height: 22px; }

  .nav-logo-text {
    font-family: 'Google Sans Display', sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: var(--md-on-surface);
    letter-spacing: -0.3px;
  }

  .nav-links {
    display: flex;
    gap: 4px;
    margin: 0 auto;
    list-style: none;
  }

  .nav-links a {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    border-radius: var(--shape-full);
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    color: var(--md-on-surface-variant);
    transition: background .2s, color .2s;
    letter-spacing: .1px;
  }

  .nav-links a:hover {
    background: color-mix(in srgb, var(--md-on-surface) 8%, transparent);
    color: var(--md-on-surface);
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .btn-icon {
    width: 40px; height: 40px;
    border: none; background: transparent; cursor: pointer;
    border-radius: var(--shape-full);
    display: flex; align-items: center; justify-content: center;
    color: var(--md-on-surface-variant);
    transition: background .2s, color .2s;
  }
  .btn-icon:hover {
    background: color-mix(in srgb, var(--md-on-surface) 8%, transparent);
    color: var(--md-on-surface);
  }
  .btn-icon svg { width: 22px; height: 22px; }

  /* ── BUTTONS ── */
  .btn-filled {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 10px 24px;
    background: var(--md-primary);
    color: var(--md-on-primary);
    border: none; border-radius: var(--shape-full);
    font-family: 'Roboto Flex', sans-serif;
    font-size: 14px; font-weight: 500; letter-spacing: .1px;
    cursor: pointer; text-decoration: none;
    box-shadow: var(--elev-1);
    transition: box-shadow .2s, transform .15s, filter .2s;
  }
  .btn-filled:hover { box-shadow: var(--elev-3); filter: brightness(1.06); }
  .btn-filled:active { transform: scale(.97); box-shadow: var(--elev-1); }

  .btn-tonal {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 10px 24px;
    background: var(--md-secondary-container);
    color: var(--md-on-secondary-container);
    border: none; border-radius: var(--shape-full);
    font-family: 'Roboto Flex', sans-serif;
    font-size: 14px; font-weight: 500; letter-spacing: .1px;
    cursor: pointer; text-decoration: none;
    transition: box-shadow .2s, transform .15s, filter .2s;
  }
  .btn-tonal:hover { box-shadow: var(--elev-2); filter: brightness(1.04); }
  .btn-tonal:active { transform: scale(.97); }

  .btn-outlined {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 10px 24px;
    background: transparent;
    color: var(--md-primary);
    border: 1px solid var(--md-outline);
    border-radius: var(--shape-full);
    font-family: 'Roboto Flex', sans-serif;
    font-size: 14px; font-weight: 500; letter-spacing: .1px;
    cursor: pointer; text-decoration: none;
    transition: background .2s, transform .15s;
  }
  .btn-outlined:hover { background: color-mix(in srgb, var(--md-primary) 8%, transparent); }
  .btn-outlined:active { transform: scale(.97); }

  .btn-filled svg, .btn-tonal svg, .btn-outlined svg { width: 18px; height: 18px; flex-shrink: 0; }

  /* ── HERO ── */
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 24px 80px;
    position: relative;
    overflow: hidden;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 60% at 20% 30%, color-mix(in srgb, var(--md-primary) 18%, transparent) 0%, transparent 70%),
      radial-gradient(ellipse 50% 50% at 80% 70%, color-mix(in srgb, var(--md-tertiary) 15%, transparent) 0%, transparent 60%),
      radial-gradient(ellipse 40% 40% at 50% 50%, color-mix(in srgb, var(--md-secondary) 10%, transparent) 0%, transparent 80%);
  }

  .hero-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(var(--md-outline-variant) 1px, transparent 1px),
      linear-gradient(90deg, var(--md-outline-variant) 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: 0.18;
    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent);
  }

  /* floating pixels */
  .pixel-float {
    position: absolute;
    border-radius: var(--shape-sm);
    opacity: 0;
    animation: floatUp 6s ease-in-out infinite;
  }

  @keyframes floatUp {
    0% { opacity: 0; transform: translateY(40px) rotate(0deg); }
    20% { opacity: .7; }
    80% { opacity: .5; }
    100% { opacity: 0; transform: translateY(-80px) rotate(20deg); }
  }

  .hero-content {
    position: relative;
    text-align: center;
    max-width: 720px;
    z-index: 1;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 16px;
    background: var(--md-primary-container);
    color: var(--md-on-primary-container);
    border-radius: var(--shape-full);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: .5px;
    text-transform: uppercase;
    margin-bottom: 24px;
    animation: fadeSlideDown .6s ease both;
  }
  .hero-badge svg { width: 14px; height: 14px; }

  .hero-icon {
    width: 120px;
    height: 120px;
    margin: 0 auto 32px;
    border-radius: 28px;
    background: var(--md-primary-container);
    border: 3px solid color-mix(in srgb, var(--md-primary) 30%, transparent);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--elev-4), 0 0 40px color-mix(in srgb, var(--md-primary) 25%, transparent);
    animation: fadeSlideDown .5s ease both;
    animation-delay: .1s;
    position: relative;
    overflow: hidden;
  }

  .hero-icon::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,.2) 0%, transparent 60%);
    border-radius: inherit;
  }

  .hero-icon svg { width: 72px; height: 72px; position: relative; z-index: 1; }

  h1.hero-title {
    font-family: 'Google Sans Display', sans-serif;
    font-size: clamp(48px, 8vw, 80px);
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: -2px;
    color: var(--md-on-background);
    margin-bottom: 8px;
    animation: fadeSlideDown .5s ease both;
    animation-delay: .15s;
  }

  h1.hero-title span {
    background: linear-gradient(135deg, var(--md-primary) 0%, var(--md-tertiary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-sub {
    font-size: 18px;
    font-weight: 400;
    color: var(--md-on-surface-variant);
    line-height: 1.6;
    margin-bottom: 40px;
    animation: fadeSlideDown .5s ease both;
    animation-delay: .2s;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions {
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
    animation: fadeSlideDown .5s ease both;
    animation-delay: .25s;
    margin-bottom: 60px;
  }

  .hero-actions .btn-filled { padding: 14px 28px; font-size: 15px; }
  .hero-actions .btn-tonal { padding: 14px 28px; font-size: 15px; }

  .hero-stats {
    display: flex;
    gap: 8px;
    justify-content: center;
    flex-wrap: wrap;
    animation: fadeSlideDown .5s ease both;
    animation-delay: .3s;
  }

  .stat-chip {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    background: var(--md-surface-1);
    border: 1px solid var(--md-outline-variant);
    border-radius: var(--shape-full);
    font-size: 13px;
    font-weight: 500;
    color: var(--md-on-surface);
    box-shadow: var(--elev-1);
  }
  .stat-chip svg { width: 16px; height: 16px; color: var(--md-primary); }

  @keyframes fadeSlideDown {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* ── SECTION ── */
  section {
    padding: 80px 24px;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
  }

  .section-header {
    text-align: center;
    margin-bottom: 56px;
  }

  .section-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 14px;
    background: var(--md-tertiary-container);
    color: var(--md-on-tertiary-container);
    border-radius: var(--shape-full);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: .8px;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  h2.section-title {
    font-family: 'Google Sans Display', sans-serif;
    font-size: clamp(32px, 5vw, 52px);
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 1.1;
    color: var(--md-on-background);
    margin-bottom: 16px;
  }

  .section-desc {
    font-size: 16px;
    color: var(--md-on-surface-variant);
    line-height: 1.7;
    max-width: 560px;
    margin: 0 auto;
  }

  /* ── CARDS ── */
  .md-card {
    background: var(--md-surface-1);
    border-radius: var(--shape-xl);
    padding: 28px;
    border: 1px solid var(--md-outline-variant);
    transition: box-shadow .25s, transform .25s, background .3s;
    box-shadow: var(--elev-1);
  }
  .md-card:hover {
    box-shadow: var(--elev-3);
    transform: translateY(-3px);
    background: var(--md-surface-2);
  }

  /* ── FEATURES GRID ── */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .feature-card {
    background: var(--md-surface-1);
    border-radius: var(--shape-xl);
    padding: 28px;
    border: 1px solid var(--md-outline-variant);
    box-shadow: var(--elev-1);
    transition: box-shadow .25s, transform .25s, background .3s;
    display: flex;
    flex-direction: column;
    gap: 16px;
    cursor: default;
  }
  .feature-card:hover {
    box-shadow: var(--elev-3);
    transform: translateY(-4px);
    background: var(--md-surface-2);
  }
  .feature-card.featured {
    grid-column: span 2;
    flex-direction: row;
    align-items: center;
    background: color-mix(in srgb, var(--md-primary-container) 60%, var(--md-surface-1));
    border-color: color-mix(in srgb, var(--md-primary) 30%, var(--md-outline-variant));
  }

  .feature-icon-wrap {
    width: 52px; height: 52px;
    border-radius: var(--shape-lg);
    background: var(--md-primary-container);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .feature-icon-wrap svg { width: 26px; height: 26px; color: var(--md-on-primary-container); }
  .feature-icon-wrap.secondary { background: var(--md-secondary-container); }
  .feature-icon-wrap.secondary svg { color: var(--md-on-secondary-container); }
  .feature-icon-wrap.tertiary { background: var(--md-tertiary-container); }
  .feature-icon-wrap.tertiary svg { color: var(--md-on-tertiary-container); }

  .feature-title {
    font-family: 'Google Sans', sans-serif;
    font-size: 17px; font-weight: 600;
    color: var(--md-on-surface);
    letter-spacing: -.2px;
    margin-bottom: 6px;
  }
  .feature-desc {
    font-size: 14px;
    color: var(--md-on-surface-variant);
    line-height: 1.6;
  }

  /* ── MOCKUP PHONE ── */
  .phone-mockup-section {
    background: color-mix(in srgb, var(--md-primary-container) 25%, var(--md-surface));
    border-radius: var(--shape-xl);
    border: 1px solid var(--md-outline-variant);
    padding: 60px 40px;
    display: flex;
    align-items: center;
    gap: 60px;
    overflow: hidden;
    position: relative;
  }

  .phone-mockup-section::before {
    content: '';
    position: absolute;
    top: -100px; right: -100px;
    width: 400px; height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, color-mix(in srgb, var(--md-primary) 20%, transparent), transparent 70%);
  }

  .phone-text { flex: 1; position: relative; z-index: 1; }

  .phone-text h3 {
    font-family: 'Google Sans Display', sans-serif;
    font-size: 36px; font-weight: 700;
    letter-spacing: -1px;
    margin-bottom: 16px;
    color: var(--md-on-surface);
  }

  .phone-text p {
    font-size: 15px;
    color: var(--md-on-surface-variant);
    line-height: 1.7;
    margin-bottom: 28px;
  }

  .phone-features-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 32px;
  }

  .phone-features-list li {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 500;
    color: var(--md-on-surface);
  }

  .check-dot {
    width: 20px; height: 20px;
    border-radius: 50%;
    background: var(--md-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .check-dot svg { width: 12px; height: 12px; color: var(--md-on-primary); }

  /* Phone SVG */
  .phone-device {
    flex-shrink: 0;
    position: relative;
    z-index: 1;
    animation: phoneFloat 4s ease-in-out infinite;
  }
  @keyframes phoneFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-12px); }
  }

  .phone-device svg { width: 240px; filter: drop-shadow(0 24px 40px rgba(0,0,0,.2)); }

  /* ── VERSIONS TABLE ── */
  .versions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 10px;
  }

  .version-chip {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 12px;
    background: var(--md-surface-1);
    border-radius: var(--shape-lg);
    border: 1px solid var(--md-outline-variant);
    box-shadow: var(--elev-1);
    transition: background .2s, box-shadow .2s, transform .2s;
    cursor: default;
    text-align: center;
  }
  .version-chip:hover { background: var(--md-surface-3); box-shadow: var(--elev-2); transform: scale(1.03); }

  .version-tag {
    font-family: 'Google Sans', sans-serif;
    font-size: 15px; font-weight: 600;
    color: var(--md-on-surface);
    margin-bottom: 4px;
  }
  .version-label {
    font-size: 11px;
    color: var(--md-on-surface-variant);
    text-transform: uppercase;
    letter-spacing: .5px;
  }

  .version-chip.latest {
    background: var(--md-primary-container);
    border-color: color-mix(in srgb, var(--md-primary) 40%, transparent);
  }
  .version-chip.latest .version-tag { color: var(--md-on-primary-container); }

  /* ── FAQ ── */
  .faq-list { display: flex; flex-direction: column; gap: 8px; }

  .faq-item {
    background: var(--md-surface-1);
    border-radius: var(--shape-xl);
    border: 1px solid var(--md-outline-variant);
    overflow: hidden;
    transition: box-shadow .2s;
  }
  .faq-item:hover { box-shadow: var(--elev-2); }

  .faq-trigger {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    background: transparent;
    border: none;
    cursor: pointer;
    text-align: left;
    gap: 12px;
    font-family: 'Roboto Flex', sans-serif;
  }

  .faq-q {
    font-size: 15px;
    font-weight: 500;
    color: var(--md-on-surface);
    letter-spacing: .1px;
    flex: 1;
  }

  .faq-icon {
    width: 32px; height: 32px;
    border-radius: 50%;
    background: var(--md-surface-variant);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    transition: background .2s, transform .3s;
  }
  .faq-icon svg { width: 18px; height: 18px; color: var(--md-on-surface-variant); }

  .faq-item.open .faq-icon { background: var(--md-primary-container); transform: rotate(45deg); }
  .faq-item.open .faq-icon svg { color: var(--md-on-primary-container); }

  .faq-body {
    max-height: 0;
    overflow: hidden;
    transition: max-height .4s ease, padding .3s;
  }
  .faq-item.open .faq-body { max-height: 300px; }

  .faq-a {
    padding: 0 24px 20px;
    font-size: 14px;
    color: var(--md-on-surface-variant);
    line-height: 1.7;
  }

  /* ── DOWNLOAD CTA ── */
  .download-section {
    text-align: center;
    background: linear-gradient(135deg,
      color-mix(in srgb, var(--md-primary-container) 70%, transparent) 0%,
      color-mix(in srgb, var(--md-tertiary-container) 50%, transparent) 100%);
    border-radius: 40px;
    padding: 72px 40px;
    position: relative;
    overflow: hidden;
    border: 1px solid var(--md-outline-variant);
  }

  .download-section::before {
    content: '';
    position: absolute;
    bottom: -60px; left: -60px;
    width: 280px; height: 280px;
    border-radius: 50%;
    background: color-mix(in srgb, var(--md-primary) 15%, transparent);
  }

  .download-section h2 {
    font-family: 'Google Sans Display', sans-serif;
    font-size: clamp(32px, 5vw, 52px);
    font-weight: 700;
    letter-spacing: -1.5px;
    margin-bottom: 16px;
    position: relative;
    color: var(--md-on-primary-container);
  }

  .download-section p {
    font-size: 16px;
    color: var(--md-on-surface-variant);
    margin-bottom: 40px;
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
  }

  .download-actions {
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
  }

  .download-badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 24px;
    background: var(--md-on-background);
    color: var(--md-background);
    border-radius: var(--shape-full);
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    transition: opacity .2s, transform .15s;
    letter-spacing: .1px;
  }
  .download-badge:hover { opacity: .85; transform: translateY(-2px); }
  .download-badge svg { width: 22px; height: 22px; }

  /* ── FOOTER ── */
  footer {
    background: var(--md-surface-1);
    border-top: 1px solid var(--md-outline-variant);
    padding: 48px 24px;
  }

  .footer-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
  }

  .footer-logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .footer-links {
    display: flex;
    gap: 4px;
    list-style: none;
  }
  .footer-links a {
    padding: 8px 14px;
    border-radius: var(--shape-full);
    font-size: 13px;
    font-weight: 500;
    color: var(--md-on-surface-variant);
    text-decoration: none;
    transition: background .2s, color .2s;
  }
  .footer-links a:hover {
    background: color-mix(in srgb, var(--md-on-surface) 8%, transparent);
    color: var(--md-on-surface);
  }

  .footer-copy {
    font-size: 12px;
    color: var(--md-on-surface-variant);
  }

  /* ── FAB ── */
  .fab {
    position: fixed;
    bottom: 28px; right: 28px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 16px 24px;
    background: var(--md-primary-container);
    color: var(--md-on-primary-container);
    border: none;
    border-radius: var(--shape-xl);
    font-family: 'Roboto Flex', sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: var(--elev-3);
    z-index: 50;
    text-decoration: none;
    letter-spacing: .1px;
    transition: box-shadow .2s, transform .15s, filter .2s;
  }
  .fab:hover { box-shadow: var(--elev-5); filter: brightness(1.05); }
  .fab:active { transform: scale(.96); }
  .fab svg { width: 20px; height: 20px; }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .features-grid { grid-template-columns: 1fr 1fr; }
    .feature-card.featured { grid-column: span 2; flex-direction: column; }
    .nav-links { display: none; }
    .phone-mockup-section { flex-direction: column; text-align: center; }
    .phone-features-list { align-items: center; }
  }

  @media (max-width: 600px) {
    .features-grid { grid-template-columns: 1fr; }
    .feature-card.featured { grid-column: span 1; }
    .footer-inner { flex-direction: column; text-align: center; }
    .footer-links { flex-wrap: wrap; justify-content: center; }
  }

  /* ── SCROLL REVEAL ── */
  .reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity .6s ease, transform .6s ease;
  }
  .reveal.visible { opacity: 1; transform: translateY(0); }

  /* stagger */
  .reveal-stagger > * {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity .5s ease, transform .5s ease;
  }
  .reveal-stagger.visible > *:nth-child(1) { opacity:1; transform:none; transition-delay:.05s; }
  .reveal-stagger.visible > *:nth-child(2) { opacity:1; transform:none; transition-delay:.12s; }
  .reveal-stagger.visible > *:nth-child(3) { opacity:1; transform:none; transition-delay:.19s; }
  .reveal-stagger.visible > *:nth-child(4) { opacity:1; transform:none; transition-delay:.26s; }
  .reveal-stagger.visible > *:nth-child(5) { opacity:1; transform:none; transition-delay:.33s; }
  .reveal-stagger.visible > *:nth-child(6) { opacity:1; transform:none; transition-delay:.40s; }
  .reveal-stagger.visible > *:nth-child(7) { opacity:1; transform:none; transition-delay:.47s; }
  .reveal-stagger.visible > *:nth-child(8) { opacity:1; transform:none; transition-delay:.54s; }
  .reveal-stagger.visible > *:nth-child(n+9) { opacity:1; transform:none; transition-delay:.60s; }
</style>
</head>
<body>

<nav class="nav-bar" id="navbar">
  <a class="nav-logo" href="#">
    <div class="nav-logo-icon">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" fill="white" opacity=".9"/>
        <path d="M9 9h6v6H9z" fill="white" opacity=".5"/>
      </svg>
    </div>
    <span class="nav-logo-text">Hiroku</span>
  </a>

  <ul class="nav-links">
    <li><a href="#features">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
      Возможности
    </a></li>
    <li><a href="#versions">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
      Версии
    </a></li>
    <li><a href="#faq">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
      FAQ
    </a></li>
  </ul>

  <div class="nav-actions">
    <button class="btn-icon" id="themeToggle" title="Переключить тему">
      <svg id="themeIcon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
      </svg>
    </button>
    <a href="#download" class="btn-filled" style="padding:8px 20px;font-size:13px;">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z"/></svg>
      Скачать
    </a>
  </div>
</nav>

<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-grid"></div>

  <div class="pixel-float" style="width:14px;height:14px;left:15%;background:var(--md-primary-container);top:60%;animation-delay:0s;animation-duration:7s;"></div>
  <div class="pixel-float" style="width:10px;height:10px;left:80%;background:var(--md-tertiary-container);top:65%;animation-delay:1.2s;animation-duration:6s;"></div>
  <div class="pixel-float" style="width:18px;height:18px;left:70%;background:var(--md-secondary-container);top:70%;animation-delay:2s;animation-duration:8s;"></div>
  <div class="pixel-float" style="width:8px;height:8px;left:25%;background:var(--md-primary);top:55%;animation-delay:0.5s;animation-duration:5s;opacity:.4;"></div>
  <div class="pixel-float" style="width:12px;height:12px;left:55%;background:var(--md-tertiary);top:75%;animation-delay:3s;animation-duration:9s;opacity:.35;"></div>

  <div class="hero-content">
    <div class="hero-badge">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
      Для Android · Бесплатно · Открытый исходный код
    </div>

    <div class="hero-icon">
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="48" height="48" rx="6" fill="var(--md-primary)" opacity=".9"/>
        <rect x="16" y="18" width="10" height="10" rx="2" fill="var(--md-on-primary-container)" opacity=".9"/>
        <rect x="38" y="18" width="10" height="10" rx="2" fill="var(--md-on-primary-container)" opacity=".9"/>
        <rect x="24" y="32" width="4" height="6" rx="1" fill="var(--md-on-primary-container)" opacity=".85"/>
        <rect x="36" y="32" width="4" height="6" rx="1" fill="var(--md-on-primary-container)" opacity=".85"/>
        <rect x="20" y="38" width="8" height="4" rx="1" fill="var(--md-on-primary-container)" opacity=".85"/>
        <rect x="36" y="38" width="8" height="4" rx="1" fill="var(--md-on-primary-container)" opacity=".85"/>
        <rect x="28" y="42" width="8" height="6" rx="1" fill="var(--md-on-primary-container)" opacity=".85"/>
      </svg>
    </div>

    <h1 class="hero-title">Hiroku<br><span>Launcher</span></h1>

    <p class="hero-sub">Полноценный Java Minecraft прямо на вашем Android-смартфоне. Все версии, модификации и полная свобода игры.</p>

    <div class="hero-actions">
      <a href="#download" class="btn-filled">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z"/></svg>
        Скачать APK
      </a>
      <a href="#features" class="btn-tonal">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
        Узнать больше
      </a>
    </div>

    <div class="hero-stats">
      <div class="stat-chip">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
        50 000+ игроков
      </div>
      <div class="stat-chip">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
        Android 8.0+
      </div>
      <div class="stat-chip">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
        Открытый код
      </div>
      <div class="stat-chip">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 11.5v-3h-4v3H9V9h2v2.5h4V9h2v6.5h-2z"/></svg>
        Forge & Fabric
      </div>
    </div>
  </div>
</section>

<section id="features">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-eyebrow">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        Возможности
      </div>
      <h2 class="section-title">Всё что нужно для<br>полноценной игры</h2>
      <p class="section-desc">Hiroku Launcher предоставляет мощные инструменты для запуска Minecraft Java Edition на мобильных устройствах</p>
    </div>

    <div class="features-grid reveal-stagger">

      <div class="feature-card featured">
        <div class="feature-icon-wrap" style="width:64px;height:64px;border-radius:20px;">
          <svg viewBox="0 0 24 24" fill="currentColor" style="width:34px;height:34px;"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/></svg>
        </div>
        <div>
          <div class="feature-title">Управление аккаунтами</div>
          <div class="feature-desc">Поддержка Microsoft аккаунтов и offline режима. Быстрое переключение между профилями. Безопасное хранение токенов через Android Keystore — ваши данные всегда защищены.</div>
        </div>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrap secondary">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/></svg>
        </div>
        <div>
          <div class="feature-title">Моды & Плагины</div>
          <div class="feature-desc">Полная поддержка Forge, Fabric и NeoForge. Устанавливайте любимые моды прямо из лаунчера.</div>
        </div>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrap tertiary">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z"/></svg>
        </div>
        <div>
          <div class="feature-title">Все версии MC</div>
          <div class="feature-desc">От Beta 1.7.3 до последней Snapshot. Любая версия Java Edition доступна в пару касаний.</div>
        </div>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrap">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>
        </div>
        <div>
          <div class="feature-title">Java Runtime</div>
          <div class="feature-desc">Встроенный JRE 17/21. Никаких дополнительных установок — запускайте игру сразу после скачивания.</div>
        </div>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrap secondary">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/></svg>
        </div>
        <div>
          <div class="feature-title">Тёмная тема & Material You</div>
          <div class="feature-desc">Адаптивный интерфейс следует цветовой палитре вашего Android-устройства.</div>
        </div>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrap tertiary">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.81 6-4.72 7.28L13 17v5h5l-1.22-1.22C19.91 19.07 22 15.76 22 12c0-5.18-3.95-9.45-9-9.95zM11 2.05C5.95 2.55 2 6.82 2 12c0 3.76 2.09 7.07 5.22 8.78L6 22h5v-5l-2.28 2.28C7.81 18 6 15.21 6 12c0-4.08 3.05-7.44 7-7.93V2.05z"/></svg>
        </div>
        <div>
          <div class="feature-title">Оптимизация</div>
          <div class="feature-desc">Настройки памяти JVM, графические профили и управление ресурс-паками для максимальной производительности.</div>
        </div>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrap">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"/></svg>
        </div>
        <div>
          <div class="feature-title">Инсталляторы</div>
          <div class="feature-desc">Автоматическая установка Forge, Fabric, OptiFine одним нажатием без ручной настройки.</div>
        </div>
      </div>

    </div>
  </div>
</section>

<section style="padding: 40px 24px 80px;">
  <div class="container">
    <div class="phone-mockup-section reveal">
      <div class="phone-text">
        <div class="section-eyebrow" style="display:inline-flex;margin-bottom:20px;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>
          Android First
        </div>
        <h3>Настоящий Java<br>Minecraft на телефоне</h3>
        <p>Hiroku использует PojavLauncher-совместимый движок с поддержкой OpenGL ES → OpenGL трансляции через GL4ES для стабильного рендеринга даже на бюджетных устройствах.</p>
        <ul class="phone-features-list">
          <li>
            <div class="check-dot"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
            Поддержка тач-управления и геймпадов
          </li>
          <li>
            <div class="check-dot"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
            Онлайн-серверы и LAN игра
          </li>
          <li>
            <div class="check-dot"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
            Настраиваемый HUD и кнопки
          </li>
          <li>
            <div class="check-dot"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
            Разрешение до 4K на поддерживаемых SoC
          </li>
        </ul>
        <a href="#download" class="btn-filled">Попробовать бесплатно</a>
      </div>

      <div class="phone-device">
        <svg viewBox="0 0 240 480" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="5" width="220" height="470" rx="36" fill="var(--md-on-background)" opacity=".07"/>
          <rect x="8" y="3" width="220" height="470" rx="36" fill="var(--md-surface-3)"/>
          <rect x="8" y="3" width="220" height="470" rx="36" stroke="var(--md-outline-variant)" stroke-width="1.5"/>

          <rect x="18" y="13" width="200" height="444" rx="28" fill="var(--md-background)"/>

          <rect x="90" y="20" width="56" height="16" rx="8" fill="var(--md-on-background)" opacity=".8"/>

          <text x="28" y="47" font-family="sans-serif" font-size="9" fill="var(--md-on-surface-variant)" opacity=".7">9:41</text>
          <text x="175" y="47" font-family="sans-serif" font-size="8" fill="var(--md-on-surface-variant)" opacity=".7">●●●</text>

          <rect x="18" y="55" width="200" height="44" fill="var(--md-surface-1)"/>
          <rect x="30" y="66" width="24" height="24" rx="8" fill="var(--md-primary)" opacity=".9"/>
          <rect x="35" y="71" width="6" height="6" rx="1" fill="white" opacity=".9"/>
          <rect x="43" y="71" width="6" height="6" rx="1" fill="white" opacity=".9"/>
          <rect x="35" y="79" width="6" height="6" rx="1" fill="white" opacity=".9"/>
          <rect x="43" y="79" width="6" height="6" rx="1" fill="white" opacity=".9"/>

          <text x="62" y="81" font-family="sans-serif" font-size="11" font-weight="600" fill="var(--md-on-surface)">Hiroku Launcher</text>

          <rect x="22" y="106" width="190" height="32" rx="16" fill="var(--md-surface-variant)" opacity=".5"/>
          <text x="42" y="127" font-family="sans-serif" font-size="10" fill="var(--md-on-surface-variant)" opacity=".6">Поиск версий...</text>

          <rect x="22" y="148" width="190" height="58" rx="16" fill="var(--md-primary-container)" opacity=".8"/>
          <rect x="32" y="158" width="36" height="36" rx="10" fill="var(--md-primary)" opacity=".9"/>
          <text x="38" y="178" font-family="sans-serif" font-size="10" font-weight="700" fill="white">1.21</text>
          <text x="78" y="169" font-family="sans-serif" font-size="11" font-weight="600" fill="var(--md-on-primary-container)">Minecraft 1.21.4</text>
          <text x="78" y="184" font-family="sans-serif" font-size="9" fill="var(--md-on-primary-container)" opacity=".7">Java Edition · Forge ready</text>
          <rect x="168" y="156" width="36" height="18" rx="9" fill="var(--md-primary)"/>
          <text x="175" y="169" font-family="sans-serif" font-size="8" fill="white">Latest</text>

          <rect x="22" y="216" width="190" height="52" rx="16" fill="var(--md-surface-2)"/>
          <rect x="32" y="226" width="30" height="30" rx="8" fill="var(--md-secondary-container)"/>
          <text x="36" y="245" font-family="sans-serif" font-size="9" font-weight="700" fill="var(--md-on-secondary-container)">1.20</text>
          <text x="72" y="239" font-family="sans-serif" font-size="10" font-weight="600" fill="var(--md-on-surface)">Minecraft 1.20.6</text>
          <text x="72" y="253" font-family="sans-serif" font-size="9" fill="var(--md-on-surface-variant)" opacity=".8">Fabric 0.15.11</text>

          <rect x="22" y="278" width="190" height="52" rx="16" fill="var(--md-surface-2)"/>
          <rect x="32" y="288" width="30" height="30" rx="8" fill="var(--md-tertiary-container)" opacity=".8"/>
          <text x="36" y="307" font-family="sans-serif" font-size="9" font-weight="700" fill="var(--md-on-tertiary-container)">1.18</text>
          <text x="72" y="301" font-family="sans-serif" font-size="10" font-weight="600" fill="var(--md-on-surface)">Minecraft 1.18.2</text>
          <text x="72" y="315" font-family="sans-serif" font-size="9" fill="var(--md-on-surface-variant)" opacity=".8">Forge 40.2.0</text>

          <rect x="18" y="423" width="200" height="36" rx="18" fill="var(--md-surface-variant)" opacity=".5"/>
          <circle cx="60" cy="441" r="3" fill="var(--md-primary)"/>
          <circle cx="110" cy="441" r="3" fill="var(--md-on-surface-variant)" opacity=".5"/>
          <circle cx="160" cy="441" r="3" fill="var(--md-on-surface-variant)" opacity=".5"/>

          <rect x="170" y="387" width="40" height="30" rx="15" fill="var(--md-primary)" opacity=".9"/>
          <text x="182" y="406" font-family="sans-serif" font-size="16" fill="white">+</text>

          <rect x="228" y="120" width="4" height="40" rx="2" fill="var(--md-outline-variant)"/>
          <rect x="228" y="170" width="4" height="30" rx="2" fill="var(--md-outline-variant)"/>
          <rect x="4" y="140" width="4" height="35" rx="2" fill="var(--md-outline-variant)"/>
        </svg>
      </div>
    </div>
  </div>
</section>

<section id="versions" style="background: var(--md-surface-1); border-top: 1px solid var(--md-outline-variant); border-bottom: 1px solid var(--md-outline-variant);">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-eyebrow">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
        Поддерживаемые версии
      </div>
      <h2 class="section-title">От классики до<br>новейших релизов</h2>
      <p class="section-desc">Запускайте любую версию Java Minecraft — от легендарной Beta до свежих Snapshots</p>
    </div>

    <div class="versions-grid reveal-stagger">
      <div class="version-chip latest">
        <div class="version-tag">1.21.4</div>
        <div class="version-label">Последняя</div>
      </div>
      <div class="version-chip">
        <div class="version-tag">1.21.x</div>
        <div class="version-label">Tricky Trials</div>
      </div>
      <div class="version-chip">
        <div class="version-tag">1.20.x</div>
        <div class="version-label">Trails</div>
      </div>
      <div class="version-chip">
        <div class="version-tag">1.19.x</div>
        <div class="version-label">Wild Update</div>
      </div>
      <div class="version-chip">
        <div class="version-tag">1.18.x</div>
        <div class="version-label">Caves & Cliffs</div>
      </div>
      <div class="version-chip">
        <div class="version-tag">1.17.x</div>
        <div class="version-label">Caves</div>
      </div>
      <div class="version-chip">
        <div class="version-tag">1.16.x</div>
        <div class="version-label">Nether Update</div>
      </div>
      <div class="version-chip">
        <div class="version-tag">1.12.2</div>
        <div class="version-label">World of Color</div>
      </div>
      <div class="version-chip">
        <div class="version-tag">1.8.9</div>
        <div class="version-label">PvP Meta</div>
      </div>
      <div class="version-chip">
        <div class="version-tag">1.7.10</div>
        <div class="version-label">Classic Mods</div>
      </div>
      <div class="version-chip">
        <div class="version-tag">Beta 1.7</div>
        <div class="version-label">Ностальгия</div>
      </div>
      <div class="version-chip">
        <div class="version-tag">Snapshot</div>
        <div class="version-label">Dev builds</div>
      </div>
    </div>

    <div style="text-align:center; margin-top: 40px;" class="reveal">
      <p style="font-size:14px; color: var(--md-on-surface-variant); margin-bottom: 16px;">И многие другие версии. Полный список доступен в приложении.</p>
    </div>
  </div>
</section>

<section id="faq">
  <div class="container" style="max-width:740px;">
    <div class="section-header reveal">
      <div class="section-eyebrow">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
        Часто задаваемые вопросы
      </div>
      <h2 class="section-title">Есть вопросы?</h2>
      <p class="section-desc">Ответы на самые популярные вопросы об Hiroku Launcher</p>
    </div>

    <div class="faq-list reveal">
      <div class="faq-item">
        <button class="faq-trigger" onclick="toggleFaq(this)">
          <span class="faq-q">Hiroku Launcher бесплатный?</span>
          <div class="faq-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          </div>
        </button>
        <div class="faq-body">
          <p class="faq-a">Да, Hiroku Launcher полностью бесплатен и является open-source проектом. Базовые функции доступны без ограничений. Для игры на серверах с авторизацией потребуется лицензионный аккаунт Minecraft Java Edition.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-trigger" onclick="toggleFaq(this)">
          <span class="faq-q">Нужен ли лицензионный аккаунт Minecraft?</span>
          <div class="faq-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          </div>
        </button>
        <div class="faq-body">
          <p class="faq-a">Для игры в одиночном режиме лицензия не требуется — можно использовать offline режим. Для онлайн-серверов с проверкой аккаунтов (authservers) нужен лицензионный Microsoft/Mojang аккаунт.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-trigger" onclick="toggleFaq(this)">
          <span class="faq-q">Какие минимальные требования к устройству?</span>
          <div class="faq-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          </div>
        </button>
        <div class="faq-body">
          <p class="faq-a">Android 8.0 (Oreo) или выше, минимум 3 ГБ ОЗУ (рекомендуется 4+ ГБ), процессор ARMv8-A (64-bit). Для комфортной игры на версиях 1.17+ рекомендуется флагманский SoC (Snapdragon 8xx / Dimensity 9xxx / Exynos 2xxx).</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-trigger" onclick="toggleFaq(this)">
          <span class="faq-q">Поддерживаются ли шейдеры и ресурс-паки?</span>
          <div class="faq-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          </div>
        </button>
        <div class="faq-body">
          <p class="faq-a">Ресурс-паки поддерживаются в полной мере. Шейдеры требуют OptiFine или Iris Shaders + соответствующего GPU. На мобильных устройствах доступны облегчённые шейдеры через GL4ES, однако производительность зависит от железа.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-trigger" onclick="toggleFaq(this)">
          <span class="faq-q">Можно ли играть на серверах?</span>
          <div class="faq-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          </div>
        </button>
        <div class="faq-body">
          <p class="faq-a">Да! Hiroku поддерживает подключение к любым Java-серверам (Vanilla, Spigot, Paper, Forge, Fabric). Также есть поддержка LAN-игры в локальной сети. Нужен стандартный Minecraft-порт (25565) и авторизация для premium серверов.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-trigger" onclick="toggleFaq(this)">
          <span class="faq-q">Как установить Forge или Fabric?</span>
          <div class="faq-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          </div>
        </button>
        <div class="faq-body">
          <p class="faq-a">В лаунчере есть встроенные инсталляторы — просто выберите версию Minecraft, нажмите «Установить загрузчик» и выберите Forge/Fabric/NeoForge. Всё происходит автоматически без ручной настройки файлов.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="download" style="padding: 80px 24px;">
  <div class="container">
    <div class="download-section reveal">
      <h2>Готов играть?<br>Скачай бесплатно</h2>
      <p>APK подписан, безопасен и не требует Google Play. Установка за 30 секунд.</p>
      <div class="download-actions">
        <a href="#" class="download-badge">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.42c1.42.07 2.38.77 3.2.8 1.21-.24 2.38-.98 3.67-.88 1.57.12 2.75.77 3.54 1.94-3.24 1.94-2.76 5.86.24 7.38-.64 1.69-1.48 3.35-2.65 3.62zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
          App Store (скоро)
        </a>
        <a href="#" class="download-badge" style="background:var(--md-primary); color:var(--md-on-primary);">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.341l-.491-.492-1.453 1.453.491.491c.205.205.205.538 0 .743-.205.205-.538.205-.743 0l-5.956-5.956c-.205-.205-.205-.538 0-.743.205-.205.538-.205.743 0l.491.491 1.453-1.453-.491-.491c-.942-.942-2.476-.942-3.418 0L3.22 14.72C2.698 15.241 2.4 15.94 2.4 16.68s.298 1.439.82 1.96l5.14 5.14c.521.522 1.22.82 1.96.82s1.439-.298 1.96-.82l5.243-5.243c.944-.942.944-2.476 0-3.196zm3.237-9.121l-5.14-5.14c-.521-.522-1.22-.82-1.96-.82s-1.439.298-1.96.82L6.457 6.323c-.942.943-.942 2.477 0 3.419l.491.491 1.453-1.453-.491-.491c-.205-.205-.205-.538 0-.743.205-.205.538-.205.743 0l5.956 5.956c.205.205.205.538 0 .743-.205.205-.538.205-.743 0l-.491-.491-1.453 1.453.491.491c.942.942 2.476.942 3.418 0l5.243-5.243c.521-.521.82-1.22.82-1.96s-.299-1.438-.82-1.959l.002-.001z"/></svg>
          Скачать APK (Android)
        </a>
        <a href="#" class="btn-outlined" style="padding:14px 24px;">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          GitHub
        </a>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="footer-inner">
    <div class="footer-logo">
      <div class="nav-logo-icon" style="width:32px;height:32px;border-radius:10px;">
        <svg viewBox="0 0 24 24" fill="none"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" fill="white" opacity=".9"/><path d="M9 9h6v6H9z" fill="white" opacity=".5"/></svg>
      </div>
      <span style="font-family:'Google Sans',sans-serif;font-size:15px;font-weight:600;color:var(--md-on-surface);">Hiroku Launcher</span>
    </div>

    <ul class="footer-links">
      <li><a href="#">GitHub</a></li>
      <li><a href="#">Telegram</a></li>
      <li><a href="#">Discord</a></li>
      <li><a href="#">Wiki</a></li>
      <li><a href="#">Политика</a></li>
    </ul>

    <div class="footer-copy">© 2025 Hiroku Team · GPL-3.0</div>
  </div>
</footer>

<a href="#download" class="fab">
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z"/></svg>
  Скачать
</a>

<script>
  // Theme toggle
  const toggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  let dark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  function applyTheme(d) {
    document.documentElement.setAttribute('data-theme', d ? 'dark' : '');
    themeIcon.innerHTML = d
      ? '<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>'
      : '<path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>';
  }

  applyTheme(dark);
  toggle.addEventListener('click', () => { dark = !dark; applyTheme(dark); });

  // FAQ
  function toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => obs.observe(el));

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.style.borderBottomColor = window.scrollY > 20
      ? 'var(--md-outline-variant)'
      : 'transparent';
  });
</script>
</body>
</html>
