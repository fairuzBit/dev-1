import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\Tutor\AvailabilityController::index
* @see app/Http/Controllers/Api/Tutor/AvailabilityController.php:26
* @route '/api/tutor/availability'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/tutor/availability',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\Tutor\AvailabilityController::index
* @see app/Http/Controllers/Api/Tutor/AvailabilityController.php:26
* @route '/api/tutor/availability'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Tutor\AvailabilityController::index
* @see app/Http/Controllers/Api/Tutor/AvailabilityController.php:26
* @route '/api/tutor/availability'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Tutor\AvailabilityController::index
* @see app/Http/Controllers/Api/Tutor/AvailabilityController.php:26
* @route '/api/tutor/availability'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\Tutor\AvailabilityController::index
* @see app/Http/Controllers/Api/Tutor/AvailabilityController.php:26
* @route '/api/tutor/availability'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Tutor\AvailabilityController::index
* @see app/Http/Controllers/Api/Tutor/AvailabilityController.php:26
* @route '/api/tutor/availability'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Tutor\AvailabilityController::index
* @see app/Http/Controllers/Api/Tutor/AvailabilityController.php:26
* @route '/api/tutor/availability'
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
* @see \App\Http\Controllers\Api\Tutor\AvailabilityController::store
* @see app/Http/Controllers/Api/Tutor/AvailabilityController.php:68
* @route '/api/tutor/availability'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/tutor/availability',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\Tutor\AvailabilityController::store
* @see app/Http/Controllers/Api/Tutor/AvailabilityController.php:68
* @route '/api/tutor/availability'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Tutor\AvailabilityController::store
* @see app/Http/Controllers/Api/Tutor/AvailabilityController.php:68
* @route '/api/tutor/availability'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Tutor\AvailabilityController::store
* @see app/Http/Controllers/Api/Tutor/AvailabilityController.php:68
* @route '/api/tutor/availability'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Tutor\AvailabilityController::store
* @see app/Http/Controllers/Api/Tutor/AvailabilityController.php:68
* @route '/api/tutor/availability'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const AvailabilityController = { index, store }

export default AvailabilityController