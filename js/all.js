$(document).ready(function () {



    $.ajax({
        type: 'GET',
        url: 'dados.json',

        dataType: 'json',
        success: function (data) {
            $.each(data, function(index, element) {


                $('.row-cards-items').append('        <div class="col-lg-4  col-md-6 col-12  p-0 m-0">\n' +
                    '            <div class="row bg-light mx-2 shadow p-3 mb-3  row-banner ">\n' +
                    '                <div class="col-4 col-md-6 bg-light mapImage">\n' +
                    '                    <img src="'+element.foto+'" class="img-banner " alt="">\n' +
                    '                    <div class="pin pin1 text-center font-weight-bold" href="#">'+element.id+'</div>\n' +
                    '                </div>\n' +
                    '                <div class="col-8  col-md-6 bg-light align-self-center m-0 p-0 ">\n' +
                    '                    <p class="text-dark font-weight-bold m-0 p-0 ">'+element.nome+'</p>\n' +
                    '                    <p class="text-black-50 m-0 p-0">'+element.cargo+'</p>\n' +
                    '\n' +
                    '                </div>\n' +
                    '            </div>\n' +
                    '        </div>')

            });
        }
    });


})