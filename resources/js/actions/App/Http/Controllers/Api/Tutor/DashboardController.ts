import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\Tutor\DashboardController::index
* @see app/Http/Controllers/Api/Tutor/DashboardController.php:24
* @route '/api/tutor/dashboard'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/tutor/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\Tutor\DashboardController::index
* @see app/Http/Controllers/Api/Tutor/DashboardController.php:24
* @route '/api/tutor/dashboard'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Tutor\DashboardController::index
* @see app/Http/Controllers/Api/Tutor/DashboardController.php:24
* @route '/api/tutor/dashboard'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Tutor\DashboardController::index
* @see app/Http/Controllers/Api/Tutor/DashboardController.php:24
* @route '/api/tutor/dashboard'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\Tutor\DashboardController::index
* @see app/Http/Controllers/Api/Tutor/DashboardController.php:24
* @route '/api/tutor/dashboard'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Tutor\DashboardController::index
* @see app/Http/Controllers/Api/Tutor/DashboardController.php:24
* @route '/api/tutor/dashboard'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Tutor\DashboardController::index
* @see app/Http/Controllers/Api/Tutor/DashboardController.php:24
* @route '/api/tutor/dashboard'
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

const DashboardController = { index }

export default DashboardController