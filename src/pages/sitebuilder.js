import React, {Component} from 'react'

import grapesjs from 'grapesjs';

import 'grapesjs-preset-newsletter';

import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-newsletter/dist/grapesjs-preset-newsletter.css'


class SiteBuilder extends Component {



  componentDidMount(){

    grapesjs.init({
      container : '#gjs',
      plugins: ['gjs-preset-newsletter'],
      pluginsOpts: {
        'gjs-preset-newsletter': {
          modalTitleImport: 'Import template',
          // ... other options
        }
      }
  });

  }

  render(){

    return (
      <div>
             <div id="gjs"></div>
      </div>
    );
  
  
  }
}

export default SiteBuilder