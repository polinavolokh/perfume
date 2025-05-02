function openPopup() {
    const popup = document.getElementById("popup-form");
    popup.style.display = "block";
  }
  
  function closePopup() {
    const popup = document.getElementById("popup-form");
    popup.style.display = "none";
  }
  
  function handleFormSubmit(event) {
    event.preventDefault();
    alert("Ваше замовлення оформлено!");
    closePopup();
  }
