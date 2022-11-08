import { INodeProperties } from 'n8n-workflow';

import { languageCodes } from '../extras/LanguageCodes';

export const contactsFields: INodeProperties[] = [
	{
		displayName: 'Contact ID',
		name: 'contact_id',
		type: 'string',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contacts'],
				operation: ['get', 'delete'],
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
				operation: ['create', 'update'],
			},
		},
		default: '',
	},
	{
		displayName: 'Additional Fields',
		name: 'additional_fields',
		type: 'collection',
		placeholder: 'Add field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contacts'],
				operation: ['create', 'update'],
			},
		},
		options: [
			{
				name: 'Company Name',
				value: 'company_name',
				type: 'string',
			},
			{
				name: 'Website',
				value: 'website',
				type: 'string',
			},
			{
				name: 'Language Code',
				value: 'language_code',
				type: 'options',
				options: languageCodes,
			},
		],
	},
];
