const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(express.json());

const alerts = [];

app.get('/alerts', (req, res) => res.json({ alerts }));

app.post('/ingest/sensor', (req, res) => {
  const { sensor_id, type, lat, lon, value, unit } = req.body;
  if (!sensor_id || value === undefined) return res.status(400).json({ error: 'sensor_id and value required' });
  if (type === 'river_stage' && value > 5.0) {
    const a = { alert_id: 'ALERT-' + uuidv4(), level: 'RED', message: `River stage critical at ${sensor_id} (${value}${unit})`, timestamp: new Date().toISOString() };
    alerts.push(a);
  }
  res.json({ status: 'ok' });
});

app.post('/reports', (req, res) => {
  const { user_id, type, lat, lon, text } = req.body;
  // push to reports (not implemented for brevity)
  res.json({ status: 'queued' });
});

const PORT = 4000;
app.listen(PORT, () => console.log('Backend running on port', PORT));
