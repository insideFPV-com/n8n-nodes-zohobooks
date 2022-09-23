import { INodeProperties } from 'n8n-workflow';

export const billsOperations: INodeProperties[] = [
	{
		displayName: 'Operations',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['bills'],
			},
		},
		options: [
			{
				name: 'Get Many',
				value: 'getMany',
				action: 'Get many bills',
				description: 'Get the details of many bills',
				routing: {
					request: {
						method: 'GET',
						url: '=/bills',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a bill',
				description: 'Get the details of a bill',
				routing: {
					request: {
						method: 'GET',
						url: '=/bills/{{$parameter.bill_id}}',
					},
				},
			},
		],
		default: 'get',
	},
];
