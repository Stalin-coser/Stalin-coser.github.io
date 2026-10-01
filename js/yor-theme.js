// 加载页计时由 loader 模板统一管理，避免延迟脚本重复重置展示时间。
function enhanceYorPage(){
  const search=document.getElementById('search-text');
  if(search){search.setAttribute('aria-label','搜索文章和页面');search.placeholder='输入关键词，按回车搜索…'}
}
enhanceYorPage();
document.addEventListener('pjax:complete',enhanceYorPage);
