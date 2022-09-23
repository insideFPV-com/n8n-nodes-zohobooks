import { INodeProperties } from 'n8n-workflow';

export const billsFields: INodeProperties[] = [
	{
		displayName: 'Bill ID',
		name: 'bill_id',
		type: 'string',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['bills'],
				operation: ['get'],
			},
		},
		default: '',
	},
];
