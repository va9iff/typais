import { html, VLitElement } from "../lit.js"

import "./tabs.js"

export class VMain extends VLitElement {
	render() {
		return html`
			<v-tabs></v-tabs>
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
