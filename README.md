# Hola mundo — Cloud Run / Cloud Functions

Función HTTP en Node.js con [Functions Framework](https://github.com/GoogleCloudPlatform/functions-framework-nodejs).
Sirve igual desplegada como **Cloud Run** o como **Cloud Function (2ª gen)**.

## Probar en local

```bash
pnpm install
pnpm start
# en otra terminal:
curl "http://localhost:8080?nombre=Miguel"
```

## Desplegar en Cloud Run (cumple la regla del proyecto)

> Regla: facturación por request (request-based billing) y `min-instances=0`.
> Cloud Run usa request-based billing por defecto mientras NO se active
> `--no-cpu-throttling` (CPU always-allocated). Aquí lo dejamos por defecto.

```bash
gcloud run deploy hello-world \
  --source . \
  --project=reech-ai \
  --region=us-central1 \
  --allow-unauthenticated \
  --min-instances=0 \
  --max-instances=3
```

## (Alternativa) Desplegar como Cloud Function 2ª gen

```bash
gcloud functions deploy hello-world \
  --gen2 \
  --runtime=nodejs20 \
  --region=us-central1 \
  --project=reech-ai \
  --source=. \
  --entry-point=helloWorld \
  --trigger-http \
  --allow-unauthenticated \
  --min-instances=0
```
