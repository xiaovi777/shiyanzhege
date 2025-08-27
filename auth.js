    
// --- START OF auth.js ---

document.addEventListener('DOMContentLoaded', function() {
    const authOverlay = document.getElementById('auth-overlay');
    const activateButton = document.getElementById('activate-button');
    const licenseInput = document.getElementById('license-input');
    const requestCodeEl = document.getElementById('request-code');

    // 生成一个简单的请求码
    function generateRequestCode() {
        // 创建一个基于时间的、稍微随机的请求码
        return 'REQ-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substr(2, 8).toUpperCase();
    }

    if (requestCodeEl) {
        requestCodeEl.textContent = generateRequestCode();
    }

    // 检查本地是否已有激活状态
    const isActivated = localStorage.getItem('appActivated');

    if (isActivated === 'true') {
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

            // 这是一个简化的激活逻辑，用于演示目的。
            // 任何以 "EVE-CHAT-LICENSE-" 开头的激活码都被视为有效。
            if (licenseKey.startsWith("EVE-CHAT-LICENSE-") && licenseKey.length > 20) {
                alert('激活成功！欢迎使用 EVE Chat。');
                localStorage.setItem('appActivated', 'true');
                if (authOverlay) {
                    authOverlay.style.display = 'none';
                }
            } else {
                alert('激活码无效，请联系作者获取正确的激活码。');
            }
        });
    }
});

// --- END OF auth.js ---

  