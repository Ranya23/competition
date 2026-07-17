// main.js
// Helper function to auto-fill the admin login form when the app loads
function autoFillAdminLogin(vueAppInstance) {
    if (window.AdminCredentials && vueAppInstance.loginRole === 'admin') {
        vueAppInstance.authForm.email = window.AdminCredentials.email;
        vueAppInstance.authForm.password = window.AdminCredentials.password;
    }
}
