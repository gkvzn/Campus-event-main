@foreach ($mediaFiles as $mediaFile)
    <div class="avatar avatar-xl selected-file">
        @if ($mediaFile->media_type == 'image')
            <img src={{ uploadedAsset($mediaFile->id) }} class="rounded-circle" />
        @elseif($mediaFile->media_type == 'video')
            <img src={{ asset('images/video-icon.png') }} class="rounded-circle" />
        @else
        @endif
        <span class="tt-remove" onclick="removeSelectedFile(this, {{ $mediaFile->id }})"><i
                data-feather="trash"></i></span>
    </div>
@endforeach
