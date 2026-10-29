
import { Sidebar, DragButton, LinkButton, EraseButton } from '@bhbr/minter'
import { NumberButton } from '@bhbr/minter-arithmetic'
import { ColoredBoxButton } from './ColoredBoxButton.js'

// subclass Sidebar here
export class SampleSidebar extends Sidebar {
	
	defaults(): object {
		return {
			availableButtonClasses: [
				DragButton,
				LinkButton,
				NumberButton,
				ColoredBoxButton,
				EraseButton
			],
			buttons: [
				new DragButton(),
				new LinkButton(),
				new NumberButton(),
				new ColoredBoxButton(),
				new EraseButton()
			]
		}
	}
}