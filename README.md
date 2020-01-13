# Go & React Template


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
- [Echo](https://echo.labstack.com/) for routing.
- [Google Cloud Build](https://cloud.google.com/cloud-build)

Frontend: 
---

- [Material UI](https://material-ui.com/)
- Typescript 
- React Router Dom
- [Register](web/app/src/Pages/Auth/RegisterPage.tsx), [Login](web/app/src/Pages/Auth/LoginPage.tsx), [Forget Password](web/app/src/Pages/Auth/ForgetPasswordPage.tsx) pages


## Configure

Create an `.env` file and add your settings. Or run `make clean` to remove `.git` folder and create an empty `.env` file. [More information](https://github.com/kelseyhightower/envconfig)

```
DEBUG=true
POSTGRES_CONNECTION=postgres://postgres:123456@localhost:5432/postgres?sslmode=disable
```


# Cloud Run

Configure and connect to your source code with [Google CLoud Build](https://console.cloud.google.com/cloud-build/builds) .


Useful articles:

- <https://cloud.google.com/run/docs/quickstarts/build-and-deploy> 
- <https://medium.com/google-cloud/google-cloud-run-for-go-ec09ddbba111> 
- <https://github.com/ahmetb/cloud-run-faq>
