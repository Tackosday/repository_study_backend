export class details extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    async connectedHtml(){
        return await(await fetch("components/details.html")).text()
    }


    connectedCallback(){
        this.connectedHtml().then(html=>{
            this.shadowRoot.innerHTML=html
        })
    }

    
}
customElements.define("details-encabezado",details)