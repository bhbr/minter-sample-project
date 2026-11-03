
import { SamplePaper } from '../../paper/SamplePaper.js'
import { ColoredBox } from '../../colored_box/ColoredBox.js'

export class TestPaper extends SamplePaper {

	loadContent() {
		let firstBox = new ColoredBox({
			anchor: [100, 100],
			width: 400,
			height: 300,
			cornerRadius: 50
		})
		this.addToContent(firstBox)
	}
}
