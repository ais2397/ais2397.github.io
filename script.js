function toggleTheme() {
            document.body.classList.toggle('dark-mode');
            const themeIcon = document.querySelector('.theme-toggle i');
            themeIcon.classList.toggle('fa-moon');
            themeIcon.classList.toggle('fa-sun');
        }
