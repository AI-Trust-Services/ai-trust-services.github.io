<script setup>
import { useSidebar } from 'vitepress/theme';
const { hasSidebar } = useSidebar()
</script>

<template>
  <footer class="VPFooter" :class="{ 'has-sidebar': hasSidebar }">
    <div class="container">
      <div class="funding-notice">
        <div class="funding-image">
          <img src="/eu_support.png" alt="EU and German government funding logos">
        </div>
        <div class="funding-text">
          <p><strong>Funded by the European Union – NextGenerationEU.</strong></p>
          <p>The views and opinions expressed are solely those of the author(s) and do not necessarily reflect the views of the European Union or the European Commission. Neither the European Union nor the European Commission can be held responsible for them.</p>
        </div>
      </div>
      <div class="legal-bar">
        <a href="https://www.sap.com/" target="_blank" rel="noopener noreferrer" class="sap-logo-link">
          <img src="/sap-logo.svg" alt="Logo of SAP SE" class="sap-logo">
        </a>
        <p>© 2024–2026 SAP SE or an SAP affiliate company. All rights reserved.</p>
        <p>Want to connect? Reach out to us at <a href="mailto:apeiro@sap.com">apeiro@sap.com</a>.</p>
        <p><a href="https://www.sap.com/about/legal/impressum-se.html" target="_blank" rel="noopener noreferrer">Legal Disclosure</a></p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.VPFooter {
  position: relative;
  z-index: var(--vp-z-index-footer);
  border-top: 1px solid var(--vp-c-gutter);
  padding: 32px 24px;
  background-color: var(--vp-c-bg);
}
.VPFooter.has-sidebar .funding-notice { display: none; }
.VPFooter.has-sidebar .legal-bar { border-top: none; margin-top: 0; padding-top: 0; }
@media (min-width: 768px) { .VPFooter { padding: 32px; } }
.container { margin: 0 auto; max-width: var(--vp-layout-max-width); }
.funding-notice {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
}
.funding-image img { max-width: 300px; height: auto; display: block; }
.funding-text {
  flex: 1;
  min-width: 280px;
  font-size: 12px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}
.funding-text p { margin: 0 0 4px 0; }
.legal-bar {
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 12px;
  color: var(--vp-c-text-3);
  text-align: center;
}
.sap-logo-link { display: inline-block; margin-bottom: 12px; }
.sap-logo { height: 32px; width: auto; display: block; }
.legal-bar p { margin: 4px 0; }
.legal-bar a {
  color: var(--vp-c-text-3);
  text-decoration: none;
}
.legal-bar a:hover { color: var(--vp-c-text-2); text-decoration: underline; }
</style>
