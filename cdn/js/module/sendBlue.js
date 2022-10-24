export default class SendBlue {
    getParams(name) {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        return urlParams.get(name)
    }
    getKey() {
        let key = "UHRuZExUYVZJWHoxckhaWS02MmM4NTk2MDY0NWVhZDc3MTNlYjRmOWI1ODI3OWNhNTk5M2RjNjQwZmNkOWMzNjhlMDFjZjVlODNhYzdmODJjLWJpc3lla3hCZkI="
        key = atob(key)
        key = key.split('').reverse().join('')
        return key.substr(3,1000)
    }
    async send(name, email, subject, message) {
        this.payload = {
            "sender": {
                "name": "Metro Max",
                "email": "contato@metromax.net.br"
            },
            "to": [
                {
                    "email": email,
                    "name": name
                }
            ],
            "subject": subject,
            "htmlContent": message
        }
        this.url = "https://api.sendinblue.com/v3/smtp/email"
        this.options = {
            headers: {
                "accept": "application/json",
                "api-key": this.getKey(),
                "content-type": "application/json",
            },
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(this.payload)
        }
        try {
            let request = await fetch(this.url, this.options)
            return await request.json()
        } catch (error) {
            return {
                status_code: 500,
                next: false,
                message: 'Não foi possível acessar api'
            }
        }
    }
}