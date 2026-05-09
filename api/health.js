import { ensureSchema, getSql, hasDatabase, sendJson } from "./_lib/db.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("allow", "GET");
    sendJson(res, 405, { ok: false, error: "Method not allowed." });
    return;
  }

  const sql = getSql();
  if (!hasDatabase() || !sql) {
    sendJson(res, 200, {
      ok: false,
      vercel: true,
      neon: false
    });
    return;
  }

  await ensureSchema(sql);
  const rows = await sql`select now() as now`;
  sendJson(res, 200, {
    ok: true,
    vercel: true,
    neon: true,
    databaseTime: rows[0]?.now || null
  });
}
