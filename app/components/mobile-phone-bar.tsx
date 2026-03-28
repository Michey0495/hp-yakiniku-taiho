"use client";

import { PhoneIcon } from "./section";

export function MobilePhoneBar() {
  return (
    <div className="mobile-phone-bar hidden max-md:block">
      <a
        href="tel:0154249156"
        className="flex items-center justify-center gap-3 py-2 text-th-ivory font-hina text-lg tracking-wider"
      >
        <PhoneIcon />
        <span>電話する</span>
      </a>
    </div>
  );
}
