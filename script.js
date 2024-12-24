document.addEventListener("DOMContentLoaded", function() {
  // ページ内のリンクを取得
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // デフォルトの動作をキャンセル

      // リンクを取得
      const href = this.getAttribute("href");
      // ジャンプ先のid名をセット
      const targetId = (href === "#" || href === "") ? 'html' : href;
      const target = document.querySelector(targetId);
      // トップからジャンプ先の要素までの距離を取得
      const position = target.getBoundingClientRect().top + window.pageYOffset;

      // スムーススクロールを実行
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });
    });
  });
});
