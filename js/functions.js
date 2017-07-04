<script type="text/javascript">

//###############FUNCION CARRUSEL ###########################
    $(document).ready(function(){

        $("#myCarousel").carousel({
          interval : 3000,
          pause: false
        });

//##############FUNCION CAMBIAR ACTIVE ###############################
		//$(function() {
	       	
	    	/*$("#desplegable li a").click(function(e) {
  				var $this = $(this);
  				if (!$this.hasClass('active')) {
    				$this.addClass('active');
  				}
  				e.preventDefault();
			});*/
      
    

//###############FUNCION VALIDAR EMAIL###########################

//###############FUNCION VALIDAR CONTRASEÑA###########################

	});
</script>

<script type="text/javascript">
    document.getElementById("region").onchange = function() {
        if (this.selectedIndex!==0) {
            window.location.href = this.value;
        }        
    };
</script>