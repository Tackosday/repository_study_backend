export class encabezado extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    async connectedHtml(){
        return await(await fetch("components/encabezado.html")).text()
    }


    connectedCallback(){
        this.connectedHtml().then(html=>{
            this.shadowRoot.innerHTML=html
        })
    }


}
customElements.define("encabezado-form",encabezado)