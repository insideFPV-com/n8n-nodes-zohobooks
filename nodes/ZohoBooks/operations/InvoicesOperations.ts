import { INodeProperties } from 'n8n-workflow';

export const invoicesOperations: INodeProperties[] = [
	{
		displayName: 'Operations',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['invoices'],
			},
		},
		options: [
			{
				name: 'Get Many',
				value: 'getMany',
				action: 'Get many invoices',
				description: 'Get the details of many invoices',
				routing: {
					request: {
						method: 'GET',
						url: '=/invoices',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get an invoice',
				description: 'Get the details of an invoice',
				routing: {
					request: {
						method: 'GET',
						url: '=/invoices/{{$parameter.invoice_id}}',
					},
				},
			},
		],
		default: 'get',
	},
];
