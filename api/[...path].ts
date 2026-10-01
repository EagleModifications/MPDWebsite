import type {
  VercelRequest,
  VercelResponse,
} from "@vercel/node"

import app from "../server/app.js"

export default function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  return app(req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
}
