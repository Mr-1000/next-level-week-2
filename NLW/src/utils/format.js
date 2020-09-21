
const subjects = [
    "artes",
    "biologia",
    "ciencias",
    "educaçao fisica",
    "fisica",
    "geografia",
    "historia",
    "matematica",
    "portugues",
    "quimica"
]

const weekdays = [
    "domingo",
    "segunda-feira",
    "terca-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sabado"
]
// funcionalidades

function getSubject(subjectNumber){
    const position = (+subjectNumber - 1)
   return subjects[position]
}

function convertHoursToMinutes(time) {
    const [hours, min] = time.split(":")
    return Number((hours * 60) + min)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}