
import { BundledTest } from '@bhbr/tsts'
import { ColoredBoxTest } from './unit_tests/ColoredBoxTest.js'

let sampleTests = new BundledTest({

	name: 'Minter sample project tests',
	subtests: [
		ColoredBoxTest
	],
	silenceSubtests: false
})

sampleTests.run()
