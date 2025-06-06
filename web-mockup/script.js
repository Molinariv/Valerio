document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search');
    const tableRows = Array.from(document.querySelectorAll('#product-table tbody tr'));
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const closeModal = document.getElementById('close-modal');

    searchInput.addEventListener('input', function () {
        const term = this.value.toLowerCase();
        tableRows.forEach(row => {
            const content = row.textContent.toLowerCase();
            row.style.display = content.includes(term) ? '' : 'none';
        });
    });

    tableRows.forEach(row => {
        row.addEventListener('click', function () {
            modalText.textContent = 'Hai selezionato: ' + this.children[0].textContent;
            modal.classList.remove('hidden');
        });
    });

    closeModal.addEventListener('click', function () {
        modal.classList.add('hidden');
    });

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});
