import { html, VLitElement, classMap } from "../lit.js"

export class VSorgu extends VLitElement {
	render(){
		return html`
			<v-dils></v-dils>
		`
	}
}

VSorgu.tag = 'v-sorgu'
