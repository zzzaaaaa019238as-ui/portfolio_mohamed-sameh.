// Mobile nav toggle
(function(){
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if(!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// Hero neural-network field
(function(){
  const svg = document.getElementById('nodeField');
  if(!svg) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const W = 900, H = 700;
  const COUNT = 26;
  const ns = 'http://www.w3.org/2000/svg';

  const points = [];
  for(let i = 0; i < COUNT; i++){
    points.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.6 + 1.4
    });
  }

  // connect nearby points
  const maxDist = 150;
  const linesGroup = document.createElementNS(ns, 'g');
  linesGroup.setAttribute('stroke', '#3d7fff');
  linesGroup.setAttribute('stroke-opacity', '0.16');
  linesGroup.setAttribute('stroke-width', '1');

  for(let i = 0; i < points.length; i++){
    for(let j = i + 1; j < points.length; j++){
      const dx = points[i].x - points[j].x;
      const dy = points[i].y - points[j].y;
      const d = Math.sqrt(dx*dx + dy*dy);
      if(d < maxDist){
        const line = document.createElementNS(ns, 'line');
        line.setAttribute('x1', points[i].x);
        line.setAttribute('y1', points[i].y);
        line.setAttribute('x2', points[j].x);
        line.setAttribute('y2', points[j].y);
        linesGroup.appendChild(line);
      }
    }
  }
  svg.appendChild(linesGroup);

  const dotsGroup = document.createElementNS(ns, 'g');
  points.forEach((p, idx) => {
    const c = document.createElementNS(ns, 'circle');
    c.setAttribute('cx', p.x);
    c.setAttribute('cy', p.y);
    c.setAttribute('r', p.r);
    c.setAttribute('fill', idx % 5 === 0 ? '#8b6fff' : '#3d7fff');
    c.setAttribute('opacity', '0.75');
    if(!reduceMotion && idx % 4 === 0){
      const anim = document.createElementNS(ns, 'animate');
      anim.setAttribute('attributeName', 'opacity');
      anim.setAttribute('values', '0.75;0.25;0.75');
      anim.setAttribute('dur', (4 + Math.random() * 3).toFixed(1) + 's');
      anim.setAttribute('repeatCount', 'indefinite');
      c.appendChild(anim);
    }
    dotsGroup.appendChild(c);
  });
