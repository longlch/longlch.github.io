$(document).ready(function () {
    fetch('./assets/js/data.json')
        .then(response => response.json())
        .then(data => {
            // Loop through the JSON data and generate HTML
            $.each(data, function (index, category) {
                var categoryHtml = `
<div class="container mt-4">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="section-title text-center pb-40">
              <div class="line m-auto"></div>
              <h3 class="title">${category.type}</h3>
            </div>
          </div>
        </div>

        <div class="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
`;

                // Loop through products in the current category
                $.each(category.products, function (i, product) {
                    var productHtml = `

<div class="col">
            <div class="card card-product">
              <div class="card-body">

                <div class="text-center position-relative ">
                  <div class=" position-absolute top-0 start-0">
                    <span class="badge bg-danger">Sale</span>
                  </div>
                  <a href="#!"> <img src="./assets/images/product/${product.image}" alt="Grocery Ecommerce Template" class="mb-3 img-fluid"></a>

                </div>
                <div class="text-small mb-1">
                    <a href="#!" class="text-decoration-none text-muted">
                        <small>${product.brand}</small>
                    </a>
                </div>
                <h2 class="fs-6">
                  ${product.name}
                </h2>
                <div>

                  <small class="text-warning"> <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-${(Math.random())} < 0.5 ? fill : half"></i>
                  </small> 
                        <span class="text-muted small">4.5(${Math.floor((Math.random() * 1000) + 1)})</span>
                </div>
                <div class="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span class="text-dark">${product.finalPrice}</span>
                    <span class="text-decoration-line-through text-muted">${product.originalPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
                    categoryHtml += productHtml;
                });

                categoryHtml += `</div></div>`;

                // Append the HTML for the current category to the product-list container
                $('#product-content').append(categoryHtml);
            });


        }).then(()=>{
        $(".card-product").click(function(){
            let element = document.getElementById("footer");
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

});