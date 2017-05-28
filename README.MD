# react-layout-media
> Media layout for react.


## properties:
```javascript

  static propTypes = {
    className:PropTypes.string
  };

  static defaultProps = {
  };
  
```

## usage:
```jsx

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
          <ReactLayoutMediaItem className="col-center" style={{padding:'5px',fontSize:'12px'}}>
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
      </div>
    );
  }
}

```



## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install

