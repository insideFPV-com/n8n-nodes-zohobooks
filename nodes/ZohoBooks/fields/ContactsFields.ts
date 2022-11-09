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
	{
		displayName: 'Additional Fields',
		name: 'additional_fields',
		type: 'collection',
		placeholder: 'Add field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contacts'],
				operation: ['getMany'],
			},
		},
		options: [
			{
				name: 'Address Contains',
				value: 'address_contains',
				type: 'string',
				routing: {
					request: {
						qs: {
							address_contains: '={{$parameter.address_contains}}',
						},
					},
				},
			},
			{
				name: 'Address Starts With',
				value: 'address_startswith',
				type: 'string',
				routing: {
					request: {
						qs: {
							address_startswith: '={{$parameter.address_startswith}}',
						},
					},
				},
			},
			{
				name: 'Company Name Contains',
				value: 'company_name_contains',
				type: 'string',
				routing: {
					request: {
						qs: {
							company_name_contains: '={{$parameter.company_name_contains}}',
						},
					},
				},
			},
			{
				name: 'Company Name Starts With',
				value: 'company_name_startswith',
				type: 'string',
				routing: {
					request: {
						qs: {
							company_name_startswith: '={{$parameter.company_name_startswith}}',
						},
					},
				},
			},
			{
				name: 'Contact Name Contains',
				value: 'contact_name_contains',
				type: 'string',
				routing: {
					request: {
						qs: {
							contact_name_contains: '={{$parameter.contact_name_contains}}',
						},
					},
				},
			},
			{
				name: 'Contact Name Starts With',
				value: 'contact_name_startswith',
				type: 'string',
				routing: {
					request: {
						qs: {
							company_name_startswith: '={{$parameter.contact_name_startswith}}',
						},
					},
				},
			},
			{
				name: 'Email Contains',
				value: 'email_contains',
				type: 'string',
				routing: {
					request: {
						qs: {
							email_contains: '={{$parameter.email_contains}}',
						},
					},
				},
			},
			{
				name: 'Email Starts With',
				value: 'email_startswith',
				type: 'string',
				routing: {
					request: {
						qs: {
							email_startswith: '={{$parameter.email_startswith}}',
						},
					},
				},
			},
			{
				name: 'Filter By',
				value: 'filter_by',
				type: 'options',
				options: [
					{
						name: 'Status: All',
						value: 'Status.All',
					},
					{
						name: 'Status: Active',
						value: 'Status.Active',
					},
					{
						name: 'Status: Inactive',
						value: 'Status.Inactive',
					},
					{
						name: 'Status: Duplicate',
						value: 'Status.Duplicate',
					},
					{
						name: 'Status: Crm',
						value: 'Status.Crm',
					},
				],
				routing: {
					request: {
						qs: {
							filter_by: '={{$parameter.filter_by}}',
						},
					},
				},
			},
			{
				name: 'First Name Contains',
				value: 'first_name_contains',
				type: 'string',
				routing: {
					request: {
						qs: {
							first_name_contains: '={{$parameter.first_name_contains}}',
						},
					},
				},
			},
			{
				name: 'First Name Starts With',
				value: 'first_name_startswith',
				type: 'string',
				routing: {
					request: {
						qs: {
							first_name_startswith: '={{$parameter.first_name_startswith}}',
						},
					},
				},
			},
			{
				name: 'Last Name Contains',
				value: 'last_name_contains',
				type: 'string',
				routing: {
					request: {
						qs: {
							last_name_contains: '={{$parameter.last_name_contains}}',
						},
					},
				},
			},
			{
				name: 'Last Name Starts With',
				value: 'last_name_startswith',
				type: 'string',
				routing: {
					request: {
						qs: {
							last_name_startswith: '={{$parameter.last_name_startswith}}',
						},
					},
				},
			},
			{
				name: 'Phone Contains',
				value: 'phone_contains',
				type: 'string',
				routing: {
					request: {
						qs: {
							phone_contains: '={{$parameter.phone_contains}}',
						},
					},
				},
			},
			{
				name: 'Phone Starts With',
				value: 'phone_startswith',
				type: 'string',
				routing: {
					request: {
						qs: {
							phone_startswith: '={{$parameter.phone_startswith}}',
						},
					},
				},
			},
		],
	},
];
