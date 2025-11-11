const btnTopo = document.getElementById('btnTopo');
const toggleTema = document.getElementById('toggleTema');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnTopo.style.display = 'block';
    } else {
        btnTopo.style.display = 'none';
    }
});

btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

toggleTema.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleTema.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark');
    toggleTema.textContent = '☀️';
}