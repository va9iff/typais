import { html, VLitElement, classMap } from "../lit.js"

let possibleDils = ["az", "en", "ru", "tr"]

window.dils = ["az"]

export class VDils extends VLitElement {
	static properties = {
		dils: {},
	}
	constructor() {
		super()
		// window.dils ??= []
	}

	render() {
		return html`
			<label for="dils">Üstünlük verilən dillər</label>
			${window.dils.map(
				(dil, i) => html`
					<div>
						<button class="rmbtn" @click = ${e =>{
							window.dils.splice(i, 1)
							this.requestUpdate()

						}
						}> - </button>
					<select
						id="dils"
						@input=${e => {
							window.dils[i] = e.target.value
							this.requestUpdate()
						}} >
						${possibleDils.map((pdil, k) => html`<option .selected = ${pdil==dil} value=${pdil}> ${pdil} </option>`)}
					</select> <!--${dil}-->
					</div>
				`
			)}
			<button @click = ${ e => 
				{
					window.dils.push("az")
					this.requestUpdate()
				}
			}>Əlavə et</button>`
	}
}

VDils.tag = "v-dils"
