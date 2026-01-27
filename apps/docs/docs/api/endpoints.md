---
sidebar_position: 3
title: Endpoints
description: API endpoint reference
---

# Endpoints

Reference for GetNotify API endpoints. Base URL: `https://api.getnotify.org` (or as provided).

All requests require `Authorization: Bearer YOUR_API_KEY` and `Content-Type: application/json` where applicable.

## Messages

### Send a message

`POST /v1/messages`

Send a WhatsApp message (template or custom).

**Request body:** (structure to be defined; e.g. `to`, `template`, `params`.)

**Response:** `201` with message ID and status.

---

## Contacts

### List contacts

`GET /v1/contacts`

List contacts for your account. Supports pagination and filters.

---

## Webhooks (future)

Webhooks for delivery receipts and inbound messages will be documented here when available.

---

*This reference will be expanded as the API is finalized. Check the dashboard or contact support for the latest details.*
