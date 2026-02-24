# Contact form – emails not arriving

The contact form sends email via **Resend**. If submissions show "Message Sent!" but you never get an email, or you see an error, work through this list.

---

## 1. Production environment variables

If the site is deployed (e.g. Vercel, Netlify), env vars from your local `.env` are **not** used. You must set them in the host’s dashboard.

- **Vercel:** Project → **Settings** → **Environment Variables**
- Add:
  - `RESEND_API_KEY` = your Resend API key (from [Resend API Keys](https://resend.com/api-keys))
  - (Optional) `RESEND_TO_EMAIL` = address to receive form emails (default: `hi@joemac.co.nz`)
  - (Optional) `RESEND_FROM_EMAIL` = must use a **verified domain** (default: `Joe Mac Website <contact@joemac.co.nz>`)
- Redeploy after changing env vars.

---

## 2. Resend domain verification

The **From** address must use a domain that is **Verified** in Resend (e.g. `contact@joemac.co.nz` → domain `joemac.co.nz`).

- Open [Resend → Domains](https://resend.com/domains).
- Find `joemac.co.nz` (or the domain in your From address). Status must be **Verified**, not Pending or Failed.
- If it’s not verified:
  - Add the **SPF** and **DKIM** records Resend shows into your DNS (at your domain registrar or DNS provider).
  - Use Resend’s [DNS checker](https://dns.email) (or the “Verify” flow in the dashboard) to confirm. Generic DNS tools can show records as correct while Resend still sees them as missing or wrong.
  - Wait for propagation (can be minutes to 48 hours). Then click **Verify** again in Resend.
- Resend docs: [Domain verification](https://resend.com/docs/dashboard/domains/introduction), [Domain not verifying?](https://resend.com/knowledge-base/what-if-my-domain-is-not-verifying).

---

## 3. Check where emails are sent

Emails go to the address in `RESEND_TO_EMAIL`, or the default `hi@joemac.co.nz`. Make sure you’re checking that inbox (and that it’s the same account you expect).

---

## 4. Spam / promotions

- Check **Spam** and **Promotions** (and any “Other” or “Updates”) in the inbox for `RESEND_TO_EMAIL`.
- If you find messages there, mark as “Not spam” so future ones land in Inbox.

---

## 5. See what the server is doing

The API now logs to the server console so you can see why a send failed.

- **Local:** Run `npm run dev`, submit the form, and watch the terminal for `[contact]` lines.
- **Vercel:** Project → **Logs** (or **Deployments** → select a deployment → **Functions** / **Runtime Logs**). Submit the form and look for `[contact]` messages:
  - `RESEND_API_KEY is not set` → set the API key in the host’s env and redeploy.
  - `Resend error: ...` → use the message (e.g. “domain not verified”) to fix Resend/DNS.
  - `Email sent successfully` → Resend accepted the email; delivery/spam is the next place to look.

---

## 6. Form error message

If the form shows an error (e.g. red box with a message), that text comes from Resend or the API. Read it carefully—it often says things like “domain not verified” or “invalid from address,” which points to domain/DNS or the From address.

---

## Quick checklist

- [ ] `RESEND_API_KEY` set in **production** env (e.g. Vercel), not only in local `.env`
- [ ] Domain for the From address is **Verified** in Resend (SPF + DKIM in DNS, verified in Resend)
- [ ] Checking the correct inbox (`RESEND_TO_EMAIL` or default)
- [ ] Checked Spam / Promotions
- [ ] Checked server logs for `[contact]` after a test submit

If all of the above are correct and you still don’t receive emails, check Resend’s [Emails / Logs](https://resend.com/emails) to see whether the message was accepted and its delivery status.
