
const body = document.body


const myAlert = (text) => {

        // контейнер
        const container = document.createElement('div')

        container.style.boxSizing = 'border-box'
        container.style.minWidth = '500px'
        container.style.minHeight = '300px'
        container.style.padding = '25px'

        container.style.position = 'absolute'
        container.style.top = '50%'
        container.style.left = '50%'
        container.style.transform = 'translate(-50%, -50%)'

        container.style.display = 'flex'
        container.style.flexDirection = 'column'


        container.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.1)'
        container.style.borderRadius = '5%'

        // заголовок
        const title = document.createElement("h1")
        title.innerText = "Alert"
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


        body.append(container)
}

myAlert(`hello. wold`)
