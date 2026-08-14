// ===== BRASAS SUBINDO =====
const c = document.getElementById('brasas');
for (let i = 0; i < 26; i++) {
  const b = document.createElement('span');
  b.className = 'brasa';
  const s = 2 + Math.random() * 4;
  b.style.width = s + 'px';
  b.style.height = s + 'px';
  b.style.left = Math.random() * 100 + 'vw';
  b.style.animationDuration = (6 + Math.random() * 8) + 's';
  b.style.animationDelay = (Math.random() * 10) + 's';
  c.appendChild(b);
}

// ===== BOTÃO LÍQUIDO (gira em 3D) =====
document.querySelectorAll('.btn-liquido').forEach(btn => {
  btn.addEventListener('pointermove', e => {
    const r = btn.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    btn.style.transform = 'perspective(600px) rotateY(' + (x * 26) + 'deg) rotateX(' + (-y * 26) + 'deg) scale(1.04)';
  });
  btn.addEventListener('pointerleave', () => {
    btn.style.transform = 'perspective(600px) rotateY(0) rotateX(0)';
  });
});
