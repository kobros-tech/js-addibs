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

        async wb_sample_button_click(){

            // ERROR POPUP

            // this.showPopup("ErrorPopup", {
            //     title: "Error Message",
            //     body: "The simple error message screen.",
            // });


            // CONFIRM POPUP

            const { confirmed } = await this.showPopup("ConfirmPopup",{
                title: "Confirm Popup",
                body: "Are you really happy with Angel?",
                confirmText: "Yes",
                cancelText: "No",
            });
            console.log("confirm button: ", confirmed);


            // OFFLINE ERROR POPUP

            // this.showPopup("OfflineErrorPopup", {
            //     title: "Odoo Error",
            //     body: "Hey this is test popup screen, don't take seriously!",
            // });


            // SELECTION POPUP

            // const { confirmed, payload: selectedOption } = await this.showPopup("SelectionPopup", {
            //     title: "Are you a good JS developer?",
            //     list: [
            //         {"id":0, "label":'Yes', "item":"You are excellent!"},
            //         {"id":1, "label":'No', "item":"Good luck!"},
            //         {"id":2, "label":'Not Sure', "item":"Keep up!"},
            //     ],
            // });
            // console.log(confirmed);
            // console.log(selectedOption);


            // CLOSE POS POPUP

            // const info = await this.env.pos.getClosePosInfo();
            // this.showPopup("ClosePosPopup", {
            //     info: info,
            //     keepBehind: true,
            // });

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