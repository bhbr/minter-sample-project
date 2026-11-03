
import { AssertionTest, ValueTest, BundledTest } from '@bhbr/tsts'
import { ColoredBox } from '../../colored_box/ColoredBox.js'

export const ColoredBoxTest = new BundledTest({

	name: 'ColoredBox test',

	subtests: [
		new AssertionTest({
		name: 'The width and frame width of a colored box have the same value',
			function: function(): boolean {
				let box = new ColoredBox({
					width: 300
				})
				return box.width == box.frameWidth
			}
		})
	]
})

