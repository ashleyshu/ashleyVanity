let imgs = document.querySelectorAll('img');

for (imgElt of imgs) {
    let file = 'me.jpg';
    let url = chrome.extension.getURL(file);
    imgElt.src = url;
}