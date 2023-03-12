import { html, VLitElement, classMap } from "../lit.js"

export class VSorgu extends VLitElement {
	render(){
		return html`
		<div class="domenCols">
			<div class="docol">
				<v-dils></v-dils>
			</div>
			<div class="docol tabCol">
				<label for="sertfs">Sertifikatlar</label> <br>
				<textarea style="padding: 7px; width: 250px"></textarea>
			</div>
		</div>
		`
	}
}

VSorgu.tag = 'v-sorgu'
