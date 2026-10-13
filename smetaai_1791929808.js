// SHASHUNE SMETA ENGINE v2.0
// Multi-channel lead generation: MAX, Telegram, WhatsApp & Interactive Calculator
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
      
      /* Styling Native Tilda Form rec689290170 to match Dark-Tech Design */
      #rec689290170, #rec4768360701, [data-record-type="698"] {
        display: block !important;
        background: transparent !important;
        padding: 20px 0 60px !important;
      }
      #rec689290170 .t-cover, #rec4768360701 .t-cover, [data-record-type="698"] .t-cover,
      #rec689290170 .t-cover, #rec4768360701 .t-cover, [data-record-type="698"] .t-cover__carrier,
      #rec689290170 .t-cover, #rec4768360701 .t-cover, [data-record-type="698"] .t-cover__wrapper {
        height: auto !important;
        min-height: auto !important;
        background-image: none !important;
      }
      #rec689290170 .t-cover, #rec4768360701 .t-cover, [data-record-type="698"] .t-cover__filter {
        display: none !important;
      }
      #rec689290170 .t698__mainwrapper, #rec4768360701 .t698__mainwrapper, [data-record-type="698"] .t698__mainwrapper {
        background: var(--card-bg) !important;
        border: 1px solid var(--card-border) !important;
        border-radius: 22px !important;
        padding: 36px 28px !important;
        box-shadow: 0 20px 50px rgba(0,0,0,0.5) !important;
        max-width: 680px !important;
        margin: 0 auto !important;
      }
      #rec689290170 .t698__title, #rec4768360701 .t698__title, [data-record-type="698"] .t698__title {
        font-family: 'Space Grotesk', sans-serif !important;
        color: #ffffff !important;
        font-size: 26px !important;
        font-weight: 700 !important;
        text-align: center !important;
        margin-bottom: 20px !important;
      }
      #rec689290170 .t-input, #rec4768360701 .t-input, [data-record-type="698"] .t-input {
        background: rgba(255, 255, 255, 0.05) !important;
        border: 1px solid var(--card-border) !important;
        color: #ffffff !important;
        border-radius: 12px !important;
        padding: 14px 18px !important;
        font-size: 15px !important;
      }
      #rec689290170 .t-input, #rec4768360701 .t-input, [data-record-type="698"] .t-input:focus {
        border-color: var(--accent-cyan) !important;
        outline: none !important;
      }
      #rec689290170 .t-submit, #rec4768360701 .t-submit, [data-record-type="698"] .t-submit {
        background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue)) !important;
        color: #000000 !important;
        font-weight: 700 !important;
        border-radius: 12px !important;
        font-size: 16px !important;
        padding: 16px !important;
        width: 100% !important;
        box-shadow: 0 4px 20px rgba(0, 242, 254, 0.4) !important;
        transition: transform 0.2s, box-shadow 0.2s !important;
      }
      #rec689290170 .t-submit, #rec4768360701 .t-submit, [data-record-type="698"] .t-submit:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 28px rgba(0, 242, 254, 0.6) !important;
      }

      #allrecords > .r:not([data-record-type="123"]):not([data-record-type="131"]):not([data-record-type="698"]):not(#rec689290170):not(#rec4768360701):not(#rec4768367401):not(.sh-preserve) {
        display: none !important;
      }
      :root {
        --bg: #090a0f;
        --card-bg: rgba(18, 22, 34, 0.85);
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
        margin-bottom: 36px;
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
        border: 1px solid transparent;
      }
      .sh-btn-channel img {
        width: 18px;
        height: 18px;
        object-fit: contain;
      }
      .sh-btn-max {
        background: rgba(255, 107, 53, 0.15);
        color: #ff8c5a;
        border-color: rgba(255, 107, 53, 0.4);
      }
      .sh-btn-max:hover {
        background: #ff6b35;
        color: #fff;
        box-shadow: 0 0 16px rgba(255, 107, 53, 0.5);
      }
      .sh-btn-tg {
        background: rgba(34, 158, 217, 0.15);
        color: #38bdf8;
        border-color: rgba(34, 158, 217, 0.4);
      }
      .sh-btn-tg:hover {
        background: #229ed9;
        color: #fff;
        box-shadow: 0 0 16px rgba(34, 158, 217, 0.5);
      }
      .sh-btn-wa {
        background: rgba(37, 211, 102, 0.15);
        color: #4ade80;
        border-color: rgba(37, 211, 102, 0.4);
      }
      .sh-btn-wa:hover {
        background: #25d366;
        color: #fff;
      }

      /* Hero */
      .sh-hero {
        display: grid;
        grid-template-columns: 1.25fr 0.85fr;
        gap: 40px;
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
        max-width: 580px;
      }
      .sh-features {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
      }
      .sh-feature-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 14px;
        border-radius: 12px;
        background: var(--card-bg);
        border: 1px solid var(--card-border);
      }
      .sh-feature-item strong { font-size: 13px; }
      .sh-feature-item span { font-size: 11px; color: var(--text-muted); display: block; }

      /* Live Profile Card */
      .sh-profile-card {
        background: var(--card-bg);
        border: 1px solid var(--card-border);
        border-radius: 22px;
        padding: 24px;
        backdrop-filter: blur(16px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
      }
      .sh-profile-header {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 18px;
        padding-bottom: 16px;
        border-bottom: 1px solid var(--card-border);
      }
      .sh-profile-avatar {
        width: 64px;
        height: 64px;
        border-radius: 16px;
        overflow: hidden;
        border: 2px solid var(--accent-cyan);
        box-shadow: 0 0 20px rgba(0, 242, 254, 0.25);
        flex-shrink: 0;
      }
      .sh-profile-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .sh-profile-meta h4 {
        font-size: 17px;
        font-weight: 700;
        margin-bottom: 2px;
      }
      .sh-profile-meta p {
        font-size: 12px;
        color: var(--text-muted);
      }
      .sh-status {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 11px;
        color: var(--accent-green);
        font-weight: 600;
        margin-top: 4px;
      }
      .sh-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--accent-green);
        box-shadow: 0 0 8px var(--accent-green);
      }
      .sh-stats-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
        margin-bottom: 20px;
      }
      .sh-stat-box {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid var(--card-border);
        border-radius: 10px;
        padding: 10px 6px;
        text-align: center;
      }
      .sh-stat-box .num {
        display: block;
        font-family: 'Space Grotesk', sans-serif;
        font-size: 17px;
        font-weight: 700;
        color: var(--accent-cyan);
      }
      .sh-stat-box .lbl {
        font-size: 10px;
        color: var(--text-muted);
        text-transform: uppercase;
      }

      /* Multi-channel CTA Buttons */
      .sh-channel-action-row {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .sh-act-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 12px 16px;
        border-radius: 12px;
        font-size: 13px;
        font-weight: 700;
        text-decoration: none;
        transition: all 0.2s;
        cursor: pointer;
        border: none;
      }
      .sh-act-max {
        background: linear-gradient(135deg, #ff6b35, #ff8c5a);
        color: #fff;
        box-shadow: 0 4px 16px rgba(255, 107, 53, 0.35);
      }
      .sh-act-max:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 22px rgba(255, 107, 53, 0.5);
      }
      .sh-act-tg {
        background: linear-gradient(135deg, #229ed9, #0284c7);
        color: #fff;
        box-shadow: 0 4px 16px rgba(34, 158, 217, 0.35);
      }
      .sh-act-tg:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 22px rgba(34, 158, 217, 0.5);
      }

      /* Interactive Section */
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
      .sh-tabs {
        display: flex;
        gap: 6px;
        background: rgba(255, 255, 255, 0.04);
        padding: 4px;
        border-radius: 12px;
      }
      .sh-tab {
        padding: 8px 16px;
        border-radius: 8px;
        border: none;
        background: transparent;
        color: var(--text-muted);
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
      }
      .sh-tab.active {
        background: var(--accent-cyan);
        color: #000;
        box-shadow: 0 2px 10px rgba(0, 242, 254, 0.3);
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

      /* Choose Platform Buttons */
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
      .sh-btn-send-max:hover {
        transform: translateY(-2px);
      }
      .sh-btn-send-tg {
        background: linear-gradient(135deg, #229ed9, #0284c7);
        color: #fff;
        box-shadow: 0 4px 14px rgba(34, 158, 217, 0.4);
      }
      .sh-btn-send-tg:hover {
        transform: translateY(-2px);
      }

      /* File Upload Lead-Magnet Box */
      .sh-upload-box {
        background: rgba(255, 255, 255, 0.02);
        border: 2px dashed rgba(0, 242, 254, 0.3);
        border-radius: 16px;
        padding: 24px;
        text-align: center;
        cursor: pointer;
        transition: all 0.2s;
        margin-top: 14px;
      }
      .sh-upload-box:hover {
        border-color: var(--accent-cyan);
        background: rgba(0, 242, 254, 0.04);
      }
      .sh-upload-box h4 {
        font-size: 15px;
        margin-bottom: 6px;
      }
      .sh-upload-box p {
        font-size: 12px;
        color: var(--text-muted);
      }

      /* Services 3-Grid */
      .sh-services-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        margin-bottom: 48px;
      }
      .sh-srv-card {
        background: var(--card-bg);
        border: 1px solid var(--card-border);
        border-radius: 16px;
        padding: 20px;
      }
      .sh-srv-card h3 {
        font-size: 16px;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .sh-srv-card p {
        font-size: 12px;
        color: var(--text-muted);
        line-height: 1.5;
      }

      @media (max-width: 860px) {
        .sh-hero { grid-template-columns: 1fr; }
        .sh-calc-grid { grid-template-columns: 1fr; }
        .sh-services-grid { grid-template-columns: 1fr; }
        .sh-pills { grid-template-columns: repeat(2, 1fr); }
      }
    `;
    document.head.appendChild(style);
  }

  // 3. Render Application
  function renderApp() {
    if (document.getElementById('shashune-smeta-app')) return;

    var app = document.createElement('div');
    app.id = 'shashune-smeta-app';
    app.className = 'sh-wrapper';
    app.innerHTML = `
      <!-- Header -->
      <header class="sh-header">
        <div class="sh-logo-box">
          <div class="sh-logo-badge" style="background:transparent; padding:0; overflow:hidden; border:2px solid rgba(0,242,254,0.4); box-shadow:0 0 20px rgba(0,242,254,0.35);"><img src="https://static.tildacdn.com/tild3734-3538-4463-a532-633930336132/kling_20260626_IMAGE.png" style="width:100%;height:100%;object-fit:cover;display:block;" alt="SHASHUNE"></div>
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

      <!-- Hero Section -->
      <section class="sh-hero">
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
          <div class="sh-features">
            <div class="sh-feature-item">
              <span style="font-size:20px;">📑</span>
              <div>
                <strong>База ФСНБ-2022 и РИМ</strong>
                <span>Актуальные индексы Минстроя</span>
              </div>
            </div>
            <div class="sh-feature-item">
              <span style="font-size:20px;">⚖️</span>
              <div>
                <strong>КАЦ по Методике 421/пр</strong>
                <span>Сбор 3 КП поставщиков</span>
              </div>
            </div>
            <div class="sh-feature-item">
              <span style="font-size:20px;">🛡️</span>
              <div>
                <strong>Защита в экспертизе</strong>
                <span>До полного согласования</span>
              </div>
            </div>
            <div class="sh-feature-item">
              <span style="font-size:20px;">⏱️</span>
              <div>
                <strong>Срочный расчет от 4 часов</strong>
                <span>Когда тендер горит</span>
              </div>
            </div>
          </div>
        </div>

                <!-- Hero Card with Big Beautiful Photo of Alexander -->
        <div class="sh-profile-card" style="padding:0; overflow:hidden; border:2px solid rgba(0,242,254,0.3); border-radius:24px; box-shadow:0 25px 60px rgba(0,0,0,0.7);">
          <div style="position:relative; width:100%; height:320px; overflow:hidden;">
            <img src="https://optim.tildacdn.com/tild3932-3331-4662-a233-306666633766/-/format/webp/kling_20260614_IMAGE.png.webp" style="width:100%; height:100%; object-fit:cover; object-position:center 15%; display:block;" alt="Александр Сметчик">
            <div style="position:absolute; inset:0; background:linear-gradient(180deg, transparent 40%, rgba(18,22,34,0.95) 100%);"></div>
            <div style="position:absolute; bottom:16px; left:20px; right:20px; display:flex; justify-content:space-between; align-items:flex-end;">
              <div>
                <span style="display:inline-block; padding:3px 10px; border-radius:6px; background:var(--accent-cyan); color:#000; font-size:10px; font-weight:700; text-transform:uppercase; margin-bottom:4px;">Ведущий инженер</span>
                <h3 style="font-family:'Space Grotesk', sans-serif; font-size:22px; font-weight:700; color:#fff; line-height:1.2;">Александр</h3>
                <p style="font-size:12px; color:var(--text-muted);">Сметчик / ПТО / Экспертиза</p>
              </div>
              <div class="sh-status" style="margin:0; background:rgba(0,0,0,0.6); padding:4px 10px; border-radius:20px; border:1px solid rgba(0,230,118,0.3);">
                <span class="sh-dot"></span> <span style="font-size:11px; color:var(--accent-green);">На связи</span>
              </div>
            </div>
          </div>
          <div style="padding:20px;">
            <div class="sh-stats-grid" style="margin-bottom:16px;">
              <div class="sh-stat-box">
                <span class="num">12+</span>
                <span class="lbl">Лет опыта</span>
              </div>
              <div class="sh-stat-box">
                <span class="num">1 400+</span>
                <span class="lbl">Смет сдано</span>
              </div>
              <div class="sh-stat-box">
                <span class="num">100%</span>
                <span class="lbl">Экспертиза</span>
              </div>
            </div>
            <div class="sh-channel-action-row">
              <a href="https://max.ru/u/f9LHodD0cOIF0exFC6zS5TYTCkCTYvNG_l_FSTBtmcLhc6Gi6FycHMpx0bA" target="_blank" class="sh-act-btn sh-act-max">
                <img src="https://cdn.jsdelivr.net/gh/snesterov/shashune@main/assets/max_logo.png" style="width:18px;height:18px;" alt="MAX">
                <span>Связаться с Александром в MAX</span>
              </a>
              <a href="https://t.me/ENGINEERAlexander" target="_blank" class="sh-act-btn sh-act-tg">
                <img src="https://cdn.jsdelivr.net/gh/snesterov/shashune@main/assets/tg_logo.png" style="width:18px;height:18px;" alt="TG">
                <span>Написать в Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Interactive Calculator & Services -->
      <section class="sh-box">
        <div class="sh-box-header">
          <div class="sh-box-title">
            <h2>Онлайн-калькулятор сметного расчета</h2>
            <p>Укажите параметры объекта и отправьте сформированное ТЗ напрямую в мессенджер</p>
          </div>
          <div class="sh-tabs">
            <button class="sh-tab active" onclick="window.switchTab('calc')">Калькулятор</button>
            <button class="sh-tab" onclick="window.switchTab('audit')">Загрузить файл на аудит</button>
          </div>
        </div>

        <!-- Tab 1: Calc -->
        <div id="tab-calc" class="sh-tab-pane">
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

            <!-- Result Card with Dual-Platform Send -->
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
        </div>

        <!-- Tab 2: Audit & Files -->
        <div id="tab-audit" class="sh-tab-pane" style="display:none; text-align:center; padding:20px;">
          <h3 style="font-size:20px; margin-bottom:8px;">Экспресс-аудит вашей сметы</h3>
          <p style="font-size:13px; color:var(--text-muted); max-width:540px; margin:0 auto 20px;">
            Отправьте файл в формате .gsfx, .xml, .xls или PDF чертеж напрямую в MAX или Telegram. Александр бесплатно проверит соответствие индексам Минстроя за 30 минут.
          </p>
          <div class="sh-send-btns" style="max-width:440px; margin:0 auto;">
            <a href="https://max.ru/u/f9LHodD0cOIF0exFC6zS5TYTCkCTYvNG_l_FSTBtmcLhc6Gi6FycHMpx0bA" target="_blank" class="sh-btn-send sh-btn-send-max">
              <img src="https://cdn.jsdelivr.net/gh/snesterov/shashune@main/assets/max_logo.png" alt="MAX">
              <span>Прикрепить файл в MAX</span>
            </a>
            <a href="https://t.me/ENGINEERAlexander" target="_blank" class="sh-btn-send sh-btn-send-tg">
              <img src="https://cdn.jsdelivr.net/gh/snesterov/shashune@main/assets/tg_logo.png" alt="TG">
              <span>Прикрепить файл в Telegram</span>
            </a>
          </div>
        </div>
      </section>

      
            <div id="sh-native-form-slot"></div>
      <!-- Compact Mini Video at Bottom -->
      <section style="display:flex; justify-content:center; margin: 0 auto 40px; padding: 0 20px;">
        <div style="width: 100%; max-width: 480px; border-radius: 18px; overflow: hidden; border: 1px solid rgba(255,255,255,0.12); box-shadow: 0 10px 30px rgba(0,0,0,0.5); background: #000; aspect-ratio: 16 / 9;">
          <iframe 
            src="https://kinescope.io/embed/eLFpJ32n2N9LGMVdCr7xQa" 
            style="width: 100%; height: 100%; border: none; display: block;" 
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media;" 
            allowfullscreen>
          </iframe>
        </div>
      </section>

      <!-- Services 3-Grid -->
      <section class="sh-services-grid">
        <div class="sh-srv-card">
          <h3><span>📊</span> Сметы на все виды работ</h3>
          <p>Строительство, благоустройство, наружные сети, капремонт, отделка, электрика и вентиляция.</p>
        </div>
        <div class="sh-srv-card">
          <h3><span>📋</span> Закрывающие акты (КС-2, КС-3)</h3>
          <p>Формирование полного пакета исполнительной документации для сдачи технадзору и заказчику.</p>
        </div>
        <div class="sh-srv-card">
          <h3><span>🏗️</span> Конъюнктурный анализ (КАЦ)</h3>
          <p>Обоснование стоимости материалов по Методике 421/пр со сбором КП, скриншотами и кодами КСР.</p>
        </div>
      </section>
    `;

    var tildaRecords = document.getElementById('allrecords') || document.body;
    tildaRecords.insertBefore(app, tildaRecords.firstChild);

    
    // Reposition native Tilda Form inside our layout
    var nativeForm = document.getElementById('rec4768360701') || document.getElementById('rec689290170') || document.querySelector('[data-record-type="698"]');
    var formAnchor = document.getElementById('sh-native-form-slot');
    if (nativeForm && formAnchor) {
      formAnchor.parentNode.insertBefore(nativeForm, formAnchor);
    }

    initInteractiveLogic();
  }

  // 4. Interactive Engine
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

    window.switchTab = function(tabId) {
      var tabs = document.querySelectorAll('.sh-tab');
      for (var i = 0; i < tabs.length; i++) tabs[i].classList.remove('active');
      if (event && event.target) event.target.classList.add('active');

      document.getElementById('tab-calc').style.display = tabId === 'calc' ? 'block' : 'none';
      document.getElementById('tab-audit').style.display = tabId === 'audit' ? 'block' : 'none';
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

      // Trigger Yandex Metrika goal if installed
      if (typeof ym === 'function') {
        try { ym(window.yaCounterId || 0, 'reachGoal', 'calc_order_' + platform); } catch(e) {}
      }

      if (platform === 'max') {
        window.open("https://max.ru/u/f9LHodD0cOIF0exFC6zS5TYTCkCTYvNG_l_FSTBtmcLhc6Gi6FycHMpx0bA", '_blank');
      } else {
        window.open("https://t.me/ENGINEERAlexander?text=" + encodeURIComponent(text), '_blank');
      }
    };

    window.updateCalc();
  }

  renderApp();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderApp);
  }
  window.addEventListener('load', renderApp);
  setTimeout(renderApp, 300);
  setTimeout(renderApp, 1000);
})();
