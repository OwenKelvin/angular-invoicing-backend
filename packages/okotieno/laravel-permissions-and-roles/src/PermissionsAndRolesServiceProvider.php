<?php

namespace Okotieno\PermissionsAndRoles;

use Illuminate\Support\ServiceProvider;

class PermissionsAndRolesServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadRoutesFrom(__DIR__.'/routes.php');
        $this->loadMigrationsFrom(__DIR__.'/migrations');
        $this->loadViewsFrom(__DIR__.'/views', 'PermissionsAndRoles');
        $this->publishes([
            __DIR__.'/views' => base_path('resources/views/okotieno/permissions-and-roles'),
        ]);
    }

    /**
     * Register services.
     *
     * @return void
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public function register()
    {
        $this->app->make('Okotieno\\PermissionsAndRoles\\Controllers\\PermissionsRolesController');
    }
}
