import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the pydjlx extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'pydjlx:plugin',
  description: 'A JupyterLab extension demo for PyData',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension pydjlx is activated!');
    let commandId = 'pydjlx:Hello';
    app.commands.addCommand(commandId,
      { label: 'Hello World',
        execute: say_hello
      });

    app.commands.execute(commandId);
  }
};

function say_hello() {
  console.log('pydjlx says "Hello World!"');
}

export default plugin;
