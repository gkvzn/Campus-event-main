// shareConstants.ts

const baseAppUrl = process.env.NEXT_PUBLIC_APP_URL;

export const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${baseAppUrl}`;
export const twitterShareUrl = `https://twitter.com/intent/tweet?url=${baseAppUrl}`;
export const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${baseAppUrl}}`;
export const whatsappShareUrl = `https://api.whatsapp.com/send?text=${baseAppUrl}`;
