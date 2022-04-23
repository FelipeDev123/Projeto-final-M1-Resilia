const url = "file:///C:/Users/Felipe/OneDrive/%C3%81rea%20de%20Trabalho/Pojeto%20final%20M1/personagen1/fase2.html"
const btn = document.querySelector ('.btn1')

function openNewtab(url) {
    const win = window.open(url, 'blank')
    win.focus()
}
btn.addEventListener('click', () => {
    openInNewTab(url)
})