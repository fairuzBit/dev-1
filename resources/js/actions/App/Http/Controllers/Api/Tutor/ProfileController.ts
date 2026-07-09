import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\Tutor\ProfileController::me
* @see app/Http/Controllers/Api/Tutor/ProfileController.php:21
* @route '/api/tutor/profile'
*/
export const me = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: me.url(options),
    method: 'get',
})

me.definition = {
    methods: ["get","head"],
    url: '/api/tutor/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\Tutor\ProfileController::me
* @see app/Http/Controllers/Api/Tutor/ProfileController.php:21
* @route '/api/tutor/profile'
*/
me.url = (options?: RouteQueryOptions) => {
    return me.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Tutor\ProfileController::me
* @see app/Http/Controllers/Api/Tutor/ProfileController.php:21
* @route '/api/tutor/profile'
*/
me.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: me.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Tutor\ProfileController::me
* @see app/Http/Controllers/Api/Tutor/ProfileController.php:21
* @route '/api/tutor/profile'
*/
me.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: me.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\Tutor\ProfileController::me
* @see app/Http/Controllers/Api/Tutor/ProfileController.php:21
* @route '/api/tutor/profile'
*/
const meForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: me.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Tutor\ProfileController::me
* @see app/Http/Controllers/Api/Tutor/ProfileController.php:21
* @route '/api/tutor/profile'
*/
meForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: me.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Tutor\ProfileController::me
* @see app/Http/Controllers/Api/Tutor/ProfileController.php:21
* @route '/api/tutor/profile'
*/
meForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: me.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

me.form = meForm

/**
* @see \App\Http\Controllers\Api\Tutor\ProfileController::update
* @see app/Http/Controllers/Api/Tutor/ProfileController.php:39
* @route '/api/tutor/profile'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/api/tutor/profile',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Api\Tutor\ProfileController::update
* @see app/Http/Controllers/Api/Tutor/ProfileController.php:39
* @route '/api/tutor/profile'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Tutor\ProfileController::update
* @see app/Http/Controllers/Api/Tutor/ProfileController.php:39
* @route '/api/tutor/profile'
*/
update.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\Tutor\ProfileController::update
* @see app/Http/Controllers/Api/Tutor/ProfileController.php:39
* @route '/api/tutor/profile'
*/
const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Tutor\ProfileController::update
* @see app/Http/Controllers/Api/Tutor/ProfileController.php:39
* @route '/api/tutor/profile'
*/
updateForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\Api\Tutor\ProfileController::toggleStatus
* @see app/Http/Controllers/Api/Tutor/ProfileController.php:65
* @route '/api/tutor/profile/status'
*/
export const toggleStatus = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleStatus.url(options),
    method: 'patch',
})

toggleStatus.definition = {
    methods: ["patch"],
    url: '/api/tutor/profile/status',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Api\Tutor\ProfileController::toggleStatus
* @see app/Http/Controllers/Api/Tutor/ProfileController.php:65
* @route '/api/tutor/profile/status'
*/
toggleStatus.url = (options?: RouteQueryOptions) => {
    return toggleStatus.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Tutor\ProfileController::toggleStatus
* @see app/Http/Controllers/Api/Tutor/ProfileController.php:65
* @route '/api/tutor/profile/status'
*/
toggleStatus.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleStatus.url(options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\Tutor\ProfileController::toggleStatus
* @see app/Http/Controllers/Api/Tutor/ProfileController.php:65
* @route '/api/tutor/profile/status'
*/
const toggleStatusForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleStatus.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Tutor\ProfileController::toggleStatus
* @see app/Http/Controllers/Api/Tutor/ProfileController.php:65
* @route '/api/tutor/profile/status'
*/
toggleStatusForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleStatus.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggleStatus.form = toggleStatusForm

const ProfileController = { me, update, toggleStatus }

export default ProfileController