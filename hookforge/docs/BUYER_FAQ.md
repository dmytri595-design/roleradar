# Buyer FAQ

**Does it send real webhooks?** No. Delivery attempts are deterministic local simulations.

**Does it use real cryptography?** The signature lab uses browser Web Crypto HMAC-SHA256. It is educational and not a drop-in verifier for every provider's timestamp/header format.

**Does it need an API key?** No.

**Where is data stored?** In the current browser's localStorage. Export a workspace backup to move it.

**Are there users/revenue?** No claims; pre-launch/pre-revenue.

**What should a buyer build next?** Safe isolated endpoint runner, provider adapters, authenticated server persistence, team workspace, CI report artifact and provider-specific templates.