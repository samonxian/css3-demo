#语法
position：static | relative | absolute | fixed | center（css3） | page（css3） | sticky（css3）
默认值：static
适用于：除display属性定义为 table-column-group 和 table-column之外的所有元素
继承性：无
动画性：否
计算值：指定的值
#取值
static : 静态定位，浏览器初始原始默认值，top，right，bottom，left等属性不会被应用。
relative : 相对定位，参照当前位置，通过top，right，bottom，left属性进行偏移，不影响其他常规元素。其margin不与其他任何margin折叠。
absolute ： 绝对定位，默认以当前窗口为参考位置（但是默认位置为当前位置，除非设置top属性），通过top，right，bottom，left属性进行偏移，不影响其他常规元素，当父辈元素为relative属性时，参照父辈元素当前为窗口位置进行偏移。其margin不与其他任何margin折叠。
fixed : 固定定位，只以当前窗口为参考位置，通过top，right，bottom，left属性进行偏移。
center : 居中定位，使用top，right，bottom，left等属性指定盒子的位置或尺寸大小。盒子在其包含容器垂直水平居中。盒子的偏移位置不影响常规流中的任何元素，