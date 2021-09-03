function maisinfo(){
    let prim = document.getElementById('primeiro');
    let more = document.createElement('p');
    let lore = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
    prim.appendChild(more);
    more.appendChild(lore);
}
function maisinfodois(){
    let prim = document.getElementById('segundo');
    let more = document.createElement('p');
    let lore = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
    prim.appendChild(more);
    more.appendChild(lore);
}
function maisinfotres(){
    let prim = document.getElementById('terceiro');
    let more = document.createElement('p');
    prim.className = 'foi'
    let lore = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
    prim.appendChild(more);
    more.appendChild(lore);
}