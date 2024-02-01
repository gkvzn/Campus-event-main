@if (App::getLocale() == 'ar')
    <link href="{{ staticAsset('backend/assets/css/main-rtl.css') }}" rel="stylesheet" type="text/css" />
@else
    <link href="{{ staticAsset('backend/assets/css/main.css') }}" rel="stylesheet" type="text/css" />
@endif
<link href="{{ staticAsset('backend/custom/custom.css') }}" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pretty-checkbox@3.0/dist/pretty-checkbox.min.css">
