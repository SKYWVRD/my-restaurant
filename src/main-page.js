export const buildPage = (name) => {
    const mainContent = document.getElementById('content');
    
    mainContent.innerHTML = `Hello ${name}`;
}

