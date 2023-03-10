import { html, VLitElement, classMap } from "../lit.js"


export class VTeacher extends VLitElement {
	static properties = {
	}
	constructor() {
		super()
	}
	render() {
		return html`
			<div class="docol">
				<div class="fpiece">
					<label for="mad">Müəllimin adı</label>
					<input id="mad" type="text" />
				</div>

				<div class="fpiece">
					<label for="ead">Elmi adı/Dərəcəsi</label>
					<select id="ead">
						<option value="laborant">Laborant</option>
						<option value="doesnt">Doesent</option>
						<option value="prof">Professor</option>
					</select>
				</div>

				<div class="fpiece">
					<label for="exp">Əvvəlki illərin təcrübəsi</label>
					<input id="exp" type="number" />
				</div>

				<div class="fpiece">
				</div>
			</div>
		`
	}
}

VTeacher.tag = "v-teacher"
