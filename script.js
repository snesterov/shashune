// SHASHUNE SMETA ENGINE v3.0
// Features: Prominent Hero Visual, Interactive Video Showcase at Bottom, Multi-channel MAX/TG
(function() {
  'use strict';

  if (!document.getElementById('sh-smeta-fonts')) {
    var link = document.createElement('link');
    link.id = 'sh-smeta-fonts';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600;700&display=swap';
    document.head.appendChild(link);
  }

  if (!document.getElementById('sh-smeta-styles')) {
    var style = document.createElement('style');
    style.id = 'sh-smeta-styles';
    style.textContent = `
      #allrecords > .r:not([data-record-type="123"]):not(.sh-preserve) {
        display: none !important;
      }
      :root {
        --bg: #090a0f;
        --card-bg: rgba(18, 22, 34, 0.88);
        --card-border: rgba(255, 255, 255, 0.1);
        --accent-cyan: #00f2fe;
        --accent-blue: #4facfe;
        --accent-max: #ff6b35;
        --accent-tg: #229ed9;
        --accent-wa: #25d366;
        --accent-green: #00e676;
        --text: #f0f3fa;
        --text-muted: #8e9bb0;
      }
      * { box-sizing: border-box !important; margin: 0; padding: 0; }
      body {
        background-color: var(--bg) !important;
        color: var(--text) !important;
        font-family: 'Inter', -apple-system, sans-serif !important;
        min-height: 100vh;
        line-height: 1.5;
      }
      .sh-wrapper {
        max-width: 1240px;
        margin: 0 auto;
        padding: 24px 20px 80px;
      }

      /* Header */
      .sh-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 1px solid var(--card-border);
        margin-bottom: 32px;
        flex-wrap: wrap;
        gap: 16px;
      }
      .sh-logo-box {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .sh-logo-badge {
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
        box-shadow: 0 0 20px rgba(0, 242, 254, 0.3);
      }
      .sh-logo-text h1 {
        font-size: 18px;
        font-weight: 700;
        letter-spacing: -0.02em;
      }
      .sh-logo-text span {
        font-size: 11px;
        color: var(--accent-cyan);
        text-transform: uppercase;
        letter-spacing: 0.06em;
        font-weight: 600;
      }
      .sh-channels {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
      }
      .sh-btn-channel {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 16px;
        border-radius: 12px;
        font-size: 13px;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.2s ease;
      }
      .sh-btn-channel img {
        width: 18px;
        height: 18px;
        object-fit: contain;
      }
      .sh-btn-max {
        background: rgba(255, 107, 53, 0.15);
        color: #ff8c5a;
        border: 1px solid rgba(255, 107, 53, 0.4);
      }
      .sh-btn-max:hover {
        background: #ff6b35;
        color: #fff;
        box-shadow: 0 0 16px rgba(255, 107, 53, 0.5);
      }
      .sh-btn-tg {
        background: rgba(34, 158, 217, 0.15);
        color: #38bdf8;
        border: 1px solid rgba(34, 158, 217, 0.4);
      }
      .sh-btn-tg:hover {
        background: #229ed9;
        color: #fff;
        box-shadow: 0 0 16px rgba(34, 158, 217, 0.5);
      }
      .sh-btn-wa {
        background: rgba(37, 211, 102, 0.15);
        color: #4ade80;
        border: 1px solid rgba(37, 211, 102, 0.4);
      }

      /* Hero Section with Prominent Visual */
      .sh-hero-grid {
        display: grid;
        grid-template-columns: 1.15fr 0.85fr;
        gap: 36px;
        align-items: center;
        margin-bottom: 48px;
      }
      .sh-hero-badge {
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
        margin-bottom: 16px;
      }
      .sh-hero-title {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 42px;
        line-height: 1.15;
        font-weight: 700;
        margin-bottom: 18px;
        letter-spacing: -0.03em;
      }
      .sh-hero-title span {
        background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .sh-hero-desc {
        font-size: 15px;
        color: var(--text-muted);
        line-height: 1.6;
        margin-bottom: 24px;
      }

      /* Big Hero Photo Banner */
      .sh-hero-banner {
        width: 100%;
        height: 380px;
        border-radius: 24px;
        overflow: hidden;
        position: relative;
        border: 1px solid rgba(0, 242, 254, 0.3);
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
      }
      .sh-hero-banner img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .sh-hero-banner-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, transparent 40%, rgba(9, 10, 15, 0.95) 100%);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 24px;
      }
      .sh-hero-banner-tag {
        display: inline-block;
        padding: 4px 12px;
        border-radius: 8px;
        background: var(--accent-cyan);
        color: #000;
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        width: fit-content;
        margin-bottom: 6px;
      }
      .sh-hero-banner-title {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 20px;
        font-weight: 700;
        color: #fff;
      }

      /* Interactive Section (Calculator) */
      .sh-box {
        background: var(--card-bg);
        border: 1px solid var(--card-border);
        border-radius: 22px;
        padding: 30px;
        margin-bottom: 48px;
        backdrop-filter: blur(16px);
      }
      .sh-box-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
        flex-wrap: wrap;
        gap: 16px;
      }
      .sh-box-title h2 {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 24px;
        font-weight: 700;
      }
      .sh-box-title p {
        font-size: 13px;
        color: var(--text-muted);
      }

      /* Calculator Grid */
      .sh-calc-grid {
        display: grid;
        grid-template-columns: 1.25fr 0.9fr;
        gap: 28px;
      }
      .sh-ctrl-group { margin-bottom: 18px; }
      .sh-ctrl-group label {
        display: block;
        font-size: 12px;
        font-weight: 600;
        margin-bottom: 8px;
        color: #cbd5e1;
      }
      .sh-pills {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 6px;
      }
      .sh-pill {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid var(--card-border);
        border-radius: 8px;
        padding: 8px 4px;
        text-align: center;
        font-size: 11px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
      }
      .sh-pill.active {
        background: rgba(0, 242, 254, 0.12);
        border-color: var(--accent-cyan);
        color: var(--accent-cyan);
      }
      .sh-slider-box {
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid var(--card-border);
        border-radius: 10px;
        padding: 12px 14px;
      }
      .sh-slider-head {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        font-size: 12px;
      }
      .sh-slider-head span:last-child {
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 700;
        color: var(--accent-cyan);
      }
      input[type="range"] {
        width: 100%;
        accent-color: var(--accent-cyan);
        cursor: pointer;
      }
      .sh-chks {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
      }
      .sh-chk {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid var(--card-border);
        border-radius: 8px;
        cursor: pointer;
        font-size: 11px;
      }

      /* Result Card */
      .sh-result-box {
        background: linear-gradient(145deg, rgba(20, 28, 48, 0.95), rgba(12, 16, 28, 0.98));
        border: 1px solid rgba(0, 242, 254, 0.25);
        border-radius: 18px;
        padding: 22px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .sh-price-lbl {
        font-size: 11px;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .sh-price-val {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 36px;
        font-weight: 700;
        color: #fff;
        margin: 4px 0;
      }
      .sh-price-val span {
        font-size: 18px;
        color: var(--accent-cyan);
      }
      .sh-price-time {
        font-size: 12px;
        color: var(--accent-green);
        font-weight: 600;
        margin-bottom: 16px;
      }
      .sh-details-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding-top: 14px;
        border-top: 1px solid var(--card-border);
        margin-bottom: 20px;
        font-size: 12px;
      }
      .sh-det-row {
        display: flex;
        justify-content: space-between;
        color: var(--text-muted);
      }
      .sh-det-row span:last-child {
        color: var(--text);
        font-weight: 600;
      }
      .sh-send-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .sh-send-lbl {
        font-size: 11px;
        color: var(--text-muted);
        text-align: center;
        margin-bottom: 4px;
        text-transform: uppercase;
      }
      .sh-send-btns {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
      }
      .sh-btn-send {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 12px;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        text-decoration: none;
        transition: all 0.2s;
      }
      .sh-btn-send img {
        width: 18px;
        height: 18px;
        object-fit: contain;
      }
      .sh-btn-send-max {
        background: linear-gradient(135deg, #ff6b35, #ff8c5a);
        color: #fff;
        box-shadow: 0 4px 14px rgba(255, 107, 53, 0.4);
      }
      .sh-btn-send-max:hover { transform: translateY(-2px); }
      .sh-btn-send-tg {
        background: linear-gradient(135deg, #229ed9, #0284c7);
        color: #fff;
        box-shadow: 0 4px 14px rgba(34, 158, 217, 0.4);
      }
      .sh-btn-send-tg:hover { transform: translateY(-2px); }

      /* Video Presentation Showcase at the Bottom */
      .sh-video-section {
        background: var(--card-bg);
        border: 1px solid var(--card-border);
        border-radius: 22px;
        padding: 32px;
        margin-bottom: 48px;
        text-align: center;
      }
      .sh-video-header {
        max-width: 650px;
        margin: 0 auto 24px;
      }
      .sh-video-header h2 {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 8px;
      }
      .sh-video-header p {
        font-size: 14px;
        color: var(--text-muted);
      }
      .sh-video-player-wrap {
        max-width: 860px;
        margin: 0 auto;
        border-radius: 20px;
        overflow: hidden;
        border: 1px solid rgba(0, 242, 254, 0.3);
        box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        background: #000;
        position: relative;
        aspect-ratio: 16 / 9;
      }
      .sh-video-player-wrap iframe,
      .sh-video-player-wrap video {
        width: 100%;
        height: 100%;
        display: block;
        border: none;
      }
      .sh-video-placeholder {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #111624, #0b0e17);
        padding: 20px;
      }
      .sh-video-play-btn {
        width: 72px;
        height: 72px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue));
        display: flex;
        align-items: center;
        justify-content: center;
        color: #000;
        cursor: pointer;
        box-shadow: 0 0 30px rgba(0, 242, 254, 0.5);
        margin-bottom: 16px;
        transition: transform 0.2s;
      }
      .sh-video-play-btn:hover {
        transform: scale(1.08);
      }
      .sh-video-play-btn svg {
        width: 28px;
        height: 28px;
        fill: #000;
        margin-left: 4px;
      }

      /* Footer Contacts */
      .sh-footer {
        text-align: center;
        padding-top: 30px;
        border-top: 1px solid var(--card-border);
      }
      .sh-footer p {
        font-size: 13px;
        color: var(--text-muted);
        margin-bottom: 16px;
      }

      @media (max-width: 860px) {
        .sh-hero-grid { grid-template-columns: 1fr; }
        .sh-calc-grid { grid-template-columns: 1fr; }
        .sh-pills { grid-template-columns: repeat(2, 1fr); }
      }
    `;
    document.head.appendChild(style);
  }

  function renderApp() {
    if (document.getElementById('shashune-smeta-app')) return;

    var app = document.createElement('div');
    app.id = 'shashune-smeta-app';
    app.className = 'sh-wrapper';
    app.innerHTML = `
      <!-- Header -->
      <header class="sh-header">
        <div class="sh-logo-box">
          <div class="sh-logo-badge">Ш</div>
          <div class="sh-logo-text">
            <h1>SHASHUNE / СМЕТЫ</h1>
            <span>Инженерный аутсорсинг РФ</span>
          </div>
        </div>
        <div class="sh-channels">
          <a href="https://max.ru/u/f9LHodD0cOIF0exFC6zS5TYTCkCTYvNG_l_FSTBtmcLhc6Gi6FycHMpx0bA" target="_blank" class="sh-btn-channel sh-btn-max">
            <img src="https://cdn.jsdelivr.net/gh/snesterov/shashune@main/assets/max_logo.png" alt="MAX">
            <span>Мессенджер MAX</span>
          </a>
          <a href="https://t.me/ENGINEERAlexander" target="_blank" class="sh-btn-channel sh-btn-tg">
            <img src="https://cdn.jsdelivr.net/gh/snesterov/shashune@main/assets/tg_logo.png" alt="Telegram">
            <span>Telegram</span>
          </a>
          <a href="https://api.whatsapp.com/send/?phone=79100405052" target="_blank" class="sh-btn-channel sh-btn-wa">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.84a8.18 8.18 0 0 1-5.82 2.41h-.01c-1.42 0-2.82-.38-4.05-1.11l-.29-.17-3.01.79.8-2.93-.19-.3a8.196 8.196 0 0 1-1.26-4.53c0-4.54 3.7-8.24 8.24-8.24zm4.51 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.49-1.41-1.74-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3z"/></svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </header>

      <!-- Hero Section with Big Photo Banner -->
      <section class="sh-hero-grid">
        <div>
          <div class="sh-hero-badge">
            <span>⚡ Сметное сопровождение по всей России (44-ФЗ / 223-ФЗ / ИЖС)</span>
          </div>
          <h2 class="sh-hero-title">
            Сметы, КАЦ и акты КС-2/3 <span>за 24 часа</span> без штатного сметчика
          </h2>
          <p class="sh-hero-desc">
            Профессиональный расчет строительных смет в актуальной ФСНБ-2022 (РИМ), ГЭСН, ФЕР и ТСН. Подготовка исполнительной документации для госзакупок и коммерческих объектов.
          </p>
          <div style="display:flex; gap:12px; flex-wrap:wrap;">
            <a href="https://max.ru/u/f9LHodD0cOIF0exFC6zS5TYTCkCTYvNG_l_FSTBtmcLhc6Gi6FycHMpx0bA" target="_blank" class="sh-btn-send sh-btn-send-max" style="padding:12px 20px;">
              <img src="https://cdn.jsdelivr.net/gh/snesterov/shashune@main/assets/max_logo.png" alt="MAX">
              <span>Связаться с инженером в MAX</span>
            </a>
            <a href="https://t.me/ENGINEERAlexander" target="_blank" class="sh-btn-send sh-btn-send-tg" style="padding:12px 20px;">
              <img src="https://cdn.jsdelivr.net/gh/snesterov/shashune@main/assets/tg_logo.png" alt="TG">
              <span>Написать в Telegram</span>
            </a>
          </div>
        </div>

        <!-- Big Hero Visual Kling Image -->
        <div class="sh-hero-banner">
          <img src="https://cdn.jsdelivr.net/gh/snesterov/shashune@main/assets/hero_engineer.png" alt="Ведущий инженер Александр">
          <div class="sh-hero-banner-overlay">
            <span class="sh-hero-banner-tag">Ведущий инженер-сметчик</span>
            <div class="sh-hero-banner-title">Александр • ПТО / Сметы / Экспертиза</div>
            <div style="font-size:12px; color:var(--accent-green); margin-top:4px;">● 12+ лет стажа | 1 400+ смет сдано</div>
          </div>
        </div>
      </section>

      <!-- Interactive Calculator Section -->
      <section class="sh-box">
        <div class="sh-box-header">
          <div class="sh-box-title">
            <h2>Онлайн-калькулятор сметного расчета</h2>
            <p>Укажите параметры объекта и отправьте сформированное ТЗ напрямую в мессенджер</p>
          </div>
        </div>

        <div class="sh-calc-grid">
          <div>
            <div class="sh-ctrl-group">
              <label>1. Сметно-нормативная база:</label>
              <div class="sh-pills" id="basePills">
                <div class="sh-pill active" data-mult="1.2" onclick="window.selectPill(this)">ФСНБ-2022 (РИМ)</div>
                <div class="sh-pill" data-mult="1.0" onclick="window.selectPill(this)">ФЕР / ТЕР</div>
                <div class="sh-pill" data-mult="1.1" onclick="window.selectPill(this)">ГЭСН</div>
                <div class="sh-pill" data-mult="0.9" onclick="window.selectPill(this)">Коммерческая</div>
              </div>
            </div>

            <div class="sh-ctrl-group">
              <div class="sh-slider-box">
                <div class="sh-slider-head">
                  <span>2. Объем сметы (позиций):</span>
                  <span id="posCountDisplay">35 позиций</span>
                </div>
                <input type="range" id="posSlider" min="5" max="250" value="35" oninput="window.updateCalc()">
              </div>
            </div>

            <div class="sh-ctrl-group">
              <label>3. Необходимый пакет документов:</label>
              <div class="sh-chks">
                <label class="sh-chk">
                  <input type="checkbox" id="chkKac" onchange="window.updateCalc()" checked>
                  <span>КАЦ (Конъюнктурный анализ 421/пр)</span>
                </label>
                <label class="sh-chk">
                  <input type="checkbox" id="chkKs" onchange="window.updateCalc()" checked>
                  <span>Акты КС-2 и КС-3</span>
                </label>
                <label class="sh-chk">
                  <input type="checkbox" id="chkAosr" onchange="window.updateCalc()">
                  <span>Акты скрытых работ (АОСР)</span>
                </label>
                <label class="sh-chk">
                  <input type="checkbox" id="chkDefect" onchange="window.updateCalc()">
                  <span>Дефектная ведомость</span>
                </label>
              </div>
            </div>
          </div>

          <!-- Result Box -->
          <div class="sh-result-box">
            <div>
              <div class="sh-price-lbl">Ориентировочная стоимость</div>
              <div class="sh-price-val" id="totalPrice">4 800 <span>₽</span></div>
              <div class="sh-price-time" id="timelineText">⚡ Срок подготовки: 24 часа</div>
              <div class="sh-details-list">
                <div class="sh-det-row">
                  <span>База:</span>
                  <span id="detailBase">ФСНБ-2022 (РИМ)</span>
                </div>
                <div class="sh-det-row">
                  <span>Объем:</span>
                  <span id="detailPos">35 поз.</span>
                </div>
                <div class="sh-det-row">
                  <span>Опции:</span>
                  <span id="detailOpts">Локальная смета, КАЦ, КС-2/3</span>
                </div>
              </div>
            </div>

            <div class="sh-send-group">
              <div class="sh-send-lbl">Отправить расчет Александру:</div>
              <div class="sh-send-btns">
                <button class="sh-btn-send sh-btn-send-max" onclick="window.sendOrder('max')">
                  <img src="https://cdn.jsdelivr.net/gh/snesterov/shashune@main/assets/max_logo.png" alt="MAX">
                  <span>В мессенджер MAX</span>
                </button>
                <button class="sh-btn-send sh-btn-send-tg" onclick="window.sendOrder('tg')">
                  <img src="https://cdn.jsdelivr.net/gh/snesterov/shashune@main/assets/tg_logo.png" alt="TG">
                  <span>В Telegram</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Video Showcase Section at the Bottom -->
      <section class="sh-video-section">
        <div class="sh-video-header">
          <h2>Видеопрезентация и рабочий процесс</h2>
          <p>Посмотрите видеообзор: как мы готовим сметы, защищаем их в госэкспертизе и оформляем исполнительную документацию.</p>
        </div>
        <div class="sh-video-player-wrap" id="shVideoContainer">
          <div class="sh-video-placeholder">
            <div class="sh-video-play-btn" onclick="window.openVideoModal()">
              <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <div style="font-size:16px; font-weight:700; color:#fff; margin-bottom:4px;">Смотреть презентацию сметного инжиниринга</div>
            <div style="font-size:12px; color:var(--text-muted);">Нажмите для воспроизведения видео</div>
          </div>
        </div>
      </section>

      <!-- Footer Contacts -->
      <footer class="sh-footer">
        <p>SHASHUNE • Профессиональный сметный аутсорсинг и строительный подряд в Воронеже и по всей РФ</p>
        <div class="sh-channels" style="justify-content:center;">
          <a href="https://max.ru/u/f9LHodD0cOIF0exFC6zS5TYTCkCTYvNG_l_FSTBtmcLhc6Gi6FycHMpx0bA" target="_blank" class="sh-btn-channel sh-btn-max">
            <img src="https://cdn.jsdelivr.net/gh/snesterov/shashune@main/assets/max_logo.png" alt="MAX">
            <span>MAX</span>
          </a>
          <a href="https://t.me/ENGINEERAlexander" target="_blank" class="sh-btn-channel sh-btn-tg">
            <img src="https://cdn.jsdelivr.net/gh/snesterov/shashune@main/assets/tg_logo.png" alt="Telegram">
            <span>Telegram</span>
          </a>
          <a href="https://api.whatsapp.com/send/?phone=79100405052" target="_blank" class="sh-btn-channel sh-btn-wa">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.84a8.18 8.18 0 0 1-5.82 2.41h-.01c-1.42 0-2.82-.38-4.05-1.11l-.29-.17-3.01.79.8-2.93-.19-.3a8.196 8.196 0 0 1-1.26-4.53c0-4.54 3.7-8.24 8.24-8.24zm4.51 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.49-1.41-1.74-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3z"/></svg>
            <span>WhatsApp: +7 910 040-50-52</span>
          </a>
        </div>
      </footer>
    `;

    var tildaRecords = document.getElementById('allrecords') || document.body;
    tildaRecords.insertBefore(app, tildaRecords.firstChild);

    initInteractiveLogic();
  }

  function initInteractiveLogic() {
    window.currentMult = 1.2;
    window.currentBaseName = "ФСНБ-2022 (РИМ)";

    window.selectPill = function(el) {
      var pills = document.querySelectorAll('#basePills .sh-pill');
      for (var i = 0; i < pills.length; i++) pills[i].classList.remove('active');
      el.classList.add('active');
      window.currentMult = parseFloat(el.getAttribute('data-mult'));
      window.currentBaseName = el.innerText;
      window.updateCalc();
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

    window.sendOrder = function(platform) {
      var count = document.getElementById('posSlider') ? document.getElementById('posSlider').value : 35;
      var price = document.getElementById('totalPrice') ? document.getElementById('totalPrice').innerText : '4 800 ₽';
      var opts = document.getElementById('detailOpts') ? document.getElementById('detailOpts').innerText : 'Локальная смета, КАЦ, КС-2/3';

      var text = "Приветствую, Александр! Хочу заказать смету:\nБаза: " + window.currentBaseName + "\nПозиций: ~" + count + "\nОпции: " + opts + "\nОриентировочная сумма: " + price;

      if (typeof ym === 'function') {
        try { ym(window.yaCounterId || 0, 'reachGoal', 'calc_order_' + platform); } catch(e) {}
      }

      if (platform === 'max') {
        window.open("https://max.ru/u/f9LHodD0cOIF0exFC6zS5TYTCkCTYvNG_l_FSTBtmcLhc6Gi6FycHMpx0bA", '_blank');
      } else {
        window.open("https://t.me/ENGINEERAlexander?text=" + encodeURIComponent(text), '_blank');
      }
    };

    window.openVideoModal = function() {
      var container = document.getElementById('shVideoContainer');
      if (window.shashuneVideoUrl) {
        container.innerHTML = '<iframe src="' + window.shashuneVideoUrl + '?autoplay=1" allow="autoplay; fullscreen" allowfullscreen></iframe>';
      } else {
        // Video modal or direct player
        alert('Для подключения видео укажите ссылку на YouTube/VK/RuTube видеохостинг.');
      }
    };

    window.updateCalc();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderApp);
  } else {
    renderApp();
  }
})();
