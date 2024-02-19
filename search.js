function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

document.getElementById("searchForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const word = document.getElementById("searchInput").value;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://4537-lab-04-server-2.vercel.app/?word=${word}`, true);
    xhr.send();

    xhr.onerror = () => {
        alert(messages.error404);
    };
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status === 200 && xhr.status === 404)) {
            const response = JSON.parse(xhr.responseText);
            if (response && response.definition) {
                document.getElementById('feedback').textContent = 
                    `Word: ${word}, Definition: ${response.definition}`;
            } else {
                document.getElementById('feedback').textContent = messages.error404;
            }
        } else {
            alert(messages.error404);
        }
    };
});