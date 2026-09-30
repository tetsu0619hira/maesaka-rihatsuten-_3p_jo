'use strict';
const toggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');
function previewForm(event) {
  event.preventDefault();
  if (!form.reportValidity()) return;
  status.textContent = '入力を確認しました。これはデモのため、内容は送信されていません。実際のお問い合わせは 026-245-0146 へお電話ください。';
  status.focus();
}
form.addEventListener('submit', previewForm);
document.querySelector('#demo-submit').addEventListener('click', previewForm);
form.addEventListener('input', () => { status.textContent = ''; });
