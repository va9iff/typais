import { html, VLitElement, classMap } from "../lit.js"

function getBachs() {
	return ["informasiya təhlükəsizliyi", "informasiya texnologiyaları"]
}

function getMasters() {
	return ["sistem mühəndisliyi", "süni intellekt"]
}

const subjects = {
		"informasiya təhlükəsizliyi": [
			"00739_Rəqəmsal kommunikasiya",
			"00341_Fəlsəfə",
			"00480_Kompüter cinayət və məhkəmə ekspertizası",
			"00751_Risklərin və insidentlərin idarə edilməsi",
			"00923_Fl_Verilənlərin intellektual analizi",
		],
		"informasiya texnologiyaları": [
			"00004 - Azərbaycan dilində işgüzar və akademik kommunikasiya",
			"00072 - Ehtimal nəzəriyyəsi və riyazi statistika",
			"00304 - Əməliyyat sistemləri",
			"00388 - İnformasiya axtarışının üsul və vasitələri",
			"00924 - Verilənlərin strukturu və alqoritmlər",
			"00932-B1 - Xarici dildə işgüzar və akademik kommunikasiya-3",
		],
		"sistem mühəndisliyi": [
			"00196 - Biznes informasiya sistemləri", 
			"00234 - Diskret riyaziyyat",
			"00406 - İnformasiyanın mühafizəsi üsulları vəvasitələri (proqram-texniki)",
			"00498 - Konfidensiallıq və informasiya texnologiyaları",
			"00671 - Politologiya",
			"00825 - Zərərverici proqram təminatı və bərpa mühəndisliyi"],
		"süni intellekt": [
			"00005 - Azərbaycanın tarixi", 
			"00073 - Xarici dildə işgüzar və akademik kommunikasiya-2", 
			"00085 - İnformasiya təhlükəsizliyinə giriş", 
			"00090 - Kriptoqrafiyanın əsasları",
			"00105 - Riyazi analiz"
			],
	}

function getSubjects(ixtisasName) {
	return subjects[ixtisasName]
}

let fennler = []
let ixtisaslar = []

let selectedIxtisas = ""
let selectedFenn = ""
let topType = ""

let yuk = null

export class VTabs extends VLitElement {
	static properties = {
		minimized: {},
	}
	constructor() {
		super()
		this.minimized = false
	}
	updateBachs(e) {
		this.minimized = false
		topType = "bach"
		selectedIxtisas = ""
		selectedFenn = ""
		yuk = null
		ixtisaslar = getBachs()
		fennler = []
		this.requestUpdate()
	}
	updateMasters(e) {
		this.minimized = false
		topType = "master"
		selectedIxtisas = ""
		selectedFenn = ""
		yuk = null
		ixtisaslar = getMasters()
		fennler = []
		this.requestUpdate()
	}
	changeMinimize(e) {
		this.minimized = !this.minimized
	}
	render() {
		return html`
			<div class="tabCol co1">
				<button
					class=${classMap({
						tab: true,
						selected: topType == "bach",
					})}
					@click=${this.updateBachs}
				>
					Bakalavr
				</button>
				<button
					class=${classMap({
						tab: true,
						selected: topType == "master",
					})}
					@click=${this.updateMasters}
				>
					Magistr
				</button>
				<button class="tab sorgu" @click=${e=>alert("Sorğular yaxında əlavə olunacaq")}>Sorğu</button>
				<button class=${classMap({tab:true, selected: this.minimized})} @click=${this.changeMinimize}>Yığcam</button>
			</div>
			<div
				class=${classMap({
					tabCol: true,
					hidden: this.minimized,
				})}
			>
				${ixtisaslar.map(
					ixts =>
						html`
							<button
								class=${classMap({
									ixtisas: true,
									tab: true,
									selected: selectedIxtisas == ixts,
								})}
								@click=${e => {
									this.getFenns(ixts)
								}}
							>
								${ixts}
							</button>
						`
				)}
			</div>
			<div
				class=${classMap({
					tabCol: true,
					fenn: true,
					hidden: this.minimized,
				})}
			>
				${fennler.map(
					fenn =>
						html`<button
							class=${classMap({
								tab: true,
								selected: fenn == selectedFenn,
							})}
							@click=${e => {
								selectedFenn = fenn
								this.getYuk(fenn)
							}}
						>
							${fenn}
						</button>`
				)}
			</div>
			<div
				class=${classMap({
					tabCol: true,
					yukContent: true,
					hidden: !yuk
					// fenn: true,
					// hidden: this.minimized,
				})}
			>
				<form>
					<label for="hours">Dərs Saatları</label> <br>
					<input type="number" name="hours" id="hours" value=30 min=1> <br>
					<br>
					<label for="kredit">Krediti</label> <br>
					<input type="number" name="kredit" id="kredit" value=1 min=1> <br>
					<br>
					<label for="tform">Tədris Forması</label> <br>
					<select name="tform" id="tform">
					  <option value="eyani">Əyani</option>
					  <option value="qiyabi">Qiyabi</option>
					</select> <br>
					<br>
					<label for="startDate">Başlanğıc Tarixi</label> <br>
					<input type="date" id="startDate" name="startDate"
					       value="2018-07-22"
					       min="2018-01-01" max="2018-12-31"> <br>
			       <br>
					<label for="muallim">Müəllim</label> <br>
					<input type="text" name="muallim" id="muallim" placeholder="Müəllimin Adı"> <br>



					<br>
					<button type = "submit" class="tab submitButton">Göndər</button>
				</form>
			</div>
		`
	}
	getFenns(ixts) {
		selectedIxtisas = ixts
		selectedFenn = ""
		yuk = null
		fennler = getSubjects(ixts)
		this.requestUpdate()
	}
	getYuk(fenn) {
		selectedFenn = fenn
		yuk = null
		yuk = {someProp: "mono"}
		console.log(selectedFenn == fenn)
		this.requestUpdate()
		console.log("fasd")
	}
}

VTabs.tag = "v-tabs"
