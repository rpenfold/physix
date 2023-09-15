# Time

Unit conversion utilities for time.

```tsx
// instead of

const DAY_IN_MILLIS = 1000 * 60 * 24;

// you can use

const DAY_IN_MILLIS = days(1).toMilliseconds();
```

### Exports

- milliseconds
- seconds
- minutes
- hours
- days

| Method | Description |
| --- | --- |
| `.toMilliseconds()` | Converts value to milliseconds |
| `.toSeconds()` | Converts value to seconds |
| `.toMinutes()` | Converts value to minutes |
| `.toHours()` | Converts value to hours |
| `.toDays()` | Converts value to days |


### Important note

The return values are not primitives, but rather inherit from `Number`. In most cases it can be used identically, but there are some minor nuances between the two. If you **need** a the primitive value then you can call `.valueOf()`.
