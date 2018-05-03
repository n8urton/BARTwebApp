window.onload =bartTimes();

function getData(data, callback) { //callback function needed to update DOM after xhr request is made
    var xhr = new XMLHttpRequest();
    var url = 'http://api.bart.gov/api/etd.aspx?cmd=etd&orig=ashb&key=MW9S-E7SL-26DU-VV8V&json=y';//should make a selection to define value of orig?

    xhr.open('GET', url);
    xhr.onload = function() {
        if (xhr.status === 200) {
            data = JSON.parse(xhr.responseText);
            callback(data);

        }
        else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();   
}

function updateData(data) {
    alert(data.root.station[0].name);
    var stationName = document.getElementById("stationName");
    stationName.innerHTML = data.root.station[0].name;
    makeTest(data);

}

function makeTest(data) {
    etd = data.root.station[0].etd;
    etd.forEach(function(element) {
        destination = element.destination;
        var createDiv = document.createElement("UL");
        var textDiv = document.createTextNode(destination);
        createDiv.appendChild(textDiv);
        document.getElementById("main").appendChild(createDiv);localStorage
        
        element.estimate.forEach(function(element) {
            var createLi = document.createElement("LI");
            var textLi = document.createTextNode(element.minutes);
            createLi.appendChild(textLi);
            document.getElementById("main").appendChild(createLi);
        });
    });
}

function bartTimes() {
    var data = [];
    getData(data, updateData);


    //alert(data[0]);

}







/*
var FOO = (function() {
    var my_var = 10; //shared variable available only inside your module

    function bar() { // this function not available outside your module
        alert(my_var); // this function can access my_var
    }

    return {
        a_func: function() {
            alert(my_var); // this function can access my_var
        },
        b_func: function() {
            alert(my_var); // this function can also access my_var
        }
    };

})();
*/
