# Planilhas-fonte (reconstruídas)

CSVs reconstruídos em 2026-07-21 a partir dos popups dos HTMLs gerados em `data/`
(as planilhas originais do pipeline ficavam fora deste repositório e foram perdidas).
A partir desta data, **estes arquivos são a fonte da verdade** dos dados dos mapas:
qualquer instituição nova deve ser adicionada aqui E no HTML correspondente.

| Arquivo | Mapa | Linhas |
|---|---|---|
| mapa02_instituicoes_mundo.csv | 02 — Mundo (`data/worldmap.html`) + Globo (`globo/markers.js`) | 1527 |
| mapa03_centros_br_lattes.csv | 03 — Centros BR (`data/centros_ia_br_busca_livre.html`) | 122 |
| mapa04_afiliacoes_br_openalex.csv | 04 — Afiliações BR (`data/centros_ia_br_biblio_outra.html`) | 690 |

Obs.: o globo 3D usa os mesmos dados do mapa 02 (`globo/markers.js`, JSON).
No mapa 04, a coluna `pesquisadores` é uma contagem (dado derivado do OpenAlex).
