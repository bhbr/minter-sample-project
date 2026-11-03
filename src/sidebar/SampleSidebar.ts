
import { Sidebar, DragButton, LinkButton, ControlsButton, EraseButton } from '@bhbr/minter'
import { NumberButton } from '@bhbr/minter-arithmetic'
import { ColoredBoxButton } from './ColoredBoxButton.js'

export class SampleSidebar extends Sidebar {
	
	defaults(): object {
		return {
			// List all the sidebar's buttons here, plus any other buttons that appear in the sidebars of any board that can be created from this sidebar (e. g. tools for a geometric construction). If none of the buttons here can create a board within the paper, no additional buttons must be listed.
			availableButtonClasses: [
				DragButton,
				LinkButton,
				ControlsButton,
				NumberButton,
				ColoredBoxButton,
				EraseButton
			],
			// initialize the sidebar's buttons
			buttons: [
				new DragButton(),
				new LinkButton(),
				new ControlsButton(),
				new NumberButton(),
				new ColoredBoxButton(),
				new EraseButton()
			]
		}
	}
}