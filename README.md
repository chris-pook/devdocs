## PageBuilder Early Adopters Program

The Page Builder Early Adopters Program (EAP) gives partners the following perks:
 
* Explore extension points to build custom modules and integrations for 3rd party services, such as Facebook and Instagram.
* Try out customization options and extend its functionality beyond its default features.
* Preview to prepare a migration plan from BlueFoot 1.0 to PageBuilder.

## Developer documentation

We will update the developer documentation frequently during beta. Please use this link to access the latest updates: 
[Page Builder developer documentation](https://devdocs.magedevteam.com/ds_pagebuilder/page-builder/getting-started/introduction.html)

## Contribute to PageBuilder

We appreciate any and all contributions to PageBuilder. If you are interested in contributing to this repository, please see our [Contribution Guide].

## PageBuilder updates from the Magento core team

We will push new beta releases once a week, including work from the backlog. We don't expect any large breaking changes, but we  will communicate them to you if the need arises.

## Contact us

To participate in technical discussions and ask questions, join us in [Slack], where a number of Page Builder team members are present.

## TypeScript
This module utilises TypeScript within our adminhtml web directory. This requires an additional build step or watch command to be running during development on this module.

We use a combination of `tsc` from TypeScript and Babel 7.* with the TypeScript env. This enables us to have fast build times for the large TypeScript code base we have.

#### `npx ts:build`
Runs a single build of all TypeScript files within the defined directory. This utilises Babel with the TypeScript present.

#### `npx ts:watch`
Runs a continuous watch of files and builds them as it detects file changes.

#### `npx ts:lint`
Runs TSLint to verify linting of all TypeScript files

#### `npx ts:defs`
Generates TypeScript definitions for the whole module to be published as a types package.

#### `npx ts:errors`
Displays any TypeScript errors currently within the code base. This utilises `tsc` with the no emit flag.

#### `npx ts:errors:watch`
Same as above but watches for file changes.

#### `npx start`
Command used to start development on this module, uses `concurrently` to spawn instances of `npx ts:watch` and `npx ts:errors:watch`.

[Contribution Guide]: CONTRIBUTING.md
[Slack]: https://magentocommeng.slack.com/messages/GANS1R4C9
