define([], function () {
  /**
   * Copyright © 2013-2017 Magento, Inc. All rights reserved.
   * See COPYING.txt for license details.
   */
  var Heading =
  /*#__PURE__*/
  function () {
    function Heading() {}

    var _proto = Heading.prototype;

    /**
     * Read heading type and title from the element
     *
     * @param element
     * @returns {object}
     */
    _proto.read = function read(element) {
      return {
        'heading_type': element.nodeName,
        'title': element.innerText
      };
    };

    return Heading;
  }();

  return Heading;
});