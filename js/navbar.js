fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((completedata) => {
        let data1 = "";

        completedata.forEach((values) => {
            data1 += `<div class="card">
                <h1 class="title" text-truncate>${values.title}</h1>
                <img src=${values.image} alt="...">
                <div class="cards-body">
                    <p class="category">${values.category}</p>
                    <h2 class="price">${values.price}<h2>
                    <a href="detailspage.html?id=${values.id}" class="btn">Product details</a>
                </div>
            </div>`;
        });

        document.getElementById('cards').innerHTML = data1;
    })
    .catch((err) => {
        console.log(err);
    });


        








        