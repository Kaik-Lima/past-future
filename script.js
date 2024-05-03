function mudapage() {
    // HEADER

    var logo = document.getElementById('desPicID');
    // Muda o Logotipo
    logo.setAttribute('src', 'extra/logo-uol-nova.png');
    // Adiciona um Padding
    logo.style.padding = '50px';
    // Modifica o tamanho da imagem
    logo.style.maxWidth = '200px';
    // Modifica o background
    document.getElementById('hdr').style.backgroundColor = '#F2C14E '
    // Modifica a fonte do nav
    var x = document.getElementsByClassName('rodape')[0];
    var y = x.getElementsByClassName('link');
    var i;
    for (i = 0; i < y.length; i++) {
        y[i].style.fontFamily = 'arial';
        y[i].style.color = '#1B2021';
        // Adiciona o efeito de hover
        y[i].addEventListener('mouseover', function () {
            this.style.color = '#4675C6';
        });

        // Remove o efeito de hover
        y[i].addEventListener('mouseout', function () {
            this.style.color = '#1B2021';
        });
    }

    // MAIN
    var destaque = document.getElementById('PicDestaque');
    // Muda o Logotipo
    destaque.setAttribute('src', 'extra/galaxia.jpg');
    destaque.style.width = '600px';
    // Muda a fonte do Título da Notícia Destaque
    document.getElementById('tituloNoticiaDestaque').style.fontFamily = 'Arial';
    document.getElementById('legendaNoticiaDestaque').style.fontFamily = 'Arial';
    document.getElementById('destaque').style.width = '50%';
    // FOOTER

    // Muda o background do footer
    document.getElementsByClassName('fim')[0].style.backgroundColor = 'gray';

    // document.querySelector("main").setAttribute("align-items","start")
    // document.getElementsByClassName("firstSection").setAttribute("justify-content","start")
    // document.getElementsByClassName("firstSection").setAttribute("justify-content","start")
    document.getElementById("firstSection").style.display = "initial";
}