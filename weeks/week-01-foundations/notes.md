## Experiment H1 — Short Code Uniqueness

**Hypothesis:** PostgreSQL's `UNIQUE` constraint prevents duplicate short codes from being persisted under concurrent transactions.

### Observed Results

- Sequential insertion with a duplicate short code: rejected.
- Two concurrent transactions attempting to insert the same short code: the second transaction waited.
- After the first transaction committed (`COMMIT`): the second insertion was rejected.
- After the first transaction rolled back (`ROLLBACK`): the second insertion succeeded.

### Conclusion

The `UNIQUE` constraint successfully enforced short code uniqueness in all tested scenarios, without requiring application-level locking.

### Limitations

- The performance impact of contention was not measured.
- The experiment did not evaluate behavior under high concurrency.