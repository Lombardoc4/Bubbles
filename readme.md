# Bubbles Animation

This is a javascript class that animates orbs to add style to your site.
**[Live Example](https://crislombardo.com "Live Example")**

## Usage
**Import this class into your html**

```html
<html>
	...
	<body>
		<script type="text/javascript" src="./js/bubbles.min.js"></script>
		<script>
			const bubbleBG = new Bubble(); // Initialize with no options
			bubbleBG.init()
			or
			const bubbleBG = new Bubble({
				colors: ['#d1e7dd', '#a3cfbb', '#75b798', '#479f76', '#146c43', '#0f5132'],
				sizes: ['30px', '50px', '80px', '100px', '160px'],
				speeds: [1200, 1600, 2000, 2400],
				target: '#bubbleBackground',
				frequency: 300
			});
			bubbleBG.init()
		</script>
	</body>
</html>
```

## API
**init()**
Starts animation
```
const bubbleBG = new Bubble();
bubbleBG.init();
```
**setColors([Array])**
```
const bubbleBG = new Bubble();
bubbleBG.setColors(['#d1e7dd', '#a3cfbb', '#75b798', '#479f76', '#146c43', '#0f5132'])
```
**setFrequency(Integer)**
```
const bubbleBG = new Bubble();
bubbleBG.setFrequency(200)
```

**setSizes([Array])**
```
const bubbleBG = new Bubble();
bubbleBG.setSizes(['30px', '50px', '80px', '100px', '160px'])
```
**setSpeeds([Array])**
This is in milliseconds
```
const bubbleBG = new Bubble();
bubbleBG.setSpeeds([1200, 1600, 2000, 2400])
```
**setTarget(String)**
```
const bubbleBG = new Bubble();
bubbleBG.setTarget('#home .main.container')
```
**colorArray()**
returns current color list
```
const bubbleBG = new Bubble();
bubbleBG.setColors([...bubbleBG.colorArray(), '#d1e7dd', '#a3cfbb', '#75b798', '#479f76', '#146c43', '#0f5132'])
```
**sizeArray()**
returns current size list
```
const bubbleBG = new Bubble();
bubbleBG.setSizes([...bubbleBG.sizeArray(), '30px', '50px', '80px', '100px', '160px'])
```
**speedArray()**
returns current speed list
```
const bubbleBG = new Bubble();
bubbleBG.setSpeeds([...bubbleBG.speedArray(), 1200, 1600, 2000, 2400])
```

