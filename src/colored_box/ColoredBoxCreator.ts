
import { SpanningCreator } from '@bhbr/minter'
import { ColoredBox } from './ColoredBox.js'

export class ColoredBoxCreator extends SpanningCreator {

	createMobject(): ColoredBox {
		let p = this.getStartPoint()
		return new ColoredBox({
			anchor: p,
			frameWidth: this.rectangle.width,
			frameHeight: this.rectangle.height
		})
	}

}