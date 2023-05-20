
let form = document.getElementById('form')
let bot = 'Testttttttttttttttttttitbot';
form.onsubmit = f1;

function f1(){
    let str = 'Данные формы' + '\n';
    let elems = form.elements
    for (x in elems){
        if (elems[x].type == 'radio' && elems[x].checked){
            str += elems[x].name + ' '
            str += elems[x].value + '\n'
        }
        if (elems[x].type == 'checkbox' && elems[x].checked){
            str += elems[x].name + ' '
            str += 'выбран' + '\n'
        }
        if (x == elems.length-1){break}
        if (elems[x].type!='checkbox' && elems[x].type!= 'radio'){
            if (elems[x].name == ''){continue}
            if (elems[x].value == undefined){continue}
            str += elems[x].name+ ' '
            str += elems[x].value + '\n'
        }
        
    }
   //saveToPC(str)
   //send(str)
   telegram(str, token, chatid)
    return false
}

function saveToPC(str){

    let blob = new Blob([str], {type: "text/plain"});

    let link = document.createElement("a");

    link.setAttribute("href", URL.createObjectURL(blob));

    link.setAttribute("download", "123.txt");

    link.click();

}

function send(str){
    str = str.replaceAll('\n', '<br>')
    Email.send({
        SecureToken : "0b7d5f0d-9d60-4185-9b9c-dd59f093b36e",
        To : 'elka.sigacheva@list.ru',
        From : "nikita.khanov36@gmail.com",
        Subject : "Tема письма",
        Body : str
    }).then(
      alert('отправили'));
}

let token = '5730344248:AAHqNHpJgS7D960z4ZsNEVe4O5h59BoiBtU'
let chatid = '1111116283'

function telegram(str, token, chatid){
    let z=$.ajax({
        type: "POST",
        url: "https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+chatid,
        data: "parse_mode=HTML&text="+encodeURIComponent(str),
        }).then(alert('отправили в тг') )
     
}



//bot5730344248:AAHqNHpJgS7D960z4ZsNEVe4O5h59BoiBtU
