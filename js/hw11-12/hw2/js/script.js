$(function () {

  var html = $('#cv').html();

  var content = {
    name: 'Logvinovsky Alexandr',
    lidn: 'Студент',
    whyJob: 'Хочу учить фронтенд, потому что:',
    why1: 'Модно',
    why2: 'Потому что это круто!',
    why3: 'Опять модно',
    phone: '***9*40*90*7',
    soc: 'vk.com/***dw*r**',
    fid: '****************'
  };

   var push = tmpl(html, content);

   $('body').append(push);
});
