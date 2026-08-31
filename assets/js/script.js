document.querySelectorAll('.eval-scale button').forEach(function (btn) {
  btn.addEventListener('click', function () {
    btn.parentElement.querySelectorAll('button').forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');
  });
});

// practice-areas carousel arrows
(function () {
  var track = document.querySelector('.practice-track');
  var prev = document.querySelector('.practice-prev');
  var next = document.querySelector('.practice-next');
  if (!track || !prev || !next) return;
  var step = 284; // card width + gap
  prev.addEventListener('click', function () { track.scrollBy({ left: -step, behavior: 'smooth' }); });
  next.addEventListener('click', function () { track.scrollBy({ left: step, behavior: 'smooth' }); });
})();

// footer animated headline: types out, pauses, deletes, moves to next phrase
(function () {
  var el = document.querySelector('.footer-rotator span');
  if (!el) return;
  var phrases = ['give free advice.', 'fight for your rights.', 'never give up.', 'always answer your call.'];
  var phraseIndex = 0;
  var charIndex = phrases[0].length;
  var deleting = false;

  function tick() {
    var current = phrases[phraseIndex];
    if (!deleting) {
      charIndex++;
      if (charIndex > current.length) {
        charIndex = current.length;
        deleting = true;
        setTimeout(tick, 2200);
        return;
      }
    } else {
      charIndex--;
      if (charIndex < 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        charIndex = 0;
        setTimeout(tick, 400);
        return;
      }
    }
    el.textContent = current.slice(0, charIndex);
    setTimeout(tick, deleting ? 35 : 55);
  }

  setTimeout(tick, 2200);
})();
