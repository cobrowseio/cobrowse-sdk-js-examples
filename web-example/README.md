# Web example demo

## Setup

1. Ensure you have the [https://github.com/cobrowseio/cobrowse-sdk-js-examples](https://github.com/cobrowseio/cobrowse-sdk-js-examples) repo cloned locally.
2. `cd web-example`
3. Replace `trial` seen at line 44 of [./src/hooks/useCobrowse.js`](https://github.com/cobrowseio/cobrowse-sdk-js-examples/blob/1a35aef3428a01fcad4b785e40a7454b421e50dd/web-example/src/hooks/useCobrowse.js#L44) to your own licnese key. (Register a new account at [https://cobrowse.io/register](https://cobrowse.io/register)).
4. Run `npm start` from within the `web-example` directory

## Query Parameters

The web demo can be used with `api`, `license`, `registration`, `sdk_path` and `custom_data parameters`. For security reasons **do not allow** for the `license` key, `sdk_path` or `api` to be set via a query parameter in your own application.

Different integrations are also supported out of the box with the `integration` parameter: salesforce, zendesk, genesys, freshdesk, talkdesk or dynamics.

Example URLs:

- Salesforce: [https://cobrowse-sdk-js-examples.cbrws.io/web-example/demo/?api=https://cobrowse.io&license=Xskn6AwiVgzBcQ&demo=true&custom_data=demo_id:219723078,device_name:Trial%20Website,user_email:web@example.com&integration=salesforce](https://cobrowse-sdk-js-examples.cbrws.io/web-example/demo/?api=https://cobrowse.io&license=Xskn6AwiVgzBcQ&demo=true&custom_data=demo_id:219723078,device_name:Trial%20Website,user_email:web@example.com&integration=salesforce)

- Dynamics 365 - Customer service [https://cobrowse-sdk-js-examples.cbrws.io/web-example/demo?integration=dynamics&dynamics-app-id=3e85abbb-9a1b-4ec3-8a40-1383fe5c103a&dynamics-org-id=e943541f-c234-f011-9a41-6045bd003911&dynamics-org-url=https://m-e943541f-c234-f011-9a41-6045bd003911.us.omnichannelengagementhub.com&license=Xskn6AwiVgzBcQ&demo=true](https://cobrowse-sdk-js-examples.cbrws.io/web-example/demo?integration=dynamics&dynamics-app-id=3e85abbb-9a1b-4ec3-8a40-1383fe5c103a&dynamics-org-id=e943541f-c234-f011-9a41-6045bd003911&dynamics-org-url=https://m-e943541f-c234-f011-9a41-6045bd003911.us.omnichannelengagementhub.com&license=Xskn6AwiVgzBcQ&demo=true)

  You can find all the parameters in the _Dynamics 365 - Copilot service admin
  center_ > Channels > Chat - Manage > Select and edit your channel > Chat
  Widget. The HTML snippet displayed on the right holds the required values.
    - `dynamics-app-id`
    - `dynamics-org-id`
    - `dynamics-org-url`
