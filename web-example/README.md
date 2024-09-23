# Web example demo

## Setup

1. Ensure you have the [https://github.com/cobrowseio/cobrowse-sdk-js-examples](https://github.com/cobrowseio/cobrowse-sdk-js-examples) repo cloned locally.
2. `cd web-example`
3. Replace `trial` seen at line 44 of [./src/hooks/useCobrowse.js`](https://github.com/cobrowseio/cobrowse-sdk-js-examples/blob/1a35aef3428a01fcad4b785e40a7454b421e50dd/web-example/src/hooks/useCobrowse.js#L44) to your own licnese key. (Register a new account at [https://cobrowse.io/register](https://cobrowse.io/register)).
4. Run `npm start` from within the `web-example` directory

## Query Parameters

The web demo can be used with `api`, `license`, `registration` and `custom_data parameters`. For security reasons do not allow for the `license` key or `api` to be set via a query parameter in your own application.

Different integrations are also supported out of the box with the `integration` parameter: salesforce, zendesk, genesys, freshdesk, talkdesk.

Example URL: [https://cobrowse-sdk-js-examples.cbrws.io/web-example/demo/?api=https://cobrowse.io&license=Xskn6AwiVgzBcQ&demo=true&custom_data=demo_id:219723078,device_name:Trial%20Website,user_email:web@example.com&integration=salesforce](https://cobrowse-sdk-js-examples.cbrws.io/web-example/demo/?api=https://cobrowse.io&license=Xskn6AwiVgzBcQ&demo=true&custom_data=demo_id:219723078,device_name:Trial%20Website,user_email:web@example.com&integration=salesforce)
