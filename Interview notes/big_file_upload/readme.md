## 字节跳动面试官：请你实现一个大文件上传和断点续传
 https://juejin.cn/post/6844904046436843527#heading-3

分析下作者为什么要出这个题？
文件上传是开发中的难点，大文件上传及断点续传 难点中的细节及核心技术点。面试官在考察es6文件对象、ajax 上传，async await promise 、后台文件存储、流操作等全面的全栈技能的同时，提升难度到大文件和断点续传，通过这个主题，就可以较好的考察面试者全面解决问题的能力和技术细节。移动时代图片成为社交的主流，短视频时代铁定是大文件，所以在上岗后，这个题的知识点是必须掌握清楚的，所以这是一道非常实在的好考题。

文件  上传  8M  size 1M  8份
切片 
1. js 在es6 文件对象 file node file stream 有所增强
任何文件都是二进制， 分割blob
start, size ,offset
http请求可并发  n个切片并发上传 速度更快， 改善了体验

- 前端的切片，让http并发带来上传大文件的快感。
    1. file.slice 完成切片，blob类型文件切片，也叫做 js 二进制文件类型  blob协议  在文件上传到服务器之前就可以提前预览。

- 服务器端
如何将这些切片，合成一个，并且能显示原来的图片
stream 流 