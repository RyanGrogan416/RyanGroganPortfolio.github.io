const sidebar = document.querySelector('.sidebar');
  sidebar.addEventListener("mouseleave", (event) => {
    sidebar.style.display = 'none';
  })

const showSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  }
  const hideSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  }