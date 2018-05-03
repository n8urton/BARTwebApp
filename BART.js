window.onload = updateInfo();

function getData(data, callback) {
    var xhr = new XMLHttpRequest();
    var url = 'http://api.bart.gov/api/etd.aspx?cmd=etd&orig=ashb&key=MW9S-E7SL-26DU-VV8V&json=y';

    xhr.open('GET', url);
    xhr.onload = function() {
        if (xhr.status === 200) {
            data = JSON.parse(xhr.responseText);
            callback(data);//alert(data.root.station[0].name);
            //return data;

        }
        else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();   
}

function returnData(data) {
    alert(data.root.station[0].name);
    var stationName = document.getElementById("stationName");
    stationName.innerHTML = data.root.station[0].name;
}

function makeTest() {
    return 10;
}

function updateInfo() {
    test = makeTest();
    var data = [];
    alert(test);
    getData(data, returnData);


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
