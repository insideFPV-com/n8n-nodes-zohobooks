import { INodeProperties } from 'n8n-workflow';

export const contactsFields: INodeProperties[] = [
	{
		displayName: 'Contact ID',
		name: 'contact_id',
		type: 'string',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contacts'],
				operation: ['get'],
			},
		},
		default: '',
	},
	{
		displayName: 'Contact Name',
		name: 'contact_name',
		type: 'string',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contacts'],
				operation: ['create'],
			},
		},
		default: '',
	},
];
