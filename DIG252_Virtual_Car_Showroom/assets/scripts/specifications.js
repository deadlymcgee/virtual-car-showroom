
persistedContentItems = {};


//top level menu button hover effect
$(".div-specs-top-level-menu-button")
    .hover(function () {
        // do not apply if the button is active
        if ($(this).hasClass("active")) {
            return;
        } else {
            $(this).addClass("hover");
        }
        },
    function() {
        $(this).removeClass("hover");
    });

//sub-menu button hover effect
$(".div-specs-sub-menu-category-button")
    .hover(function () {
            $(this).addClass("hover");
        },
        function () {
            $(this).removeClass("hover");
        });

$(".div-specs-top-level-menu-button-container").click(function () {

    // remove the hover effect
    $(this).children('div[class*="button"]')
        //.removeClass("hover");
        .css("background-color", "");
    // remove any existing active effects
    $('div[class*="div-specs-top-level-menu-button"].active')
        .removeClass("active");
    // apply the active effect
    $(this).children(".div-specs-top-level-menu-button")
        .addClass("active");


    if ($(".div-specs-content-container").is(":hidden")) {
        $("#section4").removeClass("div-section4-normal");
        $("#section4").css("height", "+=485");
        $(".div-specs-content-container").show();
        $(".div-specs-second-level-menu-container").show();
        $(".div-specs-second-level-content").show();
        //scroll up so the interaction is fully visible
        $('html, body').animate({
            scrollTop: $(".div-specs-top-level-menu").offset().top - 125
        }, 1000,
        //(Steve, 2011)
            function() {
                $(".specs-content-close").show();
            }
        );
    }

    var selected = $(this).attr("id");

    // dont take any more action if the target sub menu is already visible
    var targetSubMenu = $('div[class*="specs-sub-menu-category"]')
        .filter(function() {
            return $(this).attr("class").indexOf(selected) > -1;
        });

    var targetSubMenuItem = targetSubMenu[0];
    var subMenuButtonCssDisplayValue = $(targetSubMenuItem).css("display");

    if (subMenuButtonCssDisplayValue === "none") {
        // show the associated sub menu
        // hide the currently active (visible) sub menu
        $('div[class*="specs-sub-menu-category"].active').removeClass("active");
        // hide the currently active content item
        var activeContentItem = $('div[class*="specs-content"].active');
        $(activeContentItem).removeClass("active");
        // show all sub menu elements matching the target category
        var subMenuElements = $('div[class*="specs-sub-menu-category"]')
            .filter(function() {
                return $(this).attr("class").indexOf(selected) > -1;
            });
        subMenuElements.addClass("active");
        // show all the child span elements
        subMenuElements
            .children("span")
            .addClass("active");
        // set the default to 'item1' if there isnt an item saved
        var persistedCategoryItem = persistedContentItems[selected];
        if (persistedCategoryItem === undefined) {
            // set the default target category content item
            activeContentItem = $('div[class*="specs-content-category"]')
                .filter(function() {
                    var defaultItem = selected.split("-").pop() + "-item1";
                    return $(this).attr("class").indexOf(defaultItem) > -1;
                });
        } else {
            activeContentItem = persistedCategoryItem;
        }
        $(activeContentItem).addClass("active");
        // set the associated button active
        $('div[class*="sub-menu-category-button"]')
            .filter(function() {
                var targets = activeContentItem[0]
                    .classList[0]
                    .split("-")
                    .slice(3);
                var target = targets[0] + "-" + targets[1];
                return $(this).attr("id").indexOf(target) > -1;
            })
            .addClass("selected");


    }

    
});

$(".div-specs-sub-menu-category-button").click(function () {

    // remove the hover effect
    $(this).removeClass("hover");
    // remove any existing active effects
    $(".div-specs-sub-menu-category-button.selected")
        .removeClass("selected");
    // apply the active effect
    $(this).addClass("selected");

    var selected = $(this).attr("id");
    var category = $('div[class*="top-level-menu-button"]')
        .filter(function() {
            var category = selected.split("-")[2];
            console.log(this);
            return this.id.indexOf(category) > -1;
        }); 

    $('div[class*="specs-content-category"].active').removeClass("active");
    var currentContentItem = $('div[class*="specs-content-category"]')
        .filter(function() {
            return $(this).attr("class").indexOf(selected) > -1;
        })
        .addClass("active");
    // save the visible (active) content item to set as default for this category
    persistedContentItems[category.attr("id")] = currentContentItem;


});

$(".specs-content-close").click(function() {
    // remove the top level button active effect
    $(".div-specs-top-level-menu-button").removeClass("active");

    if ($(".div-specs-content-container").is(":visible")) {
        console.log("reset the interaction!");
        $("#section4").addClass("div-section4-normal");
        $("#section4").css("height", "");
        $(".div-specs-content-container").hide();
        $.smoothScroll({
            scrollTarget: "#specs",
            speed: 1000
        });

        // hide the close icon
        $(this).hide();
    }
});