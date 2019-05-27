window.addEventListener('load', Cargar);

function Cargar() {
    var elemento = "";
    var clave;
    var value;
    for (let i = 0; i < localStorage.length; i++) {
        clave = localStorage.key(i);
        value = localStorage.getItem(clave);
        elemento += "<p class='sinComprar fondo' onclick='Comprar()' >" + clave + "<i data-target=\"idmodalupdt\" class=\" modal-trigger material-icons icono1\"  onclick='Modificar(" + i + ")'>border_color</i><i class='material-icons icono2' onclick='Borrar(" + i + ")'>delete</i></p>";
        // elemento += "<p id='evento' data-target=\"idmodalupdt\"        class='sinComprar fondo evento ' onclick='Comprar()' >" + clave + " </p>";

    }

    $(".material-icons").css("color", "white");
    document.getElementById('lista').innerHTML = elemento;

    var input = document.getElementById("productoAdd");
    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            document.getElementById("add").click();
        }
    });

    var update = document.getElementById("productoupdt");
    update.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            document.getElementById("updt").click();
        }
    });

    $(document).ready(function () {
        $('.button-collapse').sideNav();
    });

    $(document).ready(function () {
        $('.modal').modal({
            dismissible: false,
            ready: function (modal, trigger) {
                $("#productoAdd").focus();
                $("#productoupdt").focus();
            }
        });
    });
    document.getElementById('add').addEventListener('click', Insertar);
    document.getElementById('updt').addEventListener('click', Modificar2);
}

function Insertar() {
    var modal = document.getElementById('productoAdd').value;
    if (modal !== "") {
        localStorage.setItem(modal, "sinComprar");
        Cargar();
        document.getElementById('productoAdd').value = "";
    }
}

function Borrar(ele) {
    var clave = localStorage.key(ele);
    localStorage.removeItem(clave);
    Cargar();
}

function Modificar(ele) {
    var clave = localStorage.key(ele);
    document.getElementById('productoupdt').value = clave;
    localStorage.removeItem(clave);
}

function Modificar2() {
    var Updt = document.getElementById('productoupdt').value;
    localStorage.setItem(Updt, "sinComprar");
    Cargar();
}

function Comprar() {
    $(document).ready(function () {
        $("div p ").click(function () {
            if ($(this).hasClass('sinComprar')) {
                $(this).removeClass('sinComprar').addClass('Comprado')
            } else {
                $(this).removeClass('Comprado').addClass('sinComprar')
            }
        });
    })
}

function ComprarTodo(objetos) {
    $(document).ready(function () {
        if (objetos == 1) {
            $("div .sinComprar").removeClass('sinComprar').addClass('Comprado')
        }
        if (objetos == 0) {
            $("div .Comprado").removeClass('Comprado').addClass('sinComprar')
        }
    })
}

function BorrarTodo() {
    localStorage.clear();
    Cargar();
}


