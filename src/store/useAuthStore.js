import { defineStore } from "pinia";
import API from "@/utils/API";
export const useAuthStore = defineStore("Auth", {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')) || null,
        token: localStorage.getItem('token') || null
    }),

    actions: {
        // async getUser() {
        //     const res = await API.get("/user");
        //
        //     const user = await res.json();
        //     this.user = user;
        // },
        async signUp(payload) {
            await API.post("/signup", payload)
                .then(() => {
                    this.signIn(payload) //is this right?
                })

        },
        async signIn(payload) {
            await API.post("/login", payload)
                .then((response) => {
                    // this.setState({ datasets: response.data })
                    // console.log('response is: ', response.data)
                    console.log('response header is: ', response.headers.authorization)
                    const accessToken = response.headers.authorization.split(" ")[1]
                    localStorage.setItem('token', accessToken)
                    localStorage.setItem('user', JSON.stringify(response.data.data));
                    this.user = JSON.parse(localStorage.getItem('user'))
                    this.token = accessToken
                })
                .catch(console.log)
        },
        logout() {
            this.user = null
            localStorage.removeItem('user')
            localStorage.removeItem('token')
        }
    },
});
