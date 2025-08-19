const grid = document.getElementById('gallery-grid');
const btn = document.getElementById('load-more');
const year = document.getElementById('year');
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lightboxImg');
const caption = document.getElementById('caption');
const closeBtn = lb.querySelector('.close');

year.textContent = new Date().getFullYear();

let items = [];
let cursor = 0;
const PAGE = 8;

async function init(){
  try{
    const res = await fetch('gallery.json');
    items = await res.json();
    renderNext();
  }catch(e){
    console.error('Failed to load gallery.json', e);
  }
}

function makeCard(item){
  const fig = document.createElement('figure');
  fig.className = 'card';
  const img = document.createElement('img');
  img.loading = 'lazy';
  img.src = item.src;
  img.alt = item.alt || 'Artwork';
  img.addEventListener('click',()=>openLightbox(item.src,item.alt));
  fig.appendChild(img);
  return fig;
}

function renderNext(){
  const next = items.slice(cursor, cursor + PAGE);
  next.forEach(it => grid.appendChild(makeCard(it)));
  cursor += next.length;
  if (cursor >= items.length) btn.style.display = 'none';
}

function openLightbox(src, alt){
  lbImg.src = src; caption.textContent = alt || '';
  lb.classList.add('open'); lb.setAttribute('aria-hidden','false');
}
function closeLightbox(){
  lb.classList.remove('open'); lb.setAttribute('aria-hidden','true');
  lbImg.src = ''; caption.textContent='';
}
btn.addEventListener('click', renderNext);
closeBtn.addEventListener('click', closeLightbox);
lb.addEventListener('click', (e)=>{ if(e.target===lb) closeLightbox(); });
document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeLightbox(); });

init();
