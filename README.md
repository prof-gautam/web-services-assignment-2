# Generating SSL Certificates with OpenSSL

This README provides instructions on how to generate SSL certificates using OpenSSL. These certificates can be used for development purposes or for setting up HTTPS on a local server.

## Prerequisites

- OpenSSL must be installed on your machine. OpenSSL is usually pre-installed on Linux and macOS. Windows users may need to install it manually.

## Instructions

1. **Open Your Terminal:** Begin by opening your terminal (Linux/macOS) or command prompt/PowerShell (Windows).
2. **Navigate to Your Project Directory:** Use the `cd` command to navigate to the directory where you want to generate your SSL certificates.
3. ```
   cd path/to/your/project
   ```
4. **Generate SSL Certificate and Private Key:** Run the following command in your terminal. This command generates a new SSL certificate (`cert.pem`) and a private key (`key.pem`). The certificate will be valid for 365 days.

```shell
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout key.pem -out cert.pem
```

Now you can use your certificate in your code as

```
const httsOptions = {
    //here goes our ssl
    key: fs.readFileSync('./ssl/key.pem'),
    cert: fs.readFileSync('./ssl/cert.pem')
}
```

I have Ignored SSL, to run this project create ssl directory and add key.pem and cert.pem into it
