"""
Cloudflare MCP Eksempel
========================

Dette eksempelet viser hvordan man kan bruke Cloudflare MCP
for å interagere med Cloudflare API.

Cloudflare MCP bruker "Code Mode" som reduserer token-bruk
fra over 1 million til ~1000 tokens.
"""

import os
import json
from typing import Dict, Any, List


class CloudflareMCPClient:
    """
    Eksempelklient for Cloudflare MCP.
    
    I praksis vil dette bli håndtert av din MCP-klient
    (f.eks. Claude Desktop, Cursor, Windsurf).
    """
    
    def __init__(self, api_token: str = None):
        """
        Initialiser Cloudflare MCP-klient.
        
        Args:
            api_token: Cloudflare API token (valgfritt, bruker OAuth hvis ikke angitt)
        """
        self.mcp_url = "https://mcp.cloudflare.com/mcp"
        self.api_token = api_token or os.getenv("CLOUDFLARE_API_TOKEN")
        self.headers = {}
        
        if self.api_token:
            self.headers["Authorization"] = f"Bearer {self.api_token}"
    
    def search_endpoints(self, query: str) -> List[Dict[str, Any]]:
        """
        Søk etter API-endepunkter.
        
        Dette bruker 'search'-verktøyet i Cloudflare MCP.
        Agenten skriver JavaScript-kode for å søke i spec.paths.
        
        Args:
            query: Søkestreng (f.eks. "dns", "workers", "r2")
            
        Returns:
            Liste over matchende endepunkter
            
        Eksempel:
            >>> client.search_endpoints("dns")
            [
                {
                    "path": "/client/v4/zones/{zone_id}/dns_records",
                    "methods": ["GET", "POST"]
                },
                ...
            ]
        """
        # I praksis vil MCP-klienten sende dette til serveren
        code = f"""
        const results = spec.paths
            .filter(path => path.toLowerCase().includes('{query}'.toLowerCase()))
            .map(path => {{
                return {{
                    path: path,
                    methods: Object.keys(spec.paths[path]),
                    description: spec.paths[path].get?.summary || 
                                spec.paths[path].post?.summary || 
                                'No description'
                }};
            }});
        
        return results.slice(0, 20); // Begrens til 20 resultater
        """
        
        print(f"Søker etter endepunkter med query: '{query}'")
        print("Generert kode:")
        print(code)
        print("\nDenne koden vil bli kjørt på MCP-serveren.")
        
        return []
    
    def execute_api_call(self, method: str, path: str, 
                        query_params: Dict = None, 
                        body: Dict = None) -> Dict[str, Any]:
        """
        Kjør et API-kall mot Cloudflare.
        
        Dette bruker 'execute'-verktøyet i Cloudflare MCP.
        
        Args:
            method: HTTP-metode (GET, POST, PUT, DELETE, etc.)
            path: API-endepunkt-sti
            query_params: Query-parametere (valgfritt)
            body: Request body (valgfritt)
            
        Returns:
            API-respons
            
        Eksempel:
            >>> client.execute_api_call(
            ...     method="GET",
            ...     path="/client/v4/zones",
            ...     query_params={"per_page": 10}
            ... )
        """
        code = f"""
        const response = await cloudflare.request({{
            method: '{method}',
            path: '{path}',
            {f"query: {json.dumps(query_params)}," if query_params else ""}
            {f"body: {json.dumps(body)}," if body else ""}
        }});
        
        return response;
        """
        
        print(f"Kjører API-kall: {method} {path}")
        print("Generert kode:")
        print(code)
        print("\nDenne koden vil bli kjørt på MCP-serveren.")
        
        return {}
    
    def search_docs(self, query: str) -> List[Dict[str, Any]]:
        """
        Søk i Cloudflare utviklerdokumentasjon.
        
        Dette bruker 'docs'-verktøyet i Cloudflare MCP.
        
        Args:
            query: Søkestreng
            
        Returns:
            Liste over relevante dokumenter
            
        Eksempel:
            >>> client.search_docs("workers kv")
        """
        print(f"Søker i dokumentasjon: '{query}'")
        print("Dette vil søke i https://developers.cloudflare.com/")
        
        return []
    
    def whoami(self) -> Dict[str, Any]:
        """
        Sjekk autentiseringsinformasjon.
        
        Dette bruker 'whoami'-verktøyet i Cloudflare MCP.
        
        Returns:
            Informasjon om den autentiserte brukeren/kontoen
            
        Eksempel:
            >>> client.whoami()
            {
                "type": "user",
                "email": "bruker@example.com",
                "account_id": "abc123..."
            }
        """
        print("Sjekker autentisering...")
        print("Dette vil returnere bruker/konto-informasjon.")
        
        return {}


def demo_search_dns_endpoints():
    """Demo: Søk etter DNS-relaterte endepunkter."""
    print("=" * 60)
    print("DEMO 1: Søk etter DNS-endepunkter")
    print("=" * 60)
    
    client = CloudflareMCPClient()
    client.search_endpoints("dns")
    print()


def demo_list_zones():
    """Demo: List Cloudflare-soner."""
    print("=" * 60)
    print("DEMO 2: List Cloudflare-soner")
    print("=" * 60)
    
    client = CloudflareMCPClient()
    client.execute_api_call(
        method="GET",
        path="/client/v4/zones",
        query_params={"per_page": 10}
    )
    print()


def demo_search_workers_docs():
    """Demo: Søk i Workers-dokumentasjon."""
    print("=" * 60)
    print("DEMO 3: Søk i Workers-dokumentasjon")
    print("=" * 60)
    
    client = CloudflareMCPClient()
    client.search_docs("workers kv storage")
    print()


def demo_create_dns_record():
    """Demo: Opprett DNS-post."""
    print("=" * 60)
    print("DEMO 4: Opprett DNS-post")
    print("=" * 60)
    
    client = CloudflareMCPClient()
    client.execute_api_call(
        method="POST",
        path="/client/v4/zones/ZONE_ID/dns_records",
        body={
            "type": "A",
            "name": "example.com",
            "content": "192.0.2.1",
            "ttl": 3600,
            "proxied": True
        }
    )
    print()


def print_token_comparison():
    """Vis token-sammenligning."""
    print("=" * 60)
    print("TOKEN-EFFEKTIVITET")
    print("=" * 60)
    
    comparisons = [
        ("Rå OpenAPI spec", "—", "~2,000,000", "977%"),
        ("Native MCP (full)", "2,594", "1,170,523", "585%"),
        ("Native MCP (minimal)", "2,594", "244,047", "122%"),
        ("Code Mode (Cloudflare)", "3", "~1,100", "0.5%"),
    ]
    
    print(f"{'Tilnærming':<30} {'Verktøy':<10} {'Tokens':<15} {'Kontekst (200K)'}")
    print("-" * 70)
    for approach, tools, tokens, context in comparisons:
        print(f"{approach:<30} {tools:<10} {tokens:<15} {context}")
    
    print("\n✓ Cloudflare MCP bruker 99.5% mindre kontekst!")
    print()


def main():
    """Kjør alle demoer."""
    print("\n")
    print("╔" + "═" * 58 + "╗")
    print("║" + " " * 10 + "CLOUDFLARE MCP EKSEMPEL" + " " * 25 + "║")
    print("╚" + "═" * 58 + "╝")
    print()
    
    print_token_comparison()
    demo_search_dns_endpoints()
    demo_list_zones()
    demo_search_workers_docs()
    demo_create_dns_record()
    
    print("=" * 60)
    print("NOTATER")
    print("=" * 60)
    print("• Disse eksemplene viser hva Cloudflare MCP kan gjøre")
    print("• I praksis håndteres dette av din MCP-klient")
    print("• All kode kjøres i sikre Dynamic Worker sandboxer")
    print("• Støtter OAuth eller API token autentisering")
    print("• Tilgang til alle 2500+ Cloudflare API-endepunkter")
    print()
    print("MCP URL: https://mcp.cloudflare.com/mcp")
    print("GitHub: https://github.com/cloudflare/mcp")
    print()


if __name__ == "__main__":
    main()
