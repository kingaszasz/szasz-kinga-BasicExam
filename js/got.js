function getData(url, callbackFunc) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callbackFunc(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function successAjax(xhttp) {
    // itt a json content, benne a data változóban
    var userDatas = JSON.parse(xhttp.responseText);
    console.log(userDatas);
    /*
      Pár sorral lejebb majd ezt olvashatod:
      IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ!

      Na azokat a függvényeket ITT HÍVD MEG! 

      A userDatas NEM GLOBÁLIS változó, ne is tegyétek ki globálisra. Azaz TILOS!
      Ha valemelyik függvényeteknek kell, akkor paraméterként adjátok át.
    */
    var inp;
    inp = document.getElementById("search").value;

    generateDivChild(userDatas);
    myEventListenerAdd(userDatas);

}
/*
function search(data) {
    var inp;
    inp = document.getElementById("search").value;
    for (var i = 0; i < data.length; i++) {
        if (data[i].name == inp) {
            document.getElementById("detail-text").innerHTML = data[i].bio;
            document.getElementById("detail-pic").setAttribute("src", data[i].portrait);
            document.getElementById("name").innerHTML = data[i].name;
        }
    }*/



function generateDivChild(data) {
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement('div');
        var img = document.createElement('img');
        img.setAttribute("src", data[i].portrait);

        /*img.addEventListener('click', function () {
            myShow(data[i]);
        });*/

        div.appendChild(img);
        var pElem = document.createElement('p');
        pElem.innerHTML = data[i].name;
        div.appendChild(pElem);
        document.querySelector('.map').appendChild(div);
    }
}


function myEventListenerAdd(data) {
    var images = document.querySelectorAll('img');
    //images.forEach(addEventListener('click', myAttributes()));
    console.log(images);

}

function myShow(object) {
    var pic = document.getElementById('detail-pic');
    pic.setAttribute("src", object.picture);
    console.log(pic);
}




// Írd be a json fileod nevét/útvonalát úgy, ahogy nálad van
getData('json/characters.json', successAjax);

// Live servert használd mindig!!!!!
/* IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ! */