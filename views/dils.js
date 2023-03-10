import { html, VLitElement, classMap } from "../lit.js"

export class VDils extends VLitElement {
	static properties = {
		dils: {},
	}
	constructor() {
		super()
	}
	

render(){
	return html`
	<label>Üstünlük verilən dillər</label>
	${this.dils.map(
		(dil, i) => html`
			<div class="dil">
				<input type="checkbox" .checked=${dil.can}>
				<div class="short">${`${i}) ${dil.lang}`}</div>
				<button
					@click=${e => {
						// this.dils = [dil, ...this.dils.filter(_dil=> dil!=_dil)]
						if (i <= 0) return
						let a, b
						;[a, b] = [this.dils[i - 1], this.dils[i]]
						this.dils[i - 1] = b
						this.dils[i] = a
						this.requestUpdate()
					}}
				>
					↑
				</button>
				<button
					@click=${e => {
						if (i >= this.dils.length - 1) return
						let a, b
						;[a, b] = [this.dils[i], this.dils[i + 1]]
						this.dils[i] = b
						this.dils[i + 1] = a
						this.requestUpdate()
					}}
				>
					↓
				</button>
			</div>
		`
)}
	`
}}

VDils.tag = "v-dils"