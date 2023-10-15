import { defineStore } from 'pinia'


export const useFAQListStore = defineStore('FAQList', {
    state: () => ({
        FAQList: [],
        id: 0,
    }),
    actions: {
        addQuestion(item) {
            this.FAQList.push({ item, id: this.id++, completed: false })
        },
        deleteTodo(itemID) {
            this.FAQList = this.FAQList.filter((object) => {
                return object.id !== itemID;
            });
        },
    },
})
