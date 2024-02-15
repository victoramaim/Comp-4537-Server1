const xhttp = new XMLHttpRequest();
const endpoint = "http://localhost:3000/api/definitions/";
const word = document.getElementById('wordInput').value;
const definition = document.getElementById('definitionInput').value;

function storeDefinition() {
    xhttp.open("POST", endpoint, true);
    xhttp.send(JSON.stringify({ word, definition }));
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Definition stored successfully");
        }
    }
}

async function searchDefinition() {
    xhttp.open("GET", "http://localhost:3000/api/definitions/?word=" 
    + document.getElementById('searchInput').value, true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('searchResult').textContent = 
            `Word: ${JSON.parse(this.responseText).word}, Definition: ${JSON.parse(this.responseText).definition}`;
        } else {
            document.getElementById('searchResult').textContent = `Error: ${this.statusText}`;
        }
    };
}