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
  }
};

export default plugin;
