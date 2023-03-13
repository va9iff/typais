import { html, VLitElement, classMap } from "../lit.js"

export class VTeacher extends VLitElement {
	static properties = {}
	constructor() {
		super()
		this.ishYers = [{ yer: "unec", vez: "Müəllim", mud: 1 }]
	}
	render() {
		return html`
		<button
			@click=${e => {
				this.fresh()
				this.requestUpdate()
			}}
			class="btn"
		>
			Göndər
		</button>
		<button
			@click=${e => {
				this.fresh()
				this.requestUpdate()
			}}
			class="btn"
		>
			Məlumatları təmizlə
		</button>

			<div class="domenCols">

				<div class="docol">
					<div class="fpiece">
						<label for="mad">Müəllimin adı</label>
						<input id="mad" type="text" />
					</div>
					<div class="fpiece">
						<label for="sad">Soyadı</label>
						<input id="sad" type="text" />
					</div>
					<div class="fpiece">
						<label for="gender">Cinsi</label>
						<select name="" id="">
							<option value="k">Kişi</option>
							<option value="q">Qadın</option>
						</select>
					</div>
					<div class="fpiece">
						<label for="birthdate">Doğum tarixi</label>
						<input id="birthdate" type="date" />
					</div>
					<div class="fpiece">
						<label for="email">Email</label>
						<input id="email" type="email" />
					</div>
					<div class="fpiece">
						<label for="mad">Nömrə</label>
						<input id="mad" type="tel" />
					</div>
					<div class="fpiece">
						<label for="mad">Kafedra</label>
						<select name="" id="">
							<option value="k1">Kafedra 1</option>
							<option value="k2">Kafedra 2</option>
							<option value="k3">Kafedra 3</option>
							<option value="k4">Kafedra 4</option>
							<option value="k5">Kafedra 5</option>
							<option value="k6">Kafedra 6</option>
							<option value="k7">Kafedra 7</option>
							<option value="k8">Kafedra 8</option>
							<option value="k9">Kafedra 9</option>
						</select>
					</div>
					<div class="fpiece">
						<label for="mad">Ştatı</label>
						<select name="" id="shtat">
							<option value="1">Tam ştat</option>
							<option value="0.75">0.75 ştat</option>
							<option value="0.5">0.5 ştat</option>
							<option value="0.25">0.25 ştat</option>
							<option value="saatb">Saat başı</option>
							<option value="mqvl">Müqaviləli</option>
						</select>
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
				</div>

				<div class="docol tabCol">
				<div class="fpiece">
					<label>İşlədiyi Yerlər</label>
					${this.ishYers.map(
						(ishYer, i) =>
							html`
								<div class="ishyer fpiece">
									<label for="">İş yeri</label>
									<input id="mad" type="text" .value=${ishYer.yer} />
									<label for="">Vəzifə</label>
									<input id="mad" type="text" .value=${ishYer.vez} />
									<label for="">Zaman (ay)</label>
									<input id="mad" type="number" .value=${ishYer.mud} />
									<button
										@click=${e => {
											this.ishYers.splice(i, 1)
											this.requestUpdate()
										}}
										style="margin-top: 4px; margin-left: auto; padding: 3px 15px"
									>
										sil
									</button>
								</div>
							`
					)}
					<button
						@click=${e => {
							this.ishYers.push({ yer: "", vez: "" })
							this.requestUpdate()
						}}
					>
						İş yeri əlavə et
					</button>
				</div>
				</div>

			</div>
		`
	}
}

VTeacher.tag = "v-teacher"
