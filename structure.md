# 📁 Project Structure

```bash
.
├── app
│   ├── api
│   │   └── auth
│   │       └── [...nextauth]
│   │           └── route.ts
│   ├── (auth)
│   │   ├── auth
│   │   │   ├── forgot-password
│   │   │   │   └── page.tsx
│   │   │   ├── login
│   │   │   │   └── page.tsx
│   │   │   ├── register
│   │   │   │   └── page.tsx
│   │   │   ├── reset-password
│   │   │   │   └── page.tsx
│   │   │   └── verify-code
│   │   │       └── page.tsx
│   │   └── layout.tsx
│   ├── (common)
│   │   ├── delete-account-guide
│   │   │   └── page.tsx
│   │   ├── hello
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── marketing
│   │   │   └── page.tsx
│   │   ├── page.tsx
│   │   ├── privacy-policy
│   │   │   └── page.tsx
│   │   ├── support
│   │   │   └── page.tsx
│   │   └── terms-conditions
│   │       └── page.tsx
│   ├── (dashboard)
│   │   ├── dashboard
│   │   │   ├── content
│   │   │   │   ├── faq
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── game
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── lessons
│   │   │   │   │   └── page.tsx
│   │   │   │   └── my-journey
│   │   │   │       └── page.tsx
│   │   │   ├── page.tsx
│   │   │   ├── progress
│   │   │   │   └── page.tsx
│   │   │   ├── settings
│   │   │   │   └── page.tsx
│   │   │   └── users
│   │   │       └── page.tsx
│   │   └── layout.tsx
│   ├── error.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── not-found.tsx
├── assets
│   ├── icons
│   │   └── conversation-svgrepo-com.svg
│   ├── images
│   │   ├── Human.png
│   │   └── logo.png
│   └── lottieFiles
│       └── pageNotFound.json
├── components
│   ├── create-faq-modal.tsx
│   ├── create-lesson-modal.tsx
│   ├── create-lesson-placeholder.tsx
│   ├── edit-faq-modal.tsx
│   ├── edit-lesson-modal.tsx
│   ├── header.tsx
│   ├── lesson-card.tsx
│   ├── login-branding.tsx
│   ├── LoginWithGoogle.tsx
│   ├── pages
│   │   ├── auth
│   │   │   ├── ForgotPasswordPageComponent.tsx
│   │   │   ├── LoginPageComponent.tsx
│   │   │   ├── ResetPasswordPageComponent.tsx
│   │   │   └── VerifyCodePageComponent.tsx
│   │   ├── dashboard
│   │   │   ├── DashboardLayout.tsx
│   │   │   ├── game
│   │   │   │   ├── create-nourish-modal.tsx
│   │   │   │   ├── edit-nourish-modal.tsx
│   │   │   │   ├── nourish-table.tsx
│   │   │   │   └── view-nourish-modal.tsx
│   │   │   ├── header.tsx
│   │   │   ├── lessons
│   │   │   │   ├── create-category-modal.tsx
│   │   │   │   ├── CreateLessonModal.tsx
│   │   │   │   ├── create-lesson-modal-v2.tsx
│   │   │   │   ├── create-lesson-placeholder.tsx
│   │   │   │   ├── edit-category-modal.tsx
│   │   │   │   ├── EditLessonModal.tsx
│   │   │   │   ├── edit-lesson-modal-v2.tsx
│   │   │   │   ├── LessonForm.tsx
│   │   │   │   ├── lesson-section.tsx
│   │   │   │   └── LessonsList.tsx
│   │   │   ├── my-journey
│   │   │   │   ├── create-journey-lesson-modal.tsx
│   │   │   │   ├── create-part-modal.tsx
│   │   │   │   ├── edit-journey-lesson-modal.tsx
│   │   │   │   ├── edit-part-modal.tsx
│   │   │   │   ├── journey-lesson-card.tsx
│   │   │   │   └── journey-part-section.tsx
│   │   │   ├── progress
│   │   │   │   └── progress-table.tsx
│   │   │   ├── settings
│   │   │   │   ├── account-settings-panel.tsx
│   │   │   │   ├── basic-settings-panel.tsx
│   │   │   │   └── settings-tabs.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── users
│   │   │   │   ├── StatCards.tsx
│   │   │   │   └── UsersTable.tsx
│   │   │   └── WithAuthForAdmin.tsx
│   │   └── home
│   │       ├── Banner
│   │       │   └── Banner.tsx
│   │       ├── Example
│   │       │   └── Example.tsx
│   │       ├── HomeComponent.tsx
│   │       ├── MarketingPage.tsx
│   │       ├── PrivacyPolicy.tsx
│   │       ├── SupportPage.tsx
│   │       └── TermsConditions.tsx
│   ├── part-section.tsx
│   ├── shared
│   │   ├── Footer
│   │   │   └── Footer.tsx
│   │   └── NavBar
│   │       └── NavBar.tsx
│   ├── sidebar.tsx
│   ├── stat-cards.tsx
│   ├── ui
│   │   └── buttons
│   │       └── NextButton
│   │           ├── button.tsx
│   │           ├── NextButton.css
│   │           └── NextButton.tsx
│   ├── ui-library
│   │   ├── box.tsx
│   │   ├── container.tsx
│   │   ├── flex.tsx
│   │   ├── grid.tsx
│   │   └── typography.tsx
│   └── users-table.tsx
├── eslint.config.mjs
├── lib
│   ├── MyContextProvider.tsx
│   └── utils.ts
├── nextAuth
│   ├── authOptions.ts
│   └── SessionProviderForNextAuth.tsx
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── public
│   ├── account_delete_guide
│   │   ├── guide1.png
│   │   ├── guide2.png
│   │   ├── guide3.png
│   │   └── guide4.png
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── README.md
├── redux
│   ├── api
│   │   └── baseApi.ts
│   ├── features
│   │   ├── auth
│   │   │   ├── authApi.ts
│   │   │   └── authSlice.ts
│   │   ├── example
│   │   │   └── exampleApi.ts
│   │   ├── faqApi.ts
│   │   ├── gameApi.ts
│   │   ├── journeyApi.ts
│   │   ├── lessonApi.ts
│   │   ├── progressApi.ts
│   │   └── usersApi.ts
│   ├── hooks.ts
│   ├── readme.txt
│   ├── ReduxStoreProvider.tsx
│   └── store.ts
├── structure.md
├── tsconfig.json
└── utils
    ├── handleAsyncWithToast.ts
    ├── handleLogout.ts
    ├── isNonEmptyArray.ts
    ├── scrollToSectionById.ts
    ├── tokenHandler.ts
    └── verifyToken.ts

63 directories, 139 files

```
