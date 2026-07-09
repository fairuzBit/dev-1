import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\Admin\UserController::index
* @see app/Http/Controllers/Api/Admin/UserController.php:23
* @route '/api/admin/users'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/admin/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\Admin\UserController::index
* @see app/Http/Controllers/Api/Admin/UserController.php:23
* @route '/api/admin/users'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Admin\UserController::index
* @see app/Http/Controllers/Api/Admin/UserController.php:23
* @route '/api/admin/users'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Admin\UserController::index
* @see app/Http/Controllers/Api/Admin/UserController.php:23
* @route '/api/admin/users'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\Admin\UserController::index
* @see app/Http/Controllers/Api/Admin/UserController.php:23
* @route '/api/admin/users'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Admin\UserController::index
* @see app/Http/Controllers/Api/Admin/UserController.php:23
* @route '/api/admin/users'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Admin\UserController::index
* @see app/Http/Controllers/Api/Admin/UserController.php:23
* @route '/api/admin/users'
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
* @see \App\Http\Controllers\Api\Admin\UserController::show
* @see app/Http/Controllers/Api/Admin/UserController.php:44
* @route '/api/admin/users/{id}'
*/
export const show = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/admin/users/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\Admin\UserController::show
* @see app/Http/Controllers/Api/Admin/UserController.php:44
* @route '/api/admin/users/{id}'
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
* @see \App\Http\Controllers\Api\Admin\UserController::show
* @see app/Http/Controllers/Api/Admin/UserController.php:44
* @route '/api/admin/users/{id}'
*/
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Admin\UserController::show
* @see app/Http/Controllers/Api/Admin/UserController.php:44
* @route '/api/admin/users/{id}'
*/
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\Admin\UserController::show
* @see app/Http/Controllers/Api/Admin/UserController.php:44
* @route '/api/admin/users/{id}'
*/
const showForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Admin\UserController::show
* @see app/Http/Controllers/Api/Admin/UserController.php:44
* @route '/api/admin/users/{id}'
*/
showForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Admin\UserController::show
* @see app/Http/Controllers/Api/Admin/UserController.php:44
* @route '/api/admin/users/{id}'
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

/**
* @see \App\Http\Controllers\Api\Admin\UserController::destroy
* @see app/Http/Controllers/Api/Admin/UserController.php:135
* @route '/api/admin/users/{id}'
*/
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/admin/users/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\Admin\UserController::destroy
* @see app/Http/Controllers/Api/Admin/UserController.php:135
* @route '/api/admin/users/{id}'
*/
destroy.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Admin\UserController::destroy
* @see app/Http/Controllers/Api/Admin/UserController.php:135
* @route '/api/admin/users/{id}'
*/
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\Admin\UserController::destroy
* @see app/Http/Controllers/Api/Admin/UserController.php:135
* @route '/api/admin/users/{id}'
*/
const destroyForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Admin\UserController::destroy
* @see app/Http/Controllers/Api/Admin/UserController.php:135
* @route '/api/admin/users/{id}'
*/
destroyForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \App\Http\Controllers\Api\Admin\UserController::suspend
* @see app/Http/Controllers/Api/Admin/UserController.php:142
* @route '/api/admin/users/{id}/suspend'
*/
export const suspend = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: suspend.url(args, options),
    method: 'patch',
})

suspend.definition = {
    methods: ["patch"],
    url: '/api/admin/users/{id}/suspend',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Api\Admin\UserController::suspend
* @see app/Http/Controllers/Api/Admin/UserController.php:142
* @route '/api/admin/users/{id}/suspend'
*/
suspend.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return suspend.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Admin\UserController::suspend
* @see app/Http/Controllers/Api/Admin/UserController.php:142
* @route '/api/admin/users/{id}/suspend'
*/
suspend.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: suspend.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\Admin\UserController::suspend
* @see app/Http/Controllers/Api/Admin/UserController.php:142
* @route '/api/admin/users/{id}/suspend'
*/
const suspendForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: suspend.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Admin\UserController::suspend
* @see app/Http/Controllers/Api/Admin/UserController.php:142
* @route '/api/admin/users/{id}/suspend'
*/
suspendForm.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: suspend.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

suspend.form = suspendForm

/**
* @see \App\Http\Controllers\Api\Admin\UserController::unsuspend
* @see app/Http/Controllers/Api/Admin/UserController.php:154
* @route '/api/admin/users/{id}/unsuspend'
*/
export const unsuspend = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: unsuspend.url(args, options),
    method: 'patch',
})

unsuspend.definition = {
    methods: ["patch"],
    url: '/api/admin/users/{id}/unsuspend',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Api\Admin\UserController::unsuspend
* @see app/Http/Controllers/Api/Admin/UserController.php:154
* @route '/api/admin/users/{id}/unsuspend'
*/
unsuspend.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return unsuspend.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Admin\UserController::unsuspend
* @see app/Http/Controllers/Api/Admin/UserController.php:154
* @route '/api/admin/users/{id}/unsuspend'
*/
unsuspend.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: unsuspend.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\Admin\UserController::unsuspend
* @see app/Http/Controllers/Api/Admin/UserController.php:154
* @route '/api/admin/users/{id}/unsuspend'
*/
const unsuspendForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: unsuspend.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Admin\UserController::unsuspend
* @see app/Http/Controllers/Api/Admin/UserController.php:154
* @route '/api/admin/users/{id}/unsuspend'
*/
unsuspendForm.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: unsuspend.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

unsuspend.form = unsuspendForm

const UserController = { index, show, destroy, suspend, unsuspend }

export default UserController