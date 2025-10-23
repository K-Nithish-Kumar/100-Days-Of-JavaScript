document.getElementById('search-input').addEventListener('input',function() {
    const searchTerm = this.value.toLowerCase();
    const items = document.querySelectorAll('#item-list .list-group-item')

    items.forEach((item) => {
      const text = item.textContent.toLocaleLowerCase();
      const index = text.indexOf(searchTerm)

      if(index !== -1 && searchTerm !== ''){
        const highlightedText = item.textContent.substring(index,index+searchTerm.length);
        item.innerHTML = item.textContent.replace(highlightedText,`<span class="highlight">${highlightedText}</span>`)
     }  else {
        item.innerHTML = item.textContent;
       }
    })
})