# Mendes Dev — Portfólio

Landing page de portfólio em **HTML5, CSS3 e JavaScript puro**, sem frameworks, backend ou build. Mobile first, com foco em acessibilidade (meta: WCAG 2.2 AA, ainda não auditada formalmente).

## Estrutura
```
index.html            conteúdo semântico
styles/  main.css (importa os demais) · base.css (tokens, reset) · layout.css · components.css · responsive.css
scripts/ main.js (inicialização) · navigation.js (menu) · projects.js (dados e cards)
assets/images/favicon/favicon.svg
```
Os ícones e as miniaturas são feitos em CSS, por isso não existem `assets/icons` nem `assets/images/projects`. Crie essas pastas se for usar arquivos próprios.

## Executar localmente
Os scripts são módulos ES, que **não funcionam abrindo o arquivo direto (`file://`)**. Use um servidor estático, por exemplo `python3 -m http.server` na pasta do projeto, ou uma extensão como Live Server, e abra `http://localhost:8000`.

## Personalizar
- **Cores, espaçamentos, tipografia:** variáveis em `:root`, no início de `styles/base.css`.
- **Textos:** direto em `index.html`. Procure os comentários `SUBSTITUIR`.
- **Projetos:** edite o array em `scripts/projects.js`. Cada objeto gera um card. Deixe `repo: ""` para ocultar o botão. Para usar imagens, adicione-as em `assets/images/projects/` e troque a miniatura CSS por `<img>` com `alt`, `width` e `height`.
- **Links sociais e e-mail:** seção `#contato` e rodapé do `index.html` (hoje apontam para `example.com`).
- **Metadados:** ao publicar, adicione `og:url` e `og:image` com o seu domínio.

## Testar
- **Responsividade:** DevTools, larguras de 320, 375, 768, 1024, 1440 e 1920 px, e zoom de 200%.
- **Acessibilidade:** navegar só com Tab/Shift+Tab/Enter/Escape, conferir foco visível, rodar Lighthouse ou axe e testar com leitor de tela (NVDA, VoiceOver).
- **Validação:** validator.w3.org para o HTML.

## Limitações conhecidas
- Os cards dos projetos dependem de JavaScript (há um aviso no HTML quando está desativado).
- Não há formulário de contato, pois exigiria backend ou serviço externo.
- `main.css` usa `@import`, que é simples, mas um pouco mais lento que vários `<link>`. Considere unificar o CSS antes de publicar.
- Projetos, links e e-mail são demonstrativos.

## Próximos passos
Imagens reais dos projetos (WebP, com `loading="lazy"`), `og:image`, `sitemap`/`robots.txt` com o domínio real, formulário via serviço externo e auditoria completa de acessibilidade.
