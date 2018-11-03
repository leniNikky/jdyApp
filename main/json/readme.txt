JSON数据

1、navData.json，栏目
fID        id             String
fName      栏目名称       String

2、newsData.json，商品信息
fID             id           String
fTitle          标题         String
fImg            图片         String
fOmit           摘要         String
fPostNumber     跟帖量       Integer

打开url页面，代码如下：
justep.Shell.showPage(require.toUrl(url),{
	rowid : rowid
});