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
      
      
      /* Native Tilda Form (rec4768360701) - Seamless Dark-Tech Container without offsets */
      #rec4768360701, [data-record-type="698"] {
        display: block !important;
        background: transparent !important;
        padding: 0 !important;
        margin: 0 auto 50px auto !important;
        max-width: 680px !important;
        position: relative !important;
        z-index: 10 !important;
      }
      #rec4768360701 .t-cover {
        height: auto !important;
        min-height: auto !important;
        background: transparent !important;
        background-image: none !important;
        overflow: visible !important;
        padding: 0 !important;
        margin: 0 !important;
      }
      #rec4768360701 .t-cover__carrier,
      #rec4768360701 .t-cover__filter,
      #rec4768360701 .t-cover__arrow {
        display: none !important;
        height: 0 !important;
        min-height: 0 !important;
      }
      #rec4768360701 .t698 {
        padding: 0 !important;
        margin: 0 !important;
        position: relative !important;
      }
      #rec4768360701 .t-container {
        width: 100% !important;
        max-width: 100% !important;
        padding: 0 !important;
        margin: 0 !important;
        position: relative !important;
      }
      #rec4768360701 .t698__mainblock {
        width: 100% !important;
        max-width: 100% !important;
        padding: 0 !important;
        margin: 0 !important;
        float: none !important;
      }
      #rec4768360701 .t-cover__wrapper {
        height: auto !important;
        min-height: auto !important;
        display: block !important;
        padding: 0 !important;
        margin: 0 !important;
        width: 100% !important;
      }
      #rec4768360701 .t698__mainwrapper {
        background: linear-gradient(145deg, rgba(20, 28, 48, 0.95), rgba(12, 16, 28, 0.98)) !important;
        border: 1px solid rgba(0, 242, 254, 0.3) !important;
        border-radius: 22px !important;
        padding: 36px 30px !important;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6) !important;
        width: 100% !important;
        box-sizing: border-box !important;
        margin: 0 auto !important;
      }
      #rec4768360701 .t698__title {
        font-family: 'Space Grotesk', sans-serif !important;
        color: #ffffff !important;
        font-size: 24px !important;
        font-weight: 700 !important;
        text-align: center !important;
        margin-bottom: 24px !important;
        letter-spacing: -0.01em !important;
      }
      
      /* Form Inputs Alignment */
      #rec4768360701 .t-form__inputsbox {
        display: flex !important;
        flex-direction: column !important;
        gap: 16px !important;
      }
      #rec4768360701 .t-input-group {
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
      }
      #rec4768360701 .t-input-block {
        width: 100% !important;
      }
      #rec4768360701 .t-input {
        background: rgba(255, 255, 255, 0.05) !important;
        border: 1px solid var(--card-border) !important;
        color: #ffffff !important;
        border-radius: 12px !important;
        padding: 14px 18px !important;
        font-size: 15px !important;
        width: 100% !important;
        height: 52px !important;
        box-sizing: border-box !important;
        transition: border-color 0.2s, box-shadow 0.2s !important;
      }
      #rec4768360701 .t-input:focus {
        border-color: var(--accent-cyan) !important;
        box-shadow: 0 0 15px rgba(0, 242, 254, 0.2) !important;
        outline: none !important;
      }
      
      /* Tilda Phone Mask Wrapper with Country Flag */
      #rec4768360701 .t-input-phonemask__wrap {
        display: flex !important;
        align-items: center !important;
        background: rgba(255, 255, 255, 0.05) !important;
        border: 1px solid var(--card-border) !important;
        border-radius: 12px !important;
        padding: 0 16px !important;
        height: 52px !important;
        box-sizing: border-box !important;
        width: 100% !important;
      }
      #rec4768360701 .t-input-phonemask__wrap:focus-within {
        border-color: var(--accent-cyan) !important;
        box-shadow: 0 0 15px rgba(0, 242, 254, 0.2) !important;
      }
      #rec4768360701 .t-input-phonemask__select {
        display: inline-flex !important;
        align-items: center !important;
        gap: 6px !important;
        cursor: pointer !important;
        margin-right: 10px !important;
        flex-shrink: 0 !important;
      }
      #rec4768360701 .t-input-phonemask__select-code {
        color: #ffffff !important;
        font-size: 15px !important;
        font-weight: 600 !important;
      }
      #rec4768360701 .t-input.t-input-phonemask {
        background: transparent !important;
        border: none !important;
        box-shadow: none !important;
        padding: 0 !important;
        height: 100% !important;
        color: #ffffff !important;
        font-size: 15px !important;
        width: 100% !important;
      }

      /* High-contrast Placeholders and Mask Prompts */
      #rec4768360701 .t-input::placeholder,
      #rec4768360701 input::placeholder,
      #rec4768360701 textarea::placeholder {
        color: #94a3b8 !important;
        opacity: 1 !important;
        font-size: 14px !important;
      }
      #rec4768360701 .t-input::-webkit-input-placeholder,
      #rec4768360701 input::-webkit-input-placeholder {
        color: #94a3b8 !important;
        opacity: 1 !important;
      }
      #rec4768360701 .t-input::-moz-placeholder,
      #rec4768360701 input::-moz-placeholder {
        color: #94a3b8 !important;
        opacity: 1 !important;
      }
      #rec4768360701 .t-input:-ms-input-placeholder,
      #rec4768360701 input:-ms-input-placeholder {
        color: #94a3b8 !important;
        opacity: 1 !important;
      }
      #rec4768360701 .t-input-phonemask__select-code {
        color: #00f2fe !important;
        font-weight: 700 !important;
        font-size: 15px !important;
      }
      #rec4768360701 .t-input-phonemask__placeholder {
        color: #94a3b8 !important;
        opacity: 1 !important;
      }
      #rec4768360701 .t-checkbox__control span {
        color: #cbd5e1 !important;
      }
      #rec4768360701 .t-checkbox__control a {
        color: #00f2fe !important;
      }

      /* Checkbox & Policy */
      #rec4768360701 .t-checkbox__control {
        display: flex !important;
        align-items: flex-start !important;
        gap: 12px !important;
        cursor: pointer !important;
        padding: 4px 0 !important;
      }
      #rec4768360701 .t-checkbox__indicator {
        width: 18px !important;
        height: 18px !important;
        min-width: 18px !important;
        border: 2px solid rgba(0, 242, 254, 0.5) !important;
        border-radius: 5px !important;
        background: rgba(255, 255, 255, 0.05) !important;
        margin-top: 2px !important;
        flex-shrink: 0 !important;
        transition: all 0.2s !important;
      }
      #rec4768360701 .t-checkbox:checked + .t-checkbox__indicator {
        background: var(--accent-cyan) !important;
        border-color: var(--accent-cyan) !important;
      }
      #rec4768360701 .t-checkbox__control span {
        color: var(--text-muted) !important;
        font-size: 12px !important;
        line-height: 1.4 !important;
      }

      /* Submit Button */
      #rec4768360701 .t-form__submit {
        margin-top: 10px !important;
      }
      #rec4768360701 .t-submit {
        background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue)) !important;
        color: #000000 !important;
        font-family: 'Space Grotesk', sans-serif !important;
        font-weight: 700 !important;
        font-size: 16px !important;
        border-radius: 12px !important;
        height: 54px !important;
        width: 100% !important;
        box-shadow: 0 4px 25px rgba(0, 242, 254, 0.4) !important;
        border: none !important;
        cursor: pointer !important;
        transition: transform 0.2s, box-shadow 0.2s !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
      }
      #rec4768360701 .t-submit:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 30px rgba(0, 242, 254, 0.6) !important;
      }

      /* Hide standard Tilda Footer without touching cookie banner */
      #rec892253692, #footer_892253692, .t345, footer#t-footer .t345 {
        display: none !important;
        height: 0 !important;
        min-height: 0 !important;
        overflow: hidden !important;
        visibility: hidden !important;
      }

      /* Allow Cookie Widget (rec2387871911, type 972) to stay visible */
      #allrecords > .r:not([data-record-type="123"]):not([data-record-type="131"]):not(#rec4768367401):not(#rec4768360701):not([data-record-type="698"]):not(#rec2387871911):not([data-record-type="972"]):not(.sh-preserve) {
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

      
      /* Tilda Cookie Banner (t972 / rec2387871911) Dark-Tech Styling */
      .t972, .t972__banner {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
      }
      .t972__banner {
        background: rgba(14, 18, 30, 0.96) !important;
        backdrop-filter: blur(20px) !important;
        -webkit-backdrop-filter: blur(20px) !important;
        border: 1px solid rgba(0, 242, 254, 0.3) !important;
        border-radius: 18px !important;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7), 0 0 25px rgba(0, 242, 254, 0.15) !important;
        color: #f0f3fa !important;
      }
      .t972__text, .t972__text * {
        color: #cbd5e1 !important;
        font-size: 13px !important;
        line-height: 1.5 !important;
      }
      .t972__text a {
        color: #00f2fe !important;
        text-decoration: underline !important;
        transition: opacity 0.2s !important;
      }
      .t972__text a:hover {
        opacity: 0.8 !important;
      }
      .t972__btn, .t972__widget-button, .t972__btn-wrapper button {
        background: linear-gradient(135deg, #00f2fe, #4facfe) !important;
        color: #040814 !important;
        font-family: 'Space Grotesk', sans-serif !important;
        font-weight: 700 !important;
        font-size: 13px !important;
        border: none !important;
        border-radius: 10px !important;
        padding: 10px 22px !important;
        cursor: pointer !important;
        box-shadow: 0 4px 15px rgba(0, 242, 254, 0.4) !important;
        transition: transform 0.2s, box-shadow 0.2s !important;
      }
      .t972__btn:hover, .t972__widget-button:hover, .t972__btn-wrapper button:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 20px rgba(0, 242, 254, 0.6) !important;
      }

      /* Dark-Tech Contacts Footer Block */
      .sh-footer {
        max-width: 1200px;
        margin: 40px auto 0;
        padding: 40px 24px 30px;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        background: linear-gradient(180deg, transparent, rgba(14, 18, 28, 0.6));
        border-radius: 24px 24px 0 0;
      }
      .sh-footer-grid {
        display: grid;
        grid-template-columns: 1.4fr 1fr;
        gap: 32px;
        align-items: start;
        margin-bottom: 30px;
      }
      .sh-footer-author {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .sh-footer-author-title {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 19px;
        font-weight: 700;
        color: #ffffff;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .sh-footer-author-role {
        font-size: 14px;
        color: #00f2fe;
        font-weight: 500;
      }
      .sh-footer-inn {
        font-size: 13px;
        color: #8e9bb0;
        letter-spacing: 0.3px;
      }
      .sh-footer-desc {
        font-size: 12px;
        color: #64748b;
        line-height: 1.5;
        margin-top: 4px;
        max-width: 480px;
      }
      .sh-footer-contacts {
        display: flex;
        flex-direction: column;
        gap: 12px;
        align-items: flex-end;
      }
      .sh-footer-contacts-label {
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #8e9bb0;
        font-weight: 600;
      }
      .sh-footer-btns {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: flex-end;
      }
      .sh-footer-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 9px 16px;
        border-radius: 12px;
        font-size: 13px;
        font-weight: 600;
        text-decoration: none;
        color: #ffffff;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.12);
        transition: all 0.25s ease;
      }
      .sh-footer-btn img {
        width: 18px;
        height: 18px;
        object-fit: contain;
      }
      .sh-footer-btn-max:hover {
        background: rgba(255, 107, 53, 0.15);
        border-color: #ff6b35;
        box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
      }
      .sh-footer-btn-tg:hover {
        background: rgba(34, 158, 217, 0.15);
        border-color: #229ed9;
        box-shadow: 0 4px 15px rgba(34, 158, 217, 0.3);
      }
      .sh-footer-btn-wa:hover {
        background: rgba(37, 211, 102, 0.15);
        border-color: #25d366;
        box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
      }
      .sh-footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 16px;
        padding-top: 24px;
        border-top: 1px solid rgba(255, 255, 255, 0.06);
        font-size: 12px;
        color: #64748b;
      }
      .sh-footer-policy-link {
        color: #8e9bb0;
        text-decoration: underline;
        cursor: pointer;
        transition: color 0.2s ease;
      }
      .sh-footer-policy-link:hover {
        color: #00f2fe;
      }

      /* Privacy Policy Modal Window */
      .sh-modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(4, 7, 15, 0.82);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        z-index: 999999;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 20px;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .sh-modal-backdrop.active {
        display: flex;
        opacity: 1;
      }
      .sh-modal-box {
        background: #0d121f;
        border: 1px solid rgba(0, 242, 254, 0.35);
        border-radius: 20px;
        max-width: 820px;
        width: 100%;
        max-height: 85vh;
        display: flex;
        flex-direction: column;
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 242, 254, 0.15);
        animation: shModalPop 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        position: relative;
        overflow: hidden;
      }
      @keyframes shModalPop {
        from { transform: scale(0.94) translateY(10px); opacity: 0; }
        to { transform: scale(1) translateY(0); opacity: 1; }
      }
      .sh-modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 22px 28px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        background: rgba(18, 24, 40, 0.6);
      }
      .sh-modal-title {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 19px;
        font-weight: 700;
        color: #ffffff;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .sh-modal-close {
        width: 36px;
        height: 36px;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: #cbd5e1;
        font-size: 20px;
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .sh-modal-close:hover {
        background: rgba(255, 255, 255, 0.15);
        color: #ffffff;
        border-color: #00f2fe;
      }
      .sh-modal-body {
        padding: 24px 28px;
        overflow-y: auto;
        color: #cbd5e1;
        font-size: 13px;
        line-height: 1.65;
        font-family: 'Inter', sans-serif;
      }
      .sh-modal-body h4 {
        color: #ffffff;
        font-size: 15px;
        font-family: 'Space Grotesk', sans-serif;
        margin: 20px 0 8px;
      }
      .sh-modal-body h4:first-child {
        margin-top: 0;
      }
      .sh-modal-body p {
        margin-bottom: 12px;
      }
      .sh-modal-body ul {
        margin: 0 0 12px 20px;
        padding: 0;
      }
      .sh-modal-body li {
        margin-bottom: 6px;
      }
      .sh-modal-footer {
        padding: 16px 28px;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        display: flex;
        justify-content: flex-end;
        background: rgba(18, 24, 40, 0.6);
      }
      .sh-modal-btn {
        background: linear-gradient(135deg, #00f2fe, #4facfe);
        color: #040814;
        font-weight: 700;
        font-size: 13px;
        padding: 10px 24px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        transition: transform 0.2s;
      }
      .sh-modal-btn:hover {
        transform: translateY(-1px);
      }

      @media (max-width: 860px) {
        .sh-footer-grid { grid-template-columns: 1fr; gap: 24px; }
        .sh-footer-contacts { align-items: flex-start; }
        .sh-footer-btns { justify-content: flex-start; }
        .sh-footer-bottom { flex-direction: column; align-items: flex-start; gap: 12px; }
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
      <!-- Legal Contacts Footer Block -->
      <footer class="sh-footer">
        <div class="sh-footer-grid">
          <div class="sh-footer-author">
            <div class="sh-footer-author-title">
              <span>📐</span> Александр Владимирович
            </div>
            <div class="sh-footer-author-role">Ведущий инженер-сметчик строительных объектов РФ</div>
            <div class="sh-footer-inn">ИНН: 366508483980</div>
            <div class="sh-footer-desc">
              Профессиональная разработка и аудит сметной документации по Методике 421/пр (РИМ, БСМ, ГЭСН, ФЕР, ТЕР). Экспертиза для подрядчиков, заказчиков и банковского контроля.
            </div>
          </div>
          <div class="sh-footer-contacts">
            <div class="sh-footer-contacts-label">Прямая связь со специалистом</div>
            <div class="sh-footer-btns">
              <a href="https://max.ru/u/f9LHodD0cOIF0exFC6zS5TYTCkCTYvNG_l_FSTBtmcLhc6Gi6FycHMpx0bA" target="_blank" class="sh-footer-btn sh-footer-btn-max">
                <img src="https://cdn.jsdelivr.net/gh/snesterov/shashune@main/assets/max_logo.png" alt="MAX">
                <span>Мессенджер MAX</span>
              </a>
              <a href="https://t.me/ENGINEERAlexander" target="_blank" class="sh-footer-btn sh-footer-btn-tg">
                <img src="https://cdn.jsdelivr.net/gh/snesterov/shashune@main/assets/tg_logo.png" alt="TG">
                <span>Telegram</span>
              </a>
              <a href="https://api.whatsapp.com/send/?phone=79100405052" target="_blank" class="sh-footer-btn sh-footer-btn-wa">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#25d366"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
        <div class="sh-footer-bottom">
          <div>© 2026 SHASHUNE — Сметное сопровождение строительных объектов по всей территории РФ. Все права защищены.</div>
          <div>
            <a href="#policy" class="sh-footer-policy-link" onclick="window.openPolicy(); return false;">Политика конфиденциальности и обработка персональных данных</a>
          </div>
        </div>
      </footer>

      <!-- Privacy Policy Modal Window -->
      <div id="sh-policy-modal" class="sh-modal-backdrop" onclick="if(event.target === this) window.closePolicy();">
        <div class="sh-modal-box">
          <div class="sh-modal-header">
            <div class="sh-modal-title">
              <span>🛡️</span> Политика конфиденциальности и обработки данных
            </div>
            <button type="button" class="sh-modal-close" onclick="window.closePolicy();" aria-label="Закрыть">&times;</button>
          </div>
          <div class="sh-modal-body">
            <h4>1. Общие положения</h4>
            <p>Настоящая Политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности данных, предпринимаемые инженером-сметчиком Александром Владимировичем (ИНН: 366508483980, далее — Оператор).</p>
            <p>Оператор ставит важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.</p>

            <h4>2. Персональные данные, обрабатываемые Оператором</h4>
            <p>Оператор может обрабатывать следующие категории персональных данных Пользователя:</p>
            <ul>
              <li>Фамилия, имя, отчество или псевдоним;</li>
              <li>Номер контактного телефона;</li>
              <li>Идентификаторы и логины в мессенджерах (MAX, Telegram, WhatsApp);</li>
              <li>Адрес электронной почты (E-mail);</li>
              <li>Сведения о проектно-сметной документации, чертежах, ведомостях объемов работ и сопутствующих материалах, передаваемых для расчета смет;</li>
              <li>Обезличенные данные о посетителях сайта (в том числе файлы cookie, IP-адрес, данные систем аналитики Яндекс Метрика).</li>
            </ul>

            <h4>3. Цели обработки персональных данных</h4>
            <ul>
              <li>Расчет ориентировочной и точной стоимости составления сметной документации, КС-2, КС-3, КАЦ по методикам Минстроя РФ;</li>
              <li>Установление обратной связи по заявкам Пользователя через мессенджеры MAX, Telegram, WhatsApp или телефонную связь;</li>
              <li>Консультирование по вопросам сметного ценообразования и согласования документации в органах экспертизы;</li>
              <li>Улучшение качества обслуживания пользователей и работы интерактивных инструментов сайта с помощью файлов cookie и веб-аналитики.</li>
            </ul>

            <h4>4. Использование файлов Cookie</h4>
            <p>Настоящий сайт использует файлы cookie и сервисы веб-аналитики для сбора обезличенной статистической информации, обеспечения корректной работы калькулятора смет и сохранения предпочтений пользователя. Пользователь может в любой момент настроить параметры cookie в своем браузере или через виджет управления согласием.</p>

            <h4>5. Безопасность и нераспространение данных</h4>
            <p>Оператор гарантирует конфиденциальность полученных персональных данных. Персональные данные Пользователя никогда, ни при каких условиях не передаются третьим лицам, за исключением случаев, предусмотренных действующим законодательством Российской Федерации.</p>

            <h4>6. Срок обработки и отзыв согласия</h4>
            <p>Обработка персональных данных осуществляется до момента достижения целей обработки либо до момента отзыва согласия Пользователем. Пользователь может в любой момент отозвать свое согласие, направив уведомление в Telegram <a href="https://t.me/ENGINEERAlexander" target="_blank" style="color:#00f2fe;">@ENGINEERAlexander</a> или мессенджер MAX.</p>
          </div>
          <div class="sh-modal-footer">
            <button type="button" class="sh-modal-btn" onclick="window.closePolicy();">Понятно, закрыть</button>
          </div>
        </div>
      </div>
    `;


    var tildaRecords = document.getElementById('allrecords') || document.body;
    tildaRecords.insertBefore(app, tildaRecords.firstChild);

    

    // Relocate native Tilda Form smoothly into our layout
    function attachNativeForm() {
      var nativeForm = document.getElementById('rec4768360701');
      var formAnchor = document.getElementById('sh-native-form-slot');
      if (nativeForm && formAnchor && nativeForm.parentNode !== formAnchor.parentNode) {
        formAnchor.parentNode.insertBefore(nativeForm, formAnchor);
        nativeForm.style.display = 'block';
      }
      // Re-trigger country mask if loaded
      try {
        if (typeof t_form_phonemask_load === 'function' && nativeForm) {
          var pMasks = nativeForm.querySelectorAll('[data-phonemask-lid="8373215261581"]');
          t_form_phonemask_load(pMasks);
        }
      } catch(e) {}
    }
    attachNativeForm();
    setTimeout(attachNativeForm, 200);
    setTimeout(attachNativeForm, 800);


    
    // Privacy policy modal functions
    window.openPolicy = function() {
      var modal = document.getElementById('sh-policy-modal');
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    };

    window.closePolicy = function() {
      var modal = document.getElementById('sh-policy-modal');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    };

    // Attach click listener to native form policy link
    function hookPolicyLinks() {
      var links = document.querySelectorAll('a[href*="politika"], a[href*="privacy"], a[href="#policy"], .t-checkbox__control a');
      links.forEach(function(a) {
        if (!a.getAttribute('data-sh-hooked')) {
          a.setAttribute('data-sh-hooked', '1');
          a.addEventListener('click', function(e) {
            e.preventDefault();
            window.openPolicy();
          });
        }
      });
    }
    hookPolicyLinks();
    setTimeout(hookPolicyLinks, 500);
    setTimeout(hookPolicyLinks, 1500);

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
