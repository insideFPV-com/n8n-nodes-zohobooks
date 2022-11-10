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
				displayName: 'Company Name',
				name: 'company_name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Website',
				name: 'website',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Language Code',
				name: 'language_code',
				type: 'options',
				options: languageCodes,
				default: '',
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
				displayName: 'Address Contains',
				name: 'address_contains',
				type: 'string',
				default: '',
				routing: {
					request: {
						qs: {
							address_contains: '={{$parameter.address_contains}}',
						},
					},
				},
			},
			{
				displayName: 'Address Starts With',
				name: 'address_startswith',
				type: 'string',
				default: '',
				routing: {
					request: {
						qs: {
							address_startswith: '={{$parameter.address_startswith}}',
						},
					},
				},
			},
			{
				displayName: 'Company Name Contains',
				name: 'company_name_contains',
				type: 'string',
				default: '',
				routing: {
					request: {
						qs: {
							company_name_contains: '={{$parameter.company_name_contains}}',
						},
					},
				},
			},
			{
				displayName: 'Company Name Starts With',
				name: 'company_name_startswith',
				type: 'string',
				default: '',
				routing: {
					request: {
						qs: {
							company_name_startswith: '={{$parameter.company_name_startswith}}',
						},
					},
				},
			},
			{
				displayName: 'Contact Name Contains',
				name: 'contact_name_contains',
				type: 'string',
				default: '',
				routing: {
					request: {
						qs: {
							contact_name_contains: '={{$parameter.contact_name_contains}}',
						},
					},
				},
			},
			{
				displayName: 'Contact Name Starts With',
				name: 'contact_name_startswith',
				type: 'string',
				default: '',
				routing: {
					request: {
						qs: {
							company_name_startswith: '={{$parameter.contact_name_startswith}}',
						},
					},
				},
			},
			{
				displayName: 'Email Starts With',
				name: 'email_startswith',
				type: 'string',
				default: '',
				routing: {
					request: {
						qs: {
							email_startswith: '={{$parameter.email_startswith}}',
						},
					},
				},
			},
			{
				displayName: 'Email Contains',
				name: 'email_contains',
				type: 'string',
				noDataExpression: true,
				default: '',
				routing: {
					request: {
						qs: {
							email_contains: '={{$parameter.additional_fields.email_contains}}',
						},
					},
				},
			},
			{
				displayName: 'Filter By',
				name: 'filter_by',
				type: 'options',
				default: 'Status.All',
				options: [
					{
						name: 'Status: Active',
						value: 'Status.Active',
					},
					{
						name: 'Status: All',
						value: 'Status.All',
					},
					{
						name: 'Status: Crm',
						value: 'Status.Crm',
					},
					{
						name: 'Status: Duplicate',
						value: 'Status.Duplicate',
					},
					{
						name: 'Status: Inactive',
						value: 'Status.Inactive',
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
				displayName: 'First Name Contains',
				name: 'first_name_contains',
				type: 'string',
				default: '',
				routing: {
					request: {
						qs: {
							first_name_contains: '={{$parameter.first_name_contains}}',
						},
					},
				},
			},
			{
				displayName: 'First Name Starts With',
				name: 'first_name_startswith',
				type: 'string',
				default: '',
				routing: {
					request: {
						qs: {
							first_name_startswith: '={{$parameter.first_name_startswith}}',
						},
					},
				},
			},
			{
				displayName: 'Last Name Contains',
				name: 'last_name_contains',
				type: 'string',
				default: '',
				routing: {
					request: {
						qs: {
							last_name_contains: '={{$parameter.last_name_contains}}',
						},
					},
				},
			},
			{
				displayName: 'Last Name Starts With',
				name: 'last_name_startswith',
				type: 'string',
				default: '',
				routing: {
					request: {
						qs: {
							last_name_startswith: '={{$parameter.last_name_startswith}}',
						},
					},
				},
			},
			{
				displayName: 'Phone Contains',
				name: 'phone_contains',
				type: 'string',
				default: '',
				routing: {
					request: {
						qs: {
							phone_contains: '={{$parameter.phone_contains}}',
						},
					},
				},
			},
			{
				displayName: 'Phone Starts With',
				name: 'phone_startswith',
				type: 'string',
				default: '',
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
