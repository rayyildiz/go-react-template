# Go & React Template
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Frayyildiz%2Fgo-react-template.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Frayyildiz%2Fgo-react-template?ref=badge_shield)


A simple template for creating a go & react project. 


```
git clone https://github.com/rayyildiz/go-react-template.git my-awesome-app
cd my-awesome-app
make init
```



Backend: 
---

- [PostreSQL](https://github.com/lib/pq)
- [GoCloud](https://gocloud.dev/) 
- [Zap Logger](https://github.com/uber-go/zap) with [Sentry support](https://github.com/getsentry/sentry-go)
- [fresh](https://github.com/gravityblast/fresh) for hot reloding.
- [Go-Chi](https://github.com/go-chi/chi) for routing.
- [Gitlab CI/CD pipeline](https://docs.gitlab.com/ee/ci/pipelines.html)

Frontend: 
---

- [Semantic UI](https://react.semantic-ui.com/)
- [Cookie Consent](https://www.npmjs.com/package/react-cookie-consent) 
- React Router Dom
- Google Analytic


## Configure

Create an `.env` file and add your settings. Or run `make clean` to remove `.git` folder and create an empty `.env` file. [More information](https://github.com/kelseyhightower/envconfig)

```
APP_DEBUG=true
APP_POSTGRES_CONNECTION=postgres://postgres:123456@localhost:5432/postgres?sslmode=disable
```



## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Frayyildiz%2Fgo-react-template.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Frayyildiz%2Fgo-react-template?ref=badge_large)