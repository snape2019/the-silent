// 获取元素
const themeToggle = document.getElementById('toggle');
const body = document.body;
const main = document.querySelector('main');


// 监听主题切换
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme','dark');
       
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        localStorage.setItem('theme','light');
    }
});


