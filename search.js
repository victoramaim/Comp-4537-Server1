function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

document.getElementById("SearchForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const word = document.getElementById("searchInput").value;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://monkfish-app-q5kql.ondigitalocean.app/api/definitions/?word=${word}`, true);
    xhr.send();

    xhr.onerror = () => {
        alert(messages.error404);
    };
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200 && isJsonString(xhr.responseText)) {
                const response = JSON.parse(xhr.responseText);
                if (response && response.definition) {
                    document.getElementById('feedback').textContent = 
                        `Word: ${word}, Definition: ${response.definition}`;
                } else {
                    document.getElementById('feedback').textContent = messages._404;
                }
            } else {
                alert(messages._404);
            }
        }
    };
});