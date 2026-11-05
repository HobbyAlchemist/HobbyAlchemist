# Cloudflare MCP Test

## Om Cloudflare MCP

Cloudflare MCP (Model Context Protocol) er en token-effektiv MCP-server som gir tilgang til hele Cloudflare API - over 2500 endepunkter - ved å bruke bare ~1000 tokens.

## Tilgjengelige Verktøy

Cloudflare MCP gir følgende verktøy:

1. **search** - Søk gjennom API-spesifikasjonen for å finne endepunkter
2. **execute** - Kjør API-kall mot oppdagede endepunkter
3. **docs** - Søk i Cloudflare utviklerdokumentasjon
4. **whoami** - Vis autentiseringsinformasjon

## Konfigurasjon

### For Claude Desktop / Cursor

Legg til i MCP-konfigurasjonen:

```json
{
  "mcpServers": {
    "cloudflare-api": {
      "url": "https://mcp.cloudflare.com/mcp"
    }
  }
}
```

### Autentisering

**OAuth (Anbefalt):**
- Koble til MCP-server URL
- Du vil bli omdirigert til Cloudflare for autorisasjon
- Velg tillatelsene du vil gi til agenten

**API Token (for CI/CD):**
- Opprett en Cloudflare API-token med nødvendige tillatelser
- Bruk som bearer token i `Authorization`-header
- Støtter både bruker-tokens og konto-tokens

## Token-sammenligning

| Tilnærming | Antall verktøy | Token-kostnad | Kontekst brukt (200K) |
|------------|----------------|---------------|----------------------|
| Rå OpenAPI spec | — | ~2,000,000 | 977% |
| Native MCP (full schema) | 2,594 | 1,170,523 | 585% |
| Native MCP (minimal) | 2,594 | 244,047 | 122% |
| Code Mode | 3 | ~1,100 | 0.5% |

## Hvordan det virker

Cloudflare MCP bruker "Code Mode"-mønsteret:
- I stedet for å eksponere hvert endepunkt som et individuelt verktøy
- Skriver AI-agenten JavaScript-kode for å søke i spesifikasjonen
- Koden kjøres i en isolert Dynamic Worker sandbox
- Kun resultatet returneres til agenten

Dette reduserer token-bruken drastisk fra over 1 million til ~1000 tokens.

## Tilgjengelige produktspesifikke MCP-servere

Cloudflare tilbyr også flere produktspesifikke MCP-servere:

1. **Documentation server** - `https://docs.mcp.cloudflare.com/mcp`
2. **Container server** - `https://containers.mcp.cloudflare.com/mcp`
3. **Browser Run server** - `https://browser.mcp.cloudflare.com/mcp`
4. **Digital Experience Monitoring** - `https://dex.mcp.cloudflare.com/mcp`
5. **Cloudflare One CASB** - `https://casb.mcp.cloudflare.com/mcp`
6. **Agents SDK Documentation** - `https://agents.cloudflare.com/mcp`
7. **Workers Bindings server**
8. **Workers Observability server**
9. **Radar server**
10. **Logpush server**
11. **AI Gateway server**
12. **AutoRAG server**
13. **Audit Logs server**
14. **DNS Analytics server**

## Eksempel på bruk

### Søk etter DNS-endepunkter

```javascript
// Ved bruk av search-verktøyet
const dnsEndpoints = spec.paths
  .filter(path => path.includes('/dns'))
  .map(path => ({
    path,
    methods: Object.keys(spec.paths[path])
  }));
```

### Kjør et API-kall

```javascript
// Ved bruk av execute-verktøyet
const response = await cloudflare.request({
  method: 'GET',
  path: '/client/v4/zones',
  query: { per_page: 10 }
});
```

### Søk i dokumentasjon

```javascript
// Ved bruk av docs-verktøyet
// Søker i Cloudflare developer documentation
// for informasjon om Workers, R2, Zero Trust, etc.
```

## Fordeler med Cloudflare MCP

1. **Token-effektivitet**: Bruker 99.5% mindre kontekst enn tradisjonelle tilnærminger
2. **Full API-tilgang**: Tilgang til alle 2500+ Cloudflare API-endepunkter
3. **Dokumentasjonssøk**: Direkte tilgang til Cloudflare utviklerdokumentasjon
4. **Sikkerhet**: Kode kjøres i isolerte sandboxer
5. **Fleksibel autentisering**: Støtter både OAuth og API-tokens
6. **Oppdatert**: Støtter MCP 2026-07-28 spesifikasjonen

## Kildekode

GitHub repository: https://github.com/cloudflare/mcp

## Læring

Cloudflare tilbyr en kurs om Cloudflare API MCP Server:
https://learn.cloudflare.com/courses/cloudflare-api-mcp-server-1

## Status: Testet ✓

Denne dokumentasjonen ble opprettet for å teste og dokumentere Cloudflare MCP-funksjonalitet.
