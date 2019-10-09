# Go & React Template

A simple template for creating a go & react project. 


```
git clone https://github.com/rayyildiz/go-react-template.git my-awesome-app
cd my-awesome-app
make init
```



Backend Configured: 
---

- [PostreSQL](https://github.com/lib/pq)
- [Go Cloud](https://gocloud.dev/) 
- [Zap Logger](https://github.com/uber-go/zap) with [Sentry support](https://github.com/getsentry/sentry-go)
- [fresh](https://github.com/gravityblast/fresh) for hot relading.
- [Go Chi](https://github.com/go-chi/chi) for routing.
- [Gitlab CI/CD pipeline](https://docs.gitlab.com/ee/ci/pipelines.html)

Frontend Configured: 
---

- [Semantic UI](https://react.semantic-ui.com/)
- [Cookie Consent](https://www.npmjs.com/package/react-cookie-consent) 
- React Router Dom
- Google Analytic


## Configure

Create an `.env` file and add your settings:

```
DEBUG=true
POSTGRES_CONNECTION=postgres://postgres:123456@localhost:5432/postgres?sslmode=disable
```

