<?php

Route::middleware(['auth:api', 'bindings'])->group(function () {

    Route::resource('/api/permissions-and-roles/roles', 'Okotieno\\PermissionsAndRoles\\Controllers\\PermissionsRolesController');

});

