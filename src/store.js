import { v1 } from 'uuid';
import avatarHeader from './assets/images/header_avatar.jpg';
import postImage from './assets/images/post_image.jpg';
import postPhoto from './assets/images/post_avatar.jpg';
import postComment1 from './assets/images/post_comment-1.jpg';
import postComment2 from './assets/images/post_comment-2.jpg';
import postComment3 from './assets/images/post_comment-3.jpg';
import postComment4 from './assets/images/post_comment-4.jpg';
import postComment5 from './assets/images/post_comment-5.jpg';

const images = {
	header: {
		image: avatarHeader
	},
	posts: {
		postImage: postImage,
		postPhoto: postPhoto,
		postComment1: postComment1,
		postComment2: postComment2,
		postComment3: postComment3,
		postComment4: postComment4,
		postComment5: postComment5,
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
	voters: {
		title: 'Voters:',
		more: '+12',
		list: [
			{
				id: v1(),
				image: images.posts.postComment1
			},
			{
				id: v1(),
				image: images.posts.postComment2
			},
			{
				id: v1(),
				image: images.posts.postComment3
			},
			{
				id: v1(),
				image: images.posts.postComment4
			},
			{
				id: v1(),
				image: images.posts.postComment5
			},
			{
				id: v1(),
				image: images.posts.postComment3
			},
		]
	},
	post: {
		photo: images.posts.postPhoto,
		image: images.posts.postImage,
		name: 'John Doe',
		time: '3 min ago',
		likes: 23,
		status: 'Complete',
		comments: '12 Comments',
		tagList: [
			{
				id: v1(),
				color: '#EB5757',
				title: 'Tagname1',
			},
			{
				id: v1(),
				color: '#27AE60',
				title: 'Tagname1',
			}
		],
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor id quisque magna massa ullamcorper. Vitae justo, fusce viverra arcu enim varius suscipit diam tellus. Vel aliquam diam sit odio. Elit sed orci, bibendum sit. Nunc, penatibus blandit faucibus tristique vulputate tincidunt. Lorem sit egestas bibendum consectetur nisi, nunc. Dignissim non eget nisl ultrices dui aliquet. Porttitor ridiculus orci diam at. Tempus in auctor rutrum diam lobortis tempus non egestas rhoncus.',

	},
	privacy: {
		title: 'Privacy',
		list: [
			{
				id: v1(),
				title: 'Public',
				value: 'public',
			},
			{
				id: v1(),
				title: 'Private',
				value: 'private',
			},
		]
	},
	messages: [
		{
			id: v1(),
			photo: images.posts.postComment1,
			name: 'Sophia-Rose Nava',
			message: 'Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom',
			amountLikes: 3,
			date: '01-02-2020',
			privacy: true,
		},
		{
			id: v1(),
			photo: images.posts.postComment2,
			name: 'Anna Walley',
			message: 'Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom',
			amountLikes: 3,
			date: '01-02-2020',
			privacy: false,
			reply: [{
				id: v1(),
				photo: images.posts.postComment3,
				name: 'Uzair Valdez',
				message: 'Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom',
				amountLikes: 3,
				date: '01-02-2020',
				privacy: false,
			},],
		},
		{
			id: v1(),
			photo: images.posts.postComment4,
			name: 'Kaylan Graham',
			amountLikes: 3,
			date: '01-02-2020',
			privacy: false,
			merge: [
				{
					id: v1(),
					photo: images.posts.postComment1,
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
			photo: images.posts.postComment5,
			name: 'Kasim Daniels',
			message: 'Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom',
			amountLikes: 3,
			date: '01-02-2020',
			privacy: false,
		},
	]
}

export const changelogScreen = {
	filter: {
		title: 'Status:',
		list: [1, 2, 3],
		list: [
			{
				id: v1(),
				title: 'All entries',
				labelBg: '#CDDAF2'
			},
			{
				id: v1(),
				title: 'New',
				labelBg: '#27AE60'
			},
			{
				id: v1(),
				title: 'Improved',
				labelBg: '#1565C0'
			},
			{
				id: v1(),
				title: 'Fixed',
				labelBg: '#F43658'
			},
		]
	},
	list: [
		{
			id: v1(),
			title: 'Test record',
			labelTitle: 'New',
			labelBg: '#27AE60',
			name: 'John Doe',
			date: '01-02-2020',
			photo: images.posts.postComment5,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor id quisque magna massa ullamcorper. Vitae justo, fusce viverra arcu enim varius suscipit diam tellus.'
		},
		{
			id: v1(),
			title: 'Test record',
			labelTitle: 'New',
			labelBg: '#27AE60',
			name: 'John Doe',
			date: '01-02-2020',
			photo: images.posts.postComment1,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor id quisque magna massa ullamcorper. Vitae justo, fusce viverra arcu enim varius suscipit diam tellus.'
		},
		{
			id: v1(),
			title: 'Test record',
			labelTitle: 'New',
			labelBg: '#27AE60',
			name: 'John Doe',
			date: '01-02-2020',
			photo: images.posts.postComment2,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor id quisque magna massa ullamcorper. Vitae justo, fusce viverra arcu enim varius suscipit diam tellus.'
		},
		{
			id: v1(),
			title: 'Test record',
			labelTitle: 'Improved',
			labelBg: '#1565C0',
			name: 'John Doe',
			date: '01-02-2020',
			photo: images.posts.postComment4,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor id quisque magna massa ullamcorper. Vitae justo, fusce viverra arcu enim varius suscipit diam tellus.'
		},
		{
			id: v1(),
			title: 'Test record',
			labelTitle: 'New',
			labelBg: '#27AE60',
			name: 'John Doe',
			date: '01-02-2020',
			photo: images.posts.postComment1,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor id quisque magna massa ullamcorper. Vitae justo, fusce viverra arcu enim varius suscipit diam tellus.'
		},
		{
			id: v1(),
			title: 'Test record',
			labelTitle: 'New',
			labelBg: '#27AE60',
			name: 'John Doe',
			date: '01-02-2020',
			photo: images.posts.postComment3,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor id quisque magna massa ullamcorper. Vitae justo, fusce viverra arcu enim varius suscipit diam tellus.'
		},
		{
			id: v1(),
			title: 'Test record',
			labelTitle: 'New',
			labelBg: '#27AE60',
			name: 'John Doe',
			date: '01-02-2020',
			photo: images.posts.postComment5,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor id quisque magna massa ullamcorper. Vitae justo, fusce viverra arcu enim varius suscipit diam tellus.'
		},
		{
			id: v1(),
			title: 'Test record',
			labelTitle: 'New',
			labelBg: '#27AE60',
			name: 'John Doe',
			date: '01-02-2020',
			photo: images.posts.postComment4,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor id quisque magna massa ullamcorper. Vitae justo, fusce viverra arcu enim varius suscipit diam tellus.'
		},
		{
			id: v1(),
			title: 'Test record',
			labelTitle: 'Fixed',
			labelBg: '#F43658',
			name: 'John Doe',
			date: '01-02-2020',
			photo: images.posts.postComment3,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor id quisque magna massa ullamcorper. Vitae justo, fusce viverra arcu enim varius suscipit diam tellus.'
		},
		{
			id: v1(),
			title: 'Test record',
			labelTitle: 'New',
			labelBg: '#27AE60',
			name: 'John Doe',
			date: '01-02-2020',
			photo: images.posts.postComment2,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor id quisque magna massa ullamcorper. Vitae justo, fusce viverra arcu enim varius suscipit diam tellus.'
		},
	]
}
export const store = {
	header: header,
	footer: footer
}