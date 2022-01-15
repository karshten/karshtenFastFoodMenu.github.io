export default class MenuItem {
    constructor({id, title, category, price, old_price, img, description}) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.old_price = old_price;
        this.price = price;
        this.img = img;
        this.description = description
    }

    render() {
        return `
            <div class="item">
                <img class="img-item" src="${this.img}" alt="${this.title}">
                <h3 class="item-header">${this.title}</h3>
                <p class="item-desc">${this.description}</p>
                <div class="cost_count">
                    <div class="wrap-cost">
                        <p class="oldCost">$${this.old_price}</p>
                        <p class="newCost">$${this.price}</p>
                    </div>
                    <div class="count">
                        <p class="minus">-</p>
                        <p>1</p>
                        <p class="plus">+</p>
                    </div>
                </div>
                <div class="wrap-addBtn">
                    <button id="btn" class="addBtn">Add to card</button>
                    <div id="addFavorite" class="wrap-icon favorites">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             class="bi bi-bookmark" viewBox="0 0 16 16">
                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                        </svg>
                    </div>
                </div>
            </div>
            `
    }
}