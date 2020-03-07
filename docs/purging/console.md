# Console Utility

Clear your entire zone cache or specific URLs from the console! Useful for deployments.

```shell
# purge entire zone
./craft cloudflare/purge/purge-all

# purge comma-separated list of urls
./craft cloudflare/purge/purge-urls https://foo.com/wombat.jpg,https://cdn.foo.com/stoat.jpg
```
