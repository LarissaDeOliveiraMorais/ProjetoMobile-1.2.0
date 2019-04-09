// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/casadocodigo$1.0.0/src/app/views/base/quemSomos/quemSomos.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"><link rel=\"stylesheet\" href=\"/estatico/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/fontawesome.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/casadocodigo.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header class=\"cabecalhoPrincipal\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><h1 class=\"logo\"><img src=\"/estatico/imagens/logo.png\" alt=\"Livraria\" width=\"75\">Livraria Futuro</h1></div><div class=\"cabecalhoPrincipal-navegacao col-8\"><a href=\"#\" class=\"login\"><i class=\"fas fa-sign-in-alt\"></i>Login</a></div></div></div></header><div class=\"container\" id=\"menuPrincipal\"><nav id=\"menu\"> <ul><li id=\"menuT\"><a href=\"/\">Home</a></li><li id=\"menuT\"><a href=\"/QuemSomos\">Quem Somos</a></li><li id=\"menuT\"><a href=\"/estandeLivros\">Estande de Livros</a></li><li id=\"menuT\"><a href=\"Solicitação.html\">Estande Virtual</a></li></ul></nav></div><header id=\"cabecalho-artigo\"><h3>Livraria Futuro > Quem Somos</h3><h1>Com 30 anos, Livraria Futuro é referência de qualidade no mercado nacional</h1><p>Uma história de sucesso que se inicia com o sonho de Celso Eduardo e Larissa Morais: construir uma livraria para promover o encontro de pessoas com os mais variados interesses. E foi em busca desse sonho que, há 30 anos, eles fundarm a Livraria Futuro. A empresa teve um início tímido na casa da família dos socios, atualmente, é referência nacional com 18 lojas distribuídas pelo Brasil (em São Paulo, Campinas, Ribeirão Preto, Brasília, Salvador, Recife, Fortaleza, Curitiba e Porto Alegre).<br><br> Atualmente, a Livraria Futuro se dedica a oferecer um espaço multimídia, onde a busca pelo produto é apenas o início de uma jornada enriquecedora: nossas lojas dão vida à cultura por meio de seu extenso acervo e também de seus teatros, auditórios, cafés e eventos gratuitos. Venha nos conhecer!</p><div id=\"loja\"><img src=\"/estatico/imagens/frente_livraria.jpg\"></div><h1>MISSÃO</h1><p>Disponibilizar um acervo de títulos completo, com equipe de colaboradores competente e treinada, orientada a fazer do momento da compra uma experiência única de descoberta e prazer.</p><br><h1>VISÃO</h1><p>Acreditamos no poder transformador da informação e da cultura.<br> Nosso objetivo é ser a melhor loja de entretenimento e informação, nos consolidando como a grande referência do setor.<br> Quanto mais crescermos, mais vamos disseminar essa informação, ajudando as pessoas a construir e viver em um mundo melhor e mais justo.</p><br><h1>VALORES</h1><h3>ETICA</h3><p>Conduzimos nossos negócios e relações profissionais com moral e transparência.</p><br><h3>DIVERSIDADE</h3><p>Essa é uma palavra que nos define. A variedade do nosso acervo e os diferentes perfis de nossos colaboradores e clientes são o espelho desse valor.</p><br><h3>RESPONSABILIDADE</h3><p>Acreditamos que a responsabilidade cultural contribui para uma sociedade mais conscientizada sobre desenvolvimento econômico, social e ambiental com sustentabilidade.</p><br><h3>INOVAÇÃO</h3><p>Estamos em busca incessante em levar o novo aos nossos clientes. Esse é um perfil que buscamos em nossos colaboradores. Desafiamos o “sempre foi assim”. Se algo funciona, já está obsoleto.</p><br><h3>EXCELÊNCIA</h3><p>A nossa receita para a excelência é profissionalismo com trabalho em equipe. Na Livraria Futuro, o diálogo é aberto, sempre olhando para o futuro e em uma busca incessante para superar a expectativa de nossos clientes.</p></header><footer id=\"rodape\"><p>Copyright &copy; 2019 - by Larissa Morais end Celso Eduardo <br></p></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "61");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/casadocodigo$1.0.0/src/app/views/base/quemSomos/quemSomos.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
