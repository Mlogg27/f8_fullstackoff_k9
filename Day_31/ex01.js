var productsTable = document.querySelector("#products-table");
var tableBody = productsTable.querySelector("tbody");
var cartData = document.querySelector("#cart-data");
var dataTable;
var cart = [];

for (var i = 1; i <= 4; i++) {
  var productRow = document.createElement("tr");

  var serialNumber = document.createElement("td");
  serialNumber.innerText = i;

  var productName = document.createElement("td");
  productName.innerText = `Sản phẩm ${i}`;

  var price = document.createElement("td");
  price.innerText = 1000 * i;

  var addToBasket = document.createElement("td");
  addToBasket.classList.add("add-to-basket");

  var addInput = document.createElement("input");
  addInput.type = `number`;
  addInput.min = 0;
  addInput.value = 1;

  var addBtn = document.createElement("button");
  addBtn.innerText = `Thêm vào giỏ`;

  addToBasket.append(addInput);
  addToBasket.append(addBtn);

  productRow.append(serialNumber);
  productRow.append(productName);
  productRow.append(price);
  productRow.append(addToBasket);

  tableBody.append(productRow);

  addBtn.addEventListener(
    "click",
    (function (i, addInput) {
      return function () {
        var quantity = parseInt(addInput.value);
        addBasket(i, quantity);
      };
    })(i, addInput)
  );
}

var p = document.createElement("p");
p.innerText = `Giỏ hàng không có sản phẩm`;
cartData.append(p);

var hr = document.createElement("hr");

var updateBtn = document.createElement("button");
updateBtn.innerText = `Cập nhật giỏ hàng`;
var deleteBtn = document.createElement("button");
deleteBtn.innerText = `Xóa giỏ hàng`;
var btnBox = document.createElement("div");
btnBox.classList.add("btn-box");
btnBox.append(updateBtn);
btnBox.append(deleteBtn);

window.addEventListener("load", loadCartFormLocal);

//các function
function addBasket(productID, quantity) {
  if (quantity <= 0) return;

  if (cart.length === 0 && p.parentNode) {
    p.remove();
  }

  if (!dataTable) {
    dataTable = document.createElement("table");
    dataTable.cellPadding = 0;
    dataTable.cellSpacing = 0;
    dataTable.border = 1;
    dataTable.width = `100%`;

    var headerRow = `<tr>`;
    headerRow += `<th width='5%'>STT</th>`;
    headerRow += `<th>Tên sản phẩm</th>`;
    headerRow += `<th width='20%'>Giá</th>`;
    headerRow += `<th width='20%'>Số lượng</th>`;
    headerRow += `<th width='20%'>Thành tiền</th>`;
    headerRow += `<th width='5%'>Xóa</th>`;
    headerRow += `</tr>`;
    dataTable.innerHTML = headerRow;
    dataTable.classList.add("data-table");

    cartData.append(dataTable);
    cartData.append(hr);
    cartData.append(btnBox);
  }

  var existProduct = cart.find((product) => product.serialNumber === productID);

  if (existProduct) {
    existProduct.quantityProduct += quantity;
    existProduct.totalPrice = existProduct.price * existProduct.quantityProduct;
  } else {
    cart.push({
      serialNumber: productID,
      productName: `Sản phẩm ${productID}`,
      price: 1000 * productID,
      quantityProduct: quantity,
      totalPrice: 1000 * productID * quantity,
    });
  }
  createRowTableData();

  saveCart();
}

function createRowTableData() {
  if (!dataTable) return;

  while (dataTable.rows.length > 1) {
    dataTable.deleteRow(1);
  }

  var totalQuantityValue = 0;
  var totalPriceValue = 0;
  var count = 0;

  cart.forEach((product) => {
    var row = document.createElement("tr");
    row.setAttribute("data-serial-number", product.serialNumber);

    var serialNumber = document.createElement("td");
    serialNumber.innerText = ++count;

    var productName = document.createElement("td");
    productName.innerText = product.productName;

    var price = document.createElement("td");
    price.innerText = product.price;

    var quantity = document.createElement("td");
    var inputQuantity = document.createElement("input");
    inputQuantity.min = 0;
    inputQuantity.type = `number`;
    inputQuantity.value = product.quantityProduct;
    quantity.append(inputQuantity);
    inputQuantity.classList.add("input-quantity");

    var totalPrice = document.createElement("td");
    totalPrice.innerText = product.totalPrice;

    var deleteBox = document.createElement("td");
    var deleteButtonInner = document.createElement("button");
    deleteButtonInner.innerText = "Xóa";
    deleteButtonInner.addEventListener("click", function () {
      if (confirm("Are you sure?")) {
        alert("Xoá sản phẩm thành công");
        removeProductFromCart(product.serialNumber);
      }
    });
    deleteBox.append(deleteButtonInner);

    row.append(serialNumber);
    row.append(productName);
    row.append(price);
    row.append(quantity);
    row.append(totalPrice);
    row.append(deleteBox);

    dataTable.append(row);

    totalQuantityValue += product.quantityProduct;
    totalPriceValue += product.totalPrice;
  });

  var totalRow = document.createElement("tr");

  var totalText = document.createElement("td");
  totalText.innerText = `Tổng`;
  totalText.colSpan = 3;

  var totalQuantity = document.createElement("td");
  totalQuantity.innerText = totalQuantityValue;

  var totalPrice = document.createElement("td");
  totalPrice.colSpan = 2;
  totalPrice.innerText = totalPriceValue;

  totalRow.append(totalText);
  totalRow.append(totalQuantity);
  totalRow.append(totalPrice);

  dataTable.append(totalRow);
}

function removeProductFromCart(serialNumber) {
  cart = cart.filter((product) => product.serialNumber !== serialNumber);
  if (cart.length === 0) {
    cartData.append(p);
    cartData.removeChild(dataTable);
    dataTable = null;
    cartData.removeChild(hr);
    cartData.removeChild(btnBox);
  } else {
    createRowTableData();
  }

  saveCart();
}

function loadCartFormLocal() {
  loadCart();
  if (cart.length > 0) {
    p.remove();
    if (!dataTable) {
      dataTable = document.createElement("table");
      dataTable.cellPadding = 0;
      dataTable.cellSpacing = 0;
      dataTable.border = 1;
      dataTable.width = `100%`;

      var headerRow = `<tr>`;
      headerRow += `<th width='5%'>STT</th>`;
      headerRow += `<th>Tên sản phẩm</th>`;
      headerRow += `<th width='20%'>Giá</th>`;
      headerRow += `<th width='20%'>Số lượng</th>`;
      headerRow += `<th width='20%'>Thành tiền</th>`;
      headerRow += `<th width='5%'>Xóa</th>`;
      headerRow += `</tr>`;
      dataTable.innerHTML = headerRow;
      dataTable.classList.add("data-table");

      cartData.append(dataTable);
      cartData.append(hr);
    }
    createRowTableData();
    cartData.append(btnBox);
  }
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
  var storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
}

updateBtn.addEventListener("click", function () {
  alert("Cập nhật giỏ hàng thành công");
  var inputs = document.querySelectorAll(".input-quantity");

  inputs.forEach(function (input) {
    var row = input.closest("tr");
    var serialNumber = parseInt(row.getAttribute("data-serial-number"));
    var quantity = parseInt(input.value);

    if (quantity === 0) {
      removeProductFromCart(serialNumber);
    } else {
      var product = cart.find((p) => p.serialNumber === serialNumber);
      if (product) {
        product.quantityProduct = quantity;
        product.totalPrice = product.price * quantity;
      }
    }
  });

  createRowTableData();
  saveCart();
});

deleteBtn.addEventListener("click", function () {
  if (confirm("Are you sure?")) {
    alert("Xóa giỏ hàng thành công");

    cart = [];

    localStorage.removeItem("cart");

    if (dataTable) {
      cartData.removeChild(dataTable);
      dataTable = null;
    }
    if (hr) {
      cartData.removeChild(hr);
    }
    if (btnBox) {
      cartData.removeChild(btnBox);
    }

    cartData.append(p);
  }
});
