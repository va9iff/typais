import { html, VLitElement, classMap } from "../lit.js"

export class VSorgu extends VLitElement {
	render(){
		return html`
			<v-dils></v-dils>
			<br><br>
			<label for="sertfs">Sertifikatlar</label> <br>
			<textarea style="padding: 7px"></textarea>
		`
	}
}

VSorgu.tag = 'v-sorgu'
