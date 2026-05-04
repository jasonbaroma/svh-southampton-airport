const rawPhoneNumber = "0179 423 0227";

function toUkPhoneHref(phoneNumber: string) {
  const digits = String(phoneNumber || "").replace(/\D+/g, "");

  if (!digits) {
    return "tel:";
  }

  if (digits.startsWith("44")) {
    return `tel:+${digits}`;
  }

  if (digits.startsWith("0")) {
    return `tel:+44${digits.slice(1)}`;
  }

  return `tel:+${digits}`;
}

export const phoneDisplay = rawPhoneNumber;
export const phoneHref = toUkPhoneHref(rawPhoneNumber);
