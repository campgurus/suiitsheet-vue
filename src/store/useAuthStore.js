import { defineStore } from "pinia";
import API from "@/utils/API";
export const useAuthStore = defineStore("Auth", {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')),
        token: localStorage.getItem('token') || null
    }),

    actions: {
        // async getUser() {
        //     const res = await API.get("/user");
        //
        //     const user = await res.json();
        //     this.user = user;
        // },
        // async signUp(email, password) {
        //     const res = await API.post("register", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({ email, password }),
        //     });
        //     const user = await res.json()
        //     this.user = user;
        // },
        async signIn(payload) {
            await API.post("/login", payload)
                .then((response) => {
                    // this.setState({ datasets: response.data })
                    // console.log('response is: ', response.data)
                    console.log('response header is: ', response.headers.authorization)
                    const token = response.headers.authorization.split(" ")[1]
                    localStorage.setItem('token', token)
                    localStorage.setItem('user', JSON.stringify(response.data.data));
                    this.user = JSON.parse(localStorage.getItem('user'))
                    this.token = token
                })
                .catch(console.log)
        },
    },
});
