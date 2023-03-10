import { html, VLitElement, classMap } from "../lit.js"

export class VDomens extends VLitElement {
	static properties = {
		muhazire: {},
		mesqele: {},
		lab: {},
		meslehet: {},
		exam: {},
	}
	constructor(){
		super()
		this.muhazire = 0
		this.mesqele = 0
		this.lab = 0
		this.meslehet = 0
		this.exam = 0
	}
	render(){
		return html`

		<div class="domenCols">
		<div class="docol">
 			<div class = "fpiece">
				<label for="ad">Fənnin adı</label>
				<input id="ad" type="text"> 
 			</div>

 			<div class = "fpiece">
				<label for="kod">Kodu</label>
				<input id="kod" type="number"> 
 			</div>

 			<div class = "fpiece">
				<label for="kredit">Krediti</label>
				<input id="kredit" type="number"> 
 			</div>

		</div>

		<div class="docol">
 			<div class = "fpiece">
				<label for="tcount">Tələbə sayı</label>
				<input id="tcount" type="number"> 
 			</div>
 			<div class = "fpiece">
				<label for="qrup">Qrup</label>
				<input id="qrup" type="number"> 
 			</div>
 			<div class = "fpiece">
				<label for="kurs">Kurs</label>
				<input id="kurs" type="number"> 
 			</div>
		</div>

		<div class="docol">

 			<div class = "fpiece">
				<label>Cəm</label>
				<input type="text" disabled value = ${+this.muhazire + +this.mesqele + +this.lab + +this.meslehet + +this.exam}> 
 			</div>
 			<div class = "fpiece">
				<label for="muhazire">Muhazirə</label>
				<input id="muhazire" value = ${this.muhazire} @input =${e=>this.muhazire =e.target.value } type="number"> 
 			</div>

 			<div class = "fpiece">
				<label for="mesqele">Məşğələ</label>
				<input id="mesqele" value = ${this.mesqele} @input = ${e=> this.mesqele =e.target.value} type="number">
 			</div>
 			<div class = "fpiece">
				<label for="lab">Labaratoriya</label>
				<input id="lab" value = ${this.lab} @input = ${e=> this.lab =e.target.value} type="number"> 
 			</div>
 			<div class = "fpiece">
				<label for="meslehet">Məsləhət</label>
				<input id="meslehet" value = ${this.meslehet} @input = ${e=> this.meslehet =e.target.value} type="number"> 

 			</div>
 			<div class = "fpiece">
				<label for="exam">İmtahan</label>
				<input id="exam" value = ${this.exam} @input = ${e=> this.exam =e.target.value} type="number"> 
 			</div>
		</div>
		</div>
		<a class="tab list" href="./pdfs/Mühəndislik_2022-2023.pdf" target="blank">List</a>

		`
	}
}

VDomens.tag= 'v-domens'