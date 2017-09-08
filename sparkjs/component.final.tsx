import { CustomElement, h, ObserveAttribute } from 'spark.js';
export class MyComponent extends CustomElement('x-🍕') {

    @ObserveAttribute()
    pizzas: string[] = ['🍕'];

    @ObserveAttribute(true)
    numberOfPizzas: number;

    connectedCallback() {
        this.numberOfPizzas = 1;
        super.connectedCallback();
    }

    get template() {
        return (
            <div>
                <div>{this.pizzas.join(' ')}</div>
                <button onClick={(click) => this.addPizza()}>👆</button><button onClick={(click) => this.removePizza()}>👇</button>
            </div>
        )
    }

    get styles() {
        return `
        :host {
            display: block;
        }
        div {
            margin: 10px;
        }
            button {
                border-radius: 50%;
                outline: none;
                border: none;
                height: 30px;
                width: 30px;
                margin-right: 10px;
                background: smoke;
                cursor: pointer;
            }
            button:hover {
                background: wheat;
            }
        `
    }

    addPizza() {
        this.pizzas = [...this.pizzas, ...'🍕'.repeat(this.numberOfPizzas) ];
    }

    /**
     * :(
     */
    removePizza() {
        this.pizzas = this.pizzas.slice(0, -1);
    }


}

customElements.define(MyComponent.is, MyComponent);