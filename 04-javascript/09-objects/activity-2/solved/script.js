let denverBootCamp = {
    team: {
        instructor: {
            name: 'Robert Anderson',
            city: 'Bend',
            catchPhrase () {
                console.log("Welcome back y'all.");
            }
        },
        teachingAssistants: {
            female: {
                name: 'Stephany Bolivar',
                city: 'Brooklyn',
                catchPhrase () {
                    console.log("Woot Woot");
                }
            }
        }
    },
    students: {
        name: 'Ruth',
        city: 'Unknown',
        catchPhrase () {
            console.log('N/a');
        }
    }
};

console.log(denverBootCamp);

