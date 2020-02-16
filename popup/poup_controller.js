document.getElementById('actionButton').addEventListener('click',function(){
    browser.tabs.executeScript({file: "script.js"});
});
