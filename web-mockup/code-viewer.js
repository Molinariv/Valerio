document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('file-select');
    const codeBlock = document.getElementById('code-block');

    function loadFile() {
        const file = select.value;
        let lang = 'html';
        if (file.endsWith('.js')) lang = 'javascript';
        else if (file.endsWith('.css')) lang = 'css';

        fetch(file)
            .then(resp => resp.text())
            .then(text => {
                codeBlock.className = lang;
                codeBlock.textContent = text;
                hljs.highlightElement(codeBlock);
            });
    }

    select.addEventListener('change', loadFile);
    loadFile();
});
