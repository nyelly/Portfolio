function toggleDarkMode() {
    const root = document.documentElement;
    if (root.style.getPropertyValue('--bg-color') === '#ffffff') {
      root.style.setProperty('--bg-color', '#0f0f1b');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--secondary-color', '#181828');
    } else {
      root.style.setProperty('--bg-color', '#ffffff');
      root.style.setProperty('--text-color', '#000000');
      root.style.setProperty('--secondary-color', '#e0e0e0');
    }
  }