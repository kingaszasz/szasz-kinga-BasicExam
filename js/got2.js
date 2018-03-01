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

    // reveal modul patternnel!

    //A verzió:
    /*init() - //csak ez publikus
        getJsonContent()
            deleteDeadChar() 
            sortByname(); 
        generateGrid()
            addEventListenerForGridElement();
                writeCharData();
        searchByName() 
            writeCharData();

            //B. verzion--------------

        getJsonContent() // odaadja a getJsont // public
        sortByname(); // név szerint rendezi az adatokat //private
        deleteDeadChar(), // törli a halott karaktereket //private
        generateGrid() // legenerálja a 6*8-askarakter adathamazt // public
        addEventListenerForGridElement(); // az egyes képekhez eseménykezelőt ad //private
        writeCharData() // a kiválasztott karakter adatait jeleníti meg a jobb oldali sávba
        searchByName() // név szerint keres // public v init()
    */


    // Írd be a json fileod nevét/útvonalát úgy, ahogy nálad van
    getData('json/characters.json', successAjax);

    // Live servert használd mindig!!!!!
    /* IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ! */