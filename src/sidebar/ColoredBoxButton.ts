import { CreativeButton } from '@bhbr/minter'

export class ColoredBoxButton extends CreativeButton {
/*
The button with which you can create a colored box. Holding it down or tapping it send the message { create: 'box' } to the paper. The button also looks for its icon at assets/box.png.
*/
	defaults(): object {
		return {
			creations: ['box'], // fixes the creation message and icon filename
			iconLocation: '../../minter-sample-project/assets'
		}
	}

	mutabilities(): object {
		return {
			creations: 'never'
		}
	}
}