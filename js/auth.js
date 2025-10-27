// Authentication functions
class Auth {
    // Check if user is logged in
    static async checkAuth() {
        const { data: { user } } = await supabase.auth.getUser();
        return user;
    }

    // Login function
    static async login(email, password) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });
        return { data, error };
    }

    // Logout function
    static async logout() {
        const { error } = await supabase.auth.signOut();
        return { error };
    }

    // Get current session
    static async getSession() {
        const { data: { session } } = await supabase.auth.getSession();
        return session;
    }
}
