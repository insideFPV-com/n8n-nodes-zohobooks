import { INodeType, INodeTypeDescription } from 'n8n-workflow';

import { billsOperations, contactsOperations } from './operations';

import { billsFields, contactsFields } from './fields';

export class ZohoBooks implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Zoho Books',
		name: 'ZohoBooks',
		icon: 'file:zohobooks.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Implement Zoho Books API into n8n for automation',
		defaults: {
			name: 'ZohoBooks',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'zohoBooksOAuth2Api',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://books.zoho.in/api/v3',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						// eslint-disable-next-line n8n-nodes-base/node-param-resource-with-plural-option
						name: 'Bills',
						value: 'bills',
					},
					{
						name: 'Contact Persons',
						value: 'contactPersons',
					},
					{
						name: 'Contacts',
						value: 'contacts',
					},
					{
						name: 'Customer Payments',
						value: 'customerPayments',
					},
					{
						name: 'Estimates',
						value: 'estimates',
					},
					{
						name: 'Expenses',
						value: 'expenses',
					},
					{
						name: 'Invoices',
						value: 'invoices',
					},
					{
						name: 'Items',
						value: 'items',
					},
					{
						name: 'Sales Orders',
						value: 'salesOrders',
					},
				],
				default: 'contacts',
			},

			...billsOperations,
			...contactsOperations,

			...billsFields,
			...contactsFields,
		],
	};
}
