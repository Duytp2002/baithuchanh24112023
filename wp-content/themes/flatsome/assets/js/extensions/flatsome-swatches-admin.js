jQuery((function(t){"use strict";var e,i,a=window.wp,s=t("body");t(".ux-color-field").wpColorPicker(),t(".ux-swatches-add-color").off("click").on("click",(function(){var e=t(this),i=e.data("content"),a=e.nextAll(".wp-picker-container"),s=a.find(".wp-picker-clear");e.data("content",e.html()),e.html(i),s.click(),a.toggle()})),(i=t(".ux-swatches-bicolor-picker")).val()||i.closest(".wp-picker-container").hide(),s.on("click",".ux-swatches-upload-image-button",(function(i){i.preventDefault();var s=t(this);(e=a.media.frames.downloadable_file=a.media({multiple:!1})).on("select",(function(){var t=e.state().get("selection").first().toJSON(),i=t.sizes&&t.sizes.thumbnail?t.sizes.thumbnail.url:t.url;s.siblings("input.ux-swatches-term-image").val(t.id),s.siblings(".ux-swatches-remove-image-button").show(),s.parent().prev(".ux-swatches-term-image-thumbnail").find("img").attr("src",i)})),e.open()})).on("click",".ux-swatches-remove-image-button",(function(){var e=t(this);return e.siblings("input.ux-swatches-term-image").val(""),e.hide(),e.parent().prev(".ux-swatches-term-image-thumbnail").find("img").attr("src",flatsome_swatches.placeholder),!1}));var c=t(".product_page_product_attributes #attribute_label").closest("form");c.find("select#attribute_type").bind("change",(function(){var e=t(this).val(),i=c.find("#attribute_swatch_shape").closest(".form-field"),a=c.find("#attribute_swatch_size").closest(".form-field"),s=c.find("#attribute_swatch_variation_images").closest(".form-field");""!==e&&"select"!==e||[i,a,s].forEach((t=>{t.addClass("ux-dim")})),"ux_color"!==e&&"ux_image"!==e&&"ux_label"!==e||[i,a,s].forEach((t=>{t.removeClass("ux-dim")}))})).change()}));