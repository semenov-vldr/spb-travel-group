const bookingModule = document.querySelector('.booking-module');

if (bookingModule) {

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const checkIn = bookingModule.querySelector('#check_in');
  checkIn.value = today.toISOString().substring(0, 10);

  const departure = bookingModule.querySelector('#departure');
  departure.value = tomorrow.toISOString().substring(0, 10);
}
