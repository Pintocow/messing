function clickResponse(e){
    document.getElementById('click-counter').value = Number(document.getElementById('click-counter').value) + 1;
    if(e.target.id === 'reload-button'){
        browser.tabs.reload();
    }
}


browser.tabs.executeScript({file: "content-script.js"})
document.addEventListener('click', clickResponse);
