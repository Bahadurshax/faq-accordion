document.querySelector('.toggle-container').addEventListener('click', e => {
    const type = e.target.dataset.type;

    if (type === 'toggle-btn') {
        const toggleBtn = e.target.children.length === 0
            ? e.target.parentElement
            : e.target;
        
        const emailBox = document.querySelector('.email-box-img');
        
        document.querySelectorAll('.toggle').forEach(btn => {
            if (btn.classList.contains('active') && btn !== toggleBtn) {
                btn.classList.remove('active');
                emailBox.classList.remove('move');
            }
        })
        
        toggleBtn.classList.toggle('active');
        emailBox.classList.toggle('move');
    }
})