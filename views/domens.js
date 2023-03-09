import { html, VLitElement, classMap } from "../lit.js"

export class VDomens extends VLitElement {
	static properties = {
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
				<label for="muhazire">Muhazirə</label>
				<input id="muhazire" type="number"> 
 			</div>

 			<div class = "fpiece">
				<label for="mesqele">Məşğələ</label>
				<input id="mesqele" type="number"> 
 			</div>
 			<div class = "fpiece">
				<label for="lab">Labaratoriya</label>
				<input id="lab" type="number"> 
 			</div>
 			<div class = "fpiece">
				<label for="meslehet">Məsləhət</label>
				<input id="meslehet" type="number"> 
 			</div>
 			<div class = "fpiece">
				<label for="exam">İmtahan</label>
				<input id="exam" type="number"> 
 			</div>
		</div>
		</div>
		<a class="tab list" href="./pdfs/Mühəndislik_2022-2023.pdf" target="blank">List</a>

		`
	}
}

VDomens.tag= 'v-domens'