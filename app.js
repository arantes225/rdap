const toggle=document.querySelector('[data-sidebar-toggle]');
const sidebar=document.querySelector('.sidebar');
if(toggle&&sidebar){toggle.addEventListener('click',()=>sidebar.classList.toggle('open'));}
document.querySelectorAll('[data-close-sidebar]').forEach(a=>a.addEventListener('click',()=>sidebar?.classList.remove('open')));
