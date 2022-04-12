(() => {

    const addText = (id, key, language = "en") => {
        if (!(id && key)) { console.error('Must provide id and key'); return; }

        let node = document.getElementById(key);
        let text = document.createTextNode(id);
        node.appendChild(text);
    }
})()