// workFilter.js
// Filter projects by category in the Work section
export function initWorkFilter() {
  const categoryButtons = document.querySelectorAll('.category-button');
  const workItems = document.querySelectorAll('.work-item');

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Activate button
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      // Filter items
      const category = button.dataset.category;
      workItems.forEach(item => {
        const match = category === 'all' || item.dataset.category === category;
        item.style.display = match ? 'block' : 'none';
        if (match) item.classList.add('visible'); else item.classList.remove('visible');
      });
    });
  });

  // Show all on load
  workItems.forEach(item => item.classList.add('visible'));
}
