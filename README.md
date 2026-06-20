# Change a Man's Life

A humble donation landing page for [changeamanslife.com](https://changeamanslife.com).

## Local preview

Open `index.html` in a browser, or run a simple local server:

```bash
npx serve .
```

Then visit `http://localhost:3000`.

## Update progress & donate link

Edit `config.js`:

```js
window.SITE_CONFIG = {
  donateUrl: "https://www.gofundme.com/f/room-to-breathe-for-my-family",
  contactEmail: "contact@changeamanslife.com",
};
```

Donation totals live on GoFundMe — the site links there instead of showing a separate counter.

## Anonymous email

You already own the domain. Easiest option:

1. In **Porkbun** → Domain Management → **Email Forwarding**
2. Create `contact@changeamanslife.com` (or `hello@`, etc.)
3. Forward to your personal inbox — visitors only see the domain address
4. Paste into `contactEmail` in `config.js`

Other options: new Gmail (`changeamanslife@gmail.com`) or [ProtonMail](https://proton.me).

## Stripe (when ready)

1. Create account at [stripe.com](https://stripe.com)
2. **Payment Links** → **New** → amount: "Customer chooses"
3. Copy link (`https://buy.stripe.com/...`) into `donateUrl` in `config.js`

## Deploy to Vercel (recommended)

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo
3. Deploy (no build step needed — static files)
4. In Vercel → **Settings → Domains** → add `changeamanslife.com`

### Point Porkbun DNS to Vercel

In Porkbun → **Domain Management** → `changeamanslife.com` → **DNS**:

| Type  | Host | Value                    |
|-------|------|--------------------------|
| A     | @    | `76.76.21.21`            |
| CNAME | www  | `cname.vercel-dns.com`   |

(Vercel will show the exact records when you add the domain.)

DNS can take up to 24–48 hours to propagate, but often works within an hour.

## Files

| File        | Purpose                              |
|-------------|--------------------------------------|
| `index.html`| Page content and structure           |
| `styles.css`| Visual design                        |
| `main.js`   | Donate & progress links, email     |
| `config.js` | GoFundMe URL, contact email        |
