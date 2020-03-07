# Services

## Cloudflare Service

### `getZones()`

Returns a list of zones available for the supplied Cloudflare account. Each zone is basically a domain.

### `purgeZoneCache()`

Purges the entire zone cache for whichever zone you've specified in the plugin’s settings.

### `purgeUrls(array $urls)`

Purges the supplied array of absolute URLs. These URLs must use the same domain name as the zone or it won’t work.

## RulesService

### `getRulesForTable()`

Returns all RuleRecords formatted for the simple editor at /admin/cloudflare/rules.

### `saveRules()`

Saves rules from the editor, automatically converting the second column’s lines to a JSON array.

### `purgeCachesForUrl(string $url)`

Takes the supplied URL and purges any related URLs as defined by matching rules.

### `getRulesForUrl(string $url)`

Returns an array of RuleRecords whose trigger pattern matches the supplied URL.
