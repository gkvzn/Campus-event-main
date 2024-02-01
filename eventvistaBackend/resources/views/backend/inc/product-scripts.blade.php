<script>
    "use strict";

    // runs when the document is ready --> for media files
    $(document).ready(function() {
        getChosenFilesCount();
        showSelectedFilePreviewOnLoad();
    });

    // swith markup based on selection
    function isVariantProduct(el) {
        $(".hasVariation").hide();
        $(".noVariation").hide();

        if ($(el).is(':checked')) {
            $(".hasVariation").show();

            // remove required field for non variations
            $("#price").removeAttr('required', true);
            $("#stock").removeAttr('required', true);
            $("#sku").removeAttr('required', true);
            $("#code").removeAttr('required', true);

        } else {
            $(".noVariation").show();

            // add required field for non variations 
            $("#price").attr('required', true);
            $("#stock").attr('required', true);
            $("#sku").attr('required', true);
            $("#code").attr('required', true);
        }
    }
</script>
