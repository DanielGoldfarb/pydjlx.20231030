import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette } from '@jupyterlab/apputils';
import { Widget          } from '@lumino/widgets';
import { MainAreaWidget  } from '@jupyterlab/apputils';

/**
 * Initialization data for the pydjlx extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'pydjlx:plugin',
  description: 'A JupyterLab extension demo for PyData',
  autoStart: true,
  requires: [ ICommandPalette ],
  activate: _activate
}

class HelloWorldWidget extends Widget {
  constructor() {
    super();
    this.id = 'hello-world';
    this.title.label = 'Hello World';
    this.title.closable = true;
    this.addClass('hww')
    let body = document.createElement('body');
    let heading = document.createElement('h1');
    heading.innerText = 'Hello World from PyData!';
    body.appendChild(heading);
    this.node.appendChild(body);
  }
}

function _activate(app:     JupyterFrontEnd,
                   palette: ICommandPalette ) {
  console.log('JupyterLab extension pydjlx is activated!');
  let commandId = 'pydjlx:Hello';
  app.commands.addCommand(commandId,
    { label: 'Hello World',
      execute: () => {say_hello(app)}
    });

  palette.addItem(
    { command: commandId,
      category: 'Anything'
    });
}

function say_hello(app: JupyterFrontEnd) {
  let content = new HelloWorldWidget();
  let widget  = new MainAreaWidget({content});

  app.shell.add(widget,'main');
  app.shell.activateById(widget.id);
}

export default plugin;
