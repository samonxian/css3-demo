##语法(常用)
**Display**：`none` | `inline` | `block` | `list-item` | `inline-block` | `table` | `inline-table` | `table-caption` | `table-cell` | `table-row` | `table-row-group` | `table-column` | `table-column-group` | `table-header-group` | `table-footer-group` | `run-in(CSS3)` | `flex(CSS3)` | `inline-flex(CSS3)`</br>
默认值_：看元而定，块状元素默认为`block`,内联元素默认为inline</br>
适用于：所有元素</br>
继承性：无</br>
动画性：否</br>
计算值：指定的值
##取值
- `none` : 隐藏对象。与`visibility`属性的`hidden`值不同，其不为被隐藏的对象保留其物理空间。
- `block` : 指定对象为`块`元素。
- `inline` ： 指定对象为`内联`元素。
- `inline-block` ： 指定对象为`内联块`元素(准确地说，应用此特性的元素呈现为内联对象，周围元素保持在同一行，但可以设置宽度和高度地块元素的属性)。
- `run-in` : 根据上下文决定对象是内联对象还是块级对象。（CSS3）
- `flex` : 根据上下文决定对象是内联对象还是块级对象。（CSS3）[详细说明](http://www.w3cplus.com/css3/css3-flexbox-layout.html)
- `inline-flex` : 根据上下文决定对象是内联对象还是块级对象。（CSS3）
- `others` : 不常用不详细说明

##说明
css2其中以`none`、`block`、`inline`为最常用,css3中`flex`、`inline-block`为最常用
##PC兼容性
css2 IE、chrome、Firefox等主流浏览器都支持（不考虑低版本如IE6、IE7等）</br>
css3 的display值IE11才支持，PC端就要看情况了，其中`run-in`值设置后谷歌、Firefox没效果，这个属性也不常用，不深究
##手机兼容性（Android && IOS）
都支持，`flex`在手机端很nice,在移动端的经常用到,但是要加-webkit-前缀
