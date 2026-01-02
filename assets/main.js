document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.buy-button');
    if (!btn) return;

    const url = btn.dataset.itemUrl;
    if (url) {
      window.open(url, '_blank'); // or window.location.href = url
    }
  });
});
