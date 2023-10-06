function submitForm() {
    $("#addMemberModal .close").click()
    Swal.fire({
        title: "Registration Successful!",
        text: "You have successfully registered.",
        icon: "success",
        showCancelButton: false,
        showCloseButton: false,
        showConfirmButton: true,
        confirmButtonText: "OK",
        customClass: {
            confirmButton: "custom-button-class"
        },
        buttonsStyling: false
    })
    return false;
}
function submitFormPay() {
    $("#paymember .close").click()
    Swal.fire({
        title: "Payment Successful!",
        text: "Payment has been processed",
        icon: "success",
        showCancelButton: false,
        showCloseButton: false,
        showConfirmButton: true,
        confirmButtonText: "OK",
        customClass: {
            confirmButton: "custom-button-class"
        },
        buttonsStyling: false
    })
    return false;
}
function submitAddStaff() {
    $("#addStaff .close").click()
    Swal.fire({
        title: "Staff Added Successful!",
        text: "A staff has been added.",
        icon: "success",
        showCancelButton: false,
        showCloseButton: false,
        showConfirmButton: true,
        confirmButtonText: "OK",
        customClass: {
            confirmButton: "custom-button-class"
        },
        buttonsStyling: false
    })
    return false;
}
function submitEditMemberForm() {
    $("#editMemberModal .close").click()
    Swal.fire({
        title: "Edit Member Details Successful!",
        text: "Changes has been saved.",
        icon: "success",
        showCancelButton: false,
        showCloseButton: false,
        showConfirmButton: true,
        confirmButtonText: "OK",
        customClass: {
            confirmButton: "custom-button-class"
        },
        buttonsStyling: false
    })
    return false;
}
function submitEditStaffForm() {
    $("#editStaffModal .close").click()
    Swal.fire({
        title: "Edit Staff Details Successful!",
        text: "Changes has been saved.",
        icon: "success",
        showCancelButton: false,
        showCloseButton: false,
        showConfirmButton: true,
        confirmButtonText: "OK",
        customClass: {
            confirmButton: "custom-button-class"
        },
        buttonsStyling: false
    })
    return false;
}
const itemData = {
    name: "Bench Press",
    quantity: 6,
};
function openEditPopup() {
    Swal.fire({
        title: 'Edit Item',
        html: `
            <div class="edit-item">
                <div class="form-group">
                    <label for="itemName">Item Name:</label>
                    <input type="text" id="itemName" class="swal2-input" value="${itemData.name}" required>
                </div>
                <div class="form-group">
                    <label for="itemQuantity">Quantity:</label>
                    <input type="number" id="itemQuantity" class="swal2-input" value="${itemData.quantity}" required>
                </div>
            </div>
        `,
        focusConfirm: false,
        preConfirm: () => {
            const editedName = document.getElementById('itemName').value;
            const editedQuantity = document.getElementById('itemQuantity').value;

            if (!editedName || !editedQuantity) {
                Swal.showValidationMessage('Please fill in all fields');
            }

            return { name: editedName, quantity: editedQuantity };
        },
        showConfirmButton: true,
        confirmButtonText: "Edit",
        customClass: {
            
            confirmButton: "custom-button-class"
        },
        buttonsStyling: false
    }).then((result) => {
        if (!result.dismiss) {
            
            const editedItem = result.value;

       
            itemData.name = editedItem.name;
            itemData.quantity = editedItem.quantity;

            updateItemDisplay();
        }
    });
}


function updateItemDisplay() {

    const itemNameElement = document.querySelector('.title h2');
    const itemQuantityElement = document.querySelector('.quantity p');
    itemNameElement.textContent = itemData.name;
    itemQuantityElement.textContent = `${itemData.quantity} pcs`;
}


const itemElement = document.querySelector('.item');
itemElement.addEventListener('click', openEditPopup);

function deleteMember(){
    Swal.fire({
        title: 'Are you sure?',
        text: "You can't undo this action!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#2a7d7a',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title:'Deleted!',
            text:'An entry has been deleted.',
            icon:'success',
            confirmButtonColor: '#2a7d7a'}
          )
        }
      })
}
function addItem(){
    
        Swal.fire({
            title: 'Add Item',
            html: `
                <input type="file" id="itemImageInput" accept="image/*">
                <div class="form-group">
                    <label for="itemName">Item Name:</label>
                    <input type="text" id="itemName" class="swal2-input" required>
                </div>
                <div class="form-group">
                    <label for="itemQuantity">Quantity:</label>
                    <input type="number" id="itemQuantity" class="swal2-input" required>
                </div>
            `,
            confirmButtonColor: '#2a7d7a',
            showCancelButton: true,
            confirmButtonText: 'Add',
            preConfirm: () => {
                const itemImageInput = document.getElementById('itemImageInput');
                const itemName = document.getElementById('itemName').value;
                const itemQuantity = document.getElementById('itemQuantity').value;

                if (!itemName || !itemQuantity) {
                    Swal.showValidationMessage('Please fill in all fields.');
                    return false;
                }

             
                const selectedImage = itemImageInput.files[0];

             
                console.log('Selected Image:', selectedImage);
                console.log('Item Name:', itemName);
                console.log('Quantity:', itemQuantity);

                return { itemName, itemQuantity, selectedImage };
            }
        }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title:'Item Added!',
                text:'An item has been added.',
                icon:'success',
                confirmButtonColor: '#2a7d7a'}
              )
            }
          });
}

