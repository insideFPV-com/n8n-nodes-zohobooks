import { INodeProperties } from 'n8n-workflow';

export const ItemsOperations: INodeProperties[] = [
	{
		displayName: 'Operations',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['items'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create an item',
				description: 'Create an item with given information',
				routing: {
					request: {
						method: 'POST',
						url: '=/items',
						body: {
							name: '={{$parameter.name}}',
							rate: '={{$parameter.rate}}',
						},
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete an item',
				description: 'Delete an existing item',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/items/{{$parameter.item_id}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get an item',
				description: 'Get the details of an item',
				routing: {
					request: {
						method: 'GET',
						url: '=/items/{{$parameter.item_id}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getMany',
				action: 'Get many items',
				description: 'Get the details of many items',
				routing: {
					request: {
						method: 'GET',
						url: '=/items',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update an existing item',
				routing: {
					request: {
						method: 'PUT',
						url: '=/items/{{$parameter.item_id}}',
						body: {
							name: '={{$parameter.name}}',
							rate: '={{$parameter.rate}}',
						},
					},
				},
			},
		],
		default: 'get',
	},
];
