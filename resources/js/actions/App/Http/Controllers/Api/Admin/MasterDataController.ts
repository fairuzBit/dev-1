import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\Admin\MasterDataController::storeCourse
* @see app/Http/Controllers/Api/Admin/MasterDataController.php:27
* @route '/api/admin/courses'
*/
export const storeCourse = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeCourse.url(options),
    method: 'post',
})

storeCourse.definition = {
    methods: ["post"],
    url: '/api/admin/courses',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\Admin\MasterDataController::storeCourse
* @see app/Http/Controllers/Api/Admin/MasterDataController.php:27
* @route '/api/admin/courses'
*/
storeCourse.url = (options?: RouteQueryOptions) => {
    return storeCourse.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Admin\MasterDataController::storeCourse
* @see app/Http/Controllers/Api/Admin/MasterDataController.php:27
* @route '/api/admin/courses'
*/
storeCourse.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeCourse.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Admin\MasterDataController::storeCourse
* @see app/Http/Controllers/Api/Admin/MasterDataController.php:27
* @route '/api/admin/courses'
*/
const storeCourseForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeCourse.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Admin\MasterDataController::storeCourse
* @see app/Http/Controllers/Api/Admin/MasterDataController.php:27
* @route '/api/admin/courses'
*/
storeCourseForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeCourse.url(options),
    method: 'post',
})

storeCourse.form = storeCourseForm

/**
* @see \App\Http\Controllers\Api\Admin\MasterDataController::updateCourse
* @see app/Http/Controllers/Api/Admin/MasterDataController.php:37
* @route '/api/admin/courses/{id}'
*/
export const updateCourse = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateCourse.url(args, options),
    method: 'put',
})

updateCourse.definition = {
    methods: ["put"],
    url: '/api/admin/courses/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Api\Admin\MasterDataController::updateCourse
* @see app/Http/Controllers/Api/Admin/MasterDataController.php:37
* @route '/api/admin/courses/{id}'
*/
updateCourse.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return updateCourse.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Admin\MasterDataController::updateCourse
* @see app/Http/Controllers/Api/Admin/MasterDataController.php:37
* @route '/api/admin/courses/{id}'
*/
updateCourse.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateCourse.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\Admin\MasterDataController::updateCourse
* @see app/Http/Controllers/Api/Admin/MasterDataController.php:37
* @route '/api/admin/courses/{id}'
*/
const updateCourseForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateCourse.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Admin\MasterDataController::updateCourse
* @see app/Http/Controllers/Api/Admin/MasterDataController.php:37
* @route '/api/admin/courses/{id}'
*/
updateCourseForm.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateCourse.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateCourse.form = updateCourseForm

/**
* @see \App\Http\Controllers\Api\Admin\MasterDataController::destroyCourse
* @see app/Http/Controllers/Api/Admin/MasterDataController.php:47
* @route '/api/admin/courses/{id}'
*/
export const destroyCourse = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyCourse.url(args, options),
    method: 'delete',
})

destroyCourse.definition = {
    methods: ["delete"],
    url: '/api/admin/courses/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\Admin\MasterDataController::destroyCourse
* @see app/Http/Controllers/Api/Admin/MasterDataController.php:47
* @route '/api/admin/courses/{id}'
*/
destroyCourse.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroyCourse.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Admin\MasterDataController::destroyCourse
* @see app/Http/Controllers/Api/Admin/MasterDataController.php:47
* @route '/api/admin/courses/{id}'
*/
destroyCourse.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyCourse.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\Admin\MasterDataController::destroyCourse
* @see app/Http/Controllers/Api/Admin/MasterDataController.php:47
* @route '/api/admin/courses/{id}'
*/
const destroyCourseForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyCourse.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Admin\MasterDataController::destroyCourse
* @see app/Http/Controllers/Api/Admin/MasterDataController.php:47
* @route '/api/admin/courses/{id}'
*/
destroyCourseForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyCourse.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyCourse.form = destroyCourseForm

/**
* @see \App\Http\Controllers\Api\Admin\MasterDataController::storeSlot
* @see app/Http/Controllers/Api/Admin/MasterDataController.php:60
* @route '/api/admin/master-slots'
*/
export const storeSlot = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeSlot.url(options),
    method: 'post',
})

storeSlot.definition = {
    methods: ["post"],
    url: '/api/admin/master-slots',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\Admin\MasterDataController::storeSlot
* @see app/Http/Controllers/Api/Admin/MasterDataController.php:60
* @route '/api/admin/master-slots'
*/
storeSlot.url = (options?: RouteQueryOptions) => {
    return storeSlot.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Admin\MasterDataController::storeSlot
* @see app/Http/Controllers/Api/Admin/MasterDataController.php:60
* @route '/api/admin/master-slots'
*/
storeSlot.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeSlot.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Admin\MasterDataController::storeSlot
* @see app/Http/Controllers/Api/Admin/MasterDataController.php:60
* @route '/api/admin/master-slots'
*/
const storeSlotForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeSlot.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Admin\MasterDataController::storeSlot
* @see app/Http/Controllers/Api/Admin/MasterDataController.php:60
* @route '/api/admin/master-slots'
*/
storeSlotForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeSlot.url(options),
    method: 'post',
})

storeSlot.form = storeSlotForm

/**
* @see \App\Http\Controllers\Api\Admin\MasterDataController::destroySlot
* @see app/Http/Controllers/Api/Admin/MasterDataController.php:70
* @route '/api/admin/master-slots/{id}'
*/
export const destroySlot = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroySlot.url(args, options),
    method: 'delete',
})

destroySlot.definition = {
    methods: ["delete"],
    url: '/api/admin/master-slots/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\Admin\MasterDataController::destroySlot
* @see app/Http/Controllers/Api/Admin/MasterDataController.php:70
* @route '/api/admin/master-slots/{id}'
*/
destroySlot.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroySlot.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Admin\MasterDataController::destroySlot
* @see app/Http/Controllers/Api/Admin/MasterDataController.php:70
* @route '/api/admin/master-slots/{id}'
*/
destroySlot.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroySlot.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\Admin\MasterDataController::destroySlot
* @see app/Http/Controllers/Api/Admin/MasterDataController.php:70
* @route '/api/admin/master-slots/{id}'
*/
const destroySlotForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroySlot.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Admin\MasterDataController::destroySlot
* @see app/Http/Controllers/Api/Admin/MasterDataController.php:70
* @route '/api/admin/master-slots/{id}'
*/
destroySlotForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroySlot.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroySlot.form = destroySlotForm

const MasterDataController = { storeCourse, updateCourse, destroyCourse, storeSlot, destroySlot }

export default MasterDataController