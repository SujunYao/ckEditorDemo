# CKEditor Demo
Test demo for the CKEditor
## Install (安装)
```
npm install --save @ckeditor/ckeditor5-build-classic
# Or:
npm install --save @ckeditor/ckeditor5-build-inline
# Or:
npm install --save @ckeditor/ckeditor5-build-balloon
# Or:
npm install --save @ckeditor/ckeditor5-build-balloon-block
# Or:
npm install --save @ckeditor/ckeditor5-build-decoupled-document
```
Different type of the text editor, Online Demos: https://ckeditor.com/ckeditor-5/demo/#classic

## Example
- Step 1: Create the contanier DOM (Should has id for the DOM) 创建容器(需要ID)
- Step 2：After render excute the script to create the CKEditor
  ```
     componentDidMount() {
        ClassicEditor
          .create(document.querySelector('#editor'))
          .then(editor => {
            console.log(editor);
          })
          .catch(error => {
            console.error(error);
          });
      };
  ```
  
## Version
So far using CKEditor 5

## Advantage
- Free and open source (开源)
- Full-featured (功能较全，包含表格，图片，等等)
- Hot 

## Disadvantage
