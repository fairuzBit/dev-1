import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\Tutor\BookingController::index
* @see app/Http/Controllers/Api/Tutor/BookingController.php:24
* @route '/api/tutor/bookings'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/tutor/bookings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\Tutor\BookingController::index
* @see app/Http/Controllers/Api/Tutor/BookingController.php:24
* @route '/api/tutor/bookings'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Tutor\BookingController::index
* @see app/Http/Controllers/Api/Tutor/BookingController.php:24
* @route '/api/tutor/bookings'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Tutor\BookingController::index
* @see app/Http/Controllers/Api/Tutor/BookingController.php:24
* @route '/api/tutor/bookings'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\Tutor\BookingController::index
* @see app/Http/Controllers/Api/Tutor/BookingController.php:24
* @route '/api/tutor/bookings'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Tutor\BookingController::index
* @see app/Http/Controllers/Api/Tutor/BookingController.php:24
* @route '/api/tutor/bookings'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Tutor\BookingController::index
* @see app/Http/Controllers/Api/Tutor/BookingController.php:24
* @route '/api/tutor/bookings'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\Api\Tutor\BookingController::complete
* @see app/Http/Controllers/Api/Tutor/BookingController.php:106
* @route '/api/tutor/bookings/{id}/complete'
*/
export const complete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: complete.url(args, options),
    method: 'patch',
})

complete.definition = {
    methods: ["patch"],
    url: '/api/tutor/bookings/{id}/complete',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Api\Tutor\BookingController::complete
* @see app/Http/Controllers/Api/Tutor/BookingController.php:106
* @route '/api/tutor/bookings/{id}/complete'
*/
complete.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return complete.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Tutor\BookingController::complete
* @see app/Http/Controllers/Api/Tutor/BookingController.php:106
* @route '/api/tutor/bookings/{id}/complete'
*/
complete.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: complete.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\Tutor\BookingController::complete
* @see app/Http/Controllers/Api/Tutor/BookingController.php:106
* @route '/api/tutor/bookings/{id}/complete'
*/
const completeForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: complete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Tutor\BookingController::complete
* @see app/Http/Controllers/Api/Tutor/BookingController.php:106
* @route '/api/tutor/bookings/{id}/complete'
*/
completeForm.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: complete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

complete.form = completeForm

/**
* @see \App\Http\Controllers\Api\Tutor\BookingController::history
* @see app/Http/Controllers/Api/Tutor/BookingController.php:55
* @route '/api/tutor/history'
*/
export const history = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: history.url(options),
    method: 'get',
})

history.definition = {
    methods: ["get","head"],
    url: '/api/tutor/history',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\Tutor\BookingController::history
* @see app/Http/Controllers/Api/Tutor/BookingController.php:55
* @route '/api/tutor/history'
*/
history.url = (options?: RouteQueryOptions) => {
    return history.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Tutor\BookingController::history
* @see app/Http/Controllers/Api/Tutor/BookingController.php:55
* @route '/api/tutor/history'
*/
history.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: history.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Tutor\BookingController::history
* @see app/Http/Controllers/Api/Tutor/BookingController.php:55
* @route '/api/tutor/history'
*/
history.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: history.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\Tutor\BookingController::history
* @see app/Http/Controllers/Api/Tutor/BookingController.php:55
* @route '/api/tutor/history'
*/
const historyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: history.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Tutor\BookingController::history
* @see app/Http/Controllers/Api/Tutor/BookingController.php:55
* @route '/api/tutor/history'
*/
historyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: history.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Tutor\BookingController::history
* @see app/Http/Controllers/Api/Tutor/BookingController.php:55
* @route '/api/tutor/history'
*/
historyForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: history.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

history.form = historyForm

const BookingController = { index, complete, history }

export default BookingController