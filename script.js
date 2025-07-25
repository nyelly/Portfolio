function toggleDarkMode() {
  const root = document.documentElement;
  const isDark = getComputedStyle(root).getPropertyValue('--bg-color').trim() === '#0f0f1b';

  if (isDark) {
  root.style.setProperty('--bg-color', '#ffffff');
  root.style.setProperty('--text-color', '#000000');
  root.style.setProperty('--accent-color', '#4f46e5');
  root.style.setProperty('--secondary-color', '#e0e0e0');
  root.style.setProperty('--muted-color', '#444444');
  localStorage.setItem('theme', 'light');
} else {
  root.style.setProperty('--bg-color', '#0f0f1b');
  root.style.setProperty('--text-color', '#ffffff');
  root.style.setProperty('--accent-color', '#8b5cf6');
  root.style.setProperty('--secondary-color', '#181828');
  root.style.setProperty('--muted-color', '#cccccc'); 
  localStorage.setItem('theme', 'dark');
}
}

window.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const toggle = document.getElementById('darkModeToggle');
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light') {
    root.style.setProperty('--bg-color', '#ffffff');
    root.style.setProperty('--text-color', '#000000');
    root.style.setProperty('--accent-color', '#4f46e5');
    root.style.setProperty('--secondary-color', '#e0e0e0');
    toggle.checked = false;
  } else {
    root.style.setProperty('--bg-color', '#0f0f1b');
    root.style.setProperty('--text-color', '#ffffff');
    root.style.setProperty('--accent-color', '#8b5cf6');
    root.style.setProperty('--secondary-color', '#181828');
    toggle.checked = true;
  }

  toggle.addEventListener('change', toggleDarkMode);

});