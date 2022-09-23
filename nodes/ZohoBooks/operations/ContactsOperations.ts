import { INodeProperties } from 'n8n-workflow';

export const contactsOperations: INodeProperties[] = [
	{
		displayName: 'Operations',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contacts'],
			},
		},
		options: [
			{
				name: 'Get Many',
				value: 'getMany',
				action: 'Get many contacts',
				description: 'Get the details of many contacts',
				routing: {
					request: {
						method: 'GET',
						url: '=/contacts',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a contact',
				description: 'Get the details of a contact',
				routing: {
					request: {
						method: 'GET',
						url: '=/contacts/{{$parameter.contact_id}}',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a contact',
				description: 'Create a contact with given information',
				routing: {
					request: {
						method: 'POST',
						url: '=/contacts',
						body: {
							contact_name: '={{$parameter.contact_name}}'
						} as Object
					}
				}
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a contact',
				description: 'Delete an existing contact',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/contacts/{{$parameter.contact_id}}'
					}
				}
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update an existing contact',
				routing: {
					request: {
						method: 'PUT',
						url: '=/contacts/{{$parameter.contact_id}}',
						body: {
							contact_name: '={{$parameter.contact_name}}'
						} as Object
					}
				}
			}
		],
		default: 'get',
	},
];
