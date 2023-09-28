# cobrowse-sdk-js-examples

All demo pages support the ability to pass your license key into them by appending a `?license=XXX` query parameter to the end of the demo page URL.

For security reasons **do not** allow for the license key to be set via a query parameter in your own application.

## Standalone support code example
Demo page at [https://cobrowse-sdk-js-examples.cbrws.io/standalone-support-code.html](https://cobrowse-sdk-js-examples.cbrws.io/standalone-support-code.html)

Documentation at [https://docs.cobrowse.io/sdk-features/6-digit-codes](https://docs.cobrowse.io/sdk-features/6-digit-codes)

1. Clone the repo, and open standalone-support-code.html in your browser.
2. Replace CobrowseIO.license with your license key (register a new account at [https://cobrowse.io/register](https://cobrowse.io/register)).
3. Modify the button's background-color, border-color, the Cobrowse.io logo, or make any other changes you'd like.
4. Deploy as a standalone page, or embed similar html, css, and javascript in your site.

## Support code examples
> **Note**
> You should validate the browser (Chrome, Firefox, etc.) and platform (desktop web, mobile web, etc.) compatibility of your support code logic.

Demo page at [https://cobrowse-sdk-js-examples.cbrws.io/support-code-examples.html](https://cobrowse-sdk-js-examples.cbrws.io/support-code-examples.html)

Documentation at [https://docs.cobrowse.io/sdk-features/6-digit-codes](https://docs.cobrowse.io/sdk-features/6-digit-codes)

1. Clone the repo, and open support-code-examples.html in your browser.
2. Replace CobrowseIO.license with your license key (register a new account at [https://cobrowse.io/register](https://cobrowse.io/register)).
3. Modify the styling, add your own way to display the code, or make any other changes you'd like.
4. Embed similar html, css, and javascript in your site.

## Full device mode by default
Demo page at [https://cobrowse-sdk-js-examples.cbrws.io/full-device-by-default.html](https://cobrowse-sdk-js-examples.cbrws.io/full-device-by-default.html)

Documentation at [https://docs.cobrowse.io/sdk-features/full-device-capabilities](https://docs.cobrowse.io/sdk-features/full-device-capabilities)

1. Clone the repo, and open full-device-by-default.html in your browser.
2. Replace CobrowseIO.license with your license key (register a new account at [https://cobrowse.io/register](https://cobrowse.io/register)).
3. Begin a session to see the functionality, edit consent requests and other UI as needed.
4. Deploy as a standalone page, or embed similar html, css, and javascript in your site.

## Full device custom consent prompt
Demo page at [https://cobrowse-sdk-js-examples.cbrws.io/full-device-custom-consent.html](https://cobrowse-sdk-js-examples.cbrws.io/full-device-custom-consent.html)

Documentation at [https://docs.cobrowse.io/sdk-features/customize-the-interface/full-device-consent-dialog](https://docs.cobrowse.io/sdk-features/customize-the-interface/full-device-consent-dialog)

1. Clone the repo, and open full-device-custom-consent.html in your browser.
2. Replace CobrowseIO.license with your license key (register a new account at [https://cobrowse.io/register](https://cobrowse.io/register)).
3. Deploy as a standalone page, or embed similar html, css, and javascript in your site.

## UI Customization (translation)
Demo page at [https://cobrowse-sdk-js-examples.cbrws.io/message-translation.html](https://cobrowse-sdk-js-examples.cbrws.io/message-translation.html)

Documentation at [https://docs.cobrowse.io/sdk-features/customize-the-interface](https://docs.cobrowse.io/sdk-features/customize-the-interface)

1. Clone the repo, and open message-translation.html in your browser.
2. Replace CobrowseIO.license with your license key (register a new account at [https://cobrowse.io/register](https://cobrowse.io/register)).
3. Begin a session and modify the UI as needed. Translate the French text into the language/verbage of your choice.
4. Deploy as a standalone page, or embed similar html, css, and javascript in your site.

## Cross domain sessions
Demo page at [https://cobrowse-sdk-js-examples.cbrws.io/cross-domain-session.html](https://cobrowse-sdk-js-examples.cbrws.io/cross-domain-session.html)

Documentation at [https://docs.cobrowse.io/sdk-features/advanced-features/web/cross-domain-session-support](https://docs.cobrowse.io/sdk-features/advanced-features/web/cross-domain-session-support)

1. Clone the repo.
2. Create a fork of (or edit) the codepen here: [https://codepen.io/cobrowseio/pen/QWmjJpL?editors=1111](https://codepen.io/cobrowseio/pen/QWmjJpL?editors=1111).
3. Replace CobrowseIO.license in **both** ./cross-domain-session.html **and** your forked codepen with your license key (register a new account at [https://cobrowse.io/register](https://cobrowse.io/register)).
4. Serve the page ./cross-domain-session.html on localhost and open it in the same browser as your codepen example.
5. Begin a session on one of the webpages. As you switch between the webpages, e.g. by switching across tabs, the session continues.
6. (Optional). Replace the hyperlinks in the example pages with your domains to simulate crossing domains using a hyperlink.

You can also reproduce this example with your own domain. Make sure to update the trustedOrigins parameter on all webpages accordingly.

## Cross document iframes
Demo page at [https://cobrowse-sdk-js-examples.cbrws.io/cross-document-iframe-parent.html](https://cobrowse-sdk-js-examples.cbrws.io/cross-document-iframe-parent.html)

Documentation at [https://docs.cobrowse.io/sdk-features/advanced-features/web/cross-document-iframes](https://docs.cobrowse.io/sdk-features/advanced-features/web/cross-document-iframes)

1. Clone the repo, and open cross-document-iframe-parent.html in your browser.
2. Replace CobrowseIO.license with your license key (register a new account at [https://cobrowse.io/register](https://cobrowse.io/register)).
3. Begin a session to see that the iframe can be successfully viewed by the agent.
4. Replace the iframed content with your own as needed. The child iframe page must be accessible with its url specified. The parent url must also be added to CobrowseIO.trustedOrigins in the child page, see [https://cobrowse-sdk-js-examples.cbrws.io/cross-document-iframe-child.html](https://cobrowse-sdk-js-examples.cbrws.io/cross-document-iframe-child.html).
5. Deploy as a standalone page, or embed similar html, css, and javascript in your site.

## WebRTC camera

Demo page at [https://cobrowse-sdk-js-examples.cbrws.io/webRTC-camera.html](https://cobrowse-sdk-js-examples.cbrws.io/webRTC-camera.html)

Documentation at [https://docs.cobrowse.io/sdk-installation/web](https://docs.cobrowse.io/sdk-installation/web)

1. Clone the repo and open webRTC-camera.html in your browser.
2. Replace CobrowseIO.license with your license key (register a new account at [https://cobrowse.io/register](https://cobrowse.io/register)).
3. Click the Start camera button and allow the browser to use your camera.
4. Begin a session to see that the camera feed can be successfully viewed by the agent.
5. Use the Switch camera button to change between camera feeds if available.

## Connection last alive check

Demo page at [https://cobrowse-sdk-js-examples.cbrws.io/connection-last-alive-check.html](https://cobrowse-sdk-js-examples.cbrws.io/connection-last-alive-check.html)

Documentation at [https://docs.cobrowse.io/sdk-features/listening-for-events](https://docs.cobrowse.io/sdk-features/listening-for-events)

1. Clone the repo and open connection-last-alive-check.html in your browser.
2. Replace CobrowseIO.license with your license key (register a new account at [https://cobrowse.io/register](https://cobrowse.io/register)).
3. Start a session and see the session indicator change to green once the alive check has completed
4. Disrupt the connection by disconnecting the Internet connection for either the client, agent or both.
6. Wait 9 - 10 seconds and see the status indicator and agent have been told the connection has been lost.
7. Enable the Internet connection and see the session restore and the status update to active.

## Agent Present Mode - 6-digit code

Demo page at [https://cobrowse-sdk-js-examples.cbrws.io/agent-present-mode/agent-present-mode-ui.html](https://cobrowse-sdk-js-examples.cbrws.io/agent-present-mode/agent-present-mode-ui.html)

Documentation at [https://support.cobrowse.io/agent-present-mode](https://support.cobrowse.io/agent-present-mode)


1. Clone the repo and open agent-present-mode/agent-present-mode-ui.html in your browser.
2. Replace CobrowseIO.license with your license key (register a new account at [https://cobrowse.io/register](https://cobrowse.io/register)).
3. Ensure you have Agent Present Mode enabled in Settings, [https://cobrowse.io/dashboard/settings](https://cobrowse.io/dashboard/settings), Settings > Session Settings > Present Mode.
4. Click "Share a different device" on the agent present mode page in [https://cobrowse.io/dashboard/present](https://cobrowse.io/dashboard/present) and copy the 6-digit present code.
6. Input the 6-digit present code in the demo page.
7. Share the session link from the agent present mode page with the user. For demonstration this can be opened in an anonymous window.


## Agent Present Mode - Redaction

Demo page at [https://cobrowse-sdk-js-examples.cbrws.io/agent-present-mode/agent-present-mode-redaction.html](https://cobrowse-sdk-js-examples.cbrws.io/agent-present-mode/agent-present-mode-redaction.html)

Documentation at [https://support.cobrowse.io/agent-present-mode](https://support.cobrowse.io/agent-present-mode)


1. Clone the repo and open agent-present-mode/agent-present-mode-ui.html in your browser.
2. Replace CobrowseIO.license with your license key (register a new account at [https://cobrowse.io/register](https://cobrowse.io/register)).
3. Ensure you have Agent Present Mode enabled in Settings, [https://cobrowse.io/dashboard/settings](https://cobrowse.io/dashboard/settings), Settings > Session Settings > Present Mode.
4. Click "Share a different device" on the agent present mode page in [https://cobrowse.io/dashboard/present](https://cobrowse.io/dashboard/present) and copy the 6-digit present code.
6. Input the 6-digit present code in the demo page.
7. Share the session link from the agent present mode page with the user. For demonstration this can be opened in an anonymous window.
8. From the end-user point of view observe that the footer and a side panel appear redacted.


## Agent Present Mode - IFrame sharing

Demo page at [https://cobrowse-sdk-js-examples.cbrws.io/agent-present-mode/agent-present-mode-iframes.html](https://cobrowse-sdk-js-examples.cbrws.io/agent-present-mode/agent-present-mode-iframes.html)

Documentation at [https://support.cobrowse.io/agent-present-mode](https://support.cobrowse.io/agent-present-mode)

This demo requires a local web server like VSCode Live Server, node http.server or Python SimpleHTTPServer (http.server for Puython 3).

1. Clone the repo, launch your local web server and access the page agent-present-mode/agent-present-mode-ui.html in your browser.
2. Replace CobrowseIO.license with your license key (register a new account at [https://cobrowse.io/register](https://cobrowse.io/register)).
3. Ensure you have Agent Present Mode enabled in Settings, [https://cobrowse.io/dashboard/settings](https://cobrowse.io/dashboard/settings), Settings > Session Settings > Present Mode.
4. Click "Share a different device" on the agent present mode page in [https://cobrowse.io/dashboard/present](https://cobrowse.io/dashboard/present) and copy the 6-digit present code.
6. Input the 6-digit present code in the demo page.
7. Share the session link from the agent present mode page with the user. For demonstration this can be opened in an anonymous window.
8. On the agent side hover over the different IFrames. Observe how only the active IFrame will be shared with the end-user.
