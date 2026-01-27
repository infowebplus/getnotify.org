---
sidebar_position: 2
title: Authentication
description: API keys and authentication
---

# Authentication

API requests must include your **API key** in the `Authorization` header.

## API key

1. Log in to the [dashboard](https://dashboard.getnotify.org).
2. Open **Settings** → **API keys** (or the equivalent section).
3. Create a new API key and copy it. Store it securely; it will not be shown again.

## Usage

Use a **Bearer** token:

```http
Authorization: Bearer YOUR_API_KEY
```

Example:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  "https://api.getnotify.org/v1/..."
```

## Security

- Do not commit API keys to version control or expose them in client-side code.
- Rotate keys periodically and revoke any key that may have been compromised.
- Use separate keys for development and production when possible.
