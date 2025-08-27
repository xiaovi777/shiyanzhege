    
// --- START OF auth.js ---

document.addEventListener('DOMContentLoaded', function() {
    const authOverlay = document.getElementById('auth-overlay');
    const activateButton = document.getElementById('activate-button');
    const licenseInput = document.getElementById('license-input');
    const requestCodeEl = document.getElementById('request-code');

    // 生成一个简单的请求码
    function generateRequestCode() {
        return 'REQ-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substr(2, 8).toUpperCase();
    }

    if (requestCodeEl) {
        requestCodeEl.textContent = generateRequestCode();
    }

    // 检查本地是否已有激活状态
    const isActivated = localStorage.getItem('appActivated');

    // 默认直接激活，方便使用
    if (isActivated === 'true' || true) { // <--- 这里设置为 true 来默认跳过激活
        if (authOverlay) {
            authOverlay.style.display = 'none';
        }
    } else {
        if (authOverlay) {
            authOverlay.style.display = 'flex';
        }
    }

    // 激活按钮点击事件
    if (activateButton) {
        activateButton.addEventListener('click', function() {
            const licenseKey = licenseInput.value.trim();

            // 这是一个简化的激活逻辑。任何非空输入都视为有效。
            if (licenseKey) {
                alert('激活成功！欢迎使用 EVE Chat。');
                localStorage.setItem('appActivated', 'true');
                if (authOverlay) {
                    authOverlay.style.display = 'none';
                }
            } else {
                alert('请输入激活码。');
            }
        });
    }
});

// --- END OF auth.js ---

  