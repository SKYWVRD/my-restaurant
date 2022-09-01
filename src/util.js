export function clearContent() {
    const mainContainer = document.getElementById('content');
    if(mainContainer.childNodes.length > 1)
        mainContainer.removeChild(mainContainer.childNodes[1]);
}