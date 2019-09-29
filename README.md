# Go & React Template

A simple template for creating a project. 

```
git clone https://github.com/rayyildiz/go-react-template.git my-awesome-app
cd my-awesome-app
make init
```



Backend Includes 
---

- [PostreSQL Driver](https://github.com/lib/pq)
- [Zap Logger](https://github.com/uber-go/zap) with [Sentry support](https://github.com/getsentry/sentry-go)
- [fresh](https://github.com/gravityblast/fresh) for hot relading.
- [Go Chi](https://github.com/go-chi/chi) for routing.
- [Gitlab CI/CD pipeline](https://docs.gitlab.com/ee/ci/pipelines.html)

Fronend Includes:
---

- [Semantic UI](https://react.semantic-ui.com/)
- [Cookie Consent](https://www.npmjs.com/package/react-cookie-consent) 
- React Router Dom
- Google Analytic


## Configure

Create an empty `.env` file and add your settins:

```
POSTGRES_CONNECTION=postgres://postgres:123456@localhost:5432/postgres?sslmode=disable
```

