import styles from "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" assert { type:"css" }

export class encabezado extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    async connectedHtml(){
        return await(await fetch("components/encabezado.html")).text()
    }


    connectedCallback(){
        document.adoptedStyleSheets.push(styles);
        this.connectedHtml().then(html=>{
            this.shadowRoot.innerHTML=html
        })
    }


}
customElements.define("encabezado-form",encabezado)