export default class {
    send(content) {
        let a = document.createElement('a')
        a.href = `https://wa.me/5521971524026?text=${content}`
        a.setAttribute('target', '_blank')
        a.click()
    }
}