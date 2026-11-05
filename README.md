# HobbyAlchemist

## Cloudflare MCP Test

Dette repositoryet inneholder tester og dokumentasjon for Cloudflare MCP (Model Context Protocol).

### Filer

- **cloudflare-mcp-test.md** - Detaljert dokumentasjon om Cloudflare MCP
- **cloudflare-mcp-config-example.json** - Eksempelkonfigurasjon for MCP-klienter
- **cloudflare_mcp_example.py** - Python-eksempel som demonstrerer funksjonalitet

### Hva er Cloudflare MCP?

Cloudflare MCP er en token-effektiv MCP-server som gir tilgang til hele Cloudflare API (2500+ endepunkter) ved å bruke bare ~1000 tokens i stedet for over 1 million tokens.

### Nøkkelfunksjoner

✓ **Token-effektivitet**: 99.5% reduksjon i kontekst-bruk  
✓ **Full API-tilgang**: Alle Cloudflare-produkter og tjenester  
✓ **Dokumentasjonssøk**: Direkte tilgang til utviklerdokumentasjon  
✓ **Sikkerhet**: Kode kjøres i isolerte sandboxer  
✓ **Fleksibel autentisering**: OAuth eller API tokens

### Kom i gang

```bash
# Kjør Python-eksempelet
python3 cloudflare_mcp_example.py

# Les dokumentasjonen
cat cloudflare-mcp-test.md
```

### MCP Server URL

```
https://mcp.cloudflare.com/mcp
```

### Ressurser

- GitHub: https://github.com/cloudflare/mcp
- Dokumentasjon: https://developers.cloudflare.com/agents/model-context-protocol/
- Kurs: https://learn.cloudflare.com/courses/cloudflare-api-mcp-server-1
