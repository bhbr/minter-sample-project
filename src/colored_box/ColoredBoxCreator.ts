
import { SpanningCreator } from '@bhbr/minter'
import { ColoredBox } from './ColoredBox.js'

export class ColoredBoxCreator extends SpanningCreator {
/*
The acccompanying Creator subclass. Create a colored box by spanning an outline rectangle (this.outline). 
*/
	createMobject(): ColoredBox {
		let p = this.getStartPoint()
		return new ColoredBox({
			anchor: p,
			frameWidth: this.outline.width,
			frameHeight: this.outline.height
		})
	}

}