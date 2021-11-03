import {createElement} from "./createElement.js";
import {$arenas} from "./variables.js";

export const createReloadButton = () => {
    const $reloadButton = createElement('div', 'reloadWrap')
    const $button = createElement('button', 'button')
    $button.innerText = 'Restart'
    $reloadButton.appendChild($button)
    $arenas.appendChild($reloadButton)

    $reloadButton.addEventListener('click', function () {
        window.location.reload()
    }, {once: true})
}