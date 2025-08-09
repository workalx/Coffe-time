document.addEventListener('DOMContentLoaded', function() {
  const categories = document.querySelectorAll('.menu-category');
  const foodList = document.getElementById('food-list');
  const drinksList = document.getElementById('drinks-list');

  categories.forEach(cat => {
    cat.addEventListener('click', function() {
      categories.forEach(c => c.classList.remove('active'));
      this.classList.add('active');
      if (this.dataset.category === 'food') {
        foodList.classList.remove('hidden');
        drinksList.classList.add('hidden');
      } else {
        foodList.classList.add('hidden');
        drinksList.classList.remove('hidden');
      }
    });
  });
}); 