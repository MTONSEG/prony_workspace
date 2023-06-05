import { v1 } from 'uuid';
import avatarHeader from './assets/images/header_avatar.jpg';

const images = {
	header: {
		image: avatarHeader
	}
}

export const header = {
	board: 'Boards',
	changelog: 'Changelog',
	login: {
		title: 'Log in',
		name: 'Lucy Lavender',
		image: images.header.image,
	}
}
export const footer = {
	list: [
		{
			title: 'Product',
			list: [
				{
					id: v1(),
					title: 'Features',
					link: '#'
				},
				{
					id: v1(),
					title: 'Integrations',
					link: '#'
				},
				{
					id: v1(),
					title: 'Case studies',
					link: '#'
				},
				{
					id: v1(),
					title: 'Documentation',
					link: '#'
				},
			]
		},
		{
			title: 'Use cases',
			list: [
				{
					id: v1(),
					title: 'Feature requests',
					link: '#'
				},
				{
					id: v1(),
					title: 'Share roadmap',
					link: '#'
				},
				{
					id: v1(),
					title: 'Manage ideas',
					link: '#'
				},
			]
		},
		{
			title: 'Alternatives',
			list: [
				{
					id: v1(),
					title: 'Prony vs Uservoice',
					link: '#'
				},
				{
					id: v1(),
					title: 'Prony vs Aha ideas',
					link: '#'
				},
				{
					id: v1(),
					title: 'Prony vs Canny',
					link: '#'
				},
				{
					id: v1(),
					title: 'Prony vs Trello',
					link: '#'
				},
				{
					id: v1(),
					title: 'Prony vs Nolt',
					link: '#'
				},
			]
		},
		{
			title: 'Company',
			list: [
				{
					id: v1(),
					title: 'About us',
					link: '#'
				},
				{
					id: v1(),
					title: 'Why Prony?',
					link: '#'
				},
				{
					id: v1(),
					title: 'Team',
					link: '#'
				},
				{
					id: v1(),
					title: 'Culture',
					link: '#'
				},
				{
					id: v1(),
					title: 'Manifesto',
					link: '#'
				},
			]
		},
	]
}
export const mainScreen = {
	feedback: {
		title: 'Give feedback',
		list: [
			{
				id: v1(),
				title: 'Board title',
				amount: 23
			},
			{
				id: v1(),
				title: 'Board title',
				amount: 23
			},
			{
				id: v1(),
				title: 'Board title',
				amount: 23
			},
		]
	},
	roadmap: {
		title: 'Roadmap',
		list: [
			{
				id: v1(),
				title: 'Planned',
				labelBg: '#03B8FD',
				list: [
					{
						id: v1(),
						title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
						subtitle: 'Board title',
						amount: '23'
					},
					{
						id: v1(),
						title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
						subtitle: 'Board title',
						amount: '23'
					},
					{
						id: v1(),
						title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
						subtitle: 'Board title',
						amount: '23'
					},
					{
						id: v1(),
						title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
						subtitle: 'Board title',
						amount: '23'
					},
					{
						id: v1(),
						title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
						subtitle: 'Board title',
						amount: '23'
					},
				]
			},
			{
				id: v1(),
				title: 'In progress',
				labelBg: '#F43658',
				list: [
					{
						id: v1(),
						title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
						subtitle: 'Board title',
						amount: '23'
					},
					{
						id: v1(),
						title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
						subtitle: 'Board title',
						amount: '23'
					},
					{
						id: v1(),
						title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
						subtitle: 'Board title',
						amount: '23'
					},
					{
						id: v1(),
						title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
						subtitle: 'Board title',
						amount: '23'
					},
					{
						id: v1(),
						title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
						subtitle: 'Board title',
						amount: '23'
					},
				]
			},
			{
				id: v1(),
				title: 'Coming soon',
				labelBg: '#9E9E9E',
				list: [
					{
						id: v1(),
						title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
						subtitle: 'Board title',
						amount: '23'
					},
					{
						id: v1(),
						title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
						subtitle: 'Board title',
						amount: '23'
					},
					{
						id: v1(),
						title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
						subtitle: 'Board title',
						amount: '23'
					},
					{
						id: v1(),
						title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
						subtitle: 'Board title',
						amount: '23'
					},
					{
						id: v1(),
						title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
						subtitle: 'Board title',
						amount: '23'
					},
				]
			},
		]
	}
}
export const boardScreen = {
	titleBtn: 'Clear filters',
	selects: [
		{
			id: v1(),
			default: 'Sort by',
			title: 'Sort by:',
			list: ['My posts', 'My posts', 'My posts']
		},
		{
			id: v1(),
			default: 'Showing',
			title: 'Showing:',
			list: ['Tranding 1', 'Tranding 2', 'Tranding 3']
		},
		{
			id: v1(),
			default: 'Showing',
			title: 'Showing:',
			list: ['Tranding 1', 'Tranding 2', 'Tranding 3']
		},
		{
			id: v1(),
			default: 'Showing',
			title: 'Showing:',
			list: ['Tranding 1', 'Tranding 2', 'Tranding 3']
		},
	]
}

export const store = {
	header: header,
	footer: footer
}