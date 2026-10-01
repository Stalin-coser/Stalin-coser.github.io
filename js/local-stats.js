// 纯前端本机访问计数；不声称这是全站统计，不向外部发送数据。
(()=>{
  let views=1;
  try{views=Number(localStorage.getItem('yor-blog-views')||0)+1;localStorage.setItem('yor-blog-views',String(views))}catch{}
  const update=()=>{
    const view=document.getElementById('busuanzi_value_site_pv');
    const visitor=document.getElementById('busuanzi_value_site_uv');
    if(view)view.textContent=String(views);
    if(visitor)visitor.textContent='1';
  };
  update();document.addEventListener('DOMContentLoaded',update);document.addEventListener('pjax:complete',update);
})();
