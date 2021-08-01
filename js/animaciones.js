$(function() {
    function mostrarHora() {
      var fecha = new Date(),
          hora = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
      $('#hora').text(hora);
    }
    setInterval(mostrarHora, 1000); 
  });

  $(function(){
    function animarBola() {
      $("#bola").animate({left: '+=150'}, "slow")
                .animate({top: '+=50'}, "slow")
                .animate({left: '-=150'}, "slow")
                .animate({top: '-=50'}, "slow");   
    }
    
    setInterval(animarBola, 2400);
  });

 