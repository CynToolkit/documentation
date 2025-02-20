---
category: integrations
---

# Construct 3

## Features
- Automatic project export to html
- [Electron](/guide/integrations/electron.md) Integration

There are two tasks available for Construct 3:

- **.c3p export**: Export a single Construct 3 project to html
- **folder export**: Export a Construct 3 project folder to html

Under the hood, Pipelab launches a local browser instance to export the project to HTML.
You must enter your username and password to avoid being restricted by Construct 3's limits.
Additionally, you must specify the path to your browser's data to reuse your installed Construct 3 plugins.

## Integration
Pipelab integrate within Construct 3 by using a plugin. You can download it [here](https://github.com/CynToolkit/construct-plugin/releases).

Once installed, the only required thing you have to do is to run the `Initialize integration` action.