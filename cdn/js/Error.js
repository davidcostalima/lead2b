class ErrorDefault{
    error_default(){
        return {
            status_code: 500,
            next: false,
            message: 'Não foi possível acessar api'
        }
    }
}