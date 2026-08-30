document.querySelectorAll('.eval-scale button').forEach(function (btn) {
  btn.addEventListener('click', function () {
    btn.parentElement.querySelectorAll('button').forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');
  });
});
