// 这是一个简单的 JavaScript 脚本

// 1. 获取当前的日期并显示
const dateElement = document.getElementById('date-display');
const now = new Date();
// 格式化日期：年-月-日 时:分
const dateString = now.toLocaleString('zh-CN', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit' 
});

dateElement.innerText = dateString;

// 2. 给按钮添加点击事件
const btn = document.getElementById('alert-btn');
btn.addEventListener('click', function() {
    alert('恭喜你！！！获得了李国清的联系方式\n15610630910');
});

console.log('给按钮添加点击事件成功');
