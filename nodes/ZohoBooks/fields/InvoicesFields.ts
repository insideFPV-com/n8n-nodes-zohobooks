import { INodeProperties } from 'n8n-workflow';

export const contactsFields: INodeProperties[] = [
	{
		displayName: 'Invoice ID',
		name: 'invoice_id',
		type: 'string',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['invoices'],
				operation: ['get', 'delete'],
			},
		},
		default: '',
	},
];
