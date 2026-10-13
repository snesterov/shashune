// SHASHUNE SMETA ENGINE v1.0
// Auto-injected standalone web application for Tilda
(function() {
  'use strict';

  // 1. Inject Fonts
  if (!document.getElementById('sh-smeta-fonts')) {
    var link = document.createElement('link');
    link.id = 'sh-smeta-fonts';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600;700&display=swap';
    document.head.appendChild(link);
  }

  // 2. Inject Scoped CSS
  if (!document.getElementById('sh-smeta-styles')) {
    var style = document.createElement('style');
    style.id = 'sh-smeta-styles';
    style.textContent = `
      /* Neutralize other Tilda blocks on this page except T123 */
      #allrecords > .r:not([data-record-type="123"]):not(.sh-preserve) {
        display: none !important;
      }
      
      :root {
      --bg: #090a0f;
      --card-bg: rgba(18, 22, 34, 0.75);
      --card-border: rgba(255, 255, 255, 0.08);
      --accent-cyan: #00f2fe;
      --accent-blue: #4facfe;
      --accent-orange: #ff6b35;
      --accent-green: #00e676;
      --text: #f0f3fa;
      --text-muted: #8e9bb0;
      --glow-blue: rgba(0, 242, 254, 0.15);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: var(--bg);
      color: var(--text);
      font-family: 'Inter', -apple-system, sans-serif;
      min-height: 100vh;
      overflow-x: hidden;
      line-height: 1.5;
    }
    .grid-bg {
      position: fixed;
      inset: 0;
      background-image: 
        radial-gradient(circle at 50% 0%, rgba(0, 242, 254, 0.12) 0%, transparent 50%),
        radial-gradient(circle at 90% 80%, rgba(255, 107, 53, 0.08) 0%, transparent 40%),
        linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
      background-size: 100% 100%, 100% 100%, 48px 48px, 48px 48px;
      pointer-events: none;
      z-index: 0;
    }
    .wrapper {
      position: relative;
      z-index: 1;
      max-width: 1240px;
      margin: 0 auto;
      padding: 32px 20px 80px;
    }
    /* Header */
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 24px;
      border-bottom: 1px solid var(--card-border);
      margin-bottom: 40px;
    }
    .logo-box {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .logo-badge {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue));
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      font-size: 20px;
      color: #000;
      box-shadow: 0 0 24px var(--glow-blue);
    }
    .logo-text h1 {
      font-size: 18px;
      font-weight: 700;
      letter-spacing: -0.02em;
    }
    .logo-text span {
      font-size: 12px;
      color: var(--accent-cyan);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      font-weight: 600;
    }
    .header-contacts {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .btn-contact {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border-radius: 10px;
      font-size: 13px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.2s ease;
      backdrop-filter: blur(8px);
    }
    .btn-tg {
      background: rgba(0, 136, 204, 0.15);
      color: #38bdf8;
      border: 1px solid rgba(0, 136, 204, 0.3);
    }
    .btn-tg:hover {
      background: #0088cc;
      color: #fff;
      box-shadow: 0 0 16px rgba(0, 136, 204, 0.4);
    }
    .btn-max {
      background: rgba(255, 107, 53, 0.15);
      color: #ff8c5a;
      border: 1px solid rgba(255, 107, 53, 0.3);
    }
    .btn-max:hover {
      background: #ff6b35;
      color: #fff;
      box-shadow: 0 0 16px rgba(255, 107, 53, 0.4);
    }
    .btn-wa {
      background: rgba(37, 211, 102, 0.15);
      color: #4ade80;
      border: 1px solid rgba(37, 211, 102, 0.3);
    }
    .btn-wa:hover {
      background: #25d366;
      color: #fff;
    }

    /* Hero */
    .hero {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 40px;
      align-items: center;
      margin-bottom: 56px;
    }
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      border-radius: 20px;
      background: rgba(0, 242, 254, 0.08);
      border: 1px solid rgba(0, 242, 254, 0.25);
      font-size: 12px;
      color: var(--accent-cyan);
      font-weight: 600;
      margin-bottom: 18px;
    }
    .hero-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 44px;
      line-height: 1.15;
      font-weight: 700;
      margin-bottom: 18px;
      letter-spacing: -0.03em;
    }
    .hero-title span {
      background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .hero-desc {
      font-size: 16px;
      color: var(--text-muted);
      line-height: 1.6;
      margin-bottom: 28px;
      max-width: 560px;
    }
    .hero-features {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
    }
    .feature-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 12px 14px;
      border-radius: 12px;
      background: var(--card-bg);
      border: 1px solid var(--card-border);
    }
    .feature-icon {
      font-size: 20px;
      line-height: 1;
    }
    .feature-item div strong {
      display: block;
      font-size: 14px;
      margin-bottom: 2px;
    }
    .feature-item div span {
      font-size: 12px;
      color: var(--text-muted);
    }

    /* Live Card */
    .hero-card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 20px;
      padding: 24px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(16px);
      position: relative;
    }
    .hero-card::before {
      content: '';
      position: absolute;
      inset: -1px;
      border-radius: 21px;
      padding: 1px;
      background: linear-gradient(135deg, rgba(0, 242, 254, 0.4), transparent 60%);
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
    }
    .engineer-profile {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 20px;
      padding-bottom: 16px;
      border-bottom: 1px solid var(--card-border);
    }
    .engineer-avatar {
      width: 56px;
      height: 56px;
      border-radius: 16px;
      background: linear-gradient(135deg, #2a344a, #161c28);
      border: 2px solid var(--accent-cyan);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }
    .engineer-meta h4 {
      font-size: 16px;
      font-weight: 700;
    }
    .engineer-meta p {
      font-size: 12px;
      color: var(--text-muted);
    }
    .status-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
      color: var(--accent-green);
      font-weight: 600;
      margin-top: 4px;
    }
    .status-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--accent-green);
      box-shadow: 0 0 8px var(--accent-green);
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }
    .card-stat-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      margin-bottom: 20px;
    }
    .stat-pill {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--card-border);
      border-radius: 12px;
      padding: 10px 8px;
      text-align: center;
    }
    .stat-pill .num {
      display: block;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 18px;
      font-weight: 700;
      color: var(--accent-cyan);
    }
    .stat-pill .label {
      font-size: 10px;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    /* Tab Section */
    .interactive-section {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 24px;
      padding: 32px;
      backdrop-filter: blur(16px);
      box-shadow: 0 30px 60px rgba(0,0,0,0.3);
      margin-bottom: 56px;
    }
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 28px;
      flex-wrap: wrap;
      gap: 16px;
    }
    .section-title h2 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 26px;
      font-weight: 700;
      letter-spacing: -0.02em;
      margin-bottom: 6px;
    }
    .section-title p {
      font-size: 14px;
      color: var(--text-muted);
    }
    .nav-tabs {
      display: flex;
      gap: 8px;
      background: rgba(255, 255, 255, 0.04);
      padding: 4px;
      border-radius: 14px;
      border: 1px solid var(--card-border);
    }
    .nav-tab {
      padding: 8px 18px;
      border-radius: 10px;
      border: none;
      background: transparent;
      color: var(--text-muted);
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .nav-tab.active {
      background: var(--accent-cyan);
      color: #000;
      box-shadow: 0 4px 14px rgba(0, 242, 254, 0.3);
    }

    /* Tab Content 1: Calculator */
    .tab-content { display: none; }
    .tab-content.active { display: block; }
    .calc-grid {
      display: grid;
      grid-template-columns: 1.3fr 0.9fr;
      gap: 32px;
    }
    .calc-controls {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .control-group label {
      display: block;
      font-size: 13px;
      font-weight: 600;
      margin-bottom: 8px;
      color: #cbd5e1;
    }
    .option-pills {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
    }
    .option-pill {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--card-border);
      border-radius: 10px;
      padding: 10px 8px;
      text-align: center;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      user-select: none;
    }
    .option-pill:hover {
      border-color: rgba(0, 242, 254, 0.4);
    }
    .option-pill.active {
      background: rgba(0, 242, 254, 0.12);
      border-color: var(--accent-cyan);
      color: var(--accent-cyan);
    }
    .range-box {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid var(--card-border);
      border-radius: 12px;
      padding: 14px;
    }
    .range-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      font-size: 13px;
    }
    .range-header span:last-child {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      color: var(--accent-cyan);
      font-size: 15px;
    }
    input[type="range"] {
      width: 100%;
      accent-color: var(--accent-cyan);
      cursor: pointer;
    }
    .checkbox-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
    .checkbox-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 12px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--card-border);
      border-radius: 10px;
      cursor: pointer;
      font-size: 12px;
      font-weight: 500;
      transition: all 0.2s;
    }
    .checkbox-item input {
      accent-color: var(--accent-cyan);
      width: 16px;
      height: 16px;
    }

    /* Calculator Result Box */
    .calc-result-box {
      background: linear-gradient(145deg, rgba(20, 28, 48, 0.9), rgba(12, 16, 28, 0.95));
      border: 1px solid rgba(0, 242, 254, 0.25);
      border-radius: 20px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 0 10px 30px rgba(0, 242, 254, 0.08);
    }
    .result-header {
      font-size: 12px;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-bottom: 8px;
    }
    .result-price {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 38px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 4px;
    }
    .result-price span {
      font-size: 18px;
      color: var(--accent-cyan);
    }
    .result-timeline {
      font-size: 12px;
      color: var(--accent-green);
      font-weight: 600;
      margin-bottom: 20px;
    }
    .result-details {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding-top: 16px;
      border-top: 1px solid var(--card-border);
      margin-bottom: 24px;
    }
    .detail-row {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: var(--text-muted);
    }
    .detail-row span:last-child {
      color: var(--text);
      font-weight: 600;
    }
    .btn-order-main {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 14px 20px;
      border-radius: 12px;
      background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue));
      color: #000;
      font-size: 14px;
      font-weight: 700;
      text-decoration: none;
      cursor: pointer;
      border: none;
      transition: all 0.2s ease;
      box-shadow: 0 4px 20px rgba(0, 242, 254, 0.3);
    }
    .btn-order-main:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 28px rgba(0, 242, 254, 0.45);
    }

    /* Tab 2: KATZ Tool Demo */
    .tool-box {
      background: rgba(0, 0, 0, 0.25);
      border: 1px solid var(--card-border);
      border-radius: 16px;
      padding: 24px;
    }
    .tool-input-row {
      display: flex;
      gap: 12px;
      margin-bottom: 20px;
    }
    .tool-input {
      flex: 1;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--card-border);
      border-radius: 10px;
      padding: 12px 16px;
      color: #fff;
      font-size: 14px;
    }
    .tool-input:focus {
      outline: none;
      border-color: var(--accent-cyan);
    }
    .btn-tool {
      background: var(--accent-cyan);
      color: #000;
      font-weight: 700;
      border: none;
      border-radius: 10px;
      padding: 0 24px;
      cursor: pointer;
      font-size: 13px;
    }
    .katz-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 12px;
      margin-top: 10px;
    }
    .katz-table th {
      text-align: left;
      padding: 10px 12px;
      background: rgba(255, 255, 255, 0.04);
      color: var(--text-muted);
      border-bottom: 1px solid var(--card-border);
    }
    .katz-table td {
      padding: 12px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.04);
      color: #cbd5e1;
    }
    .badge-src {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 6px;
      font-size: 10px;
      font-weight: 600;
      background: rgba(0, 242, 254, 0.1);
      color: var(--accent-cyan);
    }

    /* Service Cards Grid */
    .services-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-bottom: 56px;
    }
    .service-card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 18px;
      padding: 24px;
      transition: all 0.3s ease;
      position: relative;
    }
    .service-card:hover {
      border-color: rgba(0, 242, 254, 0.3);
      transform: translateY(-4px);
    }
    .service-card h3 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .service-card p {
      font-size: 13px;
      color: var(--text-muted);
      line-height: 1.5;
      margin-bottom: 16px;
    }
    .service-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .tag {
      font-size: 11px;
      padding: 4px 10px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid var(--card-border);
      color: #94a3b8;
    }

    /* Footer CTA */
    .footer-cta {
      background: linear-gradient(135deg, rgba(0, 242, 254, 0.08), rgba(255, 107, 53, 0.06));
      border: 1px solid rgba(0, 242, 254, 0.2);
      border-radius: 24px;
      padding: 40px;
      text-align: center;
    }
    .footer-cta h2 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 32px;
      margin-bottom: 12px;
    }
    .footer-cta p {
      color: var(--text-muted);
      font-size: 15px;
      max-width: 600px;
      margin: 0 auto 24px;
    }
    .cta-buttons {
      display: flex;
      justify-content: center;
      gap: 16px;
      flex-wrap: wrap;
    }

    @media (max-width: 900px) {
      .hero { grid-template-columns: 1fr; }
      .calc-grid { grid-template-columns: 1fr; }
      .services-grid { grid-template-columns: 1fr; }
      .hero-title { font-size: 32px; }
      .option-pills { grid-template-columns: repeat(2, 1fr); }
    }
    `;
    document.head.appendChild(style);
  }

  // 3. Mount App DOM
  function renderApp() {
    var existing = document.getElementById('shashune-smeta-app');
    if (existing) return;

    var container = document.createElement('div');
    container.id = 'shashune-smeta-app';
    container.innerHTML = `
      <div class="grid-bg"></div>
  <div class="wrapper">
    <!-- Header -->
    <header>
      <div class="logo-box">
        <div class="logo-badge">Ш</div>
        <div class="logo-text">
          <h1>SHASHUNE / СМЕТЫ</h1>
          <span>Инженерный аутсорсинг</span>
        </div>
      </div>
      <div class="header-contacts">
        <a href="https://t.me/ENGINEERAlexander" target="_blank" class="btn-contact btn-tg">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.16l-1.89 8.91c-.14.64-.52.8-1.06.5l-2.9-2.14-1.4 1.35c-.15.15-.28.28-.58.28l.21-2.96 5.39-4.87c.23-.21-.05-.33-.36-.12L8.27 13.3 5.4 12.4c-.62-.19-.63-.62.13-.92l11.23-4.33c.52-.19.98.12.79.91z"/></svg>
          Telegram
        </a>
        <a href="https://max.ru/u/f9LHodD0cOIF0exFC6zS5TYTCkCTYvNG_l_FSTBtmcLhc6Gi6FycHMpx0bA" target="_blank" class="btn-contact btn-max">
          MAX
        </a>
        <a href="https://api.whatsapp.com/send/?phone=79100405052" target="_blank" class="btn-contact btn-wa">
          WhatsApp
        </a>
      </div>
    </header>

    <!-- Hero -->
    <section class="hero">
      <div>
        <div class="hero-photo-preview" style="margin-bottom:16px; border-radius:16px; overflow:hidden; border:1px solid rgba(0,242,254,0.2); max-height:260px; box-shadow:0 12px 30px rgba(0,0,0,0.5);"><img src="https://cdn.jsdelivr.net/gh/snesterov/shashune@main/assets/smeta_engineer.png" style="width:100%; height:100%; object-fit:cover; display:block;" alt="Сметный инжиниринг Александр"></div><div class="hero-badge">
          <span>⚡ Сметное сопровождение по всей России (44-ФЗ / 223-ФЗ / ИЖС)</span>
        </div>
        <h2 class="hero-title">
          Сметы, КАЦ и акты КС-2/3 <span>за 24 часа</span> без штатного сметчика
        </h2>
        <p class="hero-desc">
          Профессиональный расчет строительных смет в актуальной ФСНБ-2022 (РИМ), ГЭСН, ФЕР и ТСН. Подготовка исполнительной документации для госзакупок и коммерческих объектов.
        </p>
        <div class="hero-features">
          <div class="feature-item">
            <span class="feature-icon">📑</span>
            <div>
              <strong>База ФСНБ-2022 и РИМ</strong>
              <span>Все актуальные индексы Минстроя РФ</span>
            </div>
          </div>
          <div class="feature-item">
            <span class="feature-icon">⚖️</span>
            <div>
              <strong>КАЦ по Методике 421/пр</strong>
              <span>Сбор 3 коммерческих предложений с КП</span>
            </div>
          </div>
          <div class="feature-item">
            <span class="feature-icon">🛡️</span>
            <div>
              <strong>Защита в экспертизе</strong>
              <span>Сопровождение до полного согласования</span>
            </div>
          </div>
          <div class="feature-item">
            <span class="feature-icon">⏱️</span>
            <div>
              <strong>Срочный расчет от 4 часов</strong>
              <span>Когда тендер горит и нужно успеть</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Live Engineer Card -->
      <div class="hero-card">
        <div class="engineer-profile">
          <div class="engineer-avatar" style="overflow:hidden; border:2px solid var(--accent-cyan);"><img src="https://cdn.jsdelivr.net/gh/snesterov/shashune@main/assets/hero_engineer.png" style="width:100%;height:100%;object-fit:cover;border-radius:14px;" alt="Александр Инженер"></div>
          <div class="engineer-meta">
            <h4>Александр</h4>
            <p>Ведущий инженер-сметчик / ПТО</p>
            <div class="status-pill">
              <span class="status-dot"></span> На связи, принимает проекты в работу
            </div>
          </div>
        </div>
        <div class="card-stat-row">
          <div class="stat-pill">
            <span class="num">12+</span>
            <span class="label">Лет стажа</span>
          </div>
          <div class="stat-pill">
            <span class="num">1 400+</span>
            <span class="label">Смет сдано</span>
          </div>
          <div class="stat-pill">
            <span class="num">100%</span>
            <span class="label">Прохождение</span>
          </div>
        </div>
        <a href="https://t.me/ENGINEERAlexander" target="_blank" class="btn-order-main">
          <span>Связаться с Александром</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </section>

    <!-- Interactive Tools Section -->
    <section class="interactive-section">
      <div class="section-header">
        <div class="section-title">
          <h2>Онлайн-сервисы и расчет сметы</h2>
          <p>Рассчитайте стоимость подготовки документов или протестируйте инструменты автоматизации</p>
        </div>
        <div class="nav-tabs">
          <button class="nav-tab active" onclick="switchTab('calc')">Калькулятор сметы</button>
          <button class="nav-tab" onclick="switchTab('kats')">Экспресс-КАЦ (421/пр)</button>
          <button class="nav-tab" onclick="switchTab('audit')">Аудит сметы</button>
        </div>
      </div>

      <!-- Tab 1: Calculator -->
      <div id="tab-calc" class="tab-content active">
        <div class="calc-grid">
          <div class="calc-controls">
            <div class="control-group">
              <label>1. Нормативная сметная база:</label>
              <div class="option-pills" id="basePills">
                <div class="option-pill active" data-mult="1.2" onclick="selectPill(this, 'base')">ФСНБ-2022 (РИМ)</div>
                <div class="option-pill" data-mult="1.0" onclick="selectPill(this, 'base')">ФЕР / ТЕР</div>
                <div class="option-pill" data-mult="1.1" onclick="selectPill(this, 'base')">ГЭСН</div>
                <div class="option-pill" data-mult="0.9" onclick="selectPill(this, 'base')">Коммерческая</div>
              </div>
            </div>

            <div class="control-group">
              <div class="range-box">
                <div class="range-header">
                  <span>2. Объем сметы (позиций):</span>
                  <span id="posCountDisplay">35 позиций</span>
                </div>
                <input type="range" id="posSlider" min="5" max="250" value="35" oninput="updateCalc()">
              </div>
            </div>

            <div class="control-group">
              <label>3. Необходимый пакет документов:</label>
              <div class="checkbox-grid">
                <label class="checkbox-item">
                  <input type="checkbox" id="chkKac" onchange="updateCalc()" checked>
                  <span>Конъюнктурный анализ (КАЦ)</span>
                </label>
                <label class="checkbox-item">
                  <input type="checkbox" id="chkKs" onchange="updateCalc()" checked>
                  <span>Формы КС-2 и КС-3</span>
                </label>
                <label class="checkbox-item">
                  <input type="checkbox" id="chkAosr" onchange="updateCalc()">
                  <span>Акты скрытых работ (АОСР)</span>
                </label>
                <label class="checkbox-item">
                  <input type="checkbox" id="chkDefect" onchange="updateCalc()">
                  <span>Дефектная ведомость</span>
                </label>
              </div>
            </div>
          </div>

          <!-- Result Card -->
          <div class="calc-result-box">
            <div>
              <div class="result-header">Ориентировочная стоимость</div>
              <div class="result-price" id="totalPrice">4 800 <span>₽</span></div>
              <div class="result-timeline" id="timelineText">⚡ Срок подготовки: 24 часа</div>
              <div class="result-details">
                <div class="detail-row">
                  <span>Выбранная база:</span>
                  <span id="detailBase">ФСНБ-2022 (РИМ)</span>
                </div>
                <div class="detail-row">
                  <span>Объем позиций:</span>
                  <span id="detailPos">35 поз.</span>
                </div>
                <div class="detail-row">
                  <span>Включенные опции:</span>
                  <span id="detailOpts">Локальная смета, КАЦ, КС-2/3</span>
                </div>
                <div class="detail-row">
                  <span>Защита в экспертизе:</span>
                  <span style="color: var(--accent-green);">Включено</span>
                </div>
              </div>
            </div>
            <button class="btn-order-main" onclick="sendOrder()">
              <span>Отправить Александру в Telegram</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Tab 2: KATZ Tool Demo -->
      <div id="tab-kats" class="tab-content">
        <div class="tool-box">
          <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 16px;">
            Внутренний модуль автоматического сбора цен для обоснования стоимости материалов по Методике Минстроя РФ № 421/пр:
          </p>
          <div class="tool-input-row">
            <input type="text" class="tool-input" id="matSearch" value="Панель 3D ограждения оцинкованная 2030х2500 мм" placeholder="Введите наименование материала...">
            <button class="btn-tool" onclick="demoSearchKac()">Найти 3 КП</button>
          </div>
          <table class="katz-table" id="kacTable">
            <thead>
              <tr>
                <th>Поставщик / Источник</th>
                <th>Характеристики</th>
                <th>Текущая цена (с НДС)</th>
                <th>Обоснование</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="badge-src">КП-1</span> Металлопрофиль Воронеж</td>
                <td>Пруток 4 мм, ячейка 50х200</td>
                <td><strong>1 420 ₽/шт</strong></td>
                <td>Счет № 402 от 12.10.2026</td>
              </tr>
              <tr>
                <td><span class="badge-src">КП-2</span> ПрофКомплект Черноземье</td>
                <td>Пруток 4 мм, оцинковка+RAL</td>
                <td><strong>1 490 ₽/шт</strong></td>
                <td>Прайс-лист с сайта (скрин)</td>
              </tr>
              <tr>
                <td><span class="badge-src">КП-3</span> GrandLine Официал</td>
                <td>Пруток 4 мм, полимер</td>
                <td><strong>1 540 ₽/шт</strong></td>
                <td>Коммерческое предложение</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Tab 3: Audit Tool Demo -->
      <div id="tab-audit" class="tab-content">
        <div class="tool-box" style="text-align: center; padding: 40px 20px;">
          <h3 style="font-size: 20px; margin-bottom: 10px;">Бесплатный экспресс-аудит вашей сметы</h3>
          <p style="font-size: 14px; color: var(--text-muted); max-width: 500px; margin: 0 auto 24px;">
            Пришлите файл сметы в формате .gsfx, .xml или .xls. Александр бесплатно проверит соответствие индексам Минстроя и завышение/занижение расценок.
          </p>
          <a href="https://t.me/ENGINEERAlexander?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%D1%81%D1%82%D0%B2%D1%83%D1%8E!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BE%D1%82%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20%D1%81%D0%BC%D0%B5%D1%82%D1%83%20%D0%BD%D0%B0%20%D1%8D%D0%BA%D1%81%D0%BF%D1%80%D0%B5%D1%81%D1%81-%D0%B0%D1%83%D0%B4%D0%B8%D1%82" target="_blank" class="btn-order-main" style="display: inline-flex;">
            Загрузить смету на аудит в Telegram
          </a>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="services-grid">
      <div class="service-card">
        <h3><span>📊</span> Сметы на все виды работ</h3>
        <p>Строительство, благоустройство, наружные сети, капремонт, отделка, электрика, вентиляция и дорожные работы.</p>
        <div class="service-tags">
          <span class="tag">ФСНБ-2022</span>
          <span class="tag">РИМ</span>
          <span class="tag">ФЕР</span>
          <span class="tag">ТСН</span>
        </div>
      </div>
      <div class="service-card">
        <h3><span>📋</span> Закрывающие акты (КС-2, КС-3)</h3>
        <p>Формирование полного пакета исполнительной документации для сдачи заказчику и техническому надзору.</p>
        <div class="service-tags">
          <span class="tag">КС-2</span>
          <span class="tag">КС-3</span>
          <span class="tag">КС-6а</span>
          <span class="tag">АОСР</span>
        </div>
      </div>
      <div class="service-card">
        <h3><span>🏗️</span> Конъюнктурный анализ (КАЦ)</h3>
        <p>Полное обоснование стоимости по Методике 421/пр со сбором КП, оформлением ссылок и кодов КСР.</p>
        <div class="service-tags">
          <span class="tag">421/пр</span>
          <span class="tag">3 КП</span>
          <span class="tag">Скриншоты</span>
          <span class="tag">Шифры КСР</span>
        </div>
      </div>
    </section>

    <!-- Footer CTA -->
    <section class="footer-cta">
      <h2>Нужна смета или расчет сегодня?</h2>
      <p>Свяжитесь напрямую с Александром. Обсудим проект, подскажем оптимальную нормативную базу и сориентируем по срокам.</p>
      <div class="cta-buttons">
        <a href="https://t.me/ENGINEERAlexander" target="_blank" class="btn-contact btn-tg" style="padding: 12px 24px; font-size: 15px;">
          Написать в Telegram
        </a>
        <a href="https://max.ru/u/f9LHodD0cOIF0exFC6zS5TYTCkCTYvNG_l_FSTBtmcLhc6Gi6FycHMpx0bA" target="_blank" class="btn-contact btn-max" style="padding: 12px 24px; font-size: 15px;">
          Открыть в MAX
        </a>
        <a href="https://api.whatsapp.com/send/?phone=79100405052" target="_blank" class="btn-contact btn-wa" style="padding: 12px 24px; font-size: 15px;">
          WhatsApp (+7 910 040-50-52)
        </a>
      </div>
    </section>
  </div>
    `;

    // Attach to T123 block or top of allrecords
    var tildaRecords = document.getElementById('allrecords') || document.body;
    tildaRecords.insertBefore(container, tildaRecords.firstChild);

    initInteractiveLogic();
  }

  // 4. Interactive Logic (Calculator, Tabs, Order Handlers)
  function initInteractiveLogic() {
    window.currentMult = 1.2;
    window.currentBaseName = "ФСНБ-2022 (РИМ)";

    window.selectPill = function(el, type) {
      var pills = document.querySelectorAll('#basePills .option-pill');
      for (var i = 0; i < pills.length; i++) pills[i].classList.remove('active');
      el.classList.add('active');
      window.currentMult = parseFloat(el.getAttribute('data-mult'));
      window.currentBaseName = el.innerText;
      window.updateCalc();
    };

    window.switchTab = function(tabId) {
      var tabs = document.querySelectorAll('.nav-tab');
      var contents = document.querySelectorAll('.tab-content');
      for (var i = 0; i < tabs.length; i++) tabs[i].classList.remove('active');
      for (var j = 0; j < contents.length; j++) contents[j].classList.remove('active');

      if (event && event.target) event.target.classList.add('active');
      var targetContent = document.getElementById('tab-' + tabId);
      if (targetContent) targetContent.classList.add('active');
    };

    window.updateCalc = function() {
      var slider = document.getElementById('posSlider');
      if (!slider) return;
      var count = parseInt(slider.value);
      var posDisplay = document.getElementById('posCountDisplay');
      if (posDisplay) posDisplay.innerText = count + ' позиций';

      var basePrice = count * 90 * (window.currentMult || 1.2);
      if (basePrice < 2500) basePrice = 2500;

      var opts = ["Локальная смета"];
      var kac = document.getElementById('chkKac');
      var ks = document.getElementById('chkKs');
      var aosr = document.getElementById('chkAosr');
      var defect = document.getElementById('chkDefect');

      if (kac && kac.checked) { basePrice += 1500; opts.push("КАЦ"); }
      if (ks && ks.checked) { basePrice += 1200; opts.push("КС-2/3"); }
      if (aosr && aosr.checked) { basePrice += 2000; opts.push("АОСР"); }
      if (defect && defect.checked) { basePrice += 1000; opts.push("Дефектная вед."); }

      var rounded = Math.round(basePrice / 100) * 100;
      var priceElem = document.getElementById('totalPrice');
      if (priceElem) priceElem.innerHTML = rounded.toLocaleString('ru-RU') + ' <span>₽</span>';

      var timeline = count > 100 ? "48 часов" : "24 часа";
      var timelineElem = document.getElementById('timelineText');
      if (timelineElem) timelineElem.innerText = "⚡ Срок подготовки: " + timeline;

      var dBase = document.getElementById('detailBase');
      var dPos = document.getElementById('detailPos');
      var dOpts = document.getElementById('detailOpts');
      if (dBase) dBase.innerText = window.currentBaseName;
      if (dPos) dPos.innerText = count + ' поз.';
      if (dOpts) dOpts.innerText = opts.join(', ');
    };

    window.sendOrder = function() {
      var count = document.getElementById('posSlider') ? document.getElementById('posSlider').value : 35;
      var price = document.getElementById('totalPrice') ? document.getElementById('totalPrice').innerText : '4 800 ₽';
      var opts = document.getElementById('detailOpts') ? document.getElementById('detailOpts').innerText : 'Локальная смета, КАЦ, КС-2/3';
      var text = encodeURIComponent("Приветствую, Александр! Хочу заказать смету:\nБаза: " + window.currentBaseName + "\nПозиций: ~" + count + "\nОпции: " + opts + "\nОриентировочная сумма: " + price);
      window.open('https://t.me/ENGINEERAlexander?text=' + text, '_blank');
    };

    window.demoSearchKac = function() {
      var q = document.getElementById('matSearch') ? document.getElementById('matSearch').value : '';
      alert('Поиск коммерческих предложений для: ' + q + '\nВ рабочей версии модуль автоматически формирует файл Excel по Методике 421/пр.');
    };

    window.updateCalc();
  }

  // 5. Mount on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderApp);
  } else {
    renderApp();
  }
})();
