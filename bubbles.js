class Bubble {
    constructor(settings) {
      this.colors = settings?.colors || [];
      this.sizes = settings?.sizes || [];
      this.speeds = settings?.speeds || [];
      this.target = settings?.target || '#bubbleBackground';
      this.frequency = settings?.frequency || 600;
    }

    // access current values to expand or modify lists
    colorArray() {
        return this.colors;
    }
    sizeArray() {
        return this.sizes;
    }
    speedArray() {
        return this.speeds;
    }

    // Modify Settings
    setColors(colors) {
        this.colors = colors;
    }
    setSizes(sizes) {
        this.sizes = sizes;
    }
    setSpeeds(speeds) {
        this.speeds = speeds;
    }
    setTarget(target) {
        this.target = target;
    }
    setFrequency(frequency) {
        this.frequency = frequency;
    }

    #createContainer() {
        const target = document.querySelector(this.target);
        const container = document.createElement('div');
        container.id = 'bubbleBackgroundContainer';
        container.style.position = 'absolute';
        container.style.inset = 0;

        if (!target) {
            return false
        }

        target.append(container)
        return true;
    }

    blowBubble() {
        // Get Bubble Container
        const container = document.getElementById('bubbleBackgroundContainer');

        // If no container createone and try again
        if (!container) {
            this.#createContainer();
            return this.blowBubble();
        }

        const date = new Date();
        const id = date.getTime();

        // Generate unique id, dimensions, timing, color, position
        const currID = `${id}bubble${Math.random().toString(16).slice(2)}`;
        const dimension = this.sizes[Math.floor(Math.random() * this.sizes.length)];
        const aniTiming = this.speeds[Math.floor(Math.random() * this.speeds.length)];
        const bgColor = this.colors[Math.floor(Math.random() * this.colors.length)];
        const topPos = Math.floor(Math.random() * 100);
        const leftPos = Math.floor(Math.random() * 100);

        // Create Bubble
        const bubble = document.createElement('div');
        bubble.id = currID;
        bubble.classList.add('bubble');

        // Set Styles
        bubble.style.transition = 'opacity 50ms ease-out';
        bubble.style.backgroundColor = bgColor;
        bubble.style.top = topPos + '%';
        bubble.style.left = leftPos + '%';
        bubble.style.height = dimension;
        bubble.style.width = dimension;
        bubble.style.position = 'absolute';
        bubble.style.borderRadius = '50%';
        bubble.style.zIndex = Math.floor(Math.random() * 2 + 1) % 2 === 1 ? -1 : 1;
        bubble.style.mixBlendMode = 'multiply';

        container.append(bubble);

        // Set animation transitions
        setTimeout(() => {
            document.getElementById(currID).style.transition = `transform ${aniTiming}ms ease-out, opacity ${aniTiming}ms ease-out`;
            document.getElementById(currID).style.opacity = 1;
        }, 10);

        // Set Element transform and dissappear
        setTimeout(() => {
            document.getElementById(currID).style.transform = `translate(${Math.floor(Math.random() * 2 + 1) % 2 === 1 ? '-' : ''}${Math.floor(Math.random() * 100 + 100)}%, ${Math.floor(Math.random() * 2 + 1) % 2 === 1 ? '-' : ''}${Math.floor(Math.random() * 100 + 100)}%)`;
            document.getElementById(currID).style.opacity = 0;
        }, 50);

        // Remove element from dom
        setTimeout(() => {
            document.getElementById(currID).remove();
        }, aniTiming * 1.5);

        // Start the next bubble
        setTimeout(() => {
            this.blowBubble();
        }, this.frequency)
    }
  }
