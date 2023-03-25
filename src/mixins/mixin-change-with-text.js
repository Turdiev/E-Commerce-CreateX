
export default {
    data() {
        return {
            //
        }
    },

    methods: {
        capitalizesFirstLetter(string) {
            return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
        }
    }
}