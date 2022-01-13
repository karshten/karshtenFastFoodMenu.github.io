export default class Button {
    constructor(text) {
        this.text = text;
    }
    render(){
        return `<li class="menu-title">${this.text}</li>`;
    }
}