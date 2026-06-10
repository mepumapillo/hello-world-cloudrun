import functions from '@google-cloud/functions-framework';

// Función HTTP. Sirve igual como Cloud Function (2nd gen) o Cloud Run.
functions.http('helloWorld', (req, res) => {
  const nombre = req.query.nombre || req.body?.nombre || 'mundo';
  res.status(200).send(`Hola ${nombre} 👋 desde Cloud Run (CD activo ✅ v2)`);
});
