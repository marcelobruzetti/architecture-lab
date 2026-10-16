## Experimento H1 — Unicidade de códigos

Hipótese: a constraint UNIQUE do PostgreSQL impede
a persistência de códigos duplicados sob concorrência.

Resultados observados:
- Inserção sequencial duplicada: rejeitada.
- Duas transações concorrentes: a segunda aguardou.
- Após COMMIT da primeira: segunda inserção rejeitada.
- Após ROLLBACK da primeira: segunda inserção aceita.

Conclusão:
A constraint UNIQUE garante a integridade dos códigos
nos cenários testados, sem locks na aplicação.

Limitação:
Não medimos o impacto da contenção sobre a latência.