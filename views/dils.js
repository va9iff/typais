import { html, VLitElement, classMap } from "../lit.js"

let possibleDils = ["az", "en", "ru", "tr"]

export class VDils extends VLitElement {
	static properties = {
		dils: {},
	}
	constructor() {
		super()
	}

	render() {
		return html`
			<label for="dils">Üstünlük verilən dillər</label>
			${this.dils.map(
				(dil, i) => html`
					<select
						id="dils"
						@change=${e => {
							this.dils[i] = e.target.value
							this.dils = [...new Set(this.dils)]
							this.requestUpdate()
						}} >
						${possibleDils.map(pdil => html`<option ?selected = ${pdil==dil} value=${pdil}> ${pdil} </option>`)}
					</select>
				`
			)}
			<button @click = ${ e => 
				{
					this.dils.push("az")
					this.requestUpdate()
				}
			}>add</button>
		${console.log(this.dils)}`
	}
}

VDils.tag = "v-dils"
