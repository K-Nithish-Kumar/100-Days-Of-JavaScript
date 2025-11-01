document.addEventListener('DOMContentLoaded',function() {
    const copyButton = document.getElementById('copyButton');
    const copySnippet = document.getElementById('snippet');

    copyButton.addEventListener('click',function(){
        copySnippet.select();
        copySnippet.setSelectionRange(0,99999);

        try {
            const successful = document.execCommand("copy")

            if(successful){
                alert('Message copied successful');
            } else {
                alert('Message not copied');
            }
        } catch (error) {
            alert('failed');
            
        }
    })
})