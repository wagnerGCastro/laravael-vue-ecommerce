<p align="center"><img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400"></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 1500 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the Laravel [Patreon page](https://patreon.com/taylorotwell).

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Cubet Techno Labs](https://cubettech.com)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[British Software Development](https://www.britishsoftware.co)**
- **[Webdock, Fast VPS Hosting](https://www.webdock.io/en)**
- **[DevSquad](https://devsquad.com)**
- [UserInsights](https://userinsights.com)
- [Fragrantica](https://www.fragrantica.com)
- [SOFTonSOFA](https://softonsofa.com/)
- [User10](https://user10.com)
- [Soumettre.fr](https://soumettre.fr/)
- [CodeBrisk](https://codebrisk.com)
- [1Forge](https://1forge.com)
- [TECPRESSO](https://tecpresso.co.jp/)
- [Runtime Converter](http://runtimeconverter.com/)
- [WebL'Agence](https://weblagence.com/)
- [Invoice Ninja](https://www.invoiceninja.com)
- [iMi digital](https://www.imi-digital.de/)
- [Earthlink](https://www.earthlink.ro/)
- [Steadfast Collective](https://steadfastcollective.com/)
- [We Are The Robots Inc.](https://watr.mx/)
- [Understand.io](https://www.understand.io/)
- [Abdel Elrafa](https://abdelelrafa.com)
- [Hyper Host](https://hyper.host)
- [Appoly](https://www.appoly.co.uk)
- [OP.GG](https://op.gg)

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).


https://preview.themeforest.net/item/vito-bootstrap-4-admin-dashboard-template/full_screen_preview/25693269?_ga=2.167222525.2138072073.1643757839-1330403738.1638874730


## Cofigurations and documentation

-- mysl
    host: mysql
    port: 3308
    user: default
    pass: secret
    data: default

-- projet url
    http://local.laravel-vue-ecommerce:8049/
     http://localhost:8049/

-- wordkspace docker
    $ docker-compose exec workspace bash   // root
    $ docker-compose exec --user=laradock workspace bash  // user

-- phpmyadmin
    http://localhost:8082

-- cd ./laradock
    docker-compose up -d apache2 mysql phpmyadmin workspace
    docker-compose down --volumes apache2 mysql phpmyadmin workspace

    docker container stop  apache2 mysql phpmyadmin workspace 
    docker container start laradock-vue-ecommerce-apache2-1 

    docker container stop 8484c645f7c8 340b91067af4 9fc99eb68cf3 dda64d1e05a4 2aea07135230
    docker container rm 8484c645f7c8 340b91067af4 9fc99eb68cf3 dda64d1e05a4 
    
    -- alterar version node
        $ docker-compose build workspace
        $ docker-compose up -d workspace

-- Primary run dependencies
    yarn install
    composer install
    composer install --no-scripts
    cp .env.example .env
    php artisan key:generate
    php artisan migrate
    php artisan passport:install
    php artisan db:seed --class=DatabaseSeeder

    -- clear se necessario
    php artisan cache:clear
    php artisan route:clear
    php artisan config:clear 
    php artisan view:clear 

    -- Run server
        php artisan serve --host=0.0.0.0  --port=8049
        php artisan serve --env=dev  --host=0.0.0.0  --port=8049

        php -S 0.0.0.0:8049 

    -- create user mysql: password: admin123
        insert into `users` (`name`, `email`, `password`, `updated_at`, `created_at`) values ('admin', 'admin@vito.com', '$2y$10$WvPLH/ku3av42.WEH0Oi8eZv5Jast14.1Sv6ms.xspOndatTK4yw2', '2022-02-04 07:02:14', '2022-02-04 07:02:14')
