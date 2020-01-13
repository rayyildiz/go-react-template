# Go & React Template


Simple template for creating [go](https://golang.org) & [react js](https://reactjs.org/) project. 

```
git clone https://github.com/rayyildiz/go-react-template.git my-awesome-app
cd my-awesome-app
make init
make clean
```

Backend: 
---

- [PostreSQL](https://github.com/lib/pq)
- [GoCloud](https://gocloud.dev/) 
- [Zap Logger](https://github.com/uber-go/zap) with [Sentry support](https://github.com/getsentry/sentry-go)
- [fresh](https://github.com/gravityblast/fresh) for hot reloding.
- [Echo](https://echo.labstack.com/) for routing.
- [Google Cloud Build](https://cloud.google.com/cloud-build)

Frontend: 
---

- [Material UI](https://material-ui.com/)
- Typescript 
- React Router Dom
- [Register](web/app/src/Pages/Auth/RegisterPage.tsx), [Login](web/app/src/Pages/Auth/LoginPage.tsx), [Forget Password](web/app/src/Pages/Auth/ForgetPasswordPage.tsx) pages

<a href="https://ibb.co/gRsC6y4"><img src="https://i.ibb.co/tJy53BL/Screenshot-20200113-185628.png" alt="Screenshot-20200113-185628" border="0"></a>

## Configure

Run `make clean` to remove `.git` folder and create an empty `.env` file. 

```
DEBUG=true
POSTGRES_CONNECTION=postgres://postgres:123456@localhost:5432/postgres?sslmode=disable
```

# Cloud Run

This template is configured for [Google CLoud Build](https://console.cloud.google.com/cloud-build/builds) and ready to deploy to [Cloud Run](https://cloud.google.com/run/).

Useful links:

- <https://cloud.google.com/run/docs/quickstarts/build-and-deploy> 
- <https://medium.com/google-cloud/google-cloud-run-for-go-ec09ddbba111> 
- <https://github.com/ahmetb/cloud-run-faq>
