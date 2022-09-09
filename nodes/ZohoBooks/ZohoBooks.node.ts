import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class ZohoBooks implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Zoho Books',
		name: 'ZohoBooks',
		icon: 'file:zohobooks.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Implement Zoho Books API into n8n for automation',
		defaults: {
			name: 'ZohoBooks',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'ZohoBooks Api',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://books.zoho.com/api/v3',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		],
	};
}
