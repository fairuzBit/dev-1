import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\Tutor\NotificationController::index
* @see app/Http/Controllers/Api/Tutor/NotificationController.php:22
* @route '/api/tutor/notifications'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/tutor/notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\Tutor\NotificationController::index
* @see app/Http/Controllers/Api/Tutor/NotificationController.php:22
* @route '/api/tutor/notifications'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Tutor\NotificationController::index
* @see app/Http/Controllers/Api/Tutor/NotificationController.php:22
* @route '/api/tutor/notifications'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Tutor\NotificationController::index
* @see app/Http/Controllers/Api/Tutor/NotificationController.php:22
* @route '/api/tutor/notifications'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\Tutor\NotificationController::index
* @see app/Http/Controllers/Api/Tutor/NotificationController.php:22
* @route '/api/tutor/notifications'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Tutor\NotificationController::index
* @see app/Http/Controllers/Api/Tutor/NotificationController.php:22
* @route '/api/tutor/notifications'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Tutor\NotificationController::index
* @see app/Http/Controllers/Api/Tutor/NotificationController.php:22
* @route '/api/tutor/notifications'
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
* @see \App\Http\Controllers\Api\Tutor\NotificationController::markAllAsRead
* @see app/Http/Controllers/Api/Tutor/NotificationController.php:33
* @route '/api/tutor/notifications/read-all'
*/
export const markAllAsRead = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAllAsRead.url(options),
    method: 'post',
})

markAllAsRead.definition = {
    methods: ["post"],
    url: '/api/tutor/notifications/read-all',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\Tutor\NotificationController::markAllAsRead
* @see app/Http/Controllers/Api/Tutor/NotificationController.php:33
* @route '/api/tutor/notifications/read-all'
*/
markAllAsRead.url = (options?: RouteQueryOptions) => {
    return markAllAsRead.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Tutor\NotificationController::markAllAsRead
* @see app/Http/Controllers/Api/Tutor/NotificationController.php:33
* @route '/api/tutor/notifications/read-all'
*/
markAllAsRead.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAllAsRead.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Tutor\NotificationController::markAllAsRead
* @see app/Http/Controllers/Api/Tutor/NotificationController.php:33
* @route '/api/tutor/notifications/read-all'
*/
const markAllAsReadForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markAllAsRead.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Tutor\NotificationController::markAllAsRead
* @see app/Http/Controllers/Api/Tutor/NotificationController.php:33
* @route '/api/tutor/notifications/read-all'
*/
markAllAsReadForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markAllAsRead.url(options),
    method: 'post',
})

markAllAsRead.form = markAllAsReadForm

const NotificationController = { index, markAllAsRead }

export default NotificationController