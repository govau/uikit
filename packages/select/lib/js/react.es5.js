'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.AUselectItem=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);require('../css/styles.css');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i]}return target}/*! @gov.au/select v2.0.9 *//***************************************************************************************************************************************************************
 *
 * select function
 *
 * The form select element for multiple options
 *
 **************************************************************************************************************************************************************/// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
/**
 * An item inside the Select component
 *
 * @param  {string}   text             - The text of this option
 * @param  {string}   value            - The value of this option
 * @param  {object}   attributeOptions - Any other attribute options
 */var AUselectItem=function AUselectItem(_ref){var text=_ref.text,value=_ref.value,attributeOptions=_objectWithoutProperties(_ref,['text','value']);return _react2.default.createElement('option',_extends({value:value},attributeOptions),text)};exports.AUselectItem=AUselectItem;AUselectItem.propTypes={text:_propTypes2.default.string.isRequired,value:_propTypes2.default.string.isRequired,className:_propTypes2.default.string};/**
 * DEFAULT
 * The select component
 *
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {array}   options          - The options for the select, format: { value: '', text: '' }
 * @param  {string}  block            - The block option
 * @param  {string}  status           - Mark this field as either 'valid' or 'invalid', optional
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */var AUselect=function AUselect(_ref2){var dark=_ref2.dark,options=_ref2.options,block=_ref2.block,status=_ref2.status,_ref2$className=_ref2.className,className=_ref2$className===undefined?'':_ref2$className,attributeOptions=_objectWithoutProperties(_ref2,['dark','options','block','status','className']);return _react2.default.createElement('select',_extends({className:'au-select '+className+(''+(block?' au-select--block':''))+(''+(dark?' au-select--dark':''))+(''+(status==='valid'?' au-select--valid':''))+(''+(status==='invalid'?' au-select--invalid':''))},attributeOptions),options.map(function(option,i){return _react2.default.createElement(AUselectItem,_extends({key:i},option))}))};AUselect.propTypes={dark:_propTypes2.default.bool,options:_propTypes2.default.arrayOf(_propTypes2.default.shape({value:_propTypes2.default.string.isRequired,text:_propTypes2.default.string.isRequired})).isRequired,block:_propTypes2.default.bool,status:_propTypes2.default.oneOf(['valid','invalid']),className:_propTypes2.default.string};exports.default=AUselect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0LmVzNS5qcyJdLCJuYW1lcyI6WyJBVXNlbGVjdEl0ZW0iLCJ0ZXh0IiwidmFsdWUiLCJhdHRyaWJ1dGVPcHRpb25zIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImNsYXNzTmFtZSIsIkFVc2VsZWN0IiwiZGFyayIsIm9wdGlvbnMiLCJibG9jayIsInN0YXR1cyIsIm1hcCIsIm9wdGlvbiIsImkiLCJib29sIiwiYXJyYXlPZiIsInNoYXBlIiwib25lT2YiXSwibWFwcGluZ3MiOiJtVUFTQSw0QiwyQ0FDQSxxQyxtREFNQSw2QixxUkFoQkEsNEJBQ0E7Ozs7OztnS0FZQTtBQUNBO0FBQ0E7QUFJQTs7Ozs7O0dBT08sR0FBTUEsY0FBZSxRQUFmQSxhQUFlLFVBQUdDLEtBQUgsTUFBR0EsSUFBSCxDQUFTQyxLQUFULE1BQVNBLEtBQVQsQ0FBbUJDLGdCQUFuQix1REFDM0Isa0RBQVEsTUFBUUQsS0FBaEIsRUFBNkJDLGdCQUE3QixFQUFrREYsSUFBbEQsQ0FEMkIsQ0FBckIsQyxrQ0FJUEQsYUFBYUksU0FBYixDQUF5QixDQUN4QkgsS0FBTUksb0JBQVVDLE1BQVYsQ0FBaUJDLFVBREMsQ0FFeEJMLE1BQU9HLG9CQUFVQyxNQUFWLENBQWlCQyxVQUZBLENBR3hCQyxVQUFXSCxvQkFBVUMsTUFIRyxDQUF6QixDQU9BOzs7Ozs7Ozs7O0dBV0EsR0FBTUcsVUFBVyxRQUFYQSxTQUFXLE9BQTJFLElBQXhFQyxLQUF3RSxPQUF4RUEsSUFBd0UsQ0FBbEVDLE9BQWtFLE9BQWxFQSxPQUFrRSxDQUF6REMsS0FBeUQsT0FBekRBLEtBQXlELENBQWxEQyxNQUFrRCxPQUFsREEsTUFBa0QsdUJBQTFDTCxTQUEwQyxDQUExQ0EsU0FBMEMsNkJBQTlCLEVBQThCLGlCQUF2QkwsZ0JBQXVCLGlGQUUzRixNQUNDLGtEQUFRLFVBQ1AsYUFBY0ssU0FBZCxNQUNJSSw0QkFESixRQUVJRixLQUFPLGtCQUFQLENBQTRCLEVBRmhDLFFBR0lHLFNBQVcsT0FBWCxDQUFxQixtQkFBckIsQ0FBMkMsRUFIL0MsUUFJSUEsU0FBVyxTQUFYLENBQXVCLHFCQUF2QixDQUErQyxFQUpuRCxFQURELEVBTU9WLGdCQU5QLEVBUUVRLFFBQVFHLEdBQVIsQ0FDQyxTQUFFQyxNQUFGLENBQVVDLENBQVYsUUFBaUIsK0JBQUMsWUFBRCxXQUFjLElBQU1BLENBQXBCLEVBQTZCRCxNQUE3QixFQUFqQixDQURELENBUkYsQ0FjRCxDQWpCRCxDQW1CQU4sU0FBU0wsU0FBVCxDQUFxQixDQUNwQk0sS0FBTUwsb0JBQVVZLElBREksQ0FFcEJOLFFBQVNOLG9CQUFVYSxPQUFWLENBQ1JiLG9CQUFVYyxLQUFWLENBQWdCLENBQ2ZqQixNQUFPRyxvQkFBVUMsTUFBVixDQUFpQkMsVUFEVCxDQUVmTixLQUFNSSxvQkFBVUMsTUFBVixDQUFpQkMsVUFGUixDQUFoQixDQURRLEVBS1BBLFVBUGtCLENBUXBCSyxNQUFPUCxvQkFBVVksSUFSRyxDQVNwQkosT0FBUVIsb0JBQVVlLEtBQVYsQ0FBZ0IsQ0FBRSxPQUFGLENBQVcsU0FBWCxDQUFoQixDQVRZLENBVXBCWixVQUFXSCxvQkFBVUMsTUFWRCxDQUFyQixDLGdCQWFlRyxRIiwiZmlsZSI6InJlYWN0LmVzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISBAZ292LmF1L3NlbGVjdCB2Mi4wLjkgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqXG4gKiBzZWxlY3QgZnVuY3Rpb25cbiAqXG4gKiBUaGUgZm9ybSBzZWxlY3QgZWxlbWVudCBmb3IgbXVsdGlwbGUgb3B0aW9uc1xuICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuXG4vLyBUaGUgZm9sbG93aW5nIGxpbmUgd2lsbCBiZSByZXBsYWNlZCBhdXRvbWF0aWNhbGx5IHdpdGggZ2VuZXJpYyBpbXBvcnRzIGZvciB0aGUgRVM1IHBpcGVsaW5lLlxuLy8gWW91IGNhbiBzYWZlbHkgaWdub3JlIHRoaXMgYml0IGlmIHlvdSB1c2UgdGhpcyBtb2R1bGUgd2l0aCBwYW5jYWtlXG4vL1xuaW1wb3J0ICcuLi9jc3Mvc3R5bGVzLmNzcyc7XG5cblxuLyoqXG4gKiBBbiBpdGVtIGluc2lkZSB0aGUgU2VsZWN0IGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gICB0ZXh0ICAgICAgICAgICAgIC0gVGhlIHRleHQgb2YgdGhpcyBvcHRpb25cbiAqIEBwYXJhbSAge3N0cmluZ30gICB2YWx1ZSAgICAgICAgICAgIC0gVGhlIHZhbHVlIG9mIHRoaXMgb3B0aW9uXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgYXR0cmlidXRlT3B0aW9ucyAtIEFueSBvdGhlciBhdHRyaWJ1dGUgb3B0aW9uc1xuICovXG5leHBvcnQgY29uc3QgQVVzZWxlY3RJdGVtID0gKHsgdGV4dCwgdmFsdWUsIC4uLmF0dHJpYnV0ZU9wdGlvbnMgfSkgPT4gKFxuXHQ8b3B0aW9uIHZhbHVlPXsgdmFsdWUgfSB7IC4uLmF0dHJpYnV0ZU9wdGlvbnMgfT57IHRleHQgfTwvb3B0aW9uPlxuKTtcblxuQVVzZWxlY3RJdGVtLnByb3BUeXBlcyA9IHtcblx0dGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHR2YWx1ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5cbi8qKlxuICogREVGQVVMVFxuICogVGhlIHNlbGVjdCBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0gIHtib29sZWFufSBkYXJrICAgICAgICAgICAgIC0gQWRkIHRoZSBkYXJrIHZhcmlhdGlvbiBjbGFzcywgb3B0aW9uYWxcbiAqIEBwYXJhbSAge2FycmF5fSAgIG9wdGlvbnMgICAgICAgICAgLSBUaGUgb3B0aW9ucyBmb3IgdGhlIHNlbGVjdCwgZm9ybWF0OiB7IHZhbHVlOiAnJywgdGV4dDogJycgfVxuICogQHBhcmFtICB7c3RyaW5nfSAgYmxvY2sgICAgICAgICAgICAtIFRoZSBibG9jayBvcHRpb25cbiAqIEBwYXJhbSAge3N0cmluZ30gIHN0YXR1cyAgICAgICAgICAgLSBNYXJrIHRoaXMgZmllbGQgYXMgZWl0aGVyICd2YWxpZCcgb3IgJ2ludmFsaWQnLCBvcHRpb25hbFxuICogQHBhcmFtICB7c3RyaW5nfSAgY2xhc3NOYW1lICAgICAgICAtIEFuIGFkZGl0aW9uYWwgY2xhc3MsIG9wdGlvbmFsXG4gKiBAcGFyYW0gIHtvYmplY3R9ICBhdHRyaWJ1dGVPcHRpb25zIC0gQW55IG90aGVyIGF0dHJpYnV0ZSBvcHRpb25zXG4gKi9cbmNvbnN0IEFVc2VsZWN0ID0gKHsgZGFyaywgb3B0aW9ucywgYmxvY2ssIHN0YXR1cywgY2xhc3NOYW1lID0gJycsIC4uLmF0dHJpYnV0ZU9wdGlvbnMgfSkgPT4ge1xuXG5cdHJldHVybiAoXG5cdFx0PHNlbGVjdCBjbGFzc05hbWU9e1xuXHRcdFx0YGF1LXNlbGVjdCAkeyBjbGFzc05hbWUgfWAgK1xuXHRcdFx0YCR7IGJsb2NrID8gYCBhdS1zZWxlY3QtLWJsb2NrYCA6IGBgIH1gICtcblx0XHRcdGAkeyBkYXJrID8gJyBhdS1zZWxlY3QtLWRhcmsnIDogJycgfWAgK1xuXHRcdFx0YCR7IHN0YXR1cyA9PT0gJ3ZhbGlkJyA/ICcgYXUtc2VsZWN0LS12YWxpZCcgOiAnJyB9YCArXG5cdFx0XHRgJHsgc3RhdHVzID09PSAnaW52YWxpZCcgPyAnIGF1LXNlbGVjdC0taW52YWxpZCcgOiAnJyB9YFxuXHRcdH0geyAuLi5hdHRyaWJ1dGVPcHRpb25zIH0+XG5cdFx0XHR7XG5cdFx0XHRcdG9wdGlvbnMubWFwKFxuXHRcdFx0XHRcdCggb3B0aW9uLCBpICkgPT4gPEFVc2VsZWN0SXRlbSBrZXk9eyBpIH0geyAuLi5vcHRpb24gfSAvPlxuXHRcdFx0XHQpXG5cdFx0XHR9XG5cdFx0PC9zZWxlY3Q+XG5cdCk7XG59O1xuXG5BVXNlbGVjdC5wcm9wVHlwZXMgPSB7XG5cdGRhcms6IFByb3BUeXBlcy5ib29sLFxuXHRvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihcblx0XHRQcm9wVHlwZXMuc2hhcGUoe1xuXHRcdFx0dmFsdWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRcdHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHR9KVxuXHQpLmlzUmVxdWlyZWQsXG5cdGJsb2NrOiBQcm9wVHlwZXMuYm9vbCxcblx0c3RhdHVzOiBQcm9wVHlwZXMub25lT2YoWyAndmFsaWQnLCAnaW52YWxpZCcgXSksXG5cdGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFVc2VsZWN0O1xuIl19