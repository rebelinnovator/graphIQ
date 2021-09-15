<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">

        <script src="https://kit.fontawesome.com/577845f6a5.js" crossorigin="anonymous"></script>

        <!-- Optional JavaScript -->
        <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> -->
        <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

        <style>
            html, body {
                height: 100vh;
                overflow:hidden;
            }
            input{
                outline: none !important;
            }
        </style>
        @yield('links')
    </head>
    <body>
        <input type="hidden" name="_token" id="token" value="{{ csrf_token() }}">
        <header>
            <nav>
                <div class="start part">
                    <a href="{{ url('/post') }}">

                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.5 34.375C32.2462 34.375 36.0938 30.5274 36.0938 25.7812C36.0938 21.0351 32.2462 17.1875 27.5 17.1875C22.7538 17.1875 18.9062 21.0351 18.9062 25.7812C18.9062 30.5274 22.7538 34.375 27.5 34.375Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M46.4062 10.3125H8.59375C7.64451 10.3125 6.875 11.082 6.875 12.0312V42.9688C6.875 43.918 7.64451 44.6875 8.59375 44.6875H46.4062C47.3555 44.6875 48.125 43.918 48.125 42.9688V12.0312C48.125 11.082 47.3555 10.3125 46.4062 10.3125Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.9118 44.6865C13.9793 41.6706 15.9552 39.0597 18.5677 37.2131C21.1802 35.3665 24.3008 34.375 27.5 34.375C30.6992 34.375 33.8198 35.3665 36.4323 37.2131C39.0448 39.0597 41.0207 41.6706 42.0882 44.6865" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </a>
                    <a href="{{ url('/post') }}">
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.17139 12.0315H8.60889" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M25.7964 12.0315H29.2339" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.17139 29.219H10.3276" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M24.0776 29.219H29.2339" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M36.1089 22.344H51.5776" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M36.1089 29.219H51.5776" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.4839 36.094H51.5776" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.4839 42.969H51.5776" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.60876 29.219V12.0315L17.2025 25.7815L25.7963 12.0315V29.219" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.17139 12.0315H8.60889" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M25.7964 12.0315H29.2339" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.17139 29.219H10.3276" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M24.0776 29.219H29.2339" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M36.1089 22.344H51.5776" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M36.1089 29.219H51.5776" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.4839 36.094H51.5776" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.4839 42.969H51.5776" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.60876 29.219V12.0315L17.2025 25.7815L25.7963 12.0315V29.219" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </a>
                </div>
               
                <div class="center part">
                    <h1>LOGO</h1>
                </div>
                <div class="end part">
                    <a href="{{ url('/') }}">

                    <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.5 38.8281C37.3381 38.8281 38.8281 37.3381 38.8281 35.5C38.8281 33.6619 37.3381 32.1719 35.5 32.1719C33.6619 32.1719 32.1719 33.6619 32.1719 35.5C32.1719 37.3381 33.6619 38.8281 35.5 38.8281Z" fill="white"/>
                        <path d="M53.25 38.8281C55.0881 38.8281 56.5781 37.3381 56.5781 35.5C56.5781 33.6619 55.0881 32.1719 53.25 32.1719C51.4119 32.1719 49.9219 33.6619 49.9219 35.5C49.9219 37.3381 51.4119 38.8281 53.25 38.8281Z" fill="white"/>
                        <path d="M17.75 38.8281C19.5881 38.8281 21.0781 37.3381 21.0781 35.5C21.0781 33.6619 19.5881 32.1719 17.75 32.1719C15.9119 32.1719 14.4219 33.6619 14.4219 35.5C14.4219 37.3381 15.9119 38.8281 17.75 38.8281Z" fill="white"/>
                        <path d="M35.5 38.8281C37.3381 38.8281 38.8281 37.3381 38.8281 35.5C38.8281 33.6619 37.3381 32.1719 35.5 32.1719C33.6619 32.1719 32.1719 33.6619 32.1719 35.5C32.1719 37.3381 33.6619 38.8281 35.5 38.8281Z" fill="white"/>
                        <path d="M53.25 38.8281C55.0881 38.8281 56.5781 37.3381 56.5781 35.5C56.5781 33.6619 55.0881 32.1719 53.25 32.1719C51.4119 32.1719 49.9219 33.6619 49.9219 35.5C49.9219 37.3381 51.4119 38.8281 53.25 38.8281Z" fill="white"/>
                        <path d="M17.75 38.8281C19.5881 38.8281 21.0781 37.3381 21.0781 35.5C21.0781 33.6619 19.5881 32.1719 17.75 32.1719C15.9119 32.1719 14.4219 33.6619 14.4219 35.5C14.4219 37.3381 15.9119 38.8281 17.75 38.8281Z" fill="white"/>
                    </svg>
                    </a>
                </div>
            </nav>
        </header>
        <div class="body">
            <div class="content">
                @yield('content')
            </div>
        </div>
    </body>
    {{--  script  --}}

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    @yield('script')
</html>
