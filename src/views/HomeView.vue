<script setup lang="ts">
import type { Component } from "vue";
import {
  ArrowRight,
  Bell,
  Calendar,
  CircleCheck,
  DataAnalysis,
  Link,
  Tickets,
} from "@element-plus/icons-vue";
import { ElButton, ElIcon } from "element-plus";

interface NavItem {
  label: string;
  target: string;
}

interface FeatureCard {
  icon: Component;
  title: string;
  description: string;
}

interface ServiceItem {
  icon: Component;
  label: string;
}

const navItems: NavItem[] = [
  { label: "网站介绍", target: "#intro" },
  { label: "主要功能", target: "#features" },
  { label: "提供服务", target: "#services" },
];

const featureCards: FeatureCard[] = [
  {
    icon: Bell,
    title: "多轮智能提醒",
    description:
      "从开票前 24 小时到最后 10 分钟，全方位覆盖关键节点，不再错过任何一次正式开票窗口。",
  },
  {
    icon: Link,
    title: "官方合规聚合",
    description:
      "一键跳转大麦、猫眼等官方售票平台，统一整理入口与规则说明，安全、可靠、路径清晰。",
  },
  {
    icon: CircleCheck,
    title: "抢票检查清单",
    description:
      "提前核验实名认证、常用观演人、支付方式与设备状态，避免在最关键的时刻掉链子。",
  },
];

const serviceItems: ServiceItem[] = [
  { icon: Calendar, label: "手机日历同步规划" },
  { icon: Tickets, label: "购票后电子票夹管理" },
  { icon: DataAnalysis, label: "官方余票状态动态跟踪" },
];

function scrollToSection(target: string) {
  const element = document.querySelector<HTMLElement>(target);

  if (!element) {
    return;
  }

  window.history.replaceState({}, "", target);
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}
</script>

<template>
  <div class="homepage">
    <main class="homepage-shell">
      <header class="topbar surface-card">
        <div class="brand-lockup">
          <div class="brand-mark">
            <div class="brand-mark__dot" />
          </div>
          <div class="brand-copy">
            <strong>Concert Ticket Assistant</strong>
            <span>安全、合规、高效的演唱会官方助手</span>
          </div>
        </div>

        <nav class="topbar-nav" aria-label="页面导航">
          <button
            v-for="item in navItems"
            :key="item.target"
            class="nav-link"
            type="button"
            @click="scrollToSection(item.target)"
          >
            {{ item.label }}
          </button>
        </nav>

        <ElButton
          class="action-button action-button--dark"
          @click="scrollToSection('#services')"
        >
          立即体验
        </ElButton>
      </header>

      <section class="hero-section reveal-fade" id="intro">
        <div class="hero-copy">
          <h1>让每场演出都存在遗憾。</h1>
          <p>
            基于官方规则打造的演唱会智能助手。提前获取开票提醒、完成准备清单，从容直达官方入口。安全、合规、高效。
          </p>

          <div class="hero-actions">
            <ElButton
              class="action-button action-button--primary"
              @click="scrollToSection('#services')"
            >
              免费使用
              <ElIcon class="button-arrow">
                <ArrowRight />
              </ElIcon>
            </ElButton>

            <ElButton
              plain
              class="action-button action-button--ghost"
              @click="scrollToSection('#features')"
            >
              了解更多
            </ElButton>
          </div>
        </div>

        <div class="hero-visual surface-card">
          <div class="visual-stage">
            <div class="stage-aura" />

            <div class="stage-copy">
              <span>Live Companion</span>
              <strong>演唱会现场与智能提醒 Dashboard</strong>
              <p>把开票提醒、官方入口和入场准备放进同一块信息面板里。</p>
            </div>

            <div class="stage-lights">
              <div class="stage-lights__beam stage-lights__beam--left" />
              <div class="stage-lights__beam stage-lights__beam--center" />
              <div class="stage-lights__beam stage-lights__beam--right" />
            </div>
          </div>

          <div class="visual-dashboard">
            <div class="dashboard-grid">
              <article class="dashboard-card">
                <span>倒计时提醒</span>
                <strong>距开票还有 02:18:36</strong>
              </article>
              <article class="dashboard-card">
                <span>抢票进度</span>
                <strong>实名认证已完成</strong>
                <p>观演人、支付方式与常用设备均已核验。</p>
              </article>

              <article class="dashboard-card">
                <span>入场准备</span>
                <strong>电子票夹已创建</strong>
                <p>场馆地图、停车分区与安检提醒已打包完成。</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="feature-section reveal-fade" id="features">
        <div class="section-heading">
          <h2>为抢票保驾护航</h2>
        </div>

        <div class="feature-grid">
          <article
            v-for="card in featureCards"
            :key="card.title"
            class="feature-card surface-card"
          >
            <div class="feature-icon">
              <ElIcon>
                <component :is="card.icon" />
              </ElIcon>
            </div>
            <h3>{{ card.title }}</h3>
            <p>{{ card.description }}</p>
          </article>
        </div>
      </section>

      <section class="service-section reveal-fade" id="services">
        <div class="section-heading">
          <h2>全面服务矩阵，从购票到入场</h2>
        </div>

        <div class="service-banner">
          <article
            v-for="item in serviceItems"
            :key="item.label"
            class="service-item"
          >
            <div class="service-item__icon">
              <ElIcon>
                <component :is="item.icon" />
              </ElIcon>
            </div>
            <span>{{ item.label }}</span>
          </article>
        </div>
      </section>

      <footer class="footer-shell">
        <span>Concert Ticket Assistant © 2026</span>
        <span>官方规则优先 · 路径清晰 · 从容抵达开票现场</span>
      </footer>
    </main>
  </div>
</template>

<style scoped>
.homepage {
  min-height: 100vh;
  padding: 32px 24px 72px;
  background:
    radial-gradient(
      circle at top,
      rgba(255, 255, 255, 0.95),
      rgba(245, 245, 247, 0) 38%
    ),
    linear-gradient(180deg, #f9f9fb 0%, #f5f5f7 100%);
  color: #1d1d1f;
}

.homepage-shell {
  width: min(100%, 1440px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 120px;
  font-family:
    "Inter", "SF Pro Display", "SF Pro Text", "Helvetica Neue", sans-serif;
}

.surface-card {
  background: #ffffff;
  border: 1px solid #e5e5ea;
  box-shadow: 0 12px 36px rgba(17, 24, 39, 0.08);
}

.topbar {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 24px;
  min-height: 64px;
  padding: 14px 20px 14px 28px;
  border-radius: 32px;
}

.brand-lockup {
  display: inline-flex;
  align-items: center;
  gap: 16px;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 16px;
  background: linear-gradient(135deg, #0071e3, #53a6ff);
}

.brand-mark__dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.18);
}

.brand-copy {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.brand-copy strong {
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
}

.brand-copy span {
  color: #6e6e73;
  font-size: 13px;
  line-height: 1.3;
}

.topbar-nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 32px;
  min-width: 0;
}

.nav-link {
  padding: 0;
  color: #1d1d1f;
  background: transparent;
  border: 0;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
  cursor: pointer;
  transition:
    color 180ms ease,
    opacity 180ms ease;
}

.nav-link:hover,
.nav-link:focus-visible {
  color: #0071e3;
  outline: none;
}

.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
}

.hero-copy {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
}

.eyebrow {
  color: #0071e3;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0.01em;
}

.eyebrow--center {
  display: block;
  margin-bottom: 12px;
}

.hero-copy h1,
.section-heading h2 {
  margin: 0;
  letter-spacing: -0.04em;
}

.hero-copy h1 {
  max-width: 1180px;
  font-size: clamp(48px, 7vw, 72px);
  font-weight: 800;
  line-height: 1.08;
}

.hero-copy p {
  max-width: 900px;
  margin: 0;
  color: #4a4a4f;
  font-size: clamp(19px, 2vw, 24px);
  font-weight: 500;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.hero-visual {
  width: 100%;
  min-height: 600px;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
  gap: 24px;
  padding: 28px;
  border-radius: 40px;
}

.visual-stage {
  position: relative;
  overflow: hidden;
  border-radius: 32px;
  background:
    radial-gradient(
      circle at 50% 18%,
      rgba(255, 255, 255, 0.2),
      transparent 28%
    ),
    linear-gradient(180deg, rgba(5, 15, 38, 0.78), rgba(7, 18, 46, 0.96)),
    linear-gradient(135deg, #162038, #090c14);
  min-height: 420px;
}

.visual-stage::after {
  content: "";
  position: absolute;
  inset: auto 0 0;
  height: 42%;
  background:
    linear-gradient(180deg, rgba(7, 18, 46, 0) 0%, rgba(7, 18, 46, 0.96) 100%),
    radial-gradient(
      circle at 50% 8%,
      rgba(255, 255, 255, 0.12),
      transparent 48%
    );
}

.stage-aura {
  position: absolute;
  inset: auto 10% -16% 10%;
  height: 48%;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(0, 113, 227, 0.42),
    rgba(0, 113, 227, 0) 68%
  );
  filter: blur(18px);
}

.stage-copy {
  position: absolute;
  left: 36px;
  right: 36px;
  bottom: 36px;
  z-index: 1;
  color: #ffffff;
}

.stage-copy span {
  display: inline-flex;
  padding: 8px 14px;
  border-radius: 999px;
  margin-bottom: 18px;
  color: rgba(255, 255, 255, 0.78);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.stage-copy strong {
  display: block;
  font-size: clamp(24px, 3vw, 34px);
  font-weight: 700;
  line-height: 1.15;
}

.stage-copy p {
  max-width: 420px;
  margin: 12px 0 0;
  color: rgba(255, 255, 255, 0.76);
  font-size: 15px;
  line-height: 1.6;
}

.stage-lights {
  position: absolute;
  inset: 0;
}

.stage-lights__beam {
  position: absolute;
  top: -16%;
  width: 180px;
  height: 132%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0)
  );
  clip-path: polygon(46% 0, 54% 0, 100% 100%, 0 100%);
  opacity: 0.82;
}

.stage-lights__beam--left {
  left: 10%;
  transform: rotate(-12deg);
}

.stage-lights__beam--center {
  left: calc(50% - 110px);
  width: 220px;
}

.stage-lights__beam--right {
  right: 10%;
  transform: rotate(12deg);
}

.visual-dashboard {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.dashboard-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 22px;
  border-radius: 28px;
  background: linear-gradient(180deg, #ffffff, #f7f8fb);
  border: 1px solid #ececf1;
}

.dashboard-card--hero {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 148px;
}

.dashboard-card span {
  color: #6e6e73;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.4;
}

.dashboard-card strong {
  color: #1d1d1f;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.25;
}

.dashboard-card p {
  margin: 0;
  color: #4a4a4f;
  font-size: 14px;
  line-height: 1.6;
}

.dashboard-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  padding: 8px 14px;
  border-radius: 999px;
  color: #0071e3;
  background: rgba(0, 113, 227, 0.08);
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
}

.feature-section,
.service-section {
  display: flex;
  flex-direction: column;
  gap: 56px;
}

.section-heading {
  text-align: center;
}

.section-heading h2 {
  font-size: clamp(36px, 4vw, 48px);
  font-weight: 700;
  line-height: 1.12;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 30px;
}

.feature-card {
  min-height: 340px;
  padding: 40px;
  border-radius: 32px;
}

.feature-icon,
.service-item__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
}

.feature-icon {
  width: 64px;
  height: 64px;
  border-radius: 20px;
  margin-bottom: 36px;
  color: #0071e3;
  background: #f5f5f7;
  font-size: 30px;
}

.feature-card h3 {
  margin: 0 0 14px;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
}

.feature-card p {
  margin: 0;
  color: #4a4a4f;
  font-size: 17px;
  font-weight: 500;
  line-height: 1.7;
}

.service-banner {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  padding: 32px 40px;
  border-radius: 32px;
  background: #1d1d1f;
  box-shadow: 0 20px 40px rgba(29, 29, 31, 0.2);
}

.service-item {
  display: flex;
  align-items: center;
  gap: 18px;
  min-width: 0;
  color: #f5f5f7;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.35;
}

.service-item__icon {
  width: 56px;
  height: 56px;
  border-radius: 18px;
  color: #9ecfff;
  background: rgba(255, 255, 255, 0.08);
  font-size: 24px;
}

.footer-shell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 4px 6px;
  color: #6e6e73;
  font-size: 13px;
  line-height: 1.5;
}

.reveal-fade {
  animation: reveal-fade 560ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

.homepage :deep(.action-button.el-button) {
  min-width: 100px;
  height: 56px;
  padding: 0 24px;
  border-radius: 28px;
  font-size: 17px;
  font-weight: 600;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    background-color 180ms ease,
    border-color 180ms ease,
    color 180ms ease;
}

.homepage :deep(.action-button--dark.el-button) {
  height: 36px;
  padding: 0 20px;
  border: 0;
  color: #ffffff;
  background: #1d1d1f;
}

.homepage :deep(.action-button--primary.el-button) {
  border: 0;
  color: #ffffff;
  background: #0071e3;
}

.homepage :deep(.action-button--ghost.el-button) {
  border-width: 2px;
  border-color: #0071e3;
  color: #0071e3;
  background: transparent;
}

.homepage :deep(.action-button.el-button:hover) {
  transform: translateY(-1px);
}

.button-arrow {
  margin-left: 6px;
  font-size: 16px;
}

.homepage :deep(.action-button--dark.el-button:hover) {
  background: #2f2f33;
}

.homepage :deep(.action-button--primary.el-button:hover) {
  background: #0077ed;
  box-shadow: 0 16px 30px rgba(0, 113, 227, 0.18);
}

.homepage :deep(.action-button--ghost.el-button:hover) {
  border-color: #0077ed;
  color: #0077ed;
  background: rgba(0, 113, 227, 0.04);
}

.homepage :deep(.action-button.el-button:focus-visible),
.nav-link:focus-visible {
  outline: 2px solid rgba(0, 113, 227, 0.28);
  outline-offset: 3px;
}

@keyframes reveal-fade {
  from {
    opacity: 0;
    transform: translateY(16px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1260px) {
  .topbar,
  .hero-visual {
    grid-template-columns: 1fr;
  }

  .topbar-nav {
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .feature-grid,
  .service-banner {
    grid-template-columns: 1fr;
  }

  .service-item {
    font-size: 20px;
  }
}

@media (max-width: 900px) {
  .homepage {
    padding: 20px 16px 56px;
  }

  .homepage-shell {
    gap: 88px;
  }

  .topbar {
    padding: 18px;
    border-radius: 28px;
  }

  .hero-copy h1 {
    font-size: clamp(42px, 12vw, 60px);
  }

  .hero-copy p {
    font-size: 18px;
  }

  .hero-visual {
    padding: 20px;
    border-radius: 32px;
  }

  .visual-stage,
  .dashboard-card,
  .feature-card,
  .service-banner {
    border-radius: 28px;
  }

  .feature-card {
    min-height: auto;
    padding: 32px;
  }

  .service-banner {
    padding: 24px;
  }

  .footer-shell {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 640px) {
  .topbar {
    gap: 18px;
  }

  .brand-lockup {
    align-items: flex-start;
  }

  .hero-actions,
  .dashboard-card--hero {
    flex-direction: column;
    align-items: stretch;
  }

  .stage-copy {
    left: 22px;
    right: 22px;
    bottom: 24px;
  }

  .feature-card,
  .dashboard-card,
  .service-banner {
    padding: 22px;
  }

  .service-item {
    align-items: flex-start;
    font-size: 18px;
  }

  .service-item__icon {
    width: 48px;
    height: 48px;
    border-radius: 16px;
    font-size: 21px;
  }

  .homepage :deep(.action-button.el-button) {
    width: 100%;
  }

  .homepage :deep(.action-button--dark.el-button) {
    width: auto;
  }
}
</style>
