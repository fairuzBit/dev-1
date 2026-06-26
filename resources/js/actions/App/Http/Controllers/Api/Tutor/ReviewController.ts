import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\Tutor\ReviewController::summary
* @see app/Http/Controllers/Api/Tutor/ReviewController.php:0
* @route '/api/tutor/reviews/summary'
*/
export const summary = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: summary.url(options),
    method: 'get',
})

summary.definition = {
    methods: ["get","head"],
    url: '/api/tutor/reviews/summary',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\Tutor\ReviewController::summary
* @see app/Http/Controllers/Api/Tutor/ReviewController.php:0
* @route '/api/tutor/reviews/summary'
*/
summary.url = (options?: RouteQueryOptions) => {
    return summary.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Tutor\ReviewController::summary
* @see app/Http/Controllers/Api/Tutor/ReviewController.php:0
* @route '/api/tutor/reviews/summary'
*/
summary.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: summary.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Tutor\ReviewController::summary
* @see app/Http/Controllers/Api/Tutor/ReviewController.php:0
* @route '/api/tutor/reviews/summary'
*/
summary.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: summary.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\Tutor\ReviewController::summary
* @see app/Http/Controllers/Api/Tutor/ReviewController.php:0
* @route '/api/tutor/reviews/summary'
*/
const summaryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: summary.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Tutor\ReviewController::summary
* @see app/Http/Controllers/Api/Tutor/ReviewController.php:0
* @route '/api/tutor/reviews/summary'
*/
summaryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: summary.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Tutor\ReviewController::summary
* @see app/Http/Controllers/Api/Tutor/ReviewController.php:0
* @route '/api/tutor/reviews/summary'
*/
summaryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: summary.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

summary.form = summaryForm

/**
* @see \App\Http\Controllers\Api\Tutor\ReviewController::index
* @see app/Http/Controllers/Api/Tutor/ReviewController.php:21
* @route '/api/tutor/reviews'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/tutor/reviews',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\Tutor\ReviewController::index
* @see app/Http/Controllers/Api/Tutor/ReviewController.php:21
* @route '/api/tutor/reviews'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Tutor\ReviewController::index
* @see app/Http/Controllers/Api/Tutor/ReviewController.php:21
* @route '/api/tutor/reviews'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Tutor\ReviewController::index
* @see app/Http/Controllers/Api/Tutor/ReviewController.php:21
* @route '/api/tutor/reviews'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\Tutor\ReviewController::index
* @see app/Http/Controllers/Api/Tutor/ReviewController.php:21
* @route '/api/tutor/reviews'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Tutor\ReviewController::index
* @see app/Http/Controllers/Api/Tutor/ReviewController.php:21
* @route '/api/tutor/reviews'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Tutor\ReviewController::index
* @see app/Http/Controllers/Api/Tutor/ReviewController.php:21
* @route '/api/tutor/reviews'
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

const ReviewController = { summary, index }

export default ReviewController