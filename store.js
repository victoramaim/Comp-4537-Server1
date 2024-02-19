document.getElementById("storeForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const word = document.getElementById("wordInput").value;
    const definition = document.getElementById("definitionInput").value;

    if (!word.trim() || !definition.trim()) {
        alert(messages.inputsRequired);
        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://plankton-app-23o4e.ondigitalocean.app/api/definitions/", true);
    xhr.setRequestHeader("Content-Type", "text/plain");
    xhr.send(JSON.stringify({ word, definition }));

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert(messages.datastored);
        }
    };
});