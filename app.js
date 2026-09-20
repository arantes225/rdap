const toggle=document.querySelector('[data-sidebar-toggle]');
const sidebar=document.querySelector('.sidebar');
if(toggle&&sidebar){toggle.addEventListener('click',()=>sidebar.classList.toggle('open'));}
document.querySelectorAll('[data-close-sidebar]').forEach(a=>a.addEventListener('click',()=>sidebar?.classList.remove('open')));

const RDAP_I18N={
  pt:{
    "Organização empresarial":"Organização empresarial","Bem-vindo ao RDAP":"Bem-vindo ao RDAP","Acesse sua conta":"Acesse sua conta",
    "Entre para continuar para o painel de gestão.":"Entre para continuar para o painel de gestão.","E-mail corporativo":"E-mail corporativo","Senha":"Senha",
    "Manter conectado":"Manter conectado","Esqueci minha senha":"Esqueci minha senha","Entrar no RDAP":"Entrar no RDAP",
    "Planeje, acompanhe e execute em um só lugar.":"Planeje, acompanhe e execute em um só lugar.",
    "Centralize agendas, cronogramas, relatórios, atas, procedimentos e indicadores da sua organização com uma visão clara das prioridades.":"Centralize agendas, cronogramas, relatórios, atas, procedimentos e indicadores da sua organização com uma visão clara das prioridades.",
    "Dashboard":"Dashboard","Cronogramas":"Cronogramas","Relatórios":"Relatórios","Planejamentos":"Planejamentos","Atas de reuniões":"Atas de reuniões",
    "Protocolos e procedimentos":"Protocolos e procedimentos","Estatísticas":"Estatísticas","Outros servidores":"Outros servidores","Configurações":"Configurações",
    "Organização Empresarial":"Organização Empresarial","Ambiente corporativo integrado":"Ambiente corporativo integrado",
    "Agenda":"Agenda","Hoje":"Hoje","+ Novo evento":"+ Novo evento","Tarefas abertas":"Tarefas abertas","Projetos ativos":"Projetos ativos",
    "Relatórios pendentes":"Relatórios pendentes","Execução mensal":"Execução mensal","Prioridades do dia":"Prioridades do dia","Atividade recente":"Atividade recente",
    "+ Novo cronograma":"+ Novo cronograma","Etapas próximas":"Etapas próximas","Filtros":"Filtros","Etapa":"Etapa","Projeto":"Projeto","Responsável":"Responsável","Prazo":"Prazo","Status":"Status",
    "+ Criar relatório":"+ Criar relatório","Publicados":"Publicados","Rascunhos":"Rascunhos","Em revisão":"Em revisão","Neste mês":"Neste mês","Biblioteca de relatórios":"Biblioteca de relatórios","Período":"Período","Área":"Área","Relatório":"Relatório","Autor":"Autor","Data":"Data",
    "+ Novo planejamento":"+ Novo planejamento","Estratégico":"Estratégico","Tático":"Tático","Operacional":"Operacional","Matriz de objetivos":"Matriz de objetivos","Objetivo":"Objetivo","Indicador":"Indicador","Meta":"Meta","Atual":"Atual",
    "+ Nova ata":"+ Nova ata","Reuniões recentes":"Reuniões recentes","Itens de ação pendentes":"Itens de ação pendentes","Arquivo de atas":"Arquivo de atas","Filtrar":"Filtrar",
    "+ Novo documento":"+ Novo documento","Ativos":"Ativos","Vencem em 30 dias":"Vencem em 30 dias","Taxa de leitura":"Taxa de leitura","Documentos":"Documentos","Categoria":"Categoria","Código":"Código","Título":"Título","Versão":"Versão","Próxima revisão":"Próxima revisão",
    "Últimos 30 dias":"Últimos 30 dias","Exportar":"Exportar","Tarefas concluídas":"Tarefas concluídas","Pontualidade":"Pontualidade","Reuniões realizadas":"Reuniões realizadas","Pendências críticas":"Pendências críticas","Execução por área":"Execução por área","Indicadores-chave":"Indicadores-chave",
    "+ Adicionar servidor":"+ Adicionar servidor","Últimos eventos":"Últimos eventos","Horário":"Horário","Servidor":"Servidor","Evento":"Evento","Nível":"Nível","Memória":"Memória","Latência":"Latência",
    "Salvar alterações":"Salvar alterações","Perfil":"Perfil","Organização":"Organização","Usuários e permissões":"Usuários e permissões","Notificações":"Notificações","Segurança":"Segurança","Integrações":"Integrações","Aparência":"Aparência","Perfil do usuário":"Perfil do usuário","Nome":"Nome","Cargo":"Cargo","Telefone":"Telefone","Bio":"Bio","Preferências":"Preferências","Idioma":"Idioma","Fuso horário":"Fuso horário"
  },
  es:{
    "Organização empresarial":"Organización empresarial","Bem-vindo ao RDAP":"Bienvenido a RDAP","Acesse sua conta":"Accede a tu cuenta",
    "Entre para continuar para o painel de gestão.":"Inicia sesión para continuar al panel de gestión.","E-mail corporativo":"Correo corporativo","Senha":"Contraseña",
    "Manter conectado":"Mantener sesión iniciada","Esqueci minha senha":"Olvidé mi contraseña","Entrar no RDAP":"Entrar en RDAP",
    "Planeje, acompanhe e execute em um só lugar.":"Planifica, supervisa y ejecuta en un solo lugar.",
    "Centralize agendas, cronogramas, relatórios, atas, procedimentos e indicadores da sua organização com uma visão clara das prioridades.":"Centraliza agendas, cronogramas, informes, actas, procedimientos e indicadores de tu organización con una visión clara de las prioridades.",
    "Dashboard":"Panel","Cronogramas":"Cronogramas","Relatórios":"Informes","Planejamentos":"Planes","Atas de reuniões":"Actas de reuniones",
    "Protocolos e procedimentos":"Protocolos y procedimientos","Estatísticas":"Estadísticas","Outros servidores":"Otros servidores","Configurações":"Configuración",
    "Organização Empresarial":"Organización Empresarial","Ambiente corporativo integrado":"Entorno corporativo integrado",
    "Agenda":"Agenda","Hoje":"Hoy","+ Novo evento":"+ Nuevo evento","Tarefas abertas":"Tareas abiertas","Projetos ativos":"Proyectos activos",
    "Relatórios pendentes":"Informes pendientes","Execução mensal":"Ejecución mensual","Prioridades do dia":"Prioridades del día","Atividade recente":"Actividad reciente",
    "+ Novo cronograma":"+ Nuevo cronograma","Etapas próximas":"Próximas etapas","Filtros":"Filtros","Etapa":"Etapa","Projeto":"Proyecto","Responsável":"Responsable","Prazo":"Plazo","Status":"Estado",
    "+ Criar relatório":"+ Crear informe","Publicados":"Publicados","Rascunhos":"Borradores","Em revisão":"En revisión","Neste mês":"Este mes","Biblioteca de relatórios":"Biblioteca de informes","Período":"Periodo","Área":"Área","Relatório":"Informe","Autor":"Autor","Data":"Fecha",
    "+ Novo planejamento":"+ Nuevo plan","Estratégico":"Estratégico","Tático":"Táctico","Operacional":"Operativo","Matriz de objetivos":"Matriz de objetivos","Objetivo":"Objetivo","Indicador":"Indicador","Meta":"Meta","Atual":"Actual",
    "+ Nova ata":"+ Nueva acta","Reuniões recentes":"Reuniones recientes","Itens de ação pendentes":"Acciones pendientes","Arquivo de atas":"Archivo de actas","Filtrar":"Filtrar",
    "+ Novo documento":"+ Nuevo documento","Ativos":"Activos","Vencem em 30 dias":"Vencen en 30 días","Taxa de leitura":"Tasa de lectura","Documentos":"Documentos","Categoria":"Categoría","Código":"Código","Título":"Título","Versão":"Versión","Próxima revisão":"Próxima revisión",
    "Últimos 30 dias":"Últimos 30 días","Exportar":"Exportar","Tarefas concluídas":"Tareas completadas","Pontualidade":"Puntualidad","Reuniões realizadas":"Reuniones realizadas","Pendências críticas":"Pendientes críticos","Execução por área":"Ejecución por área","Indicadores-chave":"Indicadores clave",
    "+ Adicionar servidor":"+ Añadir servidor","Últimos eventos":"Últimos eventos","Horário":"Hora","Servidor":"Servidor","Evento":"Evento","Nível":"Nivel","Memória":"Memoria","Latência":"Latencia",
    "Salvar alterações":"Guardar cambios","Perfil":"Perfil","Organização":"Organización","Usuários e permissões":"Usuarios y permisos","Notificações":"Notificaciones","Segurança":"Seguridad","Integrações":"Integraciones","Aparência":"Apariencia","Perfil do usuário":"Perfil del usuario","Nome":"Nombre","Cargo":"Cargo","Telefone":"Teléfono","Bio":"Biografía","Preferências":"Preferencias","Idioma":"Idioma","Fuso horário":"Zona horaria"
  },
  en:{
    "Organização empresarial":"Business organization","Bem-vindo ao RDAP":"Welcome to RDAP","Acesse sua conta":"Access your account",
    "Entre para continuar para o painel de gestão.":"Sign in to continue to the management dashboard.","E-mail corporativo":"Corporate email","Senha":"Password",
    "Manter conectado":"Keep me signed in","Esqueci minha senha":"Forgot my password","Entrar no RDAP":"Sign in to RDAP",
    "Planeje, acompanhe e execute em um só lugar.":"Plan, track and execute in one place.",
    "Centralize agendas, cronogramas, relatórios, atas, procedimentos e indicadores da sua organização com uma visão clara das prioridades.":"Centralize schedules, timelines, reports, meeting minutes, procedures and organizational indicators with a clear view of priorities.",
    "Dashboard":"Dashboard","Cronogramas":"Schedules","Relatórios":"Reports","Planejamentos":"Planning","Atas de reuniões":"Meeting minutes",
    "Protocolos e procedimentos":"Protocols and procedures","Estatísticas":"Statistics","Outros servidores":"Other servers","Configurações":"Settings",
    "Organização Empresarial":"Business Organization","Ambiente corporativo integrado":"Integrated corporate environment",
    "Agenda":"Calendar","Hoje":"Today","+ Novo evento":"+ New event","Tarefas abertas":"Open tasks","Projetos ativos":"Active projects",
    "Relatórios pendentes":"Pending reports","Execução mensal":"Monthly execution","Prioridades do dia":"Today's priorities","Atividade recente":"Recent activity",
    "+ Novo cronograma":"+ New schedule","Etapas próximas":"Upcoming milestones","Filtros":"Filters","Etapa":"Stage","Projeto":"Project","Responsável":"Owner","Prazo":"Deadline","Status":"Status",
    "+ Criar relatório":"+ Create report","Publicados":"Published","Rascunhos":"Drafts","Em revisão":"Under review","Neste mês":"This month","Biblioteca de relatórios":"Report library","Período":"Period","Área":"Area","Relatório":"Report","Autor":"Author","Data":"Date",
    "+ Novo planejamento":"+ New plan","Estratégico":"Strategic","Tático":"Tactical","Operacional":"Operational","Matriz de objetivos":"Objectives matrix","Objetivo":"Objective","Indicador":"Indicator","Meta":"Target","Atual":"Current",
    "+ Nova ata":"+ New minutes","Reuniões recentes":"Recent meetings","Itens de ação pendentes":"Pending action items","Arquivo de atas":"Minutes archive","Filtrar":"Filter",
    "+ Novo documento":"+ New document","Ativos":"Active","Vencem em 30 dias":"Due within 30 days","Taxa de leitura":"Read rate","Documentos":"Documents","Categoria":"Category","Código":"Code","Título":"Title","Versão":"Version","Próxima revisão":"Next review",
    "Últimos 30 dias":"Last 30 days","Exportar":"Export","Tarefas concluídas":"Completed tasks","Pontualidade":"On-time rate","Reuniões realizadas":"Meetings held","Pendências críticas":"Critical pending items","Execução por área":"Execution by area","Indicadores-chave":"Key indicators",
    "+ Adicionar servidor":"+ Add server","Últimos eventos":"Latest events","Horário":"Time","Servidor":"Server","Evento":"Event","Nível":"Level","Memória":"Memory","Latência":"Latency",
    "Salvar alterações":"Save changes","Perfil":"Profile","Organização":"Organization","Usuários e permissões":"Users and permissions","Notificações":"Notifications","Segurança":"Security","Integrações":"Integrations","Aparência":"Appearance","Perfil do usuário":"User profile","Nome":"Name","Cargo":"Role","Telefone":"Phone","Bio":"Bio","Preferências":"Preferences","Idioma":"Language","Fuso horário":"Time zone"
  }
};

function normalizeText(s){return (s||'').replace(/\s+/g,' ').trim();}
function translatePage(lang){
  const dict=RDAP_I18N[lang]||RDAP_I18N.pt;
  document.documentElement.lang=lang==='pt'?'pt-BR':lang==='es'?'es':'en';
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(n=>{
    if(n.parentElement && ['SCRIPT','STYLE','OPTION'].includes(n.parentElement.tagName)) return;
    const raw=n.nodeValue, key=normalizeText(raw);
    if(dict[key]!==undefined){
      const lead=(raw.match(/^\s*/)||[''])[0], trail=(raw.match(/\s*$/)||[''])[0];
      n.nodeValue=lead+dict[key]+trail;
    }
  });
  document.querySelectorAll('input[placeholder]').forEach(el=>{
    const p=el.getAttribute('placeholder');
    const ph={pt:{'Buscar etapa':'Buscar etapa','Pesquisar relatório':'Pesquisar relatório','Buscar por título ou participante':'Buscar por título ou participante','Pesquisar protocolo':'Pesquisar protocolo'},es:{'Buscar etapa':'Buscar etapa','Pesquisar relatório':'Buscar informe','Buscar por título ou participante':'Buscar por título o participante','Pesquisar protocolo':'Buscar protocolo'},en:{'Buscar etapa':'Search stage','Pesquisar relatório':'Search report','Buscar por título ou participante':'Search by title or participant','Pesquisar protocolo':'Search protocol'}}[lang]||{};
    if(ph[p]) el.setAttribute('placeholder',ph[p]);
  });
  document.querySelectorAll('[data-rdap-lang]').forEach(s=>s.value=lang);
  localStorage.setItem('rdap-language',lang);
}
function addLanguageSelector(){
  const lang=localStorage.getItem('rdap-language')||'pt';
  const sel=document.createElement('select');
  sel.setAttribute('data-rdap-lang','');
  sel.className='pill';
  sel.style.cursor='pointer';
  sel.style.fontWeight='700';
  sel.innerHTML='<option value="pt">🇧🇷 Português</option><option value="es">🇪🇸 Español</option><option value="en">🇺🇸 English</option>';
  sel.value=lang;
  sel.addEventListener('change',e=>location.reload(localStorage.setItem('rdap-language',e.target.value)));
  const top=document.querySelector('.top-actions');
  if(top) top.insertBefore(sel,top.firstChild);
  else {
    const host=document.querySelector('.login-form');
    if(host){sel.style.position='absolute';sel.style.top='20px';sel.style.right='20px';host.style.position='relative';host.appendChild(sel);}
  }
}
addLanguageSelector();
translatePage(localStorage.getItem('rdap-language')||'pt');
