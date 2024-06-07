import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
	github: {
		login: 'abiriadev',
	},
	width: 800,
	renderer: 'tiers',
	outputDir: 'assets',
	formats: ['json', 'svg', 'png'],
	tiers: [
		{
			title: 'Platinum Sponsors',
			monthlyDollars: 50,
			preset: tierPresets.xl,
		},
		{
			title: 'Gold Sponsors',
			monthlyDollars: 25,
			preset: tierPresets.large,
		},
		{
			title: 'Silver Sponsors',
			monthlyDollars: 10,
			preset: tierPresets.medium,
		},
		{
			title: 'Sponsors',
			monthlyDollars: 5,
			preset: tierPresets.base,
		},
		{
			title: 'Backers',
			preset: tierPresets.small,
		},
		{
			title: 'Past Sponsors',
			monthlyDollars: -1,
			preset: tierPresets.small,
		},
	],
})
