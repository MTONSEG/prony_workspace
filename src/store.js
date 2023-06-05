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
	],
	list: [
		{
			id: v1(),
			status: 'Complete',
			likes: 23,
			messages: 12,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in est turpis nulla tortor.',
		},
		{
			id: v1(),
			status: 'Complete',
			likes: 23,
			messages: 12,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in est turpis nulla tortor.',
		},
		{
			id: v1(),
			status: 'Complete',
			likes: 23,
			messages: 12,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in est turpis nulla tortor.',
		},
		{
			id: v1(),
			status: 'In progress',
			likes: 23,
			messages: 12,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in est turpis nulla tortor.',
		},
		{
			id: v1(),
			status: 'Complete',
			likes: 23,
			messages: 12,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in est turpis nulla tortor.',
		},
		{
			id: v1(),
			status: 'Complete',
			likes: 23,
			messages: 12,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in est turpis nulla tortor.',
		},
		{
			id: v1(),
			status: 'Complete',
			likes: 23,
			messages: 12,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in est turpis nulla tortor.',
		},
		{
			id: v1(),
			status: 'In progress',
			likes: 23,
			messages: 12,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in est turpis nulla tortor.',
		},
		{
			id: v1(),
			status: 'Complete',
			likes: 23,
			messages: 12,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in est turpis nulla tortor.',
		},
		{
			id: v1(),
			status: 'Complete',
			likes: 23,
			messages: 12,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in est turpis nulla tortor.',
		},
		{
			id: v1(),
			status: 'Complete',
			likes: 23,
			messages: 12,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in est turpis nulla tortor.',
		},
		{
			id: v1(),
			status: 'In progress',
			likes: 23,
			messages: 12,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in est turpis nulla tortor.',
		},
	]
}

export const postScreen = {
	title: 'Post view',
	viewPost: {
		name: 'Ross Gillespie',
		photo: images.posts.postPhoto1,
		title: 'Send status updates back through Intercom',
		time: '3 min ago',
		status: 'Complete',
		text: 'Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom',
		image: images.postView.imagePostView,
		amountLikes: '24',
		tags: [
			{
				title: 'Tagname1',
				color: '#EB5757',
			},
			{
				title: 'Tagname2',
				color: '#27AE60',
			},
		],
		placeholder: 'Enter detailes',
		upload: {
			title: 'Image',
			image: images.createPost.uploadedImage,
		},
		privacy: {
			title: 'Privacy',
			list: [
				{
					title: 'Public',
					value: 'public'
				},
				{
					title: 'Private',
					value: 'private'
				},
			]
		},
		sortList: ['Recent', 'Private', 'Public']
	},
	messages: [
		{
			id: v1(),
			photo: images.postView.commentPhoto1,
			name: 'Sophia-Rose Nava',
			message: 'Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom',
			amountLikes: 3,
			date: '01-02-2020',
			privacy: true,
		},
		{
			id: v1(),
			photo: images.postView.commentPhoto2,
			name: 'Anna Walley',
			message: 'Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom',
			amountLikes: 3,
			date: '01-02-2020',
			privacy: false,
			reply: [{
				id: v1(),
				photo: images.postView.commentPhoto5,
				name: 'Uzair Valdez',
				message: 'Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom',
				amountLikes: 3,
				date: '01-02-2020',
				privacy: false,
			},],
		},
		{
			id: v1(),
			photo: images.postView.commentPhoto3,
			name: 'Kaylan Graham',
			amountLikes: 3,
			date: '01-02-2020',
			privacy: false,
			merge: [
				{
					id: v1(),
					photo: images.postView.commentPhoto6,
					name: 'Anna Walley',
					message: 'Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom',
					amountLikes: 3,
					date: '01-02-2020',
					privacy: false,
				},
			],
		},
		{
			id: v1(),
			photo: images.postView.commentPhoto4,
			name: 'Kasim Daniels',
			message: 'Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom',
			amountLikes: 3,
			date: '01-02-2020',
			privacy: false,
			image: images.postView.commentImage
		},
	]
}
export const store = {
	header: header,
	footer: footer
}