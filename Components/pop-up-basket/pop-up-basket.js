export default class BasketItem {
    constructor({id, title, category, price, img, description}) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.price = price;
        this.img = img;
        this.description = description
    }

    render() {
        return `
            <div class="pop_up_item">
                <div class="wrap">
                    <img class="img-item" src="${this.img}" alt="${this.title}">
                    <div class="pp_text">
                        <h3 class="item-header">${this.title}</h3>
                        <p class="item-desc">${this.description}</p>
                        <p class="cost">${this.price}</p>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </div>
            `
    }
}