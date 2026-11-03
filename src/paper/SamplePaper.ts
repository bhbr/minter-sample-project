
import { Paper } from '@bhbr/minter'
import { NumberBoxCreator, SliderCreator, StepperCreator } from '@bhbr/minter-arithmetic'
import { ColoredBox } from '../colored_box/ColoredBox.js'
import { ColoredBoxCreator } from '../colored_box/ColoredBoxCreator.js'

export class SamplePaper extends Paper {
	
	defaults(): object {
		return {
			// List all the sidebar button class names here. The paper might ask the Sidebar to reinitialize with a new set of buttons, e. g. when maximising or minimising a board with its own custom set of tools.
			buttonNames: [
				'DragButton',
				'LinkButton',
				'ControlsButton',
				'NumberButton',
				'ColoredBoxButton',
				'EraseButton'
			],
			// Provide help texts for each option in each sidebar button.
			helpTexts: {
				'drag': 'Drag objects or pan the board. Tap this button to lock.',
				'link': 'Show and edit links between objects. Tap this button to lock.',
				'show controls': 'Show control elements on objects. Tap this button to lock.',
				'box': 'Draw a box with a random color. Adjust its opacity as an input variable.',
				'erase': 'Erase objects or drawings by swiping over them.',
				'restart': 'Clear the board.'
			},
			// A reference of which creator to call when receiving a creation message from the sidebar.
			creationConstructors: {
				'number': NumberBoxCreator,
				'slider': SliderCreator,
				'stepper': StepperCreator,
				'box': ColoredBoxCreator,
			}
		}
	}
}