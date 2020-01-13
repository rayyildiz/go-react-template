# Worker

Required Environments Variables:

- **PORT** running port ( default: `4200`)
- **SENTRY_DSN** [Sentry](https://sentry.io/organizations/playground-oe/) DNS. Disabled if it is empty(`""`)
- **TRACE_ENABLED** if `true` then enable stackdriver.
- **PROJECT_ID** for stack driver. `TRACE_ENABLED` must be `true` and `PROJECT_ID` must a valid projectId. 
