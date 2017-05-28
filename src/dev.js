import './dev.scss';

import {
    ReactLayoutItem,
    ReactLayoutVertical,
} from 'react-layout-vertical';
import {
  ReactLayoutMedia,
  ReactLayoutMediaItem,
} from './main';

/*===example start===*/

// install: npm install afeiship/react-layout-media --save

/*
import {
  ReactLayoutMedia,
  ReactLayoutMediaItem
*/
class App extends React.Component{
  render(){
    return (
      <div className="hello-react-layout-media">

        <h2>Media with Vertical</h2>
        <ReactLayoutMedia style={{padding:'10px'}}>
          <div className="left">
            <img src="http://placeholder.qiniudn.com/100x100" alt=""/>
          </div>

          <ReactLayoutMediaItem  style={{padding:'0 10px'}}>
            <ReactLayoutVertical justify='between'>
              <ReactLayoutItem className="top" style={{height:'50px'}}>top</ReactLayoutItem>
              <ReactLayoutItem className="bottom"  style={{height:'20px'}}>bottom</ReactLayoutItem>
            </ReactLayoutVertical>
          </ReactLayoutMediaItem>
          <div className="right" style={{color:'#999'}}>
          status A
          </div>
        </ReactLayoutMedia>

        <h2>Small media box</h2>
        <ReactLayoutMedia  style={{padding:'5px'}}>
          <div className="left">
            <img src="http://placeholder.qiniudn.com/80x80" alt=""/>
          </div>
          <ReactLayoutMediaItem style={{padding:'0 5px'}}>
            <p>BOdy...</p>
            <p>BOdy...</p>
            <p>BOdy...</p>
            <p>BOdy...</p>
          </ReactLayoutMediaItem>
        </ReactLayoutMedia>

        <h2>Share links</h2>
        <ReactLayoutMedia>
          <div className="left">
            <img src="http://placeholder.qiniudn.com/50x50" alt=""/>
          </div>
          <ReactLayoutMediaItem align="center" style={{padding:'5px',fontSize:'12px'}}>
            <p>这是一段分分的文字，文字不长，但会很优美...</p>
          </ReactLayoutMediaItem>
        </ReactLayoutMedia>


        <h2>Small media box with MULTIPLE content</h2>
        <ReactLayoutMedia  style={{padding:'5px'}}>
          <div className="left">
            <img src="http://placeholder.qiniudn.com/80x80" alt=""/>
          </div>
          <ReactLayoutMediaItem>
            <p>BOdy...</p>
            <p>BOdy...</p>
            <p>BOdy...</p>
            <p>BOdy...</p>
          </ReactLayoutMediaItem>

          <ReactLayoutMediaItem>
            <p>BOdy...</p>
            <p>BOdy...</p>
            <p>BOdy...</p>
            <p>BOdy...</p>
          </ReactLayoutMediaItem>
        </ReactLayoutMedia>


        <h2>box  - vertical</h2>
        <ReactLayoutMedia direction='vertical'  style={{padding:'2px'}}>
          <div className="left">
            <img src="http://placeholder.qiniudn.com/80x80" width="100%" alt=""/>
          </div>
          <ReactLayoutMediaItem>
            <p style={{padding:'10px'}}>Some discription for media vertical.</p>
          </ReactLayoutMediaItem>
        </ReactLayoutMedia>
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
