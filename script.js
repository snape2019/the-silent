// 获取元素
const themeToggle = document.getElementById('toggle');
const body = document.body;
const main = document.querySelector('main');

// 初始主题判断：如果复选框被选中，则应用深色主题
if (localStorage.getItem('theme') === 'dark') {
    themeToggle.checked = true;
    applyDarkTheme();
} else {
    applyLightTheme();
}

// 监听主题切换
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        applyDarkTheme();
    } else {
        applyLightTheme();
    }
});

// 应用深色主题
function applyDarkTheme() {
    document.documentElement.style.setProperty('--bg', 'black');
    document.documentElement.style.setProperty('--text', 'white');
    localStorage.setItem('theme', 'dark');  // 保存选择到 localStorage
}

// 应用浅色主题
function applyLightTheme() {
    document.documentElement.style.setProperty('--bg', 'white');
    document.documentElement.style.setProperty('--text', 'black');
    localStorage.setItem('theme', 'light');  // 保存选择到 localStorage
}
