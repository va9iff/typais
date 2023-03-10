import { html, VLitElement, classMap } from "../lit.js"

export class VDomens extends VLitElement {
	static properties = {
		muhazire: {},
		mesqele: {},
		lab: {},
		meslehet: {},
		exam: {},
		muhazire2: {},
		mesqele2: {},
		lab2: {},
		meslehet2: {},
		exam2: {},
		prehber: {},
		elmitecrube: {},
		bishi: {},
		doct: {},
		yekun: {},
	}
	constructor(){
		super()
		this.muhazire = 0
		this.mesqele = 0
		this.lab = 0
		this.meslehet = 0
		this.exam = 0

		this.muhazire2 = 0
		this.mesqele2 = 0
		this.lab2 = 0
		this.meslehet2 = 0
		this.exam2 = 0
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
 			<div class = "fpiece">
				<label for="kurs">Kurs</label>
				<!-- <input id="kurs" type="number"> -->
				<select name="kurs" id="kurs">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
				</select>
 			</div>
 			<div class = "fpiece">
				<label for="qrup">Qrup</label>
				<!-- <input id="qrup" type="number"> -->
				<select name="kurs" id="kurs">
					<option value="qrup1">qrup 1</option>
					<option value="qrup2">qrup 2</option>
					<option value="qrup3">qrup 3</option>
					<option value="qrup4">qrup 4</option>
					<option value="qrup4">qrup 4</option>
					<option value="qrup5">bunları Elvinin backendindən alacaq.</option>
				</select>
 			</div>
 			<div class = "fpiece">
				<label for="tcount">Tələbə sayı</label>
				<input id="tcount" type="number"> 
 			</div>

		</div>

		<div class="docol">
			<label>Payız semestri</label> <br>
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
 			<div class = "fpiece">
				<label>Cəm (I)</label>
				<input type="text" disabled value = ${+this.muhazire + +this.mesqele + +this.lab + +this.meslehet + +this.exam}> 
 			</div>
		</div>
		<div class="docol">
		<label>Yaz semestri</label> <br>
 			<div class = "fpiece">
				<label for="muhazire2">Muhazirə</label>
				<input id="muhazire2" value = ${this.muhazire2} @input =${e=>this.muhazire2 =e.target.value } type="number"> 
 			</div>

 			<div class = "fpiece">
				<label for="mesqele2">Məşğələ</label>
				<input id="mesqele2" value = ${this.mesqele2} @input = ${e=> this.mesqele2 =e.target.value} type="number">
 			</div>
 			<div class = "fpiece">
				<label for="lab2">Labaratoriya</label>
				<input id="lab2" value = ${this.lab2} @input = ${e=> this.lab2 =e.target.value} type="number"> 
 			</div>
 			<div class = "fpiece">
				<label for="meslehet2">Məsləhət</label>
				<input id="meslehet2" value = ${this.meslehet2} @input = ${e=> this.meslehet2 =e.target.value} type="number"> 

 			</div>
 			<div class = "fpiece">
				<label for="exam2">İmtahan</label>
				<input id="exam2" value = ${this.exam2} @input = ${e=> this.exam2 =e.target.value} type="number"> 
 			</div>
 			<div class = "fpiece">
				<label>Cəm (II)</label>
				<input type="text" disabled value = ${+this.muhazire2 + +this.mesqele2 + +this.lab2 + +this.meslehet2 + +this.exam2}> 
 			</div>
		</div>
		<div class="docol">
 			<div class = "fpiece">
				<label for="prehber">Praktika rəhbəri</label>
				<input id="prehber" value = ${this.prehber} @input =${e=>this.prehber =e.target.value } type="text"> 
 			</div>
 			<div class = "fpiece">
				<label for="elmitecrube">Elmi pedaqoji, Elmi-tədris təcrübəsi</label>
				<input id="elmitecrube" value = ${this.elmitecrube} @input =${e=>this.elmitecrube =e.target.value } type="text"> 
 			</div>
 			<div class = "fpiece">
				<label for="bishi">Buraxılış işi</label>
				<input id="bishi" value = ${this.bishi} @input =${e=>this.bishi =e.target.value } type="text"> 
 			</div>
 			<div class = "fpiece">
				<label for="doct">Doktorantura</label>
				<input id="doct" value = ${this.doct} @input =${e=>this.doct =e.target.value } type="text"> 
 			</div>
 			<div class = "fpiece">
				<label for="yekun">Yekun:</label>
				<input id="yekun" value = ${this.yekun} @input =${e=>this.yekun =e.target.value } type="number"> 
 			</div>
		</div>
		</div>
		<a class="tab list" href="./pdfs/Mühəndislik_2022-2023.pdf" target="blank">List</a>

		`
	}
}

VDomens.tag= 'v-domens'