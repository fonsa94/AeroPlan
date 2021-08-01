var resultado = document.getElementById("info");

        function ajax_post() {
            var xmlhttp;
            if (window.XMLHttpRequest) {
                xmlhttp = new XMLHttpRequest();
            } else {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }

            var a = document.getElementById("nombre").value;
            var b = document.getElementById("apellido").value;
            var informacionDelUsuario = "nombre=" + a + "&apellido=" + b;
            
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                   var mensaje = xmlhttp.responseText;
                   resultado.innerHTML = mensaje;
                    }
            }
        xmlhttp.open("POST", "servidor.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(informacionDelUsuario);
        

}
