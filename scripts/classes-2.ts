class Animal2 {
    constructor(private name: string) { }
    
    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake2 extends Animal2 {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse2 extends Animal2 {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

{
    let sam = new Snake2("Sammy the Python");
    let tom: Animal2 = new Horse2("Tommy the Palomino");

    sam.move();
    tom.move(34);

    //Will error depending on the modifier
    //console.log('Snake name:' + sam.name);
}