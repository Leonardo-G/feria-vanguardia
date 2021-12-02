 
        function validarEmail(valor) {
          if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
            return true
          } else {
            return false
          }
        }

        (function(){            
            emailjs.init("user_On3qYaoemmXVSdKUU4eAg");
         })();
        const vue = new Vue({
            el: '#appForm',
            data(){
                return {
                  c_nombre: '',
                  c_email: '',
                  c_telefono: '',
                  c_tiporubro: '',
                  c_sitio: '',
                  c_redsocial: '',
                  c_comentarios: '',
                  from_name:'',
                  user_email: '',
                  message:''
                }
            },
            methods: {
                enviar(){ 

                    if (this.c_nombre == ''){
                      document.getElementById("error__c_nombre").style.display = "block";
                      return false;
                    }
                    if ( (this.c_email == '') ||  ( !validarEmail(this.c_email) ) ) {
                      document.getElementById("error__c_email").style.display = "block";
                      return false;
                    }
                     
                    if (this.c_tiporubro == ''){
                      document.getElementById("error__c_tiporubro").style.display = "block";
                      return false;
                    }
                    
                    
                    let data = {
                        c_nombre: this.c_nombre,
                        c_email: this.c_email,
                        c_telefono: this.c_telefono,
                        c_tiporubro: this.c_tiporubro,
                        c_sitio: this.c_sitio,
                        c_redsocial: this.c_redsocial,
                        c_comentarios: this.c_comentarios,
                        from_name: this.c_nombre,
                        user_email: this.c_email,
                        message: 'Nombre: ' + this.c_nombre + '<br>Email:' + this.c_email + '<br>Telefono:' + this.c_telefono + '<br>Rubro:' + this.c_tiporubro + '<br>Sitio:' + this.c_sitio + '<br>Red Social:' + this.c_redsocial + '<br>Comentarios:' + this.c_comentarios
                    };
                    
                    emailjs.send("Gmail","template_lvoxolg", data)
                    .then(function(response) {
                        if(response.text === 'OK'){
                            alert('Gracias por comunicarte con nosotros!');

                            document.getElementById("c_nombre").value = "";
                            document.getElementById("c_email").value = "";
                            document.getElementById("c_telefono").value = "";
                            document.getElementById("c_tiporubro").value = "";
                            document.getElementById("c_sitio").value = "";
                            document.getElementById("c_redsocial").value = "";
                            document.getElementById("c_comentarios").value = "";
 
                        }
                       console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                    }, function(err) {
                        alert('Ocurrió un problema al enviar el correo');
                        console.log("FAILED. error=", err);
                    });
                }
            }
        });
    