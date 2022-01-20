export { UserInput };

class UserInput {
    constructor() {
        this.upPressed = 10;
        this.downPressed = false;
    }

    eventListener() {
        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler, false);
        document.addEventListener("mousemove", this.mouseMoveHandler, false);
    }

    keyDownHandler(e) {
        if (e.key == "Up" || e.key == "ArrowUp") {
            //this.upPressed = this.upPressed + 10;
            console.log("111111", this.upPressed);
        }
        //else if (e.key == "Down" || e.key == "ArrowDown") {
        //    this.downPressed += -1;
        //}

    }

    //keyUpHandler(e) {
    //    if (e.key == "Up" || e.key == "ArrowUp") {
    //        this.upPressed += 100;
    //    }
    //    else if (e.key == "Down" || e.key == "ArrowDown") {
    //        this.downPressed += -2;
    //    }
    //}
}
