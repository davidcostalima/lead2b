# Metro Max

### Api WordPress
http://dev.metromax.net.br/api-lead/

### Pagina de teste
http://dev.metromax.net.br/calcule-seu-espaco-2/

### Repositório
https://github.com/davidcostalima/lead2b

### GitHub Pages
https://davidcostalima.github.io/lead2b/

### GitHub Pages Iframe
https://davidcostalima.github.io/lead2b/teste-iframe.html

# Implementação

o site funciona com um iframe basta executar o script abaixo, os envios de email estão sendo feio por uma api

~~~html
<iframe 
    frameborder="0" 
    src="https://davidcostalima.github.io/lead2b/?api_key=API_KEY" 
    width="100%" 
    style="border: 0; min-height: 100vh;"
    >
    <p>Seu site não suporta Iframe</p>
</iframe>
~~~

### Instalação WordPress 
Na pasta do repositório temos ./plugin/post-type-leads.php tem um plugin que cria
um tipo de postagem customizada de nome *Leads* onde é criado como post em rascunho

![Imagem](https://i.imgur.com/d7KAGRN.png)

É necessário colocar na pasta do tema os dois arquivos *PHP* o *page-api-lead.php* e *page-calcule-seu-espaco-2.php* e criar duas paginas com os sequiantes slugs

- api-lead
- calcule-seu-espaco-2