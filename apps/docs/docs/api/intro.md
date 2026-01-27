---
sidebar_position: 1
title: API overview
description: GetNotify API quick start and base URL
---

# API overview

The GetNotify API lets you send WhatsApp notifications, manage contacts, and trigger automated messages from your own systems.

## Base URL

```
https://api.getnotify.org
```

(Use the base URL provided when you sign up; the exact host may vary by environment.)

## Quick start

1. [Create an account](https://getnotify.org/register) and log in to the [dashboard](https://dashboard.getnotify.org).
2. Generate an **API key** in the dashboard.
3. Send a request with your API key in the `Authorization` header:

```bash
curl -X POST "https://api.getnotify.org/v1/messages" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"to": "+1234567890", "template": "hello", "params": {}}'
```

## Next steps

- [Authentication](/api/authentication) — API keys and headers
- [Endpoints](/api/endpoints) — Full endpoint reference
