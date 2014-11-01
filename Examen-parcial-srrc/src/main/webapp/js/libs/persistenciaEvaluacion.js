/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    $("#mostrar").click(function(){
        $.ajax({
                url:'GuardarE',
                method:'post',
                data:{
                    nombre:$("#nombre").val(),
                    calificacion:$("#calificacion").val()
                    
                 
                    
                },
                success:function(resultado){
                    $("#resultado").html(resultado)
                    alert("ya estuvo");
                }
                
            
        });
        
    });
    });
