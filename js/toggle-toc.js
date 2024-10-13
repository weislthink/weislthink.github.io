document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toc-toggle');
    const tocContent = document.querySelector('.toc-content');
  
    toggleButton.addEventListener('click', () => {
      tocContent.classList.toggle('open');
      toggleButton.textContent = tocContent.classList.contains('open')
        ? '折叠目录'
        : '展开目录';
    });
  });
  