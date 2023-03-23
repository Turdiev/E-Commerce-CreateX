
export default {
    data() {
        return {
            isOpen: true,
            isClose: false
        }
    },

    methods: {
        onOpenModalWindow(formName, path) {
            this.$store.dispatch(path, {
                form: formName,
                value: this.isOpen
            })
            document.body.classList.add('o-hidden')
        },
        onCloseModalWindow(formName, path) {
            this.$store.dispatch(path, {
                form: formName,
                value: this.isClose
            })
            document.body.classList.remove('o-hidden')
        }
    }
}