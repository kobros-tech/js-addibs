odoo.define("wb_pos.WBSampleButton", function(require){
"use strict";
    
    const PosComponent = require("point_of_sale.PosComponent");
    const ProductScreen = require("point_of_sale.ProductScreen");
    const Registries = require("point_of_sale.Registries");
    const {useListener} = require("@web/core/utils/hooks");

    class WBSampleButton extends PosComponent {

        setup(){
            super.setup();
            useListener("click", this.wb_sample_button_click);
        }

        wb_sample_button_click(){
            console.log("Hello this is button click event pressed.......");
        }

    }

    WBSampleButton.template = "WBSampleButton";

    ProductScreen.addControlButton({
        component: WBSampleButton,
        position: ["before", "OrderlineCustomerNoteButton"],
    });

    Registries.Component.add(WBSampleButton);

    return WBSampleButton;

});