import { IAuthenticateGeneric, ICredentialType, INodeProperties } from 'n8n-workflow';

export class ZohoBooksOAuth2Api implements ICredentialType {
	name = 'zohoBooksOAuth2Api';
	displayName = 'Zoho Books OAuth2 API';
	extends = ['zohoOAuth2Api'];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			qs: {
				'organization_id': '={{$credentials.orgId}}'
			}

		},
	};
	documentationUrl = 'https://github.com/Vrishtrix/n8n-nodes-zohobooks';
	properties: INodeProperties[] = [
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: 'ZohoBooks.fullaccess.all',
		},
		{
			displayName: 'Organization ID',
			name: 'orgId',
			type: 'string',
			default: '',
		}
	];
}
