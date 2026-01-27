# CI/CD

**GitLab only.** Config: `.gitlab-ci.yml` in repo root.

## Stages

1. **test** — web lint/typecheck, docs build, dashboard Pint
2. **build** — web, docs, dashboard (on `main`, path-based)
3. **deploy** — rsync per app (on `main`)

## Jobs

| Job | Trigger | Actions |
|-----|---------|--------|
| web:lint | Every push/MR | `yarn turbo lint` + typecheck `@getnotify/web` |
| docs:build-ci | Every push/MR | Build `@getnotify/docs` |
| dashboard:lint | Every push/MR | `composer install` + `pint --test` (allow_failure) |
| web:build | `main`, apps/web changes | Astro build → `apps/web/dist` |
| docs:build | `main`, apps/docs changes | Docusaurus build → `apps/docs/build` |
| dashboard:build | `main`, apps/dashboard changes | `composer install --no-dev` → artifact |
| web:deploy | After web:build | Rsync dist to host |
| docs:deploy | After docs:build | Rsync docs build to host |
| dashboard:deploy | After dashboard:build | Rsync dashboard to host |

**Docs:** `apps/docs` = API + Client only. No internal; internal lives in `docs/internal/`, `apps/dashboard/docs/`, `apps/web/docs/`.

## Variables (GitLab CI/CD)

- **Web:** `SSH_PRIVATE_KEY`, `DEPLOY_USER`, `DEPLOY_HOST`, `DEPLOY_PATH`
- **Docs:** `DOCS_SSH_PRIVATE_KEY`, `DOCS_DEPLOY_USER`, `DOCS_DEPLOY_HOST`, `DOCS_DEPLOY_PATH`
- **Dashboard:** `DASHBOARD_SSH_PRIVATE_KEY`, `DASHBOARD_DEPLOY_USER`, `DASHBOARD_DEPLOY_HOST`, `DASHBOARD_DEPLOY_PATH`

Use **Protected** for deploy vars; **Masked** for SSH keys.

## Turbo

- `turbo.json`: `build`, `lint`, `typecheck`. Cache per task.
- `yarn turbo run build --filter=@getnotify/web` (and similar) for single-app build.
