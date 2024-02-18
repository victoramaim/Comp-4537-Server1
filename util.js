const xhttp = new XMLHttpRequest();
const endpoint = "https://comp-4537-server2.vercel.app/";
const word = document.getElementById('wordInput').value;
const definition = document.getElementById('definitionInput').value;

function storeDefinition() {
    xhttp.open("POST", endpoint, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify({ word, definition }));
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert("Definition stored successfully!");
        } else {
            alert("Error: " + this.statusText);
        }
    }
}

function searchDefinition() {
    const url = endpoint + "?word=" + document.getElementById('searchInput').value;
    xhttp.open("GET", url, true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('searchResult').textContent = 
            `Word: ${JSON.parse(this.responseText).word}, Definition: ${JSON.parse(this.responseText).definition}`;
        } else {
            alert("Error: " + this.statusText);
        }
    };
}