function generarnotas() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
  
    var fecha = document.getElementById('FechaContainer');
    var Periodo = document.getElementById('PeriodoContainer');
    var Grado = document.getElementById('GradoContainer');

    var Mate = document.getElementById('NotasMatematicas');
    var Ingles = document.getElementById('NotasIngles');
    var Literatura = document.getElementById('NotasLiteratura');
    var Biologia = document.getElementById('NotasBiologia');
    var EduFisica = document.getElementById('NotasEdu-Fisica');
    var Artistica = document.getElementById('NotasArtistica');
    var CristoRey =  document.getElementById('NotasReligion');
    var Info = document.getElementById('NotasInformatica');

    var nota = ""
    var html = ""
    var html2 = ""

    var periodo = Math.floor(Math.random(1) * 4);
    var grado = Math.floor(Math.random(1 ) * 12);
 
    html += "<p>Periodo: " + periodo + "</p>";    
    Periodo.innerHTML = html;

    html2 += "<p>Grado: " + grado + "</p>";
    Grado.innerHTML = html2


    var nota1 = (Math.random() * 11).toFixed(1); 
    var nota2 = (Math.random() * 11).toFixed(1);
    var nota3 = (Math.random() * 11).toFixed(1);
    var nota4 = (Math.random() * 11).toFixed(1);
    var nota5 = (Math.random() * 11).toFixed(1);
    var nota6 = (Math.random() * 11).toFixed(1);
    var nota7 = (Math.random() * 11).toFixed(1);
    var nota8 = (Math.random() * 11).toFixed(1);

    nota += "<p> " + nota1 + "</p>";
    nota += "<p> " + nota2 + "</p>";
    nota += "<p> " + nota3 + "</p>";
    nota += "<p> " + nota4 + "</p>";
    nota += "<p> " + nota5 + "</p>";
    nota += "<p> " + nota6 + "</p>";
    nota += "<p> " + nota7 + "</p>";
    nota += "<p> " + nota8 + "</p>";

    Mate.innerHTML = nota;

    var FechaActual = new Date();
    fecha.innerHTML = FechaActual;
    

    


}

