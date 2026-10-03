'use strict';
(() => {
  const incoming = new URLSearchParams(window.location.search);
  window.history.replaceState(null, '', window.location.pathname);
  const status = document.getElementById('status');
  const link = document.getElementById('continue');
  if (!incoming.get('state') || (!incoming.get('code') && !incoming.get('error'))) {
    status.textContent = 'Inicie a conexão em Configurações > Conexões > TikTok no Creative Center.';
    return;
  }
  const target = new URL('http://localhost:3001/api/auth/tiktok/callback');
  for (const key of ['code', 'state', 'error', 'error_description']) {
    if (incoming.has(key)) target.searchParams.set(key, incoming.get(key));
  }
  link.href = target.href;
  link.classList.remove('hidden');
  status.textContent = 'Autorização recebida. Clique abaixo para concluir a conexão no seu computador.';
})();
