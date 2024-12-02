// 获取开关元素
const toggle = document.getElementById("toggle");

// 监听开关状态变化
toggle.addEventListener("change", () => {
    const rootStyles = getComputedStyle(document.documentElement);
    if (toggle.checked) {
        document.body.style.backgroundColor = rootStyles.getPropertyValue("--bg-night").trim();
    } else {
        document.body.style.backgroundColor = rootStyles.getPropertyValue("--bg-day").trim();
    }
});