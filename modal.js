let modalFindUs = document.querySelector('#modal-find-us')
let modalSocials = document.querySelector('#modal-socials')

let openButtonFindUs = document.querySelector('#open-button-find-us')
let closeButtonFindUs = document.querySelector('#close-button-find-us')
let openButtonSocials = document.querySelector('#open-button-socials')
let closeButtonSocials = document.querySelector('#close-button-socials')


openButtonFindUs.addEventListener('click', showModalFindUs)
openButtonSocials.addEventListener('click', showModalSocials)

closeButtonFindUs.addEventListener('click', hideModalFindUs)
closeButtonSocials.addEventListener('click', hideModalSocials)

function showModalFindUs(){
    modalFindUs.showModal()
}

function showModalSocials(){
    modalSocials.showModal()
}

function hideModalFindUs(){
    modalFindUs.close()
}

function hideModalSocials(){
    modalSocials.close()
}

if (modalFindUs.hasAttribute("open") || modalSocials.hasAttribute("open")){

}