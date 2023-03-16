sap.ui.define(
  ["sap/m/MessageToast", "sap/ui/core/mvc/Controller"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (MessageToast, Controller) {
    "use strict";

    return Controller.extend("hogent.helloworldg.controller.App", {
      onInit: function () {},
      onPress: function (evt) {
        MessageToast.show(evt.getSource().getId() + " Pressed");
      },
    });
  }
);
