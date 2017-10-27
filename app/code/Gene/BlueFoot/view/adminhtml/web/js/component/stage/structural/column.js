define(["./abstract", "../../config", "../../../utils/array", "./options/option", "knockout"], function (_abstract, _config, _array, _option, _knockout) {
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  /**
   * Column class
   *
   * @author Dave Macaulay <dmacaulay@magento.com>
   */
  var Column =
  /*#__PURE__*/
  function (_Structural) {
    _inheritsLoose(Column, _Structural);

    /**
     * Abstract structural constructor
     *
     * @param parent
     * @param stage
     */
    function Column(parent, stage) {
      var _this;

      _this = _Structural.call(this, parent, stage) || this;
      Object.defineProperty(_this, "previewTemplate", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: 'Gene_BlueFoot/component/block/preview/column.html'
      });
      Object.defineProperty(_this, "columnDefinition", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: _knockout.observable(_config.getInitConfig('column_definitions')[0])
      });
      Object.defineProperty(_this, "widthClasses", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: _knockout.computed(function () {
          return this.columnDefinition()['className'];
        }, _this)
      });
      Object.defineProperty(_this, "serializedWidth", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: _knockout.computed(function () {
          return this.columnDefinition()['breakpoint'] * 100;
        }, _this)
      });

      _this.options.push(new _option.Option(_this, 'column', '<i></i>', 'Add Column', _this.addColumn.bind(_this), ['add-column'], 10));

      return _this;
    }
    /**
     * Add a column to self
     *
     * @param data
     * @returns {Column}
     */


    var _proto = Column.prototype;

    _proto.addColumn = function addColumn(data) {
      var column = new Column(this, this.stage);
      this.addChild(column);
      column.updateColumnData(data);
      return column;
    };
    /**
     * Insert a column at a specific instance
     *
     * @param direction
     * @param item
     * @param data
     * @returns {Column}
     */


    _proto.insertColumnAtIndex = function insertColumnAtIndex(direction, item, data) {
      var index = _knockout.utils.arrayIndexOf(item.parent.children(), item),
          column = new Column(item.parent, item.parent.stage);

      if (direction == 'right') {
        ++index;
      }

      (0, _array.moveArrayItemIntoArray)(column, item.parent.children, index);
      column.updateColumnData(data);
      return column;
    };
    /**
     * Update the column data to reflect the correct width
     *
     * @param data
     */


    _proto.updateColumnData = function updateColumnData(data) {
      data = data || {};

      if (data.width) {
        var columnDef = _config.getColumnDefinitionByBreakpoint(data.width);

        if (columnDef) {
          this.columnDefinition(columnDef);
        }
      } else if (data.className) {
        this.columnDefinition(_config.getColumnDefinitionByClassName(data.className));
      }

      this.stage.store.update(this.id, data);
    };
    /**
     * Handle sort starting on column
     *
     * @param event
     * @param params
     * @returns {any}
     */


    _proto.onSortStart = function onSortStart(event, params) {
      // Copy over the column class for the width
      jQuery(params.placeholder).addClass(this.widthClasses());
      return _Structural.prototype.onSortStart.call(this, event, params);
    };
    /**
     * Get template master format template
     *
     * @returns {string}
     */


    _proto.getPreviewTemplate = function getPreviewTemplate() {
      return 'Gene_BlueFoot/component/stage/structural/render/column.html';
    };

    return Column;
  }(_abstract);

  return {
    Column: Column
  };
});