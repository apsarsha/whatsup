
// const users = ['apsar', 'rajesh', 'ramesh', 'burningbaji',"saibabu"];


// const personListView = document.querySelector('.ui-persons-list-container');
// users.forEach((name) => {
//     const personView = document.createElement('div');
//     personView.setAttribute("class", "ui-person");
//     personView.innerHTML = `<img src ='https://reqres.in/img/faces/1-image.jpg'/> <div>${name}</div>`
//     personListView.appendChild(personView);


// });



const API = `https://reqres.in/api/users`;

const responseApi = (apiresponse) => {
        return apiresponse.json();
    
    
    };

     const WhatsupApi = (item) => {


        const createWhatsupApi = document.createElement("div");
         createWhatsupApi.setAttribute("class", "ui-header");




        const contacts = document.createElement("div");
        contacts.setAttribute('class', 'ui-contacts');

        
       createWhatsupApi.innerHTML = `
        <img src="${item.avatar}" class="ui-person-info-image" />

                          
         <h5>${item.first_name}</h5> 
         
         <h4>${item.last_name}</h4>

       
         
    `

     contacts.appendChild(createWhatsupApi);
      document.querySelector(".ui-persons-list-container").appendChild(contacts)


     }

     const otherresponseApi = (data = []) => {
             console.log("::onDataReceived::", data);
           data.data.forEach(WhatsupApi)
       }
      fetch(API)
      .then(responseApi)
      .then(otherresponseApi)







// const API = `https://reqres.in/api/users`;

// const responseApi = (apiresponse) => {
//     return apiresponse.json();


// };

// const createFlagCard = (item) => {

//     const card = document.createElement("div");
//     card.setAttribute("class", "card");

//     const column = document.createElement("div");
//     column.setAttribute('class', 'col-3');
//     card.innerHTML = `
//         <img src="${item.flags?.svg}" class="card-img-top" />
//         <div class="card-body">
//           <h5>${item.nativeName}</h5>
//           <p class ="fst-italic bg-info">ISO Alpha-2: <span class="fw-light">${item.alpha2Code}</span></p>
//           <p class="fst-italic bg-info">ISO Alpha-3: <span class="fw-light">${item.alpha2Code}</span></p>
//           <p class="fst-italic bg-info">UN Code: <span class=""fw-light">${item.numericCode}</span></p>
//           <button class=" btn btn-primary btn-sm px-4 rounded-pill">click</button>
                     
//         </div>
//     `

//     column.appendChild(card);
//     document.querySelector(".row").appendChild(column);

// }









// const otherresponseApi = (data = []) => {
//     console.log("::onDataReceived::", data);
//     data.forEach(createFlagCard)
// }




// fetch(API)
//     .then(responseApi)
//     .then(otherresponseApi)