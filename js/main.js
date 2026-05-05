
const body = document.body

const myAlert = (text) => {
    if(typeof text === 'sring'){
        const container = document.createElement('div')
        /////
        //свойства
        ////
        
        const title = document.createElement("h1")
        title.innerText = "Aleart"
        /////
        //свойства
        ////
        container.append(title)

        const p = document.createElement("p")
        p.innerText = text
        /////
        //свойства
        ////
        container.append(p)

        const btn = document.createElement("button")
        /////
        //свойства
        ////
        container.append(btn)

        body.append(container)
        
    }else{
        return
    }
}