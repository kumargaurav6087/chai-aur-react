function customRender(reactElement,container){
    const domElement = document.createElement
    (reactElement.type) 
    

}

const { Children } = require("react")

const reactElement = {
    type: 'a',
    props:{
        href:"https://google.com",
        target: '_blank'
    },
    Children: 'click to visit google'   
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)