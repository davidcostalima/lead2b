export default class SendBlue {
    getParams(name) {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        return urlParams.get(name)
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
                "api-key": this.getParams("api_key"),
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