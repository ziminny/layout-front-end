
$(document).ready(function () {

    $.ajax({
        type: 'GET',
        url: 'dados.json',
        dataType: 'json',
        success: function (data) {
            $.each(data, function(index, element) {

                $('.row-cards-items').append(elementosHTML(element,))

                $('.cards'+element.id).click(function () {

                $('.banner-principal #nome').text(element.nome)
                    $('.banner-principal #idade').text(element.idade)
                    $('.banner-principal #cargo').text(element.cargo)
                    $('.banner-principal #imagem').attr('src',element.foto)

                     //remove a cor de fundo
                    $('div.selected-item-cards-corpo').removeClass('selected-item-cards-corpo')
                    //adiciona a cor de fundo
                    $(this).closest('div').addClass('selected-item-cards-corpo')

                    //troca a cor do subtitulo
                    $('p.selected-item-cards-sub-titulo').removeClass('selected-item-cards-sub-titulo')
                    $('.sub-titulo'+element.id).closest('div p').addClass('selected-item-cards-sub-titulo')
                    //remove a cor de fundo

                })
            });
        }
    });
    //funcao que preenche com os cards
    function elementosHTML(element ) {

        return '        <div class="mini-banners col-lg-4  col-md-6 col-12  p-0 m-0 ">\n' +
            '            <div class="bg-light row mx-2 shadow p-3 mb-3  row-banner cards'+element.id+' ">\n' +
            '                <div class="col-5 col-md-6 bg-transparent mapImage bg-transparent">\n' +
            '                    <img src="'+element.foto+'" class="img-banner " alt="">\n' +
            '                    <div class="pin pin1 text-center font-weight-bold" href="#">'+element.id+'</div>\n' +
            '                </div>\n' +
            '                <div class="col-7  col-md-6 bg-transparent align-self-center m-0 p-0 ">\n' +
            '                    <p class="font-weight-bold m-0 p-0 ">'+element.nome+'</p>\n' +
            '                    <p class="sub-titulo'+element.id+' text-black-50 m-0 p-0">'+element.cargo+'</p>\n' +
            '\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>'
    }
})