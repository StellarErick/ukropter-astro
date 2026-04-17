export const languages = {
  ua: 'UA',
  en: 'ENG',
} as const

export type Lang = keyof typeof languages

export const defaultLang: Lang = 'ua'

export const ui = {
  ua: {
    'nav.about': 'Про компанію',
    'nav.products': 'Наші розробки',
    'nav.reviews': 'Відгуки',
    'nav.media': 'Медіа',
    'nav.contacts': 'Контакти',
    'btn.order': 'Замовити',
    'btn.order.full': 'Замовити',
    'btn.order.drone': 'дрон',
    'btn.support': 'Підтримати',
    'btn.support.production': 'виробництво',
    'btn.send': 'Надіслати запит',
    'lang.switch': 'ENG',
    'footer.copyright': 'Ukropter © 2025. Всі права захищено',
    'footer.privacy': 'Політика конфіденційності',
    'footer.offer': 'Договір публічної оферти',
    'form.name': "Ім'я",
    'form.name.placeholder': "Введіть ім'я",
    'form.phone': 'Телефон',
    'form.phone.placeholder': '+380',
    'form.email': 'E-mail',
    'form.email.placeholder': 'Введіть e-mail',
    'form.message': 'Повідомлення',
    'form.message.placeholder': 'Введіть повідомлення',
    'form.required': "* - обов'язкові поля",
    'form.sending': 'Відправляємо...',
    'form.success': 'Дякуємо! Ваше повідомлення успішно відправлено.',
    'form.error': 'Вибачте, сталася помилка при відправці. Спробуйте ще раз.',
    'form.consent.prefix': '*Натискаючи на кнопку «Надіслати», я погоджуюся з',
    'form.consent.privacy': 'політикою конфіденційності компанії',
    'form.consent.mid': 'та',
    'form.consent.offer': 'договором публічної оферти',
    'form.consent.suffix': 'та даю згоду на обробку своїх персональних даних.',
    'iban.copy': 'Скопіювати',
    'iban.copied': 'Скопійовано',
  },
  en: {
    'nav.about': 'ABOUT US',
    'nav.products': 'OUR products',
    'nav.reviews': 'TESTIMONIALS',
    'nav.media': 'media',
    'nav.contacts': 'contacts',
    'btn.order': 'ORDER',
    'btn.order.full': 'ORDER',
    'btn.order.drone': 'Drone',
    'btn.support': 'SUPPORT',
    'btn.support.production': 'Production',
    'btn.send': 'SEND REQUEST',
    'lang.switch': 'UA',
    'footer.copyright': 'Ukropter © 2025. All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.offer': 'Public offer agreement',
    'form.name': 'Name',
    'form.name.placeholder': 'Enter your name',
    'form.phone': 'Phone',
    'form.phone.placeholder': '+380',
    'form.email': 'E-mail',
    'form.email.placeholder': 'Enter your email',
    'form.message': 'Message',
    'form.message.placeholder': 'Enter your message',
    'form.required': '* - required fields',
    'form.sending': 'Sending...',
    'form.success': 'Thank you! Your message has been sent successfully.',
    'form.error': 'Sorry, an error occurred while sending. Please try again.',
    'form.consent.prefix': '*By clicking "Send Request", I agree to the company\'s privacy',
    'form.consent.privacy': 'policy',
    'form.consent.mid': 'and consent to the processing of my personal data.',
    'form.consent.offer': 'public offer agreement',
    'form.consent.suffix': '',
    'iban.copy': 'Copy',
    'iban.copied': 'Copied',
  },
} as const

export function getLangFromUrl(url: URL): Lang {
  const pathname = url.pathname
  if (pathname.startsWith('/eng/') || pathname.includes('/eng/') || pathname.endsWith('/eng')) {
    return 'en'
  }
  return 'ua'
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['ua']): string {
    return ui[lang][key] || ui[defaultLang][key]
  }
}

export function getHomePath(lang: Lang): string {
  return lang === 'en' ? '/eng/' : '/'
}

export function getLangSwitchPath(lang: Lang, currentPath: string): string {
  if (lang === 'ua') {
    if (currentPath === '/') return '/eng/'
    if (currentPath.includes('/pages/')) {
      const parts = currentPath.split('/pages/')
      return '/pages/' + parts[1].replace(/\/$/, '') + '/eng/'
    }
    return '/eng/'
  } else {
    if (currentPath === '/eng/' || currentPath === '/eng') return '/'
    if (currentPath.includes('/eng/')) {
      return currentPath.replace('/eng/', '/')
    }
    return '/'
  }
}
