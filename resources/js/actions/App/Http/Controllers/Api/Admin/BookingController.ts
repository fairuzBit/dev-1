import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\Admin\BookingController::accept
* @see app/Http/Controllers/Api/Admin/BookingController.php:17
* @route '/api/admin/bookings/{id}/accept'
*/
export const accept = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: accept.url(args, options),
    method: 'patch',
})

accept.definition = {
    methods: ["patch"],
    url: '/api/admin/bookings/{id}/accept',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Api\Admin\BookingController::accept
* @see app/Http/Controllers/Api/Admin/BookingController.php:17
* @route '/api/admin/bookings/{id}/accept'
*/
accept.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return accept.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Admin\BookingController::accept
* @see app/Http/Controllers/Api/Admin/BookingController.php:17
* @route '/api/admin/bookings/{id}/accept'
*/
accept.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: accept.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\Admin\BookingController::accept
* @see app/Http/Controllers/Api/Admin/BookingController.php:17
* @route '/api/admin/bookings/{id}/accept'
*/
const acceptForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: accept.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Admin\BookingController::accept
* @see app/Http/Controllers/Api/Admin/BookingController.php:17
* @route '/api/admin/bookings/{id}/accept'
*/
acceptForm.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: accept.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

accept.form = acceptForm

/**
* @see \App\Http\Controllers\Api\Admin\BookingController::reject
* @see app/Http/Controllers/Api/Admin/BookingController.php:38
* @route '/api/admin/bookings/{id}/reject'
*/
export const reject = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: reject.url(args, options),
    method: 'patch',
})

reject.definition = {
    methods: ["patch"],
    url: '/api/admin/bookings/{id}/reject',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Api\Admin\BookingController::reject
* @see app/Http/Controllers/Api/Admin/BookingController.php:38
* @route '/api/admin/bookings/{id}/reject'
*/
reject.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return reject.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Admin\BookingController::reject
* @see app/Http/Controllers/Api/Admin/BookingController.php:38
* @route '/api/admin/bookings/{id}/reject'
*/
reject.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: reject.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\Admin\BookingController::reject
* @see app/Http/Controllers/Api/Admin/BookingController.php:38
* @route '/api/admin/bookings/{id}/reject'
*/
const rejectForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reject.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Admin\BookingController::reject
* @see app/Http/Controllers/Api/Admin/BookingController.php:38
* @route '/api/admin/bookings/{id}/reject'
*/
rejectForm.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reject.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

reject.form = rejectForm

const BookingController = { accept, reject }

export default BookingController