(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\r\n\r\nbody {\r\n    margin: 0;\r\n    /* background-color: #b3c6ff; */\r\n    background-color: #b3c6ff;\r\n}\r\n\r\n.mainContent {\r\n    min-height: 600px\r\n}\r\n\r\n.page_wrapper {\r\n    font-family: \"Times New Roman\", Times, serif;\r\n}\r\n\r\nul.nav {\r\n    margin: 0px;\r\n    text-align: center;\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: rgb(78, 78, 78);\r\n}\r\n\r\nul.nav li {\r\n    float: left;\r\n}\r\n\r\nul.nav li a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\nul.nav li a:hover {\r\n    background-color: rgb(73, 73, 73);\r\n}\r\n\r\n.loginWidth {\r\n    border-radius: 20px;\r\n    margin: auto;\r\n    max-width: 1000px;\r\n    background-color: white;\r\n}\r\n\r\nbody {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nform {\r\n    border-radius: 20px;\r\n    border: 3px solid #f1f1f1;\r\n}\r\n\r\ninput[type=text],\r\ninput[type=password] {\r\n    border-radius: 20px;\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 0px;\r\n    display: inline-block;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n    background-color: rgb(83, 76, 175);\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    border-radius: 20px;\r\n}\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 0px;\r\n}\r\n\r\nimg.avatar {\r\n    width: 40%;\r\n}\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n.footer {\r\n    background-color: rgb(78, 78, 78);\r\n    min-height: 100px;\r\n    height: 150px;\r\n    width: 100%;\r\n    color: #ffffff;\r\n    /*white*/\r\n    padding: 10px;\r\n}\r\n\r\n.footerContent {\r\n    background-color: rgb(78, 78, 78);\r\n    margin: auto;\r\n    width: 1000px;\r\n    color: #ffffff;\r\n    /*white*/\r\n    padding: 10px;\r\n}\r\n\r\ndiv.column50percent {\r\n    box-sizing: border-box;\r\n    /* So that padding/border is included in width */\r\n    width: 10%;\r\n    background-color: #9B2E20;\r\n    /*grey dark orangish red*/\r\n    height: 150px;\r\n    color: #ffffff;\r\n    /*white*/\r\n    padding: 10px;\r\n    margin: 10px;\r\n    /* This is ignored in table-cell display */\r\n    display: table-cell;\r\n}\r\n\r\n.clear_float {\r\n    clear: both;\r\n    /* Clears both left and right float */\r\n}\r\n\r\ndiv.column_33_table_cell {\r\n    box-sizing: border-box;\r\n    width: 33.3333%;\r\n    padding: 10px;\r\n    margin: 10px;\r\n    display: table-cell;\r\n}\r\n\r\n/* ul {\r\n    list-style-image: url(images/bullet_splat.png);\r\n} */\r\n\r\n/*nav***********************************************************************/\r\n\r\n.navBackground {\r\n    width: 100%;\r\n    background-color: rgb(78, 78, 78);\r\n}\r\n\r\n.navContent {\r\n    margin: auto;\r\n    max-width: 1200px;\r\n}\r\n\r\n#nav ul {\r\n    list-style-image: none;\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n#nav li {\r\n    float: left;\r\n}\r\n\r\n#nav li a {\r\n    display: block;\r\n    color: #FFF;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\n#nav li a:hover:not(.active) {\r\n    background-color: #111;\r\n}\r\n\r\n#nav .active {\r\n    background-color: #9B2E20;\r\n}\r\n\r\n.header {\r\n    margin: 0px;\r\n    padding: 10px;\r\n    font-size: 2em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTs7QUFFOUU7SUFDSSxTQUFTO0lBQ1QsK0JBQStCO0lBQy9CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixXQUFXO0lBQ1gsY0FBYztJQUNkLFFBQVE7SUFDUixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLFFBQVE7SUFDUixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdEQUFnRDtJQUNoRCxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsY0FBYztJQUNkLFFBQVE7SUFDUixhQUFhO0lBQ2IsWUFBWTtJQUNaLDBDQUEwQztJQUMxQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFHQTs7R0FFRzs7QUFHSCw0RUFBNEU7O0FBRTVFO0lBQ0ksV0FBVztJQUNYLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2IzYzZmZjsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiM2M2ZmY7XHJcbn1cclxuXHJcbi5tYWluQ29udGVudCB7XHJcbiAgICBtaW4taGVpZ2h0OiA2MDBweFxyXG59XHJcblxyXG4ucGFnZV93cmFwcGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuXHJcbnVsLm5hdiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc4LCA3OCwgNzgpO1xyXG59XHJcblxyXG51bC5uYXYgbGkge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbnVsLm5hdiBsaSBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG51bC5uYXYgbGkgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzMsIDczLCA3Myk7XHJcbn1cclxuXHJcbi5sb2dpbldpZHRoIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLFxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODMsIDc2LCAxNzUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLmNhbmNlbGJ0biB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHggMThweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbn1cclxuXHJcbi5pbWdjb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbmltZy5hdmF0YXIge1xyXG4gICAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG5zcGFuLnBzdyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzgsIDc4LCA3OCk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgLyp3aGl0ZSovXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uZm9vdGVyQ29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzgsIDc4LCA3OCk7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAvKndoaXRlKi9cclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmRpdi5jb2x1bW41MHBlcmNlbnQge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC8qIFNvIHRoYXQgcGFkZGluZy9ib3JkZXIgaXMgaW5jbHVkZWQgaW4gd2lkdGggKi9cclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUIyRTIwO1xyXG4gICAgLypncmV5IGRhcmsgb3Jhbmdpc2ggcmVkKi9cclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIC8qd2hpdGUqL1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIC8qIFRoaXMgaXMgaWdub3JlZCBpbiB0YWJsZS1jZWxsIGRpc3BsYXkgKi9cclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbn1cclxuXHJcbi5jbGVhcl9mbG9hdCB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIC8qIENsZWFycyBib3RoIGxlZnQgYW5kIHJpZ2h0IGZsb2F0ICovXHJcbn1cclxuXHJcbmRpdi5jb2x1bW5fMzNfdGFibGVfY2VsbCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDMzLjMzMzMlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbn1cclxuXHJcblxyXG4vKiB1bCB7XHJcbiAgICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoaW1hZ2VzL2J1bGxldF9zcGxhdC5wbmcpO1xyXG59ICovXHJcblxyXG5cclxuLypuYXYqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi5uYXZCYWNrZ3JvdW5kIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc4LCA3OCwgNzgpO1xyXG59XHJcblxyXG4ubmF2Q29udGVudCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxufVxyXG5cclxuI25hdiB1bCB7XHJcbiAgICBsaXN0LXN0eWxlLWltYWdlOiBub25lO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbiNuYXYgbGkge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiNuYXYgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4jbmF2IGxpIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbn1cclxuXHJcbiNuYXYgLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUIyRTIwO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG59Il19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\xalwi\Project2BudgetBatThirdAtempt\BudgetBatThirdAttempt\angproj2\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map