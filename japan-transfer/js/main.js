// 语言切换逻辑
const langBtns = document.querySelectorAll('.lang-switch button');
const langContents = {
  zh: document.querySelectorAll('.lang-zh'),
  en: document.querySelectorAll('.lang-en'),
  ja: document.querySelectorAll('.lang-ja')
};

langBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    // 按钮激活状态
    langBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    // 切换内容显示
    Object.keys(langContents).forEach(key => {
      langContents[key].forEach(el => {
        el.style.display = key === lang ? 'block' : 'none';
      });
    });
  });
});
