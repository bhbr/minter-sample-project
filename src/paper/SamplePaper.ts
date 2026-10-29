
import { Paper } from '@bhbr/minter'
import { NumberBoxCreator, SliderCreator, StepperCreator } from '@bhbr/minter-arithmetic'
import { ColoredBox } from '../colored_box/ColoredBox.js'
import { ColoredBoxCreator } from '../colored_box/ColoredBoxCreator.js'

export class SamplePaper extends Paper {
	
	defaults(): object {
		return {
			buttonNames: [
				'DragButton',
				'LinkButton',
				'NumberButton',
				'ColoredBoxButton',
				'EraseButton'
			],
			helpTexts: {
				'drag': 'Drag objects or pan the board. Tap this button to lock.',
				'link': 'Show and edit links between objects. Tap this button to lock.',
				'box': 'Draw a box with a random color. Adjust its opacity as an input variable.',
				'erase': 'Erase objects or drawings by swiping over them.',
				'restart': 'Clear the board.',
			},
			creationConstructors: {
				'number': NumberBoxCreator,
				'slider': SliderCreator,
				'stepper': StepperCreator,
				'box': ColoredBoxCreator,
			}
		}
	}
}