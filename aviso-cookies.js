/* Aviso de transparência sobre a coleta de dados anônimos (exibido até o visitante clicar em "Entendi") */
(function () {
  var KEY = 'ociaam_aviso_dados_ok';
  try { if (localStorage.getItem(KEY) === '1') return; } catch (e) {}

  function montar() {
    var css = document.createElement('style');
    css.textContent =
      '#aviso-cookies{position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;' +
      'max-width:640px;margin:0 auto;display:flex;align-items:center;gap:16px;' +
      'padding:14px 18px;background:#fff;color:#374151;border:1px solid #cfe7ee;border-radius:10px;' +
      'box-shadow:0 8px 30px rgba(10,104,120,.15);' +
      "font:13.5px/1.5 'Plus Jakarta Sans',system-ui,sans-serif}" +
      '#aviso-cookies p{margin:0;flex:1}' +
      '#aviso-cookies button{flex-shrink:0;cursor:pointer;border:0;border-radius:6px;' +
      'padding:8px 16px;background:#0a6878;color:#fff;font-family:inherit;font-size:13px;font-weight:600;line-height:1}' +
      '#aviso-cookies button:hover{background:#1694aa}' +
      '#aviso-cookies button:focus-visible{outline:2px solid #1694aa;outline-offset:2px}' +
      '@media (max-width:520px){#aviso-cookies{flex-direction:column;align-items:stretch;gap:10px}}';
    document.head.appendChild(css);

    var box = document.createElement('div');
    box.id = 'aviso-cookies';
    box.setAttribute('role', 'region');
    box.setAttribute('aria-label', 'Aviso de coleta de dados');
    box.innerHTML =
      '<p>Coletamos dados anônimos de visita e uso da página apenas para medir o acesso aos dados. ' +
      'Não usamos cookies nem identificamos visitantes.</p>' +
      '<button type="button">Entendi</button>';
    box.querySelector('button').addEventListener('click', function () {
      try { localStorage.setItem(KEY, '1'); } catch (e) {}
      box.remove();
    });
    document.body.appendChild(box);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', montar);
  else montar();
})();
