# Installing the Plugin

Install from [the plugin store](https://plugins.craftcms.com/cloudflare), or require it from the command line:

```shell
composer require workingconcept/craft-cloudflare
```

If you’re tinkering with the plugin, check out a copy of the repository and add the following to your Craft site’s project.json:

```json
    "repositories": [
        {
            "type": "path",
            "url": "../craft-cloudflare-plugin/"
        }
    ]
```

As long as the `url` points to the right local path, Composer will maintain a symbolic so you can easily work with the plugin’s source in the context of your project.
