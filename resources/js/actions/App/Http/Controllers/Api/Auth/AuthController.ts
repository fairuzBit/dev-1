import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\Auth\AuthController::register
* @see app/Http/Controllers/Api/Auth/AuthController.php:23
* @route '/api/register'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

register.definition = {
    methods: ["post"],
    url: '/api/register',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\Auth\AuthController::register
* @see app/Http/Controllers/Api/Auth/AuthController.php:23
* @route '/api/register'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Auth\AuthController::register
* @see app/Http/Controllers/Api/Auth/AuthController.php:23
* @route '/api/register'
*/
register.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Auth\AuthController::register
* @see app/Http/Controllers/Api/Auth/AuthController.php:23
* @route '/api/register'
*/
const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: register.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Auth\AuthController::register
* @see app/Http/Controllers/Api/Auth/AuthController.php:23
* @route '/api/register'
*/
registerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: register.url(options),
    method: 'post',
})

register.form = registerForm

/**
* @see \App\Http\Controllers\Api\Auth\AuthController::login
* @see app/Http/Controllers/Api/Auth/AuthController.php:39
* @route '/api/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/api/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\Auth\AuthController::login
* @see app/Http/Controllers/Api/Auth/AuthController.php:39
* @route '/api/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Auth\AuthController::login
* @see app/Http/Controllers/Api/Auth/AuthController.php:39
* @route '/api/login'
*/
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Auth\AuthController::login
* @see app/Http/Controllers/Api/Auth/AuthController.php:39
* @route '/api/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Auth\AuthController::login
* @see app/Http/Controllers/Api/Auth/AuthController.php:39
* @route '/api/login'
*/
loginForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

login.form = loginForm

/**
* @see \App\Http\Controllers\Api\Auth\AuthController::getUser
* @see app/Http/Controllers/Api/Auth/AuthController.php:67
* @route '/api/user'
*/
export const getUser = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getUser.url(options),
    method: 'get',
})

getUser.definition = {
    methods: ["get","head"],
    url: '/api/user',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\Auth\AuthController::getUser
* @see app/Http/Controllers/Api/Auth/AuthController.php:67
* @route '/api/user'
*/
getUser.url = (options?: RouteQueryOptions) => {
    return getUser.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Auth\AuthController::getUser
* @see app/Http/Controllers/Api/Auth/AuthController.php:67
* @route '/api/user'
*/
getUser.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getUser.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Auth\AuthController::getUser
* @see app/Http/Controllers/Api/Auth/AuthController.php:67
* @route '/api/user'
*/
getUser.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getUser.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\Auth\AuthController::getUser
* @see app/Http/Controllers/Api/Auth/AuthController.php:67
* @route '/api/user'
*/
const getUserForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getUser.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Auth\AuthController::getUser
* @see app/Http/Controllers/Api/Auth/AuthController.php:67
* @route '/api/user'
*/
getUserForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getUser.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Auth\AuthController::getUser
* @see app/Http/Controllers/Api/Auth/AuthController.php:67
* @route '/api/user'
*/
getUserForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getUser.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getUser.form = getUserForm

/**
* @see \App\Http\Controllers\Api\Auth\AuthController::logout
* @see app/Http/Controllers/Api/Auth/AuthController.php:79
* @route '/api/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/api/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\Auth\AuthController::logout
* @see app/Http/Controllers/Api/Auth/AuthController.php:79
* @route '/api/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Auth\AuthController::logout
* @see app/Http/Controllers/Api/Auth/AuthController.php:79
* @route '/api/logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Auth\AuthController::logout
* @see app/Http/Controllers/Api/Auth/AuthController.php:79
* @route '/api/logout'
*/
const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Auth\AuthController::logout
* @see app/Http/Controllers/Api/Auth/AuthController.php:79
* @route '/api/logout'
*/
logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

logout.form = logoutForm

const AuthController = { register, login, getUser, logout }

export default AuthController