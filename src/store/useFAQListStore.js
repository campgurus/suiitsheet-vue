import { defineStore } from 'pinia'
import API from "@/utils/API";
export const useFAQListStore = defineStore('FAQList', {
    state: () => ({
        FAQList: [],
        id: 0,
    }),
    actions: {
        addQuestion(question) {
            this.FAQList.push({ question, id: this.id++, completed: false })
        },
        deleteQuestion(questionID) {
            this.FAQList = this.FAQList.filter((object) => {
                return object.id !== questionID;
            });
        },
        toggleCompleted(idToFind) {
            const question = this.FAQList.find((obj) => obj.id === idToFind);
            if (question) {
                question.completed = !question.completed;
            }
        },
        async getQuestions() {
            try {
                const data = await API.get('/questions')
                this.FAQList = data.data
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        }
    },
})
