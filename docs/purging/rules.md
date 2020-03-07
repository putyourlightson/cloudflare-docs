# Purge Rules

This timid feature is hidden at /admin/cloudflare/rules, where you can add rows to a table that define simple rules for clearing specific URLs. If you’ve cached your blog index, for example, at `/blog`, and you post a new entry at `/blog/my-new-entry`, you’re going to want your index purged so the new post shows up. In this case, you’d add a URL Trigger Pattern of `blog/*`, and `blog` in the Clear URLs column. (You can list a new relative URL on each line, just know that Cloudflare will only accept up to 30 of them per API request.)
