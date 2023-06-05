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
	product: {
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
	cases: {
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
	alternatives: {
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
	company: {
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
}

export const store = {
	header: header,
	footer: footer
}