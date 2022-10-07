export default class SendBlue {

    constructor() {
        this.error_default = {
            status_code: 500,
            next: false,
            message: 'Não foi possível acessar api'
        }
        this.options = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                "accept": "application/json",
                "api-key": this.getParams("api_key"),
                "content-type": "application/json",
            },
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            body: null
        }
    }


    // post("//api.sendinblue.com/v3/smtp/email", {
    //     "sender": {
    //         "name": "Davi",
    //         "email": "contato@metromax.net.br"
    //     },
    //     "to": [
    //         {
    //             "email": "david@oicaribe.com.br",
    //             "name":  "Dav"
    //         }
    //     ],
    //     "subject": 'Lorem Ipsum',
    //     "htmlContent": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    // }, true)




    async send( payload) {
        let base = pathApi
        if (isSendBlue) {
            options.headers = {}

        }
        options.body = obj_to_url(data)
        if (isSendBlue) {
            options.body = JSON.stringify(data)
            base = ""
        }
        try {
            let res = await fetch(`${base}${path}`, options)
            let status_code = res.status
            return await res.json()
        } catch (error) {
            return error_default
        }
    }



    getParams(name) {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        return urlParams.get(name)
    }
}