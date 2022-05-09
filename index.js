$(document).ready(function(){

    $('.añadido').hide()
    $('.borrar').hide()
    $('.borrado').hide()
    $('.borrados').hide()
    $('.editado').hide()
    $('#editar').hide()


    $('#input').keypress(function(e){
        var key = e.which
        if(key == 13)
            guardar(id)
    })

    $('.borrar').click(function(){
        datosArr = []
        id = 0
        localStorage.setItem("datos", JSON.stringify(datosArr))
        $('.vacio').hide()
        $('.borrados').show()
        $('.elemento').remove()
        setTimeout(function(){
            $(".borrados").hide()
            $('.vacio').show(); 
        }, 1000);
        $(".borrar").hide();
        
    })

    var almacena = localStorage.getItem("datos")
    if (almacena){
        datosArr = JSON.parse(almacena)
        for (i=0; i< datosArr.length; i++){
            guardarJson(datosArr[i], i + 1)
        }

    } else
        datosArr = []

    if(id = datosArr.length){
        id = datosArr.length
    }
    else{
        id=0
    }
})




var iditar = 0
function editar(iditar){
    $(`#${iditar}`).children('p').text($('#inpute').val())
    $('#editar').hide()
    $('#guardar').show()

    datosArr.splice(iditar - 1, 1,$('#inpute').val())

    localStorage.setItem("datos", JSON.stringify(datosArr))
}


function guardar (){

    $(".borrar").show();
    id += 1

    datosArr.push($('#input').val())
    localStorage.setItem("datos", JSON.stringify(datosArr))
    $('.elementos').append(`<div class="elemento" id="${id}" style="margin:1rem">
                                <p>${$('#input').val()}</p>
                                <div>
                                <i class="fa-solid fa-pen-to-square"></i>
                                <i class="fas fa-trash" class="robber"></i>
                                </div>
                            </div>`);
                            $('.vacio').hide()
                            $('.añadido').show()
                            setTimeout(function(){
                                $(".añadido").hide(); 
                                $('.vacio').show()
                            }, 1000);
                            $('#input').val("")

                            $(`#${id}`).children('div').children('.fa-solid').click(function(){
                                iditar = id
                                $('#inpute').val($(this).parent().parent().children('p').text())
                                $('#guardar').hide()
                                $('#editar').show()
                            })

                            $(`#${id}`).children('div').children('.fas').click(function(){
                                $(this).parent().parent().remove()
                                datosArr.splice(id - 1, 1)

                                localStorage.setItem("datos", JSON.stringify(datosArr))
                                $('.vacio').hide()
                                $('.borrado').show()
                                setTimeout(function(){
                                    $(".borrado").hide(); 
                                    $('.vacio').show()
                                }, 1000);
                            })

}





function guardarJson(valor, id){
    $('.elementos').append(`<div class="elemento" id="${id}" style="margin:1rem">
                                <p>${valor}</p>
                                <div>
                                <i class="fa-solid fa-pen-to-square"></i>
                                <i class="fas fa-trash" class="robber"></i>
                                </div>
                            </div>`);



                        $('.vacio').hide()
                        $('.añadido').show()
                        setTimeout(function(){
                            $(".añadido").hide(); 
                            $('.vacio').show()
                        }, 1000);
                        $('#input').val("")

                        $(`#${id}`).children('div').children('.fa-solid').click(function(){
                            iditar = id
                            $('#inpute').val($(this).parent().parent().children('p').text())
                            $('#guardar').hide()
                            $('#editar').show()

                        })

                        $(`#${id}`).children('div').children('.fas').click(function(){
                            $(this).parent().parent().remove()
                            datosArr.splice(id - 1, 1)

                            localStorage.setItem("datos", JSON.stringify(datosArr))
                            $('.vacio').hide()
                            $('.borrado').show()
                            setTimeout(function(){
                                $(".borrado").hide(); 
                                $('.vacio').show()
                            }, 1000);
                        })


                        $('.borrar').show()

    }