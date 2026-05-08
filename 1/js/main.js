
const body = document.body


const myAlert = (text, name = 'Alert') => {
        
        const oldAlert = document.querySelector('.custom-alert-container')
        if (oldAlert) oldAlert.remove()

        const overlay = document.createElement('div')
        overlay.className = 'custom-alert-overlay'

        Object.assign(overlay.style, {
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                zIndex: '999',

        })
        // контейнер
        const container = document.createElement('div')
        container.className = 'custom-alert-container'

        container.style.boxSizing = 'border-box'
        container.style.minWidth = '500px'
        container.style.minHeight = '200px'
        container.style.padding = '25px'

        container.style.position = 'fixed'
        container.style.top = '50%'
        container.style.left = '50%'
        container.style.transform = 'translate(-50%, -50%)'

        container.style.display = 'flex'
        container.style.flexDirection = 'column'
        container.style.zIndex = '1000'
        container.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.1)'
        container.style.borderRadius = '5%'
        container.style.background = 'white'

        // заголовок
        const title = document.createElement("h1")
        title.innerText = name
        title.style.margin = '0'
        container.append(title)

        const divIns = document.createElement("div")
        divIns.innerText = text
        divIns.style.fontSize = '20px'
        divIns.style.width = '420px'
        divIns.style.minHeight = '100px'

        divIns.style.wordWrap = 'break-word'
        divIns.style.whiteSpace = 'normal'
        divIns.style.overflowWrap = 'break-word'
        divIns.style.padding = '25px 0'


        container.append(divIns)

        const btn = document.createElement("button")
        btn.innerText = 'OK'
        btn.style.color = 'white'
        btn.style.background = 'rgba(15, 177, 241, 0.9)'
        btn.style.borderRadius = '5%'
        btn.style.border = '0'
        btn.style.width = '80px'
        btn.style.height = '40px'
        btn.style.fontSize = '15px'
        btn.style.alignSelf = 'flex-end'
        container.append(btn)

        btn.addEventListener('click', () => {
                container.remove()
                overlay.remove()
        })

        overlay.addEventListener('click', () => {
                container.remove()
                overlay.remove()
        })

        body.append(overlay)
        body.append(container)

}

