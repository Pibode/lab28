const container = document.querySelector('#container')




const menu = (element) => {

    const items = element.querySelectorAll('.item')
    const contents = element.querySelectorAll('.content-item')

    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none'
    }

    contents[0].style.display = 'block'
    items[0].style.background = 'blue'
    items[0].style.color = 'white'


    for (let i = 0; i < items.length; i++) {

        items[i].addEventListener('click', () => {


            for (let j = 0; j < contents.length; j++) {
                contents[j].style.display = 'none'
                items[j].style.removeProperty('background');
                items[j].style.removeProperty('color');
            }

            items[i].style.background = 'blue'
            items[i].style.color = 'white'
            contents[i].style.display = 'block'
        });
    }

}


menu(container)