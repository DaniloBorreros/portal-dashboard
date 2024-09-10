/**
 * AN ARRAY OF ROUTES THAT ARE ACCESSIBLE TO THE PUBLIC
 * THESE ROUTES DO NOT REQUIRE AUTHENTICATION
 * @type {string[]}
 */
export const publicRoutes = ["/"];
/**
 * AN ARRAY OF ROUTES THAT ARE USED FOR AUTHENTICATION
 * THESE ROUTES WILL REDIRECT LOGGED IN USERS TO /SETTINGS
 * @type {string[]}
 */
export const authRoutes = [
    "/dashboard/admin",
    "/auth/login",
    "/auth/register"
]
/**
 * THE PREFIX FOR API AUTHENTICATION ROUTES
 * ROUTES THAT START WITH THIS PREFIX ARE USED FOR API AUTHENTICATION PURPOSES
 * @type {string[]}
 */
export const apiAuthPrefix = "/api/auth"

/**
 * THE DEFAULT REDIRECT PATH AFTER LOGGING IN
 * @type {string[]}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings"


