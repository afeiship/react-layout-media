# react-layout-media
> Media layout for react.


## properties:
```javascript

  static propTypes = {
    className:PropTypes.string,
    padding:PropTypes.any,
  };

  static defaultProps = {
    padding:0
  };
  
```

## usage:
```jsx

// install: npm install afeiship/react-layout-media --save
// import : import ReactLayoutMedia from 'react-layout-media'

class App extends React.Component{
  render(){
    console.log(ReactLayoutMedia)
    return (
      <div className="hello-react-layout-media">

        <h1>Media with Vertical</h1>
        <ReactLayoutMedia padding="10px">
          <ReactLayoutMediaLeft>
            <img src="http://placeholder.qiniudn.com/100x100" alt=""/>
          </ReactLayoutMediaLeft>

          <ReactLayoutMediaBody>
            <ReactLayoutVertical className="full-height" justify='between'>
              <ReactLayoutItem className="top" style={{height:'50px'}}>top</ReactLayoutItem>
              <ReactLayoutItem className="bottom"  style={{height:'20px'}}>bottom</ReactLayoutItem>
            </ReactLayoutVertical>
          </ReactLayoutMediaBody>
          <ReactLayoutMediaRight>
          Remove!
          </ReactLayoutMediaRight>
        </ReactLayoutMedia>

        <h2>Small media box</h2>
        <ReactLayoutMedia padding="5px">
          <ReactLayoutMediaLeft>
            <img src="http://placeholder.qiniudn.com/80x80" alt=""/>
          </ReactLayoutMediaLeft>

          <ReactLayoutMediaBody>
            <p>BOdy...</p>
            <p>BOdy...</p>
            <p>BOdy...</p>
            <p>BOdy...</p>
          </ReactLayoutMediaBody>
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

