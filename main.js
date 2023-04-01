document.addEventListener('DOMContentLoaded', ()=> {
    if (document.querySelector('.new_field-js')) {
        const newField = document.querySelector('.new_field-js');
        const firldsWtapper = document.querySelector('.fields');
        const finalResultField = document.querySelector('.output--text');
        const getResultBtn = document.querySelector('.button_get-js');
        const resultData = {};


        const createNewField = (e) => {
            const newElem = document.createElement('div');
            newElem.classList.add('field__row');
            newElem.innerHTML = `
                <input type="text" placeholder="name" name="name" class="field">
                <input type="text" placeholder="text" name="title" class="field">
            `;

            firldsWtapper.append(newElem);
        }

        const createRuData = (newData) => {
            resultData["ru"] = {};
            newData.forEach(item => {
               // resultData["ru"].add(item)
               console.log(item)
               resultData["ru"][Object.keys(item)[0]] = Object.values(item)[0]
            })
        }

        const createUaData = (newData) => {
            resultData["ua"] = {};
            
            console.log('Тут будет украинский перевод')
        }

        const createEnData = (newData) => {
            resultData["en"] = {};
            
            console.log('Тут будет английский перевод')
        }

        const createEspData = (newData) => {
            resultData["Esp"] = {};
            
            console.log('Тут будет английский перевод')
        }

        const createData = (e) => {
            const newData = [];

            const fields = document.querySelectorAll('.field__row');

            fields.forEach(item => {
                const currentArray = {};

                currentArray[item.querySelector('[name="name"]').value] = item.querySelector('[name="title"]').value;
                newData.push(currentArray)
            })

            createRuData(newData)

            let newsData = JSON.stringify(resultData)

            finalResultField.innerHTML = `${newsData}`
        }

        newField.addEventListener('click', createNewField)
        getResultBtn.addEventListener('click', createData)
    }
})