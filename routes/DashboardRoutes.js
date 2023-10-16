import { v4 as uuid } from 'uuid';

export const DashboardMenu = [
	{
		id: uuid(),
		title: 'Dashboard',
		icon: 'home',
		link: '/dashboard'
	},
	{
		id: uuid(),
		title: 'Pages',
		icon: 'layers',
		children: [
			{ id: uuid(), link: '/pages/profile', name: 'Profile' },
			{ id: uuid(), link: '/pages/settings', name: 'Settings'},
			{ id: uuid(), link: '/pages/pricing', name: 'Pricing'},
			{ id: uuid(), link: '/404', name: '404 Error' }
		]
	},	
	{
		id: uuid(),
		title: 'Authentication',
		icon: 'lock',
		children: [
			{ id: uuid(), link: '/authentication/sign-in', name: 'Sign In' },
			{ id: uuid(), link: '/authentication/sign-up', name: 'Sign Up' },
			{ id: uuid(), link: '/authentication/forget-password', name: 'Forget Password'}			
		]
	},
	{
		id: uuid(),
		title: 'Admin',
		icon: 'users',
		children: [
			{ id: uuid(), link: '/admin', name: 'Admin' },
			{ id: uuid(), link: '/roles', name: 'Roles' },
		]
	},
	{
		id: uuid(),
		title: 'Customers',
		icon: 'user-plus',
		link: '/customers'
	},
	{
		id: uuid(),
		title: 'Products',
		icon: 'shopping-bag',
		children: [
			{ id: uuid(), link: '/products', name: 'Products' },
			{ id: uuid(), link: '/categories', name: 'Categories' },
			{ id: uuid(), link: '/reports', name: 'Reports' },
			{ id: uuid(), link: '/ingredients', name: 'Ingredients' },
		]
	},
	{
		id: uuid(),
		title: 'Orders',
		icon: 'shopping-bag',
		children: [
			{ id: uuid(), link: '/orders', name: 'Orders' },
		]
	},
	{
		id: uuid(),
		title: 'Stores',
		icon: 'database',
		children: [
			{ id: uuid(), link: '/stores', name: 'Stores' },
			{ id: uuid(), link: '/reports', name: 'Reports' },
		]
	},
	{
		id: uuid(),
		title: 'Contact',
		icon: 'user-x',
		link: '/contact'
	},
	{
		id: uuid(),
		title: 'Settings',
		icon: 'settings',
		link: '/settings'
	},
];

export default DashboardMenu;
