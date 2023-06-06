export class general extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    async lecHtml() {
        return await(await fetch("components/general.html")).text()
    }




    connectedCallback() {
        this.lecHtml().then(html=>{
            this.shadowRoot.innerHTML=html;
        })
    }
}
customElements.define("form-hunters", general)


