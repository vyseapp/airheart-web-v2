const CORS = {
  'Access-Control-Allow-Origin': 'https://enlightenedrepublic.tech',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

module.exports = async function handler(req, res) {
  Object.entries(CORS).forEach(([k, v]) => res.setHeader(k, v));
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  if (!process.env.AGENTMAIL_NEWSLETTER) return res.status(500).json({ error: 'Service misconfigured' });

  const { to, reply_to, subject, text } = req.body || {};
  if (!reply_to && !to) return res.status(400).json({ error: 'Email required' });

  try {
    const r = await fetch('https://api.agentmail.to/inboxes/new_newsletter_signup@enlightenedrepublic.tech/messages/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.AGENTMAIL_NEWSLETTER}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: to || 'mac_airheart@enlightenedrepublic.tech',
        reply_to: reply_to || undefined,
        subject: subject || `New Newsletter Signup: ${reply_to}`,
        text: text || `New subscriber: ${reply_to}`,
      }),
    });
    const data = await r.json();
    if (!r.ok) return res.status(r.status).json(data);
    res.status(200).json({ ok: true });
  } catch {
    res.status(500).json({ error: 'Internal error' });
  }
};
