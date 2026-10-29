import { CreativeButton } from '@bhbr/minter'

export class ColoredBoxButton extends CreativeButton {

	defaults(): object {
		return {
			creations: ['box']
		}
	}

	mutabilities(): object {
		return {
			creations: 'never'
		}
	}
}