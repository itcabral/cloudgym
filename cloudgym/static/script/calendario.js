$(function () {
    var mes = 1;
    $(".calendario-dia").click(function (event) {
        if (mes < 10) {
            data = $(this).html() + '-' + '0' + mes + '-2021';
        } else {
            data = $(this).html() + '-' + mes + '-2021';
        }
        $('#date').val(data);
        $(".checkbox").prop("checked", false);
        $(".dia-ativo").removeClass("dia-ativo");
        $(this).addClass("dia-ativo");
        $("thead").addClass("dp-none");
        $("#dica-guia").text('Selecione um dia no calendário!');
        if ($(this).hasClass("segunda")) {
            $("thead").removeClass("dp-none");
            $(".weekday").each(function () {
                $(this).addClass("dp-none");
            });
            $(".weekday-1").removeClass("dp-none");
            $("#dica-guia").text('Selecione as aulas.');
        }
        if ($(this).hasClass("terça")) {
            $("thead").removeClass("dp-none");
            $(".weekday").each(function () {
                $(this).addClass("dp-none");
            });
            $(".weekday-2").removeClass("dp-none");
            $("#dica-guia").text('Selecione as aulas.');
        }
        if ($(this).hasClass("quarta")) {
            $("thead").removeClass("dp-none");
            $(".weekday").each(function () {
                $(this).addClass("dp-none");
            });
            $(".weekday-3").removeClass("dp-none");
            $("#dica-guia").text('Selecione as aulas.');
        }
        if ($(this).hasClass("quinta")) {
            $("thead").removeClass("dp-none");
            $(".weekday").each(function () {
                $(this).addClass("dp-none");
            });
            $(".weekday-4").removeClass("dp-none");
            $("#dica-guia").text('Selecione as aulas.');
        }
        if ($(this).hasClass("sexta")) {
            $("thead").removeClass("dp-none");
            $(".weekday").each(function () {
                $(this).addClass("dp-none");
            });
            $(".weekday-5").removeClass("dp-none");
            $("#dica-guia").text('Selecione as aulas.');
        }
        if ($(this).hasClass("sabado")) {
            $("thead").removeClass("dp-none");
            $(".weekday").each(function () {
                $(this).addClass("dp-none");
            });
            $(".weekday-6").removeClass("dp-none");
            $("#dica-guia").text('Selecione as aulas.');
        }
        if ($(this).hasClass("domingo")) {
            $("thead").removeClass("dp-none");
            $(".weekday").each(function () {
                $(this).addClass("dp-none");
            });
            $(".weekday-7").removeClass("dp-none");
            $("#dica-guia").text('Selecione as aulas.');
        }
    });

    $(".slider").diyslider({
        width: "300px", // width of the slider
        height: "350px", // height of the slider
        display: 1, // number of slides you want it to display at once
        loop: false // disable looping on slides
    });

    // use buttons to change slide
    $("#go-left").bind("click", function () {
        // Go to the previous slide
        $(".slider").diyslider("move", "back");
        if (mes > 1) {
            mes -= 1;
        }
    });
    $("#go-right").bind("click", function () {
        // Go to the previous slide
        $(".slider").diyslider("move", "forth");
        if (mes < 3) {
            mes += 1;
        }
    });
})
