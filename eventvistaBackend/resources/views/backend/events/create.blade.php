@extends('backend.layouts.master')

@section('title')
    {{ localize('Add Event') }} {{ getSetting('title_separator') }} {{ getSetting('system_title') }}
@endsection

@section('contents')
    <section class="tt-section pt-4">
        <div class="container">
            <div class="row mb-3">
                <div class="col-12">
                    <div class="card tt-page-header">
                        <div class="card-body d-lg-flex align-items-center justify-content-lg-between">
                            <div class="tt-page-title">
                                <h2 class="h5 mb-lg-0">{{ localize('Add Event') }}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mb-4 g-4">

                <!--left sidebar-->
                <div class="col-xl-9 order-2 order-md-2 order-lg-2 order-xl-1">
                    <form action="{{ route('admin.events.store') }}" method="POST" class="pb-650" id="product-form"
                        onsubmit="return validateForm()">
                        @csrf
                        <!--basic information start-->
                        <div class="card mb-4" id="section-1">
                            <div class="card-body">
                                <h5 class="mb-4">{{ localize('Basic Information') }}</h5>

                                <div class="mb-4">
                                    <label for="name" class="form-label">{{ localize('Event Name') }}</label>
                                    <input class="form-control" type="text" id="name"
                                        placeholder="{{ localize('Type your product name') }}" required
                                        value="{{ old('name') }}" name="name">
                                    <span class="fs-sm text-muted">
                                        {{ localize('Event name is required and recommended to be unique.') }}
                                    </span>
                                    <div>
                                        @error('name')
                                            <span class="text-danger mt-5">{{ $message }}</span>
                                        @enderror
                                    </div>

                                </div>
                                {{-- <div class="mb-4">
                                    <label for="short_description"
                                        class="form-label">{{ localize('Short Description') }}</label>
                                    <textarea class="form-control" id="short_description"
                                        placeholder="{{ localize('Type your product short description') }}" rows="5" name="short_description"></textarea>
                                </div> --}}
                                <div class="mb-4">
                                    <label for="description" class="form-label">{{ localize('Description') }}</label>
                                    <textarea id="description" class="editor" required name="description">{{ old('description') }}</textarea>
                                    @error('description')
                                        <span class="text-danger mt-5">{{ $message }}</span>
                                    @enderror
                                </div>

                            </div>
                        </div>
                        <!--basic information end-->

                        <!--product image and gallery start-->
                        <div class="card mb-4" id="section-2">
                            <div class="card-body">
                                <h5 class="mb-4">{{ localize('Images') }}</h5>
                                <div class="mb-4">
                                    <label class="form-label">{{ localize('Thumbnail') }} </label>
                                    <div class="tt-image-drop rounded">
                                        <span class="fw-semibold">{{ localize('Choose Event Thumbnail') }}</span>
                                        <!-- choose media -->
                                        <div class="tt-product-thumb show-selected-files mt-3">
                                            <div class="avatar avatar-xl cursor-pointer choose-media"
                                                data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
                                                onclick="showMediaManager(this)" data-selection="single">
                                                <input type="hidden" name="image" id="image">
                                                <div class="no-avatar rounded-circle">
                                                    <span><i data-feather="plus"></i></span>
                                                </div>

                                            </div>

                                        </div>
                                        @error('image')
                                            <span class="text-danger mt-5">{{ $message }}</span>
                                        @enderror
                                        <!-- choose media -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4" id="section-2">
                            <div class="card-body">
                                <h5 class="mb-4">{{ localize('Banner') }}</h5>
                                <div class="mb-4">
                                    <label class="form-label">{{ localize('Event banner') }} </label>
                                    <div class="tt-image-drop rounded">
                                        <span class="fw-semibold">{{ localize('Choose Event banner') }}</span>
                                        <!-- choose media -->
                                        <div class="tt-product-thumb show-selected-files mt-3">
                                            <div class="avatar avatar-xl cursor-pointer choose-media"
                                                data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
                                                onclick="showMediaManager(this)" data-selection="single">
                                                <input type="hidden" name="event_banner" id="event_banner">
                                                <div class="no-avatar rounded-circle">
                                                    <span><i data-feather="plus"></i></span>
                                                </div>

                                            </div>

                                        </div>
                                        @error('event_banner')
                                            <span class="text-danger mt-5">{{ $message }}</span>
                                        @enderror
                                        <!-- choose media -->
                                    </div>
                                </div>

                            </div>
                        </div>
                        <!--product image and gallery end-->



                        <!--product category start-->
                        <div class="card mb-4" id="section-3">
                            <div class="card-body">
                                <h5 class="mb-4">{{ localize('Event Categories') }}</h5>
                                <div class="mb-4">
                                    <select class="select2 form-control"
                                        data-placeholder="{{ localize('Select categories') }}" name="category_id">
                                        @foreach ($categories as $category)
                                            <option value="{{ $category->id }}">
                                                {{ $category->collectLocalization('name') }}</option>
                                        @endforeach
                                    </select>
                                </div>
                                @error('category_id')
                                    <span class="text-danger mt-1">{{ $message }}</span>
                                @enderror
                            </div>
                        </div>
                        <!--product category end-->

                        <div class="card mb-4" id="section-3">
                            <div class="card-body">
                                <h5 class="mb-4">{{ localize('Event Date') }}</h5>
                                <div class="mb-3">
                                    <label class="form-label">{{ localize('Start End Date') }}</label>
                                    <div class="input-group">
                                        <input class="form-control date-range-picker date-range" required
                                            value="{{ old('date_range') }}" type="text"
                                            placeholder="{{ localize('Start date - End date') }}" name="date_range">
                                    </div>
                                    @error('date_range')
                                        <span class="text-danger mt-1">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>
                        </div>
                        {{-- event time --}}
                        <div class="card mb-4" id="section-3">
                            <div class="card-body">
                                <h5 class="mb-4">{{ localize('Event Time') }}</h5>
                                <div class="row">
                                    <div class="col-sm-6 mb-2">
                                        <div class="mb-3">
                                            <label class="form-label">{{ localize('Start Time') }}</label>
                                            <div class="input-group">
                                                <input class="form-control time-picker date-range" required
                                                    value="{{ old('start_time') }}" type="text"
                                                    placeholder="{{ localize('Start Time') }}" name="start_time">
                                            </div>
                                            @error('start_time')
                                                <span class="text-danger mt-1">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-sm-6 mb-2">
                                        <div class="mb-3">
                                            <label class="form-label">{{ localize('End Time') }}</label>
                                            <div class="input-group">
                                                <input class="form-control time-picker date-range"
                                                    value="{{ old('end_time') }}" type="text"
                                                    placeholder="{{ localize('End Time') }}" required name="end_time">
                                            </div>
                                            @error('end_time')
                                                <span class="text-danger mt-1">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {{-- locations --}}

                        <div class="card mb-4" id="section-3">
                            <div class="card-body">
                                <h5 class="mb-4">{{ localize('Location') }}</h5>
                                <div class="mb-3">
                                    <label class="form-label">{{ localize('Set Location') }}</label>
                                    <input id="search-input" class="form-control mb-3" required
                                        value="{{ old('location') }}" type="text" name="location"
                                        placeholder="Search Location">

                                </div>
                                @error('location')
                                    <span class="text-danger mt-1">{{ $message }}</span>
                                @enderror
                            </div>
                        </div>

                        {{-- locations --}}

                        <div class="row g-3" id="section-9">

                            <div class="col-lg-12">
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <h5 class="mb-4">{{ localize('Event Status') }}</h5>
                                        <div class="tt-select-brand">
                                            <select class="select2 form-control" id="is_published" name="is_published">
                                                <option value="1">{{ localize('Published') }}</option>
                                                <option value="0">{{ localize('Unpublished') }}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div class="row">
                            <div class="col-12">
                                <div class="mb-4">
                                    <button class="btn btn-primary" type="submit">
                                        <i data-feather="save" class="me-1"></i> {{ localize('Save Event') }}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- submit button end -->

                    </form>
                </div>

                <!--right sidebar-->
                <div class="col-xl-3 order-1 order-md-1 order-lg-1 order-xl-2">
                    <div class="card tt-sticky-sidebar">
                        <div class="card-body">
                            <h5 class="mb-4">{{ localize('Event Information') }}</h5>
                            <div class="tt-vertical-step">
                                <ul class="list-unstyled">
                                    <li>
                                        <a href="#section-1" class="active">{{ localize('Basic Information') }}</a>
                                    </li>
                                    <li>
                                        <a href="#section-2">{{ localize('Event Images') }}</a>
                                    </li>
                                    <li>
                                        <a href="#section-3">{{ localize('Category') }}</a>
                                    </li>

                                    <li>
                                        <a href="#section-5">{{ localize('Price') }}</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

@section('scripts')
    <script>
        function validateForm() {

            return true


            var image = document.getElementById('image')
            var images = document.getElementById('images')

            var imageLength = image.value.length
            var imagesLength = images.value.length

            if (imageLength == 0) {
                notifyMe('danger', '{{ localize('Please select a  product feature image') }}');
                return false;
            }

            if (imagesLength == 0) {
                notifyMe('danger', '{{ localize('Please select product images') }}');
                return false;
            }

            return true;
        }
    </script>
@endsection
