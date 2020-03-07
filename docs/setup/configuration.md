# Configuration

After you've installed the plugin, visit _Settings_ → _Cloudflare_ and add your API credentials and the Cloudflare Zone for your site.

## Choosing an Authentication Method

The plugin supports both methods of authentication with the Cloudflare API:

1. an account-level API key
2. a scope-limited API token

::: tip
If you use an API token, be sure it has `cache_purge:edit` and `zone:read` permissions at minimum for whatever zone you plan to use.
:::

## Zone Permissions

Once it has API credentials, the plugin will attempt to read all the zones on your account so you can select one from a convenient dropdown list. If your token’s permissions don’t permit zone listing, you’ll need to specify the relevant Zone ID from a static config file:

```php
<?php
// config/cloudflare.php
return [
    'zone' => 'YOUR_ZONE_ID_HERE'
];
```

This will hard-code that Zone ID and disable the listing UI in the control panel.

You can also use `config/cloudflare.php` to provide any settings you’d like, rather than setting them up in the control panel:

```php
<?php

return [
    'apiKey' => '',
    'email' => 'you@yourdomain.com',
    'zone' => '', // zone ID
    'purgeEntryUrls' => false,
    'purgeAssetUrls' => true,
];
```

If you’d like to use environment variables, you can do that too:

```php
<?php

return [
    'apiKey' => getenv('CLOUDFLARE_API_KEY'),
    'email' => getenv('CLOUDFLARE_EMAIL'),
    'zone' => getenv('CLOUDFLARE_ZONE_ID'), // zone ID
    'purgeEntryUrls' => getenv('CLOUDFLARE_PURGE_ENTRY_URLS', false),
    'purgeAssetUrls' => getenv('CLOUDFLARE_PURGE_ASSET_URLS', true),
];
```

The `authType`, `apiKey`, `email`, `zone`, and `apiToken` parameters will also be parsed for environment variables, so you could supply each like so:

```php
<?php

return [
    'authType' => 'token',
    'apiToken' => '$CLOUDFLARE_API_TOKEN',
    'zone' => '$CLOUDFLARE_API_ZONE',
];
```

Once you’ve added your credentials, use the “Verify Credentials” button to test them. This will attempt to list zones with an API key, or call the token verification endpoint with an API token. Individual token permissions won’t be checked, only that the token is valid.

## Settings

### Cloudflare API Key + Cloudflare Account Email

If you’ve chosen “Key” for your auth type, you’ll need to provide the Global API Key you’ll find in _My Profile_ in Cloudflare's control panel along with your Cloudflare account email address.

### Cloudflare API Token

If you’ve chosen “Token” for your auth type, provide the app token you set up. Be sure it has `cache_purge:edit` and `zone:read` permissions.

### Cloudflare Zone

Choose relevant Cloudflare Zone for your site. Once you save the plugin settings, the Cloudflare plugin will be ready to do stuff. If you’re hard-coding the `zone` setting, it needs to be the related Zone ID (not name!) for the site.

### Automatically Purge Entry URLs

If enabled, any time an entry with a URL is updated or deleted, the plugin will send its URL to Cloudflare to be purged. This can be helpful if you’re fully caching your site, and you’d know if you were. By default, Cloudflare only caches static assets like images, JavaScript, and stylesheets. If you want to cache your site’s HTML, you’ll need to use Cloudflare’s Page Rules to do that regardless of whatever HTTP headers are sent with your page responses.

### Automatically Purge Asset URLs

When enabled, as it is by default, the plugin will automatically have Cloudflare purge caches whenever an Asset with a URL is updated or deleted. This solves the common problem of re-uploading an image and not seeing it change on the front end because Cloudflare’s hanging onto the version it cached.

### Purge Individual URLs

This isn’t a setting, just a tool in an awkward place. Add whatever absolute URLs you want, one per line, and choose _Purge URLs_ to have Cloudflare try and purge them.

### Purge Cloudflare Cache

This one button will purge the entire cache for the zone you’ve specified. Be very sure you want to push it.
