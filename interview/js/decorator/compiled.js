"use strict";

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

// @annotation //用处很大，装饰器模式 
// @cook
// class MyClass {//MyClass 里有annotation属性吗？
//     constructor(){
//         this.name='陈玉珏'//public
//     }
// }
// //不需要这么做了
// // MyClass.annotated =false //static  属性
// function cook(target){
// }
// //有几个类，都有共有的属性的话，
// // 复用装饰函数 新的构建类的方式 
// function annotation(target) {
//   target.annotated = true;
// }
// decorator  好高级
// definProperty(obj,{
// })
var Person = (_class = /*#__PURE__*/function () {
  function Person() {
    _classCallCheck(this, Person);
  }

  _createClass(Person, [{
    key: "name",
    value: function name() {
      return "".concat(this.first, " ").concat(this.last);
    }
  }]);

  return Person;
}(), (_applyDecoratedDescriptor(_class.prototype, "name", [readonly], Object.getOwnPropertyDescriptor(_class.prototype, "name"), _class.prototype)), _class); //target class  方法，属性
//name  name 
//descriptor  defineProperty

function readonly(target, name, descriptor) {
  // console.log(target,name,descriptor);
  descriptor.writable = false;
  descriptor.enumerable = true;
  return descriptor;
}
