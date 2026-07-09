import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\Learner\DashboardController::index
* @see app/Http/Controllers/Api/Learner/DashboardController.php:24
* @route '/api/dashboard'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\Learner\DashboardController::index
* @see app/Http/Controllers/Api/Learner/DashboardController.php:24
* @route '/api/dashboard'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Learner\DashboardController::index
* @see app/Http/Controllers/Api/Learner/DashboardController.php:24
* @route '/api/dashboard'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\DashboardController::index
* @see app/Http/Controllers/Api/Learner/DashboardController.php:24
* @route '/api/dashboard'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\Learner\DashboardController::index
* @see app/Http/Controllers/Api/Learner/DashboardController.php:24
* @route '/api/dashboard'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\DashboardController::index
* @see app/Http/Controllers/Api/Learner/DashboardController.php:24
* @route '/api/dashboard'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\DashboardController::index
* @see app/Http/Controllers/Api/Learner/DashboardController.php:24
* @route '/api/dashboard'
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
* @see \App\Http\Controllers\Api\Learner\DashboardController::stats
* @see app/Http/Controllers/Api/Learner/DashboardController.php:43
* @route '/api/dashboard/stats'
*/
export const stats = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(options),
    method: 'get',
})

stats.definition = {
    methods: ["get","head"],
    url: '/api/dashboard/stats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\Learner\DashboardController::stats
* @see app/Http/Controllers/Api/Learner/DashboardController.php:43
* @route '/api/dashboard/stats'
*/
stats.url = (options?: RouteQueryOptions) => {
    return stats.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Learner\DashboardController::stats
* @see app/Http/Controllers/Api/Learner/DashboardController.php:43
* @route '/api/dashboard/stats'
*/
stats.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\DashboardController::stats
* @see app/Http/Controllers/Api/Learner/DashboardController.php:43
* @route '/api/dashboard/stats'
*/
stats.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stats.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\Learner\DashboardController::stats
* @see app/Http/Controllers/Api/Learner/DashboardController.php:43
* @route '/api/dashboard/stats'
*/
const statsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stats.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\DashboardController::stats
* @see app/Http/Controllers/Api/Learner/DashboardController.php:43
* @route '/api/dashboard/stats'
*/
statsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stats.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\DashboardController::stats
* @see app/Http/Controllers/Api/Learner/DashboardController.php:43
* @route '/api/dashboard/stats'
*/
statsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stats.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

stats.form = statsForm

const DashboardController = { index, stats }

export default DashboardController