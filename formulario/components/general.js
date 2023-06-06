export class general extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }

    lecHtml(){ 
        let url="components/general.js";
        url.replace(".js",".html")
        console.log(url);
    }




    connectedCallback(){
        this.lecHtml();
        this.shadowRoot.innerHTML=``
    }   
}
customElements.define("my-general",general)


