
import { Slider } from '@bhbr/minter-arithmetic'
import { RoundedRectangle, Linkable, Color, ScreenEvent, log } from '@bhbr/minter'

export class ColoredBox extends Linkable {
/*
A colored box is a rounded rectangle whose opacity and corner radius are variable input properties. Its fill color is chosen at random on creation.
*/

	innerBox: RoundedRectangle // this is a mere mobject without linkable properties by itself

	defaults(): object {
		return {
			innerBox: new RoundedRectangle({
				fillOpacity: 1,
				fillColor: Color.random()
				// (the default corner radius is 10px)
			}),
			inputProperties: [
				{ name: 'opacity', type: 'number' },
				// any mobject has an opacity that affects all its submobjects, in this case this.box
				{ name: 'cornerRadius', type: 'number', displayName: 'corner radius' }
				// the cornerRadius property maps to this.innerBox.cornerRadius (see below)
			]
		}
	}

	// defining the cornerRadius property (an alias for the inner box's corner radius)
	get cornerRadius(): number { return this.innerBox.cornerRadius }
	set cornerRadius(newValue: number) { this.innerBox.cornerRadius = newValue }

	// same for width and height
	get width(): number { return this.frameWidth }
	set width(newValue: number) { this.frameWidth = newValue }

	get height(): number { return this.frameHeight }
	set height(newValue: number) { this.frameHeight = newValue }

	setup() {
		super.setup()
		this.add(this.innerBox)
		// Any mobject has a frameWidth and frameHeight. Sync the inner box's width and height to them via dependencies.
		this.addDependency('frameWidth', this.innerBox, 'width')
		this.addDependency('frameHeight', this.innerBox, 'height')
	}

	// interactivity
	onTap(e: ScreenEvent) {
		log('tap!')
		this.innerBox.update({
			fillColor: Color.random()
		})
	}

}



