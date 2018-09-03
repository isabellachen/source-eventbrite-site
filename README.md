## Dev playgroud for gatsby-source-eventbrite plugin

This repo constains a gatsby starter to develop the gatsby-source-eventbrite plugin, but can as well be used for any other plugin.

## Config

In the root gatsby-config, include your Eventbrite organization id, the access token and the entities in the shape of:

```json
{
  "organizationId": 12345678901,
  "accessToken": "ASDFGHJKLCVBNRTYUI",
  "entities": ["events", "venues"]
}
```

## Set-Up

#### Development

During development of the plugin, the gatsby-node.js file should be in the plugins/gatsby-source-eventbrite folder (and not in plugins/gatsby-source-eventbrite/src), so you can use npm-watch in the root to look for changes to the plugin files and recompile the gatsby application on those changes. Then, you can check out the changes in the [local Apollo server](http://localhost:8000/___graphql).

To watch the files in the plugins folder for changes run `npm run dev-plugins` in the root. This command runs `gatsby develop` and `npm watch`

#### Production

Move the authored plugin files to plugins/gatsby-source-eventbrite/src and run `npm run build` in the gatsby-source-eventbrite folder, then in root `gatsby develop`.

#### Adding or changing node-relations

If you want to add or change fields to the nodes, you need to update the `node.internal.contentDigest`. I'm unsure how to do this, but a work around is to de-create the nodes and re-create them. You can do this by commenting out the line that uses createNode(), recompile with `gatsby develop` and uncomment the line and recompile.
