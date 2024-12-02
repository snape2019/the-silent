// 获取开关元素
const toggle = document.getElementById("toggle");

// 获取当前的主题模式并设置到页面
function setTheme(isDarkMode) {
    const rootStyles = getComputedStyle(document.documentElement);
    const body = document.body;

    if (isDarkMode) {
        // 设置为暗模式
        body.style.backgroundColor = rootStyles.getPropertyValue("--bg-night").trim();
        document.documentElement.style.setProperty('--link-color-dark', 'var(--link-color-dark)');  // 更新为暗模式下的链接颜色
        document.documentElement.style.setProperty('--link-hover-color-dark', 'var(--link-hover-color-dark)');  // 更新为暗模式下的悬停颜色
    } else {
        // 设置为亮模式
        body.style.backgroundColor = rootStyles.getPropertyValue("--bg-day").trim();
        document.documentElement.style.setProperty('--link-color-light', 'var(--link-color-light)');  // 亮模式下的链接颜色
        document.documentElement.style.setProperty('--link-hover-color-light', 'var(--link-hover-color-light)');  // 亮模式下的悬停颜色
    }
}

// 检查系统主题偏好（亮暗模式）
function detectSystemTheme() {
    const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDarkMode;
}

// 初始加载时根据系统偏好或者 localStorage 设置主题
const savedTheme = localStorage.getItem('theme');
const isDarkMode = savedTheme ? savedTheme === 'dark' : detectSystemTheme();
setTheme(isDarkMode);

// 初始状态根据用户选择或系统主题偏好
toggle.checked = isDarkMode;

// 监听开关状态变化，允许用户手动切换亮暗模式
toggle.addEventListener("change", () => {
    const isDark = toggle.checked;
    setTheme(isDark);

    // 保存用户的选择到 localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
