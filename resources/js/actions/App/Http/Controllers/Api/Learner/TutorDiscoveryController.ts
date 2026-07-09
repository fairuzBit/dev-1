import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\Learner\TutorDiscoveryController::index
* @see app/Http/Controllers/Api/Learner/TutorDiscoveryController.php:24
* @route '/api/tutors'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/tutors',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\Learner\TutorDiscoveryController::index
* @see app/Http/Controllers/Api/Learner/TutorDiscoveryController.php:24
* @route '/api/tutors'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Learner\TutorDiscoveryController::index
* @see app/Http/Controllers/Api/Learner/TutorDiscoveryController.php:24
* @route '/api/tutors'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\TutorDiscoveryController::index
* @see app/Http/Controllers/Api/Learner/TutorDiscoveryController.php:24
* @route '/api/tutors'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\Learner\TutorDiscoveryController::index
* @see app/Http/Controllers/Api/Learner/TutorDiscoveryController.php:24
* @route '/api/tutors'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\TutorDiscoveryController::index
* @see app/Http/Controllers/Api/Learner/TutorDiscoveryController.php:24
* @route '/api/tutors'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\TutorDiscoveryController::index
* @see app/Http/Controllers/Api/Learner/TutorDiscoveryController.php:24
* @route '/api/tutors'
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
* @see \App\Http\Controllers\Api\Learner\TutorDiscoveryController::show
* @see app/Http/Controllers/Api/Learner/TutorDiscoveryController.php:39
* @route '/api/tutors/{id}'
*/
export const show = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/tutors/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\Learner\TutorDiscoveryController::show
* @see app/Http/Controllers/Api/Learner/TutorDiscoveryController.php:39
* @route '/api/tutors/{id}'
*/
show.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Learner\TutorDiscoveryController::show
* @see app/Http/Controllers/Api/Learner/TutorDiscoveryController.php:39
* @route '/api/tutors/{id}'
*/
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\TutorDiscoveryController::show
* @see app/Http/Controllers/Api/Learner/TutorDiscoveryController.php:39
* @route '/api/tutors/{id}'
*/
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\Learner\TutorDiscoveryController::show
* @see app/Http/Controllers/Api/Learner/TutorDiscoveryController.php:39
* @route '/api/tutors/{id}'
*/
const showForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\TutorDiscoveryController::show
* @see app/Http/Controllers/Api/Learner/TutorDiscoveryController.php:39
* @route '/api/tutors/{id}'
*/
showForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\TutorDiscoveryController::show
* @see app/Http/Controllers/Api/Learner/TutorDiscoveryController.php:39
* @route '/api/tutors/{id}'
*/
showForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const TutorDiscoveryController = { index, show }

export default TutorDiscoveryController