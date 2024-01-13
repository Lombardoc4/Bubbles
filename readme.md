# Bubbles Animation


## Usage
**Import this class into your html**

```html
<html>
  ...
    <body>
      <script type="text/javascript" src="./js/bubbles.min.js"></script>
      <script>
        const bubbleBG = new Bubble(); // Initialize with no options
		// or
		const bubbleBG = new Bubble({
	  	colors: ['#d1e7dd', '#a3cfbb', '#75b798', '#479f76', '#146c43', '#0f5132'],
	  	sizes: ['30px', '50px', '80px', '100px', '160px'],
	  	speeds: [1200, 1600, 2000, 2400],
	  	frequency: 300
		});

		// Start Animation
		bubbleBG.blowBubbles()
      </script>
     ...
   </body>
</html>
```

## API
**init()**
<br>Starts animation
```
const bubbleBG = new Bubble();
bubbleBG.init();
```
**setColors(hexCode[])**
```
const bubbleBG = new Bubble();
bubbleBG.setColors(['#d1e7dd', '#a3cfbb', '#75b798', '#479f76', '#146c43', '#0f5132'])
```
**setFrequency(int)**
```
const bubbleBG = new Bubble();
bubbleBG.setFrequency(200)
```

**setSizes(string[])**
```
const bubbleBG = new Bubble();
bubbleBG.setSizes(['30px', '50px', '80px', '100px', '160px'])
```
**setSpeeds(int[])**
<br>This is in milliseconds
```
const bubbleBG = new Bubble();
bubbleBG.setSpeeds([1200, 1600, 2000, 2400])
```
**setTarget(string)**
```
const bubbleBG = new Bubble();
bubbleBG.setTarget('#home .main.container')
```
**colorArray()**
<br>returns current color list
```
const bubbleBG = new Bubble();
bubbleBG.setColors([...bubbleBG.colorArray(), '#d1e7dd', '#a3cfbb', '#75b798', '#479f76', '#146c43', '#0f5132'])
```
**sizeArray()**
<br>returns current size list
```
const bubbleBG = new Bubble();
bubbleBG.setSizes([...bubbleBG.sizeArray(), '30px', '50px', '80px', '100px', '160px'])
```
**speedArray()**
<br>returns current speed list
```
const bubbleBG = new Bubble();
bubbleBG.setSpeeds([...bubbleBG.speedArray(), 1200, 1600, 2000, 2400])
```
