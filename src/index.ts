import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette } from '@jupyterlab/apputils'

/**
 * Initialization data for the pydjlx extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'pydjlx:plugin',
  description: 'A JupyterLab extension demo for PyData',
  autoStart: true,
  requires: [ ICommandPalette ],
  activate: (app:     JupyterFrontEnd,
             palette: ICommandPalette ) => {
    console.log('JupyterLab extension pydjlx is activated!');
    let commandId = 'pydjlx:Hello';
    app.commands.addCommand(commandId,
      { label: 'Hello World',
        execute: say_hello
      });

    palette.addItem(
      { command: commandId,
        category: 'Anything'
      });
  }
};

function say_hello() {
  console.log('pydjlx says "Hello World!"');
}

export default plugin;
