function solve() {
    const button = document.querySelector('.admin-view .action button');
    const modules = {};

    button.addEventListener('click', (ev) => {
        ev.preventDefault();

        const lectureName = document.querySelector('input[name="lecture-name"]');
        const lectureDate = document.querySelector('input[name="lecture-date"]');
        const lectureModule = document.querySelector('select[name="lecture-module"]');

        if (!lectureName.value || !lectureDate.value || lectureModule.value == 'Select module') {
            return;
        }

        if (!modules[lectureModule.value]) {
            modules[lectureModule.value] = [];
        }

        let currentCourse = {
            name: lectureName.value,
            date: formatDate(lectureDate.value)
        }

        modules[lectureModule.value].push(currentCourse);

        lectureName.value = '';
        lectureDate.value = '';
        lectureModule.value = 'Select module';

        createTrainings(modules);
    });

    function createTrainings(modules) {
        let modulesElement = document.querySelector('.modules');
        modulesElement.innerHTML = '';

        for (const moduleName in modules) {
            let moduleElement = createModule(moduleName);
            let lectureListElement = document.createElement('ul');

            let lectures = modules[moduleName];

            lectures.sort((a, b) => a.date.localeCompare(b.date))
                    .forEach(lecture => {
                let lectureElement = createLecture(lecture.name, lecture.date);
                lectureListElement.appendChild(lectureElement);

                lectureElement.querySelector('button').addEventListener('click', (ev) => {
                    modules[moduleName] = modules[moduleName]
                    .filter(x => !(x.name == lecture.name && x.date == lecture.date));

                    if (modules[moduleName] == 0) {
                        delete modules[moduleName];
                        ev.currentTarget.closest('.module').remove();
                    } else {
                        ev.currentTarget.parentNode.remove();
                    }
                })
            });

            moduleElement.appendChild(lectureListElement);
            modulesElement.appendChild(moduleElement);
        }
    }

    function formatDate(dateInput) {
        let [date, time] = dateInput.split('T');
        date = date.replace(/-/g, '/');

        return `${date} - ${time}`;
    }

    function createLecture(name, date) {
        let liElement = document.createElement('li');
        liElement.classList.add('flex');

        let h4 = document.createElement('h4');
        h4.textContent = `${name} - ${date}`;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Del';
        deleteButton.classList.add('red');

        liElement.appendChild(h4);
        liElement.appendChild(deleteButton);

        return liElement;
    }

    function createModule(name) {
        let divElement = document.createElement('div');
        divElement.classList.add('module');

        let headingElement = document.createElement('h3');
        headingElement.textContent = `${name.toUpperCase()}-MODULE`;

        divElement.appendChild(headingElement);

        return divElement;
    }
};