
function appendChildren(parent, children){
    for (const child of children) {
        parent.appendChild(child);
    }
}

function replaceContent(parent, newChild) {
    // Clears page content
    parent.textContent = '';

    // Appends new page content
    parent.appendChild(newChild);
}


export {appendChildren, replaceContent};