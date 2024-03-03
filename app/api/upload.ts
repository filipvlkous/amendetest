// pages/api/upload.ts

import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) {
        res.status(500).json({ error: 'Error uploading file' });
        return;
      }

      // Process the uploaded file
      console.log('Received file:', files);
      res.status(200).json({ message: 'File uploaded successfully' });
    });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
