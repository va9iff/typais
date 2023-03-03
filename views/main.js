import { html, VLitElement } from "/lit.js"

function getSubjects(ixtisasName) {
	return {
		"informasiya təhlükəsizliyi": [
			"math",
			"english",
			"python",
			"confidentiality",
		],
		"informasiya texnologiyaları": [
			"internet of things",
			"hardware",
			"communication",
		],
		"sistem mühəndisliyi": ["design architectures", "math"],
		"süni intellekt": ["math", "calculus", "plotting", "data analysis"],
	}[ixtisasName]
}

let ixtisaslar = [
	"informasiya təhlükəsizliyi",
	"informasiya texnologiyaları",
	"sistem mühəndisliyi",
	"süni intellekt",
]

let fennler = []

export class VMain extends VLitElement {
	render() {
		return html`
			<div class="tabs">
				<div class="co1">
					<div class="tab bach">Bakalavr</div>
					<div class="tab master">Magistr</div>
				</div>
				<div class="ixtisaslar">
					${ixtisaslar.map(
						ixts => html` <div class="ixtisas tab" @click = ${e=>this.getFenns(ixts)}>${ixts}</div> `
					)}
				</div>
				<div class="fennler">
					${fennler.map(fenn=>html`<div class="tab">${fenn}</div>`)}
				</div>
			</div>
		`
	}
	getFenns(ixts){
		console.log('got fenns')
		console.log(getSubjects(ixts))
		fennler = getSubjects(ixts)
		this.requestUpdate()
	}
}

VMain.tag = "v-main"
