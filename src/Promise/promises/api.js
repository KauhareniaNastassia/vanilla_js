const api = {
    sendStudentsCountToItKamasutra(studentsCount) {
        return axios.post("https://it-kamasutra.com/students-need",
            {count: studentsCount});
    },
    getVacanciesCountFromMicrosoft() {
        const pr = axios.get("https://microsoft.com");

        let pr2 = pr.then(res => {
            return res.data.vacancies
        })
        return pr2

    },
    getVacanciesCountFromGoogle() {
        return axios
            .get("https://google.com")
            .then( res => res.data.vacancies )
    }

}