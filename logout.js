function logout() {
    // Clear user session and transactions
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('transactions');
    window.location.href = 'login.html';  // Redirect to login page
}
