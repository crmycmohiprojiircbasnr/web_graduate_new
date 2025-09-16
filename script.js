// Xử lý mở popup khi click vào photo-card
function openPhoto(card) {
  var img = card.querySelector('.card-img');
  var fullDesc = card.querySelector('.card-full-desc');
  var popup = document.getElementById('photo-popup');
  var popupImg = document.getElementById('popup-img');
  var popupDesc = document.getElementById('popup-desc');
  popupImg.src = img.src;
  popupImg.alt = img.alt;
  popupDesc.textContent = fullDesc.textContent;
  popup.style.display = 'flex';
}

function closePhoto() {
  var popup = document.getElementById('photo-popup');
  popup.style.display = 'none';
}
function openTab(tabId) {
  // Ẩn tất cả tab
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  // Hiện tab được chọn
  document.getElementById(tabId).classList.add('active');
}
