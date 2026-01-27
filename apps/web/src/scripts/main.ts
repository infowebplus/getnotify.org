/**
 * Client-side: mobile nav, FAQ accordion, dark mode, pricing toggle, etc.
 */

function initMobileNav(): void {
  const hamburger = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const closeBtn = document.getElementById('mobile-nav-close');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!hamburger || !mobileNav) return;

  const open = () => {
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
    hamburger.setAttribute('aria-expanded', 'true');
  };
  const close = () => {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
  };

  hamburger.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  links.forEach((el) => el.addEventListener('click', close));
  document.addEventListener('keydown', (e) => e.key === 'Escape' && mobileNav.classList.contains('open') && close());
  mobileNav.addEventListener('click', (e) => e.target === mobileNav && close());
}

function initFaq(): void {
  document.querySelectorAll('.faq-item').forEach((item) => {
    const button = item.querySelector('.faq-button');
    const answer = item.querySelector('.faq-answer');
    if (!button || !answer) return;
    button.addEventListener('click', () => {
      const open = item.classList.contains('open');
      item.classList.toggle('open');
      button.setAttribute('aria-expanded', String(!open));
      answer.setAttribute('aria-hidden', String(open));
    });
  });
}

function initDarkMode(): void {
  const run = () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  };
  document.getElementById('dark-mode-toggle')?.addEventListener('click', run);
  document.getElementById('dark-mode-toggle-mobile')?.addEventListener('click', run);
}

function initPricingToggle(): void {
  const toggles = document.querySelectorAll('.pricing-toggle');
  const cards = document.querySelectorAll('.plan-card[data-plan]');
  if (!toggles.length || !cards.length) return;

  const saved = localStorage.getItem('pricing-interval') === 'yearly';

  const setState = (isYearly: boolean) => {
    toggles.forEach((t) => {
      t.setAttribute('aria-checked', String(isYearly));
      t.classList.toggle('bg-primary-500', isYearly);
      t.classList.toggle('dark:bg-primary-500', isYearly);
      const span = t.querySelector('span');
      if (span) {
        span.classList.toggle('translate-x-1', !isYearly);
        span.classList.toggle('translate-x-7', isYearly);
      }
    });
    document.querySelectorAll('.pricing-toggle-label').forEach((label) => {
      const labelType = label.getAttribute('data-label');
      const active = (labelType === 'monthly' && !isYearly) || (labelType === 'yearly' && isYearly);
      label.classList.toggle('text-primary-600', active);
      label.classList.toggle('dark:text-primary-400', active);
      label.classList.toggle('text-neutral-600', !active);
      label.classList.toggle('dark:text-neutral-400', !active);
    });
    cards.forEach((card) => {
      const priceEl = card.querySelector('.plan-price');
      const intervalEl = card.querySelector('.plan-interval');
      if (!priceEl || !card.getAttribute('data-price-monthly')) return;
      const showYearly = isYearly && card.getAttribute('data-price-yearly') && card.getAttribute('data-plan') !== 'starter';
      priceEl.textContent = showYearly ? (card.getAttribute('data-price-yearly') ?? '') : (card.getAttribute('data-price-monthly') ?? '');
      if (intervalEl) intervalEl.textContent = showYearly ? '/year' : '/month';
    });
    localStorage.setItem('pricing-interval', isYearly ? 'yearly' : 'monthly');
  };

  setState(saved);
  toggles.forEach((t) => t.addEventListener('click', () => setState(t.getAttribute('aria-checked') !== 'true')));
}

function run(): void {
  initMobileNav();
  initFaq();
  initDarkMode();
  initPricingToggle();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', run);
} else {
  run();
}
