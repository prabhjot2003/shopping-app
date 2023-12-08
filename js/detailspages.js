    const singleProduct = new URLSearchParams(window.location.search);
    const productId = singleProduct.get("id");
    const singleProductdetails = document.getElementById("productdetails");

    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((response) => {
        return response.json();
        })
        .then((productdetails) => {
            singleProductdetails.innerHTML = `
                <div class="col-sm-4 offset-2">
                    <img src="${productdetails.image}" alt="${productdetails.title}" class="image-fluid singleimage">
                </div>
                <div class="col-sm-4 mt-2">
                    <h2 class="mt-4">${productdetails.title}class="title"</h2>
                    <h2>Price: $${productdetails.price}</h2>
                    <h2>${productdetails.description}</h2>
                    <button type="button" class="btn btn-primary mt-5" id="addtocart" onclick="addid()">Add To Cart</button>
                </div>`;
                localStorage.setItem('id',productdetails.id)
                console.log(productdetails.id)
        })
        
        function addid(){
            sendata = localStorage.getItem('sendata')
            let storedata = JSON.parse(localStorage.getItem(sendata)) || [];
            let iddate = localStorage.getItem('id')
            const duplicate = storedata.some(data => data.id === iddate);

            if(duplicate){
                return;
            }
            const cartdata = {
                id: iddate
            }

            storedata.push(cartdata);
            localStorage.setItem(globalemail,JSON.stringify(storedata));
        }

        function addid(){
            window.location.href = "cart.html";
            alert("add now cart")
            
        }
        
    
    