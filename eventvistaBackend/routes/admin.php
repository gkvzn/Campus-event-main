<?php

use App\Http\Controllers\Backend\BlogSystem\TagsController;
use App\Http\Controllers\Backend\EventsCategoriesController;
use App\Http\Controllers\Backend\EventsController;
use App\Http\Controllers\Backend\CurrenciesController;
use App\Http\Controllers\Backend\CustomersController;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\Faqs\FaqsController;
use App\Http\Controllers\Backend\LanguageController;
use App\Http\Controllers\Backend\MediaManager\MediaManagerController;
use App\Http\Controllers\Backend\Orders\OrdersController;
use App\Http\Controllers\Backend\OrderSettingsController;
use App\Http\Controllers\Backend\Pages\PagesController;
use App\Http\Controllers\Backend\CouponsController;
use App\Http\Controllers\Backend\Roles\RolesController;
use App\Http\Controllers\Backend\SettingsController;
use Illuminate\Support\Facades\Route;



Route::group(
    ['prefix' => 'admin', 'middleware' => ['auth', 'admin']],
    function () {
        // dashboard


        Route::get('/', [DashboardController::class, 'index'])->name('admin.dashboard');
        Route::get('/profile', [DashboardController::class, 'profile'])->name('admin.profile');
        Route::post('/profile', [DashboardController::class, 'updateProfile'])->name('admin.profile.update');

        // settings
        Route::post('/settings/env-key-update', [SettingsController::class, 'envKeyUpdate'])->name('admin.envKey.update');
        Route::get('/settings/general-settings', [SettingsController::class, 'index'])->name('admin.generalSettings');
        Route::get('/settings/smtp-settings', [SettingsController::class, 'smtpSettings'])->name('admin.smtpSettings.index');
        Route::post('/settings/test/smtp', [SettingsController::class, 'testEmail'])->name('admin.test.smtp');

        Route::post('/settings/update', [SettingsController::class, 'update'])->name('admin.settings.update');



        // customers
        Route::group(['prefix' => 'customers'], function () {
            Route::get('/', [CustomersController::class, 'index'])->name('admin.customers.index');
            // Route::get('/repeate-customer', [CustomersController::class, 'repeate_customer'])->name('admin.repeate-customers.index');
            Route::post('/update-banned-customer', [CustomersController::class, 'updateBanStatus'])->name('admin.customers.updateBanStatus');
        });


        // media manager
        Route::get('/media-manager', [MediaManagerController::class, 'index'])->name('admin.mediaManager.index');


        // roles & permissions
        Route::group(['prefix' => 'roles'], function () {
            Route::get('/', [RolesController::class, 'index'])->name('admin.roles.index');
            Route::get('/add-role', [RolesController::class, 'create'])->name('admin.roles.create');
            Route::post('/add-role', [RolesController::class, 'store'])->name('admin.roles.store');
            Route::get('/update-role/{id}', [RolesController::class, 'edit'])->name('admin.roles.edit');
            Route::post('/update-role', [RolesController::class, 'update'])->name('admin.roles.update');
            Route::get('/delete-role/{id}', [RolesController::class, 'delete'])->name('admin.roles.delete');
        });




        Route::group(['prefix' => 'events'], function () {
            // Events
            Route::get('/', [EventsController::class, 'index'])->name('admin.events.index');
            Route::get('/add-event', [EventsController::class, 'create'])->name('admin.events.create');
            Route::post('/event', [EventsController::class, 'store'])->name('admin.events.store');
            Route::get('/update-event/{id}', [EventsController::class, 'edit'])->name('admin.events.edit');
            Route::post('/update-event', [EventsController::class, 'update'])->name('admin.events.update');
            Route::post('/update-featured-event', [EventsController::class, 'updateFeatured'])->name('admin.events.updateFeatureStatus');
            Route::post('/update-published-event', [EventsController::class, 'update_visibility'])->name('admin.events.updatePublishedStatus');
            Route::get('/delete-event/{id}', [EventsController::class, 'delete'])->name('admin.events.delete');
            Route::post('/update-event-status', [EventsController::class, 'updatemultiEventsStatus'])->name('admin.events.update_mutli_delivery_status');

            // Event categories
            Route::get('/category', [EventsCategoriesController::class, 'index'])->name('admin.events.categories.index');
            Route::get('/add-category', [EventsCategoriesController::class, 'create'])->name('admin.events.categories.create');
            Route::post('/category', [EventsCategoriesController::class, 'store'])->name('admin.events.categories.store');
            Route::get('/update-category/{id}', [EventsCategoriesController::class, 'edit'])->name('admin.events.categories.edit');
            Route::post('/update-category', [EventsCategoriesController::class, 'update'])->name('admin.events.categories.update');
            Route::get('/delete-category/{id}', [EventsCategoriesController::class, 'delete'])->name('admin.events.categories.delete');
        });
    }
);
