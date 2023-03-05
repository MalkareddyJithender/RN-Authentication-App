### User Authentication (Sign Up & Sign In) with Firebase

- Authentication means verifing user credentials on backend.

- How Does Authentication works ?

- once the user fills form, credentials (email,password) will be sent to backend api through http request.

- on the backend, credentails are get validated and if validated successfully, backend will generate an authentication token (string with bunch of text) and sends it to mobile app.

- An authentication token will be generated by backend and as well as it is also validated by backend itself.

- once we got the auth token, it means that credentials are validated successfully on backend.

- This authentication token will be required and attached to every http request header which will be sent
to protected/secure api endpoint.

- When working with firebase and with authentication feature, we have two options :
* firebase SDK (third-party-package)
* Firebase Authentication REST API

- firebase rest api is preferred because when we create our own rest api we can follow similar approach of sending http requests.

- when we use navigation.navigate("identifier"), on to stack, new page is to be pushed. we can go back.

- we can also use navigation.replace("identifier"), here on the stack, one page is replaced with another page. There is no way of going back.
