var content = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, aperiam itaque facilis ipsum est assumenda quasi sint maiores distinctio sed dolorem hic incidunt temporibus illum totam voluptates exercitationem magni. Earum eos iure dolorum quas, officiis nulla minima? Itaque, nam autem sunt corrupti natus labore dolore suscipit obcaecati, nulla pariatur iusto laborum ex ducimus eius sed odio aperiam veritatis aliquam magnam iste porro! Aliquam laboriosam ut esse quidem aspernatur cumque perspiciatis cum, qui, mollitia, cupiditate nostrum alias. Obcaecati eum fugit aut? Itaque, amet impedit. Repudiandae odit eius quo maiores veritatis, aspernatur ipsam id quaerat sit dignissimos voluptatem possimus pariatur quia. Commodi!';
var text = '';
var word = '';

for (var i = 0; i <= content.length; i++) {
    var char = content.charAt(i);
    if (char === ' ' || i === content.length) {
        text += `<span>${word}</span>` + (i === content.length ? '' : ' ');
        word = '';
    } else {
        word += char;
    }
    if(i===content.length){
        break;
    }
}
document.write(text);

var spans = document.querySelectorAll('span');
var position = 0;
function changeColor() {
    for (var j = 0; j < spans.length; j++) {
        spans[j].style.color = 'black';
    }
    spans[position].style.color = 'red';
    position++;
    if (position >= spans.length) {
        position = 0; 
    }
    setTimeout(changeColor, 1000);
}
changeColor();