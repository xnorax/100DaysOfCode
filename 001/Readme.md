
<div dir=rtl markdown=1>

## كيفية رفع مشروع عبر واجهة الأوامر النصية

1. سجل في [Github](https://github.com/) 
2. حمل برنامج [Git](https://git-scm.com/downloads)
3. من واجهة موقع Github أنشئ مشروع جديد

![أنشئ مشروع جديد](https://help.github.com/assets/images/help/repository/repo-create.png)

4. انسخ رابط Git للمشروع

![انسخ رابط Git](https://help.github.com/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)

5. افتح برنامج موجه الأوامر command prompt في ويندوز أو terminal في ماك
6. اذهب إلى الملف الذي تريد نسخ مشروعك إليه
`cd desktop`
7. انسخ مشروع Github إلى جهازك باستخدام الرابط الذي نسخته في الخطوة 4
`git clone https://github.com/YourUsername/100DaysOfCode.git`
8. اذهب إلى مجلد المشروع في جهازك
`cd 100DaysOfCode`
9. أضف ملفاتك للمجلد أو عدل على الأكواد، ثم أضف الملفات للمشروع
`git add .`
10. انقل هذه التغييرات واكتب تعليق واضح لكل تغيير
`git commit -m "YourComment"`
10. ارفع هذه التغييرات إلى مشروعك في Github
`git push`

😃

</div>