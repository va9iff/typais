import { html, VLitElement, classMap } from "../lit.js"

export class VTabber extends VLitElement {
	static properties = {
	  // list: {},
	  // itemClick: {},
	  // itemShow: {}
		data: {} // {list, itemClick, itemshow}
	};
	constructor(){
		super()
		// setInterval(()=>this.requestUpdate(), 1000)
	}
	itemShow(item){
		return item
	}
	itemClick(item){
		console.log('clicked', item)
	}
	render(){
		return html`
				${
					this.data.list.map(
					item =>
						html`
							<button
								class=${classMap({
									tab: true,
									selected: this.selected == item || this.data.selected?.(item),
									oL :console.log(this.selected == item, this.selected, item)
								})}
								@click=${e=>
								{
									this.selected = item
									this.data.itemClick?.(item) || this.itemClick(item)
									this.requestUpdate()
								}
							}
							>
								${this.data.itemShow?.(item) || this.itemShow(item)}
							</button>
						`
				)}

		`
	}
}

VTabber.tag = "v-tabber"