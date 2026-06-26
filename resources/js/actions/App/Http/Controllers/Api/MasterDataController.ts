import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\MasterDataController::courses
* @see app/Http/Controllers/Api/MasterDataController.php:18
* @route '/api/courses'
*/
export const courses = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: courses.url(options),
    method: 'get',
})

courses.definition = {
    methods: ["get","head"],
    url: '/api/courses',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\MasterDataController::courses
* @see app/Http/Controllers/Api/MasterDataController.php:18
* @route '/api/courses'
*/
courses.url = (options?: RouteQueryOptions) => {
    return courses.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MasterDataController::courses
* @see app/Http/Controllers/Api/MasterDataController.php:18
* @route '/api/courses'
*/
courses.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: courses.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MasterDataController::courses
* @see app/Http/Controllers/Api/MasterDataController.php:18
* @route '/api/courses'
*/
courses.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: courses.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\MasterDataController::courses
* @see app/Http/Controllers/Api/MasterDataController.php:18
* @route '/api/courses'
*/
const coursesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: courses.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MasterDataController::courses
* @see app/Http/Controllers/Api/MasterDataController.php:18
* @route '/api/courses'
*/
coursesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: courses.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MasterDataController::courses
* @see app/Http/Controllers/Api/MasterDataController.php:18
* @route '/api/courses'
*/
coursesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: courses.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

courses.form = coursesForm

/**
* @see \App\Http\Controllers\Api\MasterDataController::masterSlots
* @see app/Http/Controllers/Api/MasterDataController.php:38
* @route '/api/master-slots'
*/
export const masterSlots = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: masterSlots.url(options),
    method: 'get',
})

masterSlots.definition = {
    methods: ["get","head"],
    url: '/api/master-slots',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\MasterDataController::masterSlots
* @see app/Http/Controllers/Api/MasterDataController.php:38
* @route '/api/master-slots'
*/
masterSlots.url = (options?: RouteQueryOptions) => {
    return masterSlots.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MasterDataController::masterSlots
* @see app/Http/Controllers/Api/MasterDataController.php:38
* @route '/api/master-slots'
*/
masterSlots.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: masterSlots.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MasterDataController::masterSlots
* @see app/Http/Controllers/Api/MasterDataController.php:38
* @route '/api/master-slots'
*/
masterSlots.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: masterSlots.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\MasterDataController::masterSlots
* @see app/Http/Controllers/Api/MasterDataController.php:38
* @route '/api/master-slots'
*/
const masterSlotsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: masterSlots.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MasterDataController::masterSlots
* @see app/Http/Controllers/Api/MasterDataController.php:38
* @route '/api/master-slots'
*/
masterSlotsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: masterSlots.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MasterDataController::masterSlots
* @see app/Http/Controllers/Api/MasterDataController.php:38
* @route '/api/master-slots'
*/
masterSlotsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: masterSlots.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

masterSlots.form = masterSlotsForm

const MasterDataController = { courses, masterSlots }

export default MasterDataController