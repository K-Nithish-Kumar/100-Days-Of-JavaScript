const text = document.getElementById('textInput');
const charCount = document.getElementById('charCount')

text.addEventListener('input', ()=>{
    const remaining = 50 - text.value.length;
    charCount.textContent = remaining;
})