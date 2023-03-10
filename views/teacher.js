import { html, VLitElement, classMap } from "../lit.js"

export class VTeacher extends VLitElement {
	static properties = {
		dils: {},
	}
	constructor() {
		super()
		this.dils = ["ru", "en", "az"]
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
					<div class="dils">
						${this.dils.map(
							(dil, i) => html`
								<div class="dil">
									<div class="short">${`${i}) ${dil}`}</div>
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
					</div>
				</div>
			</div>
		`
	}
}

VTeacher.tag = "v-teacher"
