(function(){
  const DONATION_URL = 'https://fundacion.cardioinfantil.org/donar.html';
  function gaEvent(name, params){
    if(typeof window.gtag === 'function') window.gtag('event', name, params || {});
  }
  document.querySelectorAll('a[href="'+DONATION_URL+'"]').forEach(function(link){
    link.addEventListener('click', function(){
      gaEvent('donacion_click', {
        metodo: 'Fundacion Cardio Infantil',
        url_checkout: DONATION_URL,
        valor_donacion: this.dataset.donationValue || 'No especificado'
      });
    });
  });
})();
