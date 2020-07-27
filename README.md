# Go & React Template

![ci](https://github.com/rayyildiz/go-react-template/workflows/ci/badge.svg)


Simple template for creating [go](https://golang.org) & [react js](https://reactjs.org/) project. 

```bash
git clone https://github.com/rayyildiz/go-react-template.git my-awesome-app
cd my-awesome-app
make
```

Backend: 
---

- [PostreSQL](https://github.com/lib/pq)
- [GoCloud](https://gocloud.dev/) 
- [Zap Logger](https://github.com/uber-go/zap) with [Sentry support](https://github.com/getsentry/sentry-go)
- [Echo](https://echo.labstack.com/) for routing.
- [Google Cloud Build](https://cloud.google.com/cloud-build)
- [Github Action](https://github.com/features/actions)

Frontend: 
---

- [Material UI](https://material-ui.com/)
- Typescript 
- React Router Dom
- [Register](web/app/src/Pages/Auth/RegisterPage.tsx), [Login](web/app/src/Pages/Auth/LoginPage.tsx), [Forget Password](web/app/src/Pages/Auth/ForgetPasswordPage.tsx) pages

![""](https://images.rayyildiz.dev/go-react-template.png)

## Configure

Run `make clean` to remove `.git` folder and create an empty `.env` file. 

```
DEBUG=true
POSTGRES_CONNECTION=postgres://postgres:postgres@localhost:5432/postgres?sslmode=disable
```

# Cloud Run

This template is configured for [Google CLoud Build](https://console.cloud.google.com/cloud-build/builds) and ready to deploy to [Cloud Run](https://cloud.google.com/run/).

Useful links:

- <https://cloud.google.com/run/docs/quickstarts/build-and-deploy> 
- <https://medium.com/google-cloud/google-cloud-run-for-go-ec09ddbba111> 
- <https://github.com/ahmetb/cloud-run-faq>
