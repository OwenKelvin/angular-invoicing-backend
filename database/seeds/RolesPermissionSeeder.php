<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::findOrCreate('super admin','web');

        $permissions = [
            [
                'permission' => 'change role permissions',
                'roles' => [
                    'admin',
                ]
            ],
            [
                'permission' => 'create admin',
                'roles' => [
                    'admin',
                ]
            ],
            [
                'permission' => 'assign role',
                'roles' => [
                    'admin',
                ]
            ],
            [
                'permission' => 'make sale',
                'roles' => [
                    'admin',
                    'administrator',
                    'teller'
                ]
            ],
            [
                'permission' => 'edit sale',
                'roles' => [
                    'admin',
                    'administrator',
                ]
            ],
            [
                'permission' => 'make purchase',
                'roles' => [
                    'admin',
                    'administrator',
                    'teller'
                ]
            ],
            [
                'permission' => 'edit purchase',
                'roles' => [
                    'admin',
                    'administrator',
                ]
            ],
            [
                'permission' => 'create product',
                'roles' => [
                    'admin',
                    'administrator',
                ]
            ],
            [
                'permission' => 'edit product',
                'roles' => [
                    'admin',
                    'administrator',
                ]
            ],
            [
                'permission' => 'create seller',
                'roles' => [
                    'admin',
                    'administrator',
                ]
            ],
            [
                'permission' => 'edit seller',
                'roles' => [
                    'admin',
                    'administrator',
                ]
            ],
            [
                'permission' => 'edit inventory quantity',
                'roles' => [
                    'admin',
                    'administrator',
                ]
            ],
            [
                'permission' => 'edit permissions for roles',
                'roles' => [
                    'admin'
                ]
            ],
            [
                'permission' => 'view sales report',
                'roles' => [
                    'admin',
                    'administrator',
                ]
            ],
            [
                'permission' => 'edit sales',
                'roles' => [
                    'admin',
                    'administrator',
                    'teller'
                ]
            ],
            [
                'permission' => 'view m-pesa receipt report',
                'roles' => [
                    'admin',
                    'administrator',
                    'teller'
                ]
            ]
        ];

        foreach ($permissions as $permission) {
            if ($permission_saved = Permission::where('name', $permission['permission'])->first()) {

            } else {
                $permission_saved = Permission::create(['name' => $permission['permission']]);
            }

            foreach ($permission['roles'] as $role) {
                if ($role_saved = Role::where('name', $role)->first()) {

                } else {
                    $role_saved = Role::create(['name' => $role]);
                }
                $permission_saved->assignRole($role_saved);
            }

        };
    }
}
