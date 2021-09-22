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
                
                <div class="center part">
                    <h1>LOGO</h1>
                </div>
                <div class="end part">
                    <!-- <a href="{{ url('/') }}">

                    <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.5 38.8281C37.3381 38.8281 38.8281 37.3381 38.8281 35.5C38.8281 33.6619 37.3381 32.1719 35.5 32.1719C33.6619 32.1719 32.1719 33.6619 32.1719 35.5C32.1719 37.3381 33.6619 38.8281 35.5 38.8281Z" fill="white"/>
                        <path d="M53.25 38.8281C55.0881 38.8281 56.5781 37.3381 56.5781 35.5C56.5781 33.6619 55.0881 32.1719 53.25 32.1719C51.4119 32.1719 49.9219 33.6619 49.9219 35.5C49.9219 37.3381 51.4119 38.8281 53.25 38.8281Z" fill="white"/>
                        <path d="M17.75 38.8281C19.5881 38.8281 21.0781 37.3381 21.0781 35.5C21.0781 33.6619 19.5881 32.1719 17.75 32.1719C15.9119 32.1719 14.4219 33.6619 14.4219 35.5C14.4219 37.3381 15.9119 38.8281 17.75 38.8281Z" fill="white"/>
                        <path d="M35.5 38.8281C37.3381 38.8281 38.8281 37.3381 38.8281 35.5C38.8281 33.6619 37.3381 32.1719 35.5 32.1719C33.6619 32.1719 32.1719 33.6619 32.1719 35.5C32.1719 37.3381 33.6619 38.8281 35.5 38.8281Z" fill="white"/>
                        <path d="M53.25 38.8281C55.0881 38.8281 56.5781 37.3381 56.5781 35.5C56.5781 33.6619 55.0881 32.1719 53.25 32.1719C51.4119 32.1719 49.9219 33.6619 49.9219 35.5C49.9219 37.3381 51.4119 38.8281 53.25 38.8281Z" fill="white"/>
                        <path d="M17.75 38.8281C19.5881 38.8281 21.0781 37.3381 21.0781 35.5C21.0781 33.6619 19.5881 32.1719 17.75 32.1719C15.9119 32.1719 14.4219 33.6619 14.4219 35.5C14.4219 37.3381 15.9119 38.8281 17.75 38.8281Z" fill="white"/>
                    </svg>
                    </a> -->
                    <div class="dropdown">
                        <a class="dropbtn">
                            <i class="fas fa-ellipsis-h"></i>
                        </a>
                        <div class="dropdown-content">
                            <a href="#">
                                <i class="fas fa-user-circle"></i>
                                Profile
                            </a>
                            <a href="#">
                                <i class="fas fa-sign-out-alt"></i>
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <div class="body">
            <div class="side-bar">
                <div class="side-bar-item" id="side-bar-post">
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
                <div class="side-bar-item active" id="side-bar-spaceship">
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.208 39.6534C17.7773 46.9455 8.05457 46.9455 8.05457 46.9455C8.05457 46.9455 8.05456 37.2227 15.3466 34.7921" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M42.0841 22.6386L27.5 37.2227L17.7773 27.5L32.3614 12.9159C37.8837 7.39354 43.4061 7.44741 45.7613 7.7988C46.1239 7.85285 46.4595 8.02196 46.7188 8.28121C46.978 8.54045 47.1471 8.87612 47.2012 9.23874C47.5526 11.5939 47.6065 17.1163 42.0841 22.6386Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M39.6534 25.0693V38.9415C39.6534 39.1672 39.6089 39.3907 39.5226 39.5992C39.4362 39.8077 39.3096 39.9972 39.15 40.1568L32.2016 47.1052C31.9816 47.3252 31.706 47.4813 31.4043 47.557C31.1025 47.6327 30.7859 47.625 30.4882 47.5349C30.1904 47.4447 29.9227 47.2755 29.7136 47.0451C29.5045 46.8148 29.3619 46.532 29.3009 46.227L27.5 37.2227" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M29.9307 15.3466H16.0585C15.8328 15.3466 15.6093 15.391 15.4008 15.4774C15.1923 15.5638 15.0028 15.6904 14.8432 15.85L7.89477 22.7984C7.67479 23.0184 7.51864 23.294 7.44298 23.5957C7.36731 23.8975 7.37496 24.2141 7.46511 24.5118C7.55526 24.8096 7.72453 25.0773 7.95487 25.2864C8.18521 25.4955 8.46798 25.6381 8.77303 25.6991L17.7773 27.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="side-bar-item" id="side-bar-eth">
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6094 6.875L28.7891 35.2344" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M28.7891 6.875H14.6094V35.2344H28.7891V6.875Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M28.7891 35.2344V49.4141C25.0284 49.4141 21.4217 47.9201 18.7625 45.2609C16.1033 42.6017 14.6094 38.9951 14.6094 35.2344" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M28.7891 35.2344H30.5078C34.2685 35.2344 37.8752 33.7404 40.5344 31.0812C43.1936 28.422 44.6875 24.8154 44.6875 21.0547C44.6875 17.294 43.1936 13.6873 40.5344 11.0281C37.8752 8.36893 34.2685 6.875 30.5078 6.875H28.7891" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

            </div>
            <div class="content">
                <span id="user_id" style="display:none">123</span>
                <span id="pattern_type" style="display:none"></span>
                <span id="project" style="display:none">page</span>
                @yield('content')
            </div>
        </div>
    </body>
    {{--  script  --}}

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="{{asset('js/sidebar.js')}}"></script>

    @yield('script')
</html>
