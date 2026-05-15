const CORS = {
  'Access-Control-Allow-Origin': 'https://enlightenedrepublic.tech',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

module.exports = async function handler(req, res) {
  Object.entries(CORS).forEach(([k, v]) => res.setHeader(k, v));
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (!process.env.GUMROAD_TOKEN) return res.status(500).json({ error: 'misconfigured' });
  try {
    const r = await fetch(`https://api.gumroad.com/v2/products?access_token=${process.env.GUMROAD_TOKEN}`);
    const data = await r.json();
    if (!data.success) return res.status(502).json({ error: 'Gumroad error' });
    const products = data.products
      .filter(p => p.published && !p.deleted)
      .map(p => ({
        id: p.id,
        name: p.name,
        desc: p.custom_summary || '',
        price: p.formatted_price,
        url: p.short_url,
        image: p.covers?.[0]?.url || p.thumbnail_url || '',
        tags: p.tags || [],
      }));
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=60');
    res.status(200).json({ products });
  } catch {
    res.status(500).json({ error: 'Internal error' });
  }
};
