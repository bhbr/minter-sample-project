
import { Slider } from '@bhbr/minter-arithmetic'
import { Rectangle, Linkable, Color } from '@bhbr/minter'

export class ColoredBox extends Linkable {
	
	rectangle: Rectangle

	defaults(): object {
		return {
			rectangle: new Rectangle({
				fillOpacity: 1,
				fillColor: Color.random()
			}),
			inputProperties: [
				{ name: 'opacity', type: 'number' }
			]
		}
	}

	setup() {
		super.setup()
		this.add(this.rectangle)
		this.addDependency('frameWidth', this.rectangle, 'width')
		this.addDependency('frameHeight', this.rectangle, 'height')
	}

}