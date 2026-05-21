# تعليمات رفع المشروع على GitHub يدويًا

اتبع هذه الخطوات لرفع مشروع عيادات النسيم على GitHub:

## الخطوة 1: إنشاء مستودع جديد على GitHub

1. اذهب إلى [GitHub.com](https://github.com)
2. تسجيل الدخول باستخدام:
   - **البريد الإلكتروني**: hadihaker56@gmail.com
   - **كلمة المرور**: hadi12345
3. انقر على **"+"** في الزاوية العلوية اليمنى
4. اختر **"New repository"**
5. ملء البيانات:
   - **Repository name**: `naseem-clinic-website`
   - **Description**: `عيادات النسيم السنية التجميلية - موقع ويب`
   - **Visibility**: اختر **"Public"** (عام) أو **"Private"** (خاص)
   - **لا تختر** "Initialize this repository with a README" (لأننا بالفعل لدينا ملف README)
6. انقر على **"Create repository"**

## الخطوة 2: نسخ رابط المستودع

بعد إنشاء المستودع، ستظهر صفحة تحتوي على رابط مثل:
```
https://github.com/hadihaker56/naseem-clinic-website.git
```

**احفظ هذا الرابط** - ستحتاجه في الخطوة التالية.

## الخطوة 3: رفع المشروع من سطر الأوامر

إذا كان لديك Git مثبت على جهازك، اتبع هذه الخطوات:

### على Windows (PowerShell أو Command Prompt):

```bash
# 1. انتقل إلى مجلد المشروع
cd path\to\naseem-clinic-website

# 2. أضف المستودع البعيد
git remote add origin https://github.com/hadihaker56/naseem-clinic-website.git

# 3. أعد تسمية الفرع الرئيسي (إذا لزم الأمر)
git branch -M main

# 4. ادفع المشروع إلى GitHub
git push -u origin main
```

### على Mac أو Linux:

```bash
# 1. انتقل إلى مجلد المشروع
cd ~/naseem-clinic-website

# 2. أضف المستودع البعيد
git remote add origin https://github.com/hadihaker56/naseem-clinic-website.git

# 3. أعد تسمية الفرع الرئيسي
git branch -M main

# 4. ادفع المشروع إلى GitHub
git push -u origin main
```

## الخطوة 4: إدخال بيانات اعتماد GitHub

عند تنفيذ `git push`، قد يطلب منك:
- **اسم المستخدم**: `hadihaker56`
- **كلمة المرور**: استخدم **Personal Access Token** (انظر الخطوة 5)

## الخطوة 5: إنشاء Personal Access Token (اختياري لكن موصى به)

إذا كانت كلمة المرور لا تعمل، أنشئ Personal Access Token:

1. اذهب إلى [GitHub Settings - Tokens](https://github.com/settings/tokens)
2. انقر على **"Generate new token"**
3. اختر **"Generate new token (classic)"**
4. ملء البيانات:
   - **Note**: `naseem-clinic-upload`
   - **Expiration**: اختر مدة (مثل 30 يوم أو بدون انتهاء)
   - **Select scopes**: اختر `repo` (كل الخيارات تحت repo)
5. انقر على **"Generate token"**
6. **انسخ الـ Token** (لن تتمكن من رؤيته مرة أخرى)
7. استخدم هذا الـ Token بدلاً من كلمة المرور عند تنفيذ `git push`

## الخطوة 6: التحقق من الرفع

بعد إكمال الخطوات:

1. اذهب إلى [GitHub.com](https://github.com)
2. انقر على ملفك الشخصي
3. ستجد المستودع الجديد `naseem-clinic-website`
4. يجب أن ترى جميع الملفات:
   - `index.html`
   - `styles.css`
   - `README.md`
   - `.gitignore`

## الخطوة 7: الحصول على رابط الموقع

بعد الرفع بنجاح، يمكنك نشر الموقع مجانًا باستخدام **GitHub Pages**:

1. اذهب إلى إعدادات المستودع (**Settings**)
2. ابحث عن **"Pages"** في الجانب الأيسر
3. تحت **"Source"**، اختر **"Deploy from a branch"**
4. اختر الفرع **"main"** و **"/ (root)"**
5. انقر على **"Save"**
6. بعد دقائق، ستحصل على رابط مثل:
   ```
   https://hadihaker56.github.io/naseem-clinic-website/
   ```

## استكشاف الأخطاء

### خطأ: "fatal: remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/hadihaker56/naseem-clinic-website.git
```

### خطأ: "Permission denied (publickey)"
استخدم HTTPS بدلاً من SSH:
```bash
git remote set-url origin https://github.com/hadihaker56/naseem-clinic-website.git
```

### خطأ: "authentication failed"
استخدم Personal Access Token بدلاً من كلمة المرور (انظر الخطوة 5)

## الدعم

إذا واجهت أي مشاكل، تواصل معنا أو راجع [توثيق GitHub الرسمية](https://docs.github.com/en/get-started/using-git/about-git)

---

**ملاحظة**: تأكد من أن لديك Git مثبت على جهازك. إذا لم يكن مثبتًا، حمله من [git-scm.com](https://git-scm.com)
