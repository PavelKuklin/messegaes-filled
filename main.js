document.addEventListener('DOMContentLoaded', ()=> {
    if (document.querySelector('.new_field-js')) {
        const newField = document.querySelector('.new_field-js');
        const firldsWtapper = document.querySelector('.fields');
        const finalResultField = document.querySelector('.output--text');
        const getResultBtn = document.querySelector('.button_get-js');
        const resultData = {};
        const translateJs = document.querySelector('.button_copy-js')


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
            resultData["es"] = {};
            
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

        translateJs.addEventListener('click', (event) => {
            event.preventDefault();
            const data = 'Сильный';
          
            const getTranslate = (data) => {
              return fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate`, {
                method: 'POST',
                body: `key=trnsl.1.1.20200303T153320Z.bcb87af6074aebbf.be4bdba1de9cec25a20bfc6409687922086791e9&lang=ru-en&text=${data}`,
                headers: {
                  "Content-type": "application/x-www-form-urlencoded"
                },
              });
            };
            getTranslate(data).then((response) => {
          
              if (response.status !== 200) {
                throw new Error('error');
              }
              return response.json();
            }).then((result) => {
                finalResultField.textContent = result.text.toString().toLowerCase();
          
            }).catch((error) => {
              console.log(error);
            });
          
          });

        newField.addEventListener('click', createNewField)
        getResultBtn.addEventListener('click', createData)
    }
})